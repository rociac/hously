import React from 'react';
import { post } from 'axios';

const Login = () => {

  const handleSubmit = event => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const request = { "auth": {"email": email, "password": password} }
    post('https://young-mountain-91908.herokuapp.com/api/user_token', request)
      .then(response => {
        localStorage.setItem('jwt', response.data.jwt);
        console.log(response);
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input id="email" type="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input id="password" type="password" name="password" />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default Login;