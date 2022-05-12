import { useEffect, useState } from 'react';
import axios from 'axios';

const ReservePage = () => {
  const [models, setModels] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3000/api/v1/cars');
      const data = await res.json();
      const models = data.map((el) => ({
        car_id: el.id,
        model: `${el.make} - ${el.model}`,
      }));
      setModels(models);
    })();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/v1/reservations', {
      car_id: event.target.car_id.value,
      user_id: event.target.user_id.value,
    });
  };
  return (
    <section className="fixed top-0 w-full h-full md:pl-[20vw] bg-[url('/src/images/car-medium.png')] md:bg-[url('/src/images/car-big.png')] bg-right bg-no-repeat bg-200%">
      <div className="w-full h-full bg-[#fdac01]/70 px-20 flex flex-col justify-center">
        <div className="w-full h-[50%] text-center flex flex-col justify-center items-center gap-[2rem]">
          <h1 className="font-bold text-white text-3xl md:text-5xl md:mb-5">
            MAKE YOUR RESERVATION
          </h1>
          <form onSubmit={handleSubmit} className="w-full h-full text-center flex flex-col items-center gap-[2rem] md:flex-row lg:w-[70%] md:h-auto">
            <select className="w-[80%] sm:w-[40%] h-[2.6rem] rounded-3xl bg-transparent border border-2 border-white font-bold text-xl text-white text-center" name="reservation[city]" id="city">
              <option value="" selected disabled hidden>CITY</option>
              <option value="New York">New York</option>
              <option value="York">York</option>
              <option value="Washingtone">Washingtone</option>
              <option value="Salt Lake">Salt Lake</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="New Mexico">New Mexico</option>
              <option value="Chicago">Chicago</option>
              <option value="Phoenix">Phoenix</option>
              <option value="San Antonio">San Antonio</option>
            </select>
            <input type="hidden" id="user_id" name="reservation[user_id]" value="2" />
            <select className="w-[80%] sm:w-[40%] h-[2.6rem] rounded-3xl bg-transparent border border-2 border-white font-bold text-xl text-white text-center" name="reservation[car_id]" id="car_id">
              <option value="" selected disabled hidden>MODEL</option>
              {models.map((model) => (
                <option key={model.car_id} value={model.car_id}>{model.model}</option>))}
            </select>
            <button type="submit" className="bg-white font-bold text-2xl text-[#fdac01] px-5 py-2 rounded-xl">RESERVE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservePage;
