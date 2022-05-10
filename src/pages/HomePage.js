import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ResponsiveCarousel from '../components/Carousel';
import { fetchCars } from '../redux/cars/carsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.cars.length);
  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  return (
    <section className="w-full md:w-4/5 md:py-20">
      <div className="w-[98%] text-center mb-10">
        <h1 className="font-bold text-2xl md:text-5xl md:mb-5">
          FEATURED MODELS
        </h1>
        <p className="font-bold text-sm text-gray-500">
          CHOOSE YOUR PREMIUM CAR.
        </p>
        <div>
          {cars}
          <span> cars</span>
        </div>
      </div>
      <ResponsiveCarousel />
    </section>
  );
};

export default HomePage;
