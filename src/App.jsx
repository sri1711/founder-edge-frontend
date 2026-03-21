import React, { useState } from 'react';
import './index.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // In production, update this to your deployed backend URL.
      const response = await fetch('http://127.0.0.1:8000/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', text: data.message || 'You have been added to the waitlist!' });
        setName('');
        setEmail('');
      } else {
        setStatus({ type: 'error', text: data.detail || 'Failed to join waitlist. Please try again.' });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', text: 'Network connection error. Is the backend running?' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="container">
        <div className="glass-card">
          <h1>Join the Waitlist</h1>
          <p className="subtitle">
            Be the first to experience our next-generation product. Secure your early access spot today.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Ex. Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="jane@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? <div className="spinner"></div> : 'Reserve My Spot'}
            </button>
          </form>

          {status && (
            <div className={`status-message ${status.type}`}>
              {status.text}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
