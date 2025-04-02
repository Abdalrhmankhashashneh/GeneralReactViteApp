import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import CarouselItem from '../atoms/CarouselItem';
import { useEffect } from 'react';

const ImageCarousel = ({ images }) => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  useEffect(() => {
    if (!slider) return;
    // Optional autoplay or effects
  }, [slider]);

  return (
    <div ref={sliderRef} className="keen-slider">
      {images.map((img, index) => (
        <CarouselItem key={index} image={img.src} alt={img.alt} />
      ))}
    </div>
  );
};

export default ImageCarousel;
