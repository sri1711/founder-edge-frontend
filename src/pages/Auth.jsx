import React, { useState } from 'react';

const Auth = ({ onLogin, onNav }) => {
    const [type, setType] = useState('login'); // 'login' or 'signup'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('founder');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simplified auth logic as per reference
        if (email && password) {
            onLogin({
                id: role === 'mentor' ? 'm1' : 'f1', // Mocking IDs based on role
                name: email.split('@')[0],
                email,
                role,
                avatar: (email[0] || 'U').toUpperCase()
            });
        }
    };

    return (
        <div style={{
            height: '100vh', display: 'flex', alignItems: 'center',
            justifyContent: 'center', background: 'var(--bgg)'
        }}>
            <div className="auth-card">
                <h2 style={{ fontSize: 24, fontWeight: 900, textAlign: 'center', marginBottom: 8 }}>
                    {type === 'login' ? 'Welcome Back' : 'Create Account'}
                </h2>
                <p style={{ textAlign: 'center', color: 'var(--sub)', fontSize: 14, marginBottom: 32 }}>
                    {type === 'login' ? 'Enter your credentials to continue' : 'Join the elite network of operators'}
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div>
                        <label style={{ fontSize: 12, fontWeight: 800, color: 'var(--sub)', display: 'block', marginBottom: 6 }}>WORK EMAIL</label>
                        <input
                            type="email"
                            placeholder="name@company.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            style={{ width: '100%', padding: '12px', borderRadius: 10, border: '1px solid var(--bdr)' }}
                            required
                        />
                    </div>

                    <div>
                        <label style={{ fontSize: 12, fontWeight: 800, color: 'var(--sub)', display: 'block', marginBottom: 6 }}>PASSWORD</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            style={{ width: '100%', padding: '12px', borderRadius: 10, border: '1px solid var(--bdr)' }}
                            required
                        />
                    </div>

                    <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                        <label style={{ flex: 1 }}>
                            <input
                                type="radio" name="role" value="founder" checked={role === 'founder'}
                                onChange={() => setRole('founder')}
                                style={{ marginRight: 8 }}
                            />
                            <span style={{ fontSize: 14, fontWeight: 700 }}>I'm a Founder</span>
                        </label>
                        <label style={{ flex: 1 }}>
                            <input
                                type="radio" name="role" value="mentor" checked={role === 'mentor'}
                                onChange={() => setRole('mentor')}
                                style={{ marginRight: 8 }}
                            />
                            <span style={{ fontSize: 14, fontWeight: 700 }}>I'm a Mentor</span>
                        </label>
                    </div>

                    <button className="btn-blu" style={{ marginTop: 12 }}>
                        {type === 'login' ? 'Log In' : 'Sign Up'}
                    </button>
                </form>

                <p style={{ textAlign: 'center', marginTop: 24, fontSize: 14, fontWeight: 700 }}>
                    {type === 'login' ? "Don't have an account? " : "Already have an account? "}
                    <span
                        onClick={() => setType(type === 'login' ? 'signup' : 'login')}
                        style={{ color: 'var(--blu)', cursor: 'pointer' }}
                    >
                        {type === 'login' ? 'Sign Up' : 'Log In'}
                    </span>
                </p>

                <p
                    onClick={() => onNav('landing')}
                    style={{ textAlign: 'center', marginTop: 16, fontSize: 13, color: 'var(--sub)', cursor: 'pointer', fontWeight: 600 }}
                >
                    ← Back to Landing Page
                </p>
            </div>
        </div>
    );
};

export default Auth;
