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
        <div>
          <Link to="/reserve">
            <button
              type="button"
              className="bg-amber-500    hover:bg-amber-600/80 text-white font-bold py-2 px-4 rounded w-52"
            >
              Reserve
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
