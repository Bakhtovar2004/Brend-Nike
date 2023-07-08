import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [user, setUser] = useState({
    id: '',
    login: '',
    password: '',
    senderId: 1,
  });

  const [error, setError] = useState(false);

  const onUserInput = (key) => (e) => {
    setUser({
      ...user,
      id: crypto.randomUUID(),
      [key]: e.target.value,
    });
    setError(false);
  };



  const inputClass = error ? 'login-input error error-border' : 'login-input';

  return (
    <div className='bgimg'>
      <div className='login'>
        <div className=''>
          <h2 style={{ textAlign: 'center', color: 'white', fontSize: '23px', padding: '8px' }}>Добро пожаловать в Nike!</h2>
          <h4 style={{ textAlign: 'center', color: 'white', fontSize: '16px', padding: '12px' }}>Пожалуйста введите логин и пароль</h4>
          <input
            style={{ paddingLeft: 15 }}
            placeholder='Введите логин'
            onChange={onUserInput('login')}
            className={inputClass}
            value={user.login}
          />
          <input
            type='password'
            style={{ paddingLeft: 15 }}
            placeholder='Введите пароль'
            onChange={onUserInput('password')}
            className={inputClass}
            value={user.password}
          />
          {error && <p style={{ color: 'red', marginLeft: 50, marginTop: -20 }} className='error-message '>{error}</p>}
          <Link to='/'>
            <button>Login</button>
          </Link>
        </div>
        <Link to='/registration'>
          <a style={{ cursor: 'pointer', color: 'white', marginLeft:'45%' }} className='flex justify-center items-center' href='a' >
            Sing up
          </a>
        </Link>
      </div>

    </div>
  );
}
