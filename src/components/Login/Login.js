import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <section className="form-container">
      <div>
        <h2 className="form-title">LOGIN</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" required />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>

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
