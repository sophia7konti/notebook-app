import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/api/users/${isLogin ? 'login' : 'register'}`;
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (isLogin && data.token) {
        localStorage.setItem('token', data.token);
        onLogin(data.username);
      } else if (!isLogin && data.message) {
        alert(data.message);
        setIsLogin(true);
      }
    } catch(err){
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form" aria-label={isLogin ? 'Login form' : 'Register form'}>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>

      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      <button
        type="button"
        onClick={() => setIsLogin(!isLogin)}
        aria-label="Switch login/register"
      >
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </form>
  );
}

export default Login;
