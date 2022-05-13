const authenticateUser = async (token) => {
  const res = await fetch('http://127.0.0.1:3000/api/v1/login', {
    headers: {
      'Content-Type': 'application/json',
      Authenticate: token,
    },
  });
  const data = await res.json();

  return data;
};

export default authenticateUser;
