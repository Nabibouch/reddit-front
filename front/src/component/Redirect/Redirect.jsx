import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

const backendUrl = "http://localhost:1337";

const LoginRedirect = () => {
  const [text, setText] = useState('Loading...');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location.search);

    fetch(`${backendUrl}/api/auth/google/callback${location.search}`)
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res.json();
      })
      .then(res => {
        localStorage.setItem('jwt', res.jwt);
        localStorage.setItem('username', res.user.username);
        setText('You have been successfully logged in. You will be redirected in a few seconds...');
        setTimeout(() => navigate('/'), 3000); // Redirige après 3 sec
      })
      .catch(err => {
        console.error(err);
        setText('An error occurred, please see the developer console.');
      });
  }, [navigate, location.search]);

  return <p>{text}</p>;
};

export default LoginRedirect;
