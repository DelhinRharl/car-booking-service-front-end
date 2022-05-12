import { useEffect, useState } from 'react';

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3000/api/v1/reservations');
      const data = await res.json();
      setReservations(data);
    })();
  }, []);
  return (
    <section className="">
      <h1 className="font-bold text-white text-3xl md:text-5xl md:mb-5">
        MY RESERVATIONS
      </h1>
      <table>
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
              <td>{reservation.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MyReservations;
