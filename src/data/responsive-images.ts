import manifest from './responsive-images.json';
type ResponsiveImage = { src: string; srcset: string; width: number; height: number };
const images: Record<string, ResponsiveImage> = manifest;
export const imageAttributes = (src: string) => images[src] ?? { src };
