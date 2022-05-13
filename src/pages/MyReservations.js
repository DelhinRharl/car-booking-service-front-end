import { useEffect, useState } from 'react';

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3000/api/v1/users/${2}/reservations`);
      const data = await res.json();
      setReservations(data);
    })();
  }, []);
  return (
    <section className="w-full h-full text-center flex flex-col items-center pt-20">
      <h1 className="font-bold text-3xl md:text-5xl md:mb-5">
        MY RESERVATIONS
      </h1>
      <table className="sm:w-[80%]">
        <thead>
          <tr>
            <th>City</th>
            <th>Car Model</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.city}</td>
              <td>{reservation.car_model}</td>
              <td>{new Date(reservation.created_at).toLocaleDateString('en-UK')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MyReservations;
