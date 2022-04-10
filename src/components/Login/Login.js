import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  // if (user) {
  //   navigate(from, { replace: true });
  // }

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [navigate, user, from]);

  console.log(user);
  return (
    <section className="form-container">
      <div>
        <h2 className="form-title">LOGIN</h2>
        <h6>{loading && <p>Loading...</p>}</h6>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id="email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id="password"
              required
            />
          </div>

          {error?.message && <p className="text-danger">{error?.message}</p>}
          <input className="form-submit " type="submit" value="Login" />
        </form>
        <p className="text-center my-3">
          New to Ema-John?{' '}
          <Link className="form-link" to="/signup">
            Create an account
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
