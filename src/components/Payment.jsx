import React, { useState } from 'react';

function PaymentComponent({ onSubmit, initialAmount }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ cardNumber, expiryDate, cvv }); // Pass payment information to parent component
    setCardNumber(''); // Clear form fields after submit
    setExpiryDate('');
    setCvv('');
  };

  return (
    <div className="form-container">
      <h2>Secure Payment</h2>
      <form onSubmit={handleSubmit} className='payment-container'>
        <div className="payment-field">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            pattern="[0-9]+"
            required
          />
        </div>
        <div className="payment-field">
          <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            maxLength={5} // Limit input to 5 characters for MM/YY format
            
            required
          />
        </div>
        <div className="payment-field">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            maxLength={3} // Limit input to 3 characters for CVV
            required
          />
        </div>
        <button type="submit" className="pay-button">
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default PaymentComponent;