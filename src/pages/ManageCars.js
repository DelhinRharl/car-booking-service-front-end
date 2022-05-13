/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import PrimaryButton from '../components/PrimaryButton';

const ManageCars = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="w-full md:w-4/5 pt-20 md:py-20 overflow-y-auto h-screen">
      <h1 className="font-bold text-2xl md:text-5xl md:mb-5 text-center uppercase mb-10 md:mb-20">
        Manage cars
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start justify-center w-4/5 max-w-xl mx-auto gap-5"
      >
        <input
          type="text"
          className="border-2 border-amber-500 rounded w-full p-1"
          {...register('make', { required: true, maxLength: 50 })}
          placeholder="Car make"
        />
        <input
          type="text"
          className="border-2 border-amber-500 rounded w-full p-1"
          placeholder="Car model"
          {...register('model', { required: true, maxLength: 50 })}
        />
        <input
          type="number"
          className="border-2 border-amber-500 rounded w-full p-1"
          placeholder="Car year"
          {...register('year', { required: true, min: 1000, max: 3000 })}
        />
        <textarea
          placeholder="Car description"
          className="border-2 border-amber-500 rounded w-full p-1"
          {...register('description', { required: true })}
          rows="8"
        />
        <PrimaryButton btnType="submit">submit</PrimaryButton>
      </form>
    </section>
  );
};
export default ManageCars;
