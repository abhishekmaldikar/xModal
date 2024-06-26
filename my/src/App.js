import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      alert('Invalid email');
      return;
    }
    if (phone.length !== 10 || isNaN(phone)) {
      alert('Invalid phone number');
      return;
    }
    const currentDate = new Date();
    const selectedDate = new Date(dob);
    if (selectedDate > currentDate) {
      alert('Invalid date of birth');
      return;
    }
    // Clear form fields upon successful submission
    setUsername('');
    setEmail('');
    setPhone('');
    setDob('');
    setIsOpen(false);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>Open Form</button>
      {isOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
              <h2>Fill Details</h2>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor="phone">Phone:</label>
              <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
