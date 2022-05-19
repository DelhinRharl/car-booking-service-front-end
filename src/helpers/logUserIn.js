const requestLogin = async (body) => {
  const res = await fetch('https://car-booking-premium.herokuapp.com/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });

  const data = await res.json();

  if (data.error) {
    return { user: undefined, token: undefined };
  }

  return data;
};

export default requestLogin;
