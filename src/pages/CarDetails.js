import React from 'react';
import carImageBig from '../images/car-big.png';

const CarDetails = () => (
  <div className="flex flex-col gap-[30%] p-2 items-center justify-center md:w-4/5">
    <div className="flex  justify-center  w-full">
      <h1 className="font-semibold text-2xl">MERCEDES 2022</h1>
    </div>

    <div className="flex flex-col  gap-[10%] items-center md:flex-row md:gap-[10%] md:items-center">
      <div className="bg-amber-500 w-80 h-80 rounded-full mx-auto relative mb-4 flex justify-center items-center content-center md:bg-amber-500 md:w-[30rem] md:h-[15rem] md:rounded-full ">
        <div className="flex justify-center items-center content-center">
          <img className="w-[100%] h-[100%] md:w-[100%] md:h-[100%]" src={carImageBig} alt="img" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="w-[70%] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, tempora eligendi! Nesciunt quibusdam autem, numquam velit quo aliquam, porro vero quae recusandae maiores error exercitationem quidem natus voluptatem ab placeat.</p>
        <div className="w-[70%] ">
          <p>Price: $2000/hr</p>
          <p>Fuel: Electric</p>
          <p>Location: Singapore, 12th Lane Rd.</p>
          <p>Contact: +65 98765432</p>
        </div>
        <div>
          <button type="button" className="bg-amber-500    hover:bg-amber-600/80 text-white font-bold py-2 px-4 rounded w-52">
            Reserve
          </button>
        </div>
        <span />
      </div>
    </div>

  </div>
);

export default CarDetails;
