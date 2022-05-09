import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselItem from './CarouselItem';

export const CarouselMobile = () => (
  <section className="py-10 md:hidden">
    <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </Carousel>
  </section>
);

export const CarouselDesktop = () => (
  <section className="py-10 hidden md:block">
    <Carousel
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      centerMode
      centerSlidePercentage={45}
    >
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </Carousel>
  </section>
);

const ResponsiveCarousel = () => (
  <>
    <CarouselMobile />
    <CarouselDesktop />
  </>
);

export default ResponsiveCarousel;
