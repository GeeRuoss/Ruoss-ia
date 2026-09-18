const $=s=>document.querySelector(s),all=s=>[...document.querySelectorAll(s)];
let projects=[],selected=0,selectScene=()=>{},sceneVisible=true,restoreFocus=null;
const sceneHost=$('#scene'),dialog=$('#visitor'),frame=$('#live-site'),reduced=matchMedia('(prefers-reduced-motion: reduce)');
const modulo=(n,m)=>(n%m+m)%m;
function message(text){$('#status').textContent=text;$('#status').hidden=!text}
function select(index){if(!projects.length)return;selected=modulo(index,projects.length);const p=projects[selected];$('#name').textContent=p.name;$('#categories').textContent=p.categories.join(' · ');$('#fallback').src=p.cover;$('#fallback').alt='Aperçu du site '+p.name;$('#enter').textContent=p.embeddable?'Visiter le site':'Ouvrir le site';message('');all('[data-index]').forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.index===selected)));selectScene(selected)}
const picker=$('#project-picker');$('#choose').addEventListener('click',()=>picker.showModal());$('#close-picker').addEventListener('click',()=>picker.close());
function buildPicker(){ $('#project-list').replaceChildren(...projects.map((p,i)=>{const b=document.createElement('button');b.textContent=p.name;b.dataset.index=i;b.setAttribute('aria-pressed',String(i===selected));b.addEventListener('click',()=>{select(i);picker.close()});return b})) }
async function enter(){const p=projects[selected];if(!p)return;if(!p.embeddable){window.open(p.url,'_blank','noopener,noreferrer');return}restoreFocus=document.activeElement;$('#visitor-title').textContent=p.name;$('#visit-external').href=p.url;$('#pages').replaceChildren(...p.pages.map((page,i)=>{const b=document.createElement('button');b.textContent=page.label;b.setAttribute('aria-pressed',String(i===0));b.addEventListener('click',()=>loadPage(p,page,b));return b}));frame.title='Visite du site '+p.name;frame.src=p.url;$('#frame-wrap').classList.remove('phone');$('#desktop').setAttribute('aria-pressed','true');$('#phone').setAttribute('aria-pressed','false');dialog.showModal();document.body.classList.add('visiting');sceneVisible=false;
// La vérification serveur n'est pas un proxy. Les pages restent sur leur domaine.
try{const res=await fetch('api/site/'+p.id);if(res.ok){const check=await res.json();if(dialog.open&&$('#visitor-title').textContent===p.name&&check.embeddable===false){close();message('Ce site se visite dans un nouvel onglet.');p.embeddable=false;$('#enter').textContent='Ouvrir le site'}}}catch{/* L'aperçu statique reste utilisable avec le dernier contrôle enregistré. */}}
function loadPage(p,page,button){const url=new URL(page.path,p.url);if(url.origin!==new URL(p.url).origin)return;frame.src=url.href;$('#visit-external').href=url.href;all('#pages button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)))}
function close(){dialog.close()}dialog.addEventListener('close',()=>{frame.removeAttribute('src');document.body.classList.remove('visiting');sceneVisible=true;restoreFocus?.focus()});$('#close').addEventListener('click',close);$('#enter').addEventListener('click',enter);$('#desktop').addEventListener('click',()=>device(false));$('#phone').addEventListener('click',()=>device(true));function device(phone){$('#frame-wrap').classList.toggle('phone',phone);$('#desktop').setAttribute('aria-pressed',String(!phone));$('#phone').setAttribute('aria-pressed',String(phone));fitPhone()}
function fitPhone(){
 const stage=$('#frame-wrap');
 if(!dialog.open||!stage.classList.contains('phone')||matchMedia('(max-width:760px)').matches){stage.style.removeProperty('--phone-scale');return}
 const css=getComputedStyle(stage),width=stage.clientWidth-parseFloat(css.paddingLeft)-parseFloat(css.paddingRight),height=stage.clientHeight-parseFloat(css.paddingTop)-parseFloat(css.paddingBottom);
 const scale=Math.min(1,width/414,height/868);
 if(scale>0)stage.style.setProperty('--phone-scale',String(scale));
}
new ResizeObserver(fitPhone).observe($('#frame-wrap'));
all('[data-index]').forEach(b=>b.addEventListener('click',()=>select(+b.dataset.index)));$('.previous').addEventListener('click',()=>select(selected-1));$('.next').addEventListener('click',()=>select(selected+1));sceneHost.addEventListener('keydown',e=>{if(e.target!==sceneHost)return;if(['ArrowLeft','ArrowRight','Enter'].includes(e.key)){e.preventDefault();if(e.key==='Enter')enter();else select(selected+(e.key==='ArrowRight'?1:-1))}});
try{const response=await fetch('api/projects.json');if(!response.ok)throw new Error('catalogue');({projects}=await response.json());buildPicker();select(0);$('#enter').disabled=false;start3D().catch(()=>{sceneHost.classList.remove('has-webgl');})}catch{message('La galerie est momentanément indisponible.');$('#enter').disabled=true}
async function start3D(){const THREE=await import('./vendor/three.module.min.js');const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.setClearColor(0x000000,0);sceneHost.prepend(renderer.domElement);renderer.domElement.setAttribute('aria-hidden','true');
const {RoomEnvironment}=await import('./vendor/RoomEnvironment.js');
renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(42,1,.1,150);
const pmrem=new THREE.PMREMGenerator(renderer);const room=new RoomEnvironment();const env=pmrem.fromScene(room,.04);scene.environment=env.texture;room.dispose();pmrem.dispose();
scene.add(new THREE.HemisphereLight(0xffffff,0xa8a69b,2));
const key=new THREE.DirectionalLight(0xffffff,3);key.position.set(-5,9,7);scene.add(key);
const fill=new THREE.DirectionalLight(0xe8efff,1.6);fill.position.set(5,3,-4);scene.add(fill);
function roundedShape(w,h,r){const x=-w/2,y=-h/2,shape=new THREE.Shape();shape.moveTo(x+r,y);shape.lineTo(x+w-r,y);shape.quadraticCurveTo(x+w,y,x+w,y+r);shape.lineTo(x+w,y+h-r);shape.quadraticCurveTo(x+w,y+h,x+w-r,y+h);shape.lineTo(x+r,y+h);shape.quadraticCurveTo(x,y+h,x,y+h-r);shape.lineTo(x,y+r);shape.quadraticCurveTo(x,y,x+r,y);return shape}
function solid(w,h,r,depth,material){const geo=new THREE.ExtrudeGeometry(roundedShape(w,h,r),{depth,bevelEnabled:true,bevelSegments:4,steps:1,bevelSize:.024,bevelThickness:.024,curveSegments:16});geo.computeVertexNormals();return new THREE.Mesh(geo,material)}
function panel(w,h,r,material){const geo=new THREE.ShapeGeometry(roundedShape(w,h,r),20);const pos=geo.attributes.position,uv=geo.attributes.uv;for(let i=0;i<pos.count;i++)uv.setXY(i,(pos.getX(i)+w/2)/w,(pos.getY(i)+h/2)/h);return new THREE.Mesh(geo,material)}
const shadowCanvas=document.createElement('canvas');shadowCanvas.width=256;shadowCanvas.height=256;const ctx=shadowCanvas.getContext('2d');const gradient=ctx.createRadialGradient(128,128,2,128,128,128);gradient.addColorStop(0,'rgba(34,31,27,0.35)');gradient.addColorStop(.3,'rgba(34,31,27,0.17)');gradient.addColorStop(1,'rgba(34,31,27,0)');ctx.fillStyle=gradient;ctx.fillRect(0,0,256,256);const shadowTex=new THREE.CanvasTexture(shadowCanvas);
const groups=[],screens=[],loader=new THREE.TextureLoader(),gap=8.25;
await Promise.all(projects.map(async(p,i)=>{
 const g=new THREE.Group();g.position.x=i*gap;scene.add(g);groups[i]=g;
 const aluminum=new THREE.MeshStandardMaterial({color:0xc5c8ca,metalness:.78,roughness:.27,envMapIntensity:1.1});
 const face=new THREE.MeshStandardMaterial({color:0xdadddd,metalness:.42,roughness:.35,envMapIntensity:.8});
 const shell=solid(6.12,4.08,.22,.145,aluminum);shell.position.y=.2;g.add(shell);
 const chin=panel(6.07,4.03,.20,face);chin.position.set(0,.2,.176);g.add(chin);
 const bezel=panel(5.96,3.49,.12,new THREE.MeshStandardMaterial({color:0xf2f2ee,roughness:.23,metalness:.18}));bezel.position.set(0,.47,.182);g.add(bezel);
 const glass=panel(5.81,3.32,.075,new THREE.MeshPhysicalMaterial({color:0x101511,metalness:.1,roughness:.08,clearcoat:1,clearcoatRoughness:.05}));glass.position.set(0,.47,.19);g.add(glass);
 const texture=await loader.loadAsync(p.cover);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=Math.min(renderer.capabilities.getMaxAnisotropy(),4);
 const display=panel(5.73,3.235,.045,new THREE.MeshBasicMaterial({map:texture,toneMapped:false}));display.position.set(0,.47,.199);display.userData.index=i;g.add(display);screens.push(display);
 const lens=new THREE.Mesh(new THREE.SphereGeometry(.024,12,12),new THREE.MeshPhysicalMaterial({color:0x18272f,metalness:.5,roughness:.1,clearcoat:1}));lens.position.set(0,2.172,.188);g.add(lens);
 const arm=solid(.68,1.2,.12,.16,aluminum);arm.position.set(0,-2.16,-.35);arm.rotation.x=-.29;g.add(arm);
 const foot=solid(1.75,1.13,.14,.065,aluminum);foot.rotation.x=-Math.PI/2;foot.position.set(0,-2.79,.03);g.add(foot);
 const hinge=new THREE.Mesh(new THREE.CylinderGeometry(.18,.18,.73,24),aluminum);hinge.rotation.z=Math.PI/2;hinge.position.set(0,-1.55,-.25);g.add(hinge);
 const shadow=new THREE.Mesh(new THREE.PlaneGeometry(8,4),new THREE.MeshBasicMaterial({map:shadowTex,transparent:true,depthWrite:false}));shadow.rotation.x=-Math.PI/2;shadow.position.set(0,-2.87,.1);g.add(shadow);
}));
let width=0,height=0,targetX=selected*gap,x=targetX,parallaxX=0,parallaxY=0,drag=null,dragOffset=0,raf=0,last=0;
const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();let mobile=false;
function resize(){width=sceneHost.clientWidth;height=sceneHost.clientHeight;mobile=width<650;renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();draw(performance.now())}new ResizeObserver(resize).observe(sceneHost);
selectScene=i=>{targetX=i*gap;dragOffset=0;if(reduced.matches)x=targetX;wake()};
function draw(now){const dt=Math.min((now-last)/1000||.016,.05);last=now;x+=(targetX+dragOffset-x)*(1-Math.exp(-dt*7));const z=mobile?12.2:9.1;camera.position.set(x+.85+parallaxX*.4,.7+parallaxY*.22,z);camera.lookAt(x,-.3,0);groups.forEach((g,i)=>{const distance=i*gap-x;g.rotation.y=-.06+THREE.MathUtils.clamp(-distance*.026,-.28,.28)});renderer.render(scene,camera)}
function loop(now){raf=0;if(document.hidden||!sceneVisible||dialog.open)return;draw(now);if(!reduced.matches||Math.abs(x-targetX)>0.002)raf=requestAnimationFrame(loop)}function wake(){if(!raf&&!document.hidden&&sceneVisible&&!dialog.open)raf=requestAnimationFrame(loop)}
sceneHost.addEventListener('pointerdown',e=>{if(e.target.closest('button'))return;drag={start:e.clientX,last:e.clientX,y:e.clientY,moved:false};sceneHost.setPointerCapture(e.pointerId)});sceneHost.addEventListener('pointermove',e=>{const r=sceneHost.getBoundingClientRect();if(!reduced.matches){parallaxX=(e.clientX-r.left)/r.width-.5;parallaxY=-((e.clientY-r.top)/r.height-.5)}if(drag){drag.last=e.clientX;const dx=e.clientX-drag.start;if(Math.abs(dx)>8)drag.moved=true;dragOffset=-dx/width*8;wake()}});function release(e){if(!drag)return;const dx=drag.last-drag.start,moved=drag.moved;drag=null;dragOffset=0;if(moved){if(Math.abs(dx)>width*.12)select(selected+(dx<0?1:-1));else wake();return}const rect=sceneHost.getBoundingClientRect();pointer.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObjects(screens)[0];if(hit){const index=hit.object.userData.index;if(index===selected)enter();else select(index)}}sceneHost.addEventListener('pointerup',release);sceneHost.addEventListener('pointercancel',()=>{drag=null;dragOffset=0;wake()});sceneHost.addEventListener('pointerleave',()=>{parallaxX=parallaxY=0});
new IntersectionObserver(entries=>{sceneVisible=entries[0].isIntersecting;wake()}).observe(sceneHost);document.addEventListener('visibilitychange',wake);dialog.addEventListener('close',wake);reduced.addEventListener('change',wake);renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();cancelAnimationFrame(raf);sceneHost.classList.remove('has-webgl');});sceneHost.classList.add('has-webgl');resize();wake()}
