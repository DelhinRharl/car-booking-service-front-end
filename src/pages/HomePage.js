import { useEffect } from 'react';
import ResponsiveCarousel from '../components/Carousel';

const HomePage = () => {
  const fetchItems = async () => {
    const res = await fetch('http://localhost:3000/api/v1/cars');
    const data = await res.json();
    console.log(data);
  };
  useEffect(() => {
    fetchItems();
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
      </div>
      <ResponsiveCarousel />
    </section>
  );
};

export default HomePage;
