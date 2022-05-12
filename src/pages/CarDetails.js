import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const CarDetails = () => {
  const { carId } = useParams();
  const [car, setCar] = useState({});
  const fetchCar = async () => {
    const res = await fetch(`http://localhost:3000/api/v1/cars/${carId}`);
    const data = await res.json();
    setCar(data);
  };
  useEffect(() => {
    fetchCar();
  }, []);

  return (
    <div className="flex flex-col gap-[30%] p-2 items-center justify-center md:w-4/5">
      <div key={car.id} className="flex flex-col gap-[30%]">
        <div className="flex  justify-center  w-full">
          <h1 className="font-semibold text-2xl">
            {' '}
            <span>
              {' '}
              {car.make}
            </span>
            <br />
            <span>{car.model}</span>
            <span>
              {' '}
              {car.year}
            </span>
            {' '}
          </h1>
        </div>

        <div className="flex flex-col  gap-[10%] items-center md:flex-row md:gap-[10%] md:items-center">
          <div className="bg-amber-500 w-80 h-80 rounded-full mx-auto relative mb-4 flex justify-center items-center content-center md:bg-amber-500 md:w-[30rem] md:h-[15rem] md:rounded-full ">
            <div className="flex justify-center items-center content-center">
              <img className="w-[100%] h-[100%] md:w-[100%] md:h-[100%]" src={car.image} alt="img" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="w-[70%] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, tempora eligendi! Nesciunt quibusdam autem, numquam velit quo aliquam, porro vero quae recusandae maiores error exercitationem quidem natus voluptatem ab placeat.</p>
            <div className="w-[70%] ">
              <p>
                Price:
                {car.price}
              </p>
              <p>Fuel: Electric</p>
              <p>Location: Singapore, 12th Lane Rd.</p>
              <p>Contact: +65 98765432</p>
            </div>
            <div>
              <Link to="/reserve">
                <button type="button" className="bg-amber-500    hover:bg-amber-600/80 text-white font-bold py-2 px-4 rounded w-52">
                  RESERVE
                </button>
              </Link>
            </div>
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
