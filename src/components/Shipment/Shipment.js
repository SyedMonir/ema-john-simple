import React, { useState } from 'react';

const Shipment = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
  };
  return (
    <section className="form-container">
      <div>
        <h2 className="form-title">Shipping information</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
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
            <label htmlFor="address">Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id="address"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input
              onBlur={handlePhoneBlur}
              type="text"
              name="phone"
              id="phone"
              required
            />
          </div>

          {error?.message && <p className="text-danger">{error?.message}</p>}

          <input className="form-submit " type="submit" value="Add Shipping" />
        </form>
      </div>
    </section>
  );
};

export default Shipment;
