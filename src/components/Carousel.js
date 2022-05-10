import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import CarouselItem from './CarouselItem';
import { fetchCars } from '../redux/cars/carsSlice';

export const CarouselMobile = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  useEffect(() => {
    dispatch(fetchCars());
  }, []);
  return (
    <section className="py-10 md:hidden">
      <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
        {cars.cars.map((car) => (
          <CarouselItem key={car.id} car={car} />
        ))}
      </Carousel>
    </section>
  );
};

export const CarouselDesktop = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  return (
    <section className="py-10 hidden md:block">
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        centerMode
        centerSlidePercentage={45}
      >
        {cars.cars.map((car) => (
          <CarouselItem key={car.id} car={car} />
        ))}
      </Carousel>
    </section>
  );
};

const ResponsiveCarousel = () => (
  <>
    <CarouselMobile />
    <CarouselDesktop />
  </>
);

export default ResponsiveCarousel;
