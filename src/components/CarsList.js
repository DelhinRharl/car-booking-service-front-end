import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../redux/cars/carsSlice';
import PrimaryButton from './PrimaryButton';

const CarsList = () => {
  const { cars } = useSelector((state) => state.cars);
  const { isLoading } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  return (
    <section>
      <h2 className="font-bold text-3xl text-center mb-10">List of cars</h2>
      <table className="table-auto w-4/5 max-w-xl mx-auto">
        <thead className="">
          <tr>
            <th className="p-2 text-left">Car make</th>
            <th className="p-2 text-left">Car model</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && 'Loading...'}
          {cars.map((car) => (
            <tr key={car.id}>
              <td className="px-2 py-4">{car.make}</td>
              <td className="px-2 py-4">{car.model}</td>
              <td className="px-2 py-4">
                <PrimaryButton onClick={() => console.log('delete')}>
                  Delete
                </PrimaryButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CarsList;
