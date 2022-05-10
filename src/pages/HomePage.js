import ResponsiveCarousel from '../components/Carousel';

const HomePage = () => (
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

export default HomePage;
