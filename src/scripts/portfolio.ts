let disposePortfolio = () => {};
function initPortfolio() {
  disposePortfolio();
  const root = document.querySelector<HTMLElement>('[data-portfolio]');
  if (!root) return;
  const controller = new AbortController();
  const { signal } = controller;
  const filters = [...root.querySelectorAll<HTMLAnchorElement>('[data-filter]')];
  const cards = [...root.querySelectorAll<HTMLElement>('[data-category]')];
  const filterBar = root.querySelector<HTMLElement>('.portfolio-filters')!;
  const hashes: Record<string, string> = { tout: 'tout', graphisme: 'graphisme', 'sites-web': 'web', ia: 'ia' };
  const names: Record<string, string> = { tout: 'Toutes les créations', graphisme: 'Graphisme', web: 'Sites web et outils', ia: 'Solutions et formation IA' };
  function applyFilter(value: string) {
    const selected = names[value] ? value : 'tout';
    root!.dataset.active = selected;
    cards.forEach(card => { card.hidden = selected !== 'tout' && card.dataset.category !== selected; });
    filters.forEach(link => {
      if (link.dataset.filter === selected) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
    root!.querySelector('[data-filter-status]')!.textContent = names[selected];
  }
  function readHash() {
    const value = hashes[location.hash.slice(1)];
    if (value || !root!.dataset.active) applyFilter(value || 'tout');
  }
  filters.forEach(link => link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    history.replaceState(null, '', link.hash);
    applyFilter(link.dataset.filter!);
    const grid = root!.querySelector<HTMLElement>('.portfolio-grid')!;
    if (grid.getBoundingClientRect().top < filterBar.getBoundingClientRect().bottom + 20) {
      window.scrollTo({ top: grid.getBoundingClientRect().top + window.scrollY - filterBar.offsetHeight - 96, behavior: 'instant' });
    }
  }, { signal }));
  window.addEventListener('hashchange', readHash, { signal });
  readHash();

  const viewer = root.querySelector<HTMLDialogElement>('.artwork-viewer')!;
  const image = viewer.querySelector<HTMLImageElement>('[data-artwork-image]')!;
  const originals = [...root.querySelectorAll<HTMLAnchorElement>('[data-artwork]')];
  let current = 0;
  let returnFocus: HTMLAnchorElement | null = null;
  function showArtwork(index: number) {
    current = (index + originals.length) % originals.length;
    const original = originals[current];
    image.src = original.href;
    image.alt = original.dataset.title!;
    viewer.querySelector('#artwork-title')!.textContent = original.dataset.title!;
    viewer.querySelector('[data-artwork-position]')!.textContent = `${current + 1} / ${originals.length}`;
  }
  originals.forEach((link, index) => link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault(); returnFocus = link;
    showArtwork(index); viewer.showModal(); document.body.classList.add('portfolio-viewing');
  }, { signal }));
  viewer.querySelector('[data-artwork-close]')!.addEventListener('click', () => viewer.close(), { signal });
  viewer.querySelector('[data-artwork-previous]')!.addEventListener('click', () => showArtwork(current - 1), { signal });
  viewer.querySelector('[data-artwork-next]')!.addEventListener('click', () => showArtwork(current + 1), { signal });
  viewer.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault(); showArtwork(current + (event.key === 'ArrowRight' ? 1 : -1));
  }, { signal });
  viewer.addEventListener('click', event => {
    if (event.target !== viewer) return;
    const rect = viewer.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) viewer.close();
  }, { signal });
  viewer.addEventListener('close', () => {
    document.body.classList.remove('portfolio-viewing');
    returnFocus?.focus({ preventScroll: true });
  }, { signal });

  // Progressive enhancement: every image and link remains available without JS.
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('portfolio-in'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08 });
  cards.forEach(card => observer.observe(card));
  disposePortfolio = () => { controller.abort(); observer.disconnect(); viewer.close(); document.body.classList.remove('portfolio-viewing'); };
}
initPortfolio();
document.addEventListener('astro:page-load', initPortfolio);
document.addEventListener('astro:before-swap', () => disposePortfolio());
