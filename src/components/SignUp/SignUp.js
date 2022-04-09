import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [customError, setCustomError] = useState('');
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, , error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  useEffect(() => {
    if (user) {
      navigate('/shop');
    }
  }, [navigate, user]);

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setCustomError('Your password did not matched!');
      return;
    }

    if (password.length < 6) {
      setCustomError('Your password length is too small!');
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <section className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
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

          <div className="input-group">
            <label htmlFor="Confirm-Password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="Confirm-Password"
              id="Confirm-Password"
              required
            />
          </div>

          {error?.message && <p className="text-danger">{error?.message}</p>}
          <p className="text-danger">{customError}</p>

          <input className="form-submit " type="submit" value="Sign Up" />
        </form>
        <p className="text-center my-3">
          Already have an account?{' '}
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
