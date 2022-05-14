import { useEffect } from 'react';
import PrimaryButton from './PrimaryButton';

const CarsList = () => {
  useEffect(() => {}, []);
  return (
    <section>
      <h2 className="font-bold text-3xl text-center mb-10">List of cars</h2>
      <table className="table-auto w-4/5 max-w-xl mx-auto">
        <thead className="">
          <tr>
            <th className="p-2">Car make</th>
            <th className="p-2">Car model</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-2 py-4">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className="px-2 py-4">Malcolm Lockyer</td>
            <td className="px-2 py-4">
              <PrimaryButton onClick={() => console.log('delete')}>
                Delete
              </PrimaryButton>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default CarsList;
