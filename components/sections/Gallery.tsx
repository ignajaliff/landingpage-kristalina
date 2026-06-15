import { galleryItems, gallerySection } from '@/lib/data';
import { PhotoCarousel } from '@/components/sections/PhotoCarousel';

export function Gallery() {
  return (
    <PhotoCarousel
      id="gallery"
      perView={3}
      {...gallerySection}
      items={galleryItems}
    />
  );
}
