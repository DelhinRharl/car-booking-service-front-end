const requestRegisterUser = async (body) => {
  const parsedBody = JSON.parse(body);
  const newBody = {
    user: {
      name: parsedBody.name,
      email: parsedBody.email,
      password: parsedBody.password,
    },
  };
  const res = await fetch('https://car-booking-premium.herokuapp.com/api/v1/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newBody),
  });

  const data = await res.json();

  if (!data.id) {
    return undefined;
  }

  return data;
};

export default requestRegisterUser;
