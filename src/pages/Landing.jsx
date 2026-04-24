import React from 'react';

const Landing = ({ onJoinWaitlist, onNav }) => {
    return (
        <div className="landing-wrapper">
            {/* ── HEADER ── */}
            <nav className="landing-nav" style={{
                position: 'fixed', top: 0, width: '100%', padding: '20px 40px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', zIndex: 100
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 24, height: 24, background: '#2563EB', borderRadius: 6 }}></div>
                    <span style={{ fontWeight: 900, fontSize: 18, color: '#2563EB' }}>FOUNDER EDGE</span>
                </div>
                <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
                    <button
                        onClick={() => onNav('auth')}
                        style={{
                            background: 'none', border: 'none', fontWeight: 700,
                            color: '#1E3A8A', cursor: 'pointer', fontSize: 14
                        }}
                    >
                        Log In
                    </button>
                    <button
                        className="btn-blu"
                        onClick={() => {
                            const el = document.getElementById('waitlist');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        style={{ padding: '10px 20px', borderRadius: 10, fontSize: 14 }}
                    >
                        Join Waitlist
                    </button>
                </div>
            </nav>

            {/* ── HERO ── */}
            <section style={{
                padding: '160px 20px 100px', textAlign: 'center',
                background: 'radial-gradient(circle at 50% 50%, #EFF6FF 0%, #F0F7FF 100%)'
            }}>
                <div style={{ maxWidth: 800, margin: '0 auto' }}>
                    <div style={{
                        display: 'inline-block', padding: '6px 14px', borderRadius: 100,
                        background: '#DBEAFE', color: '#2563EB', fontWeight: 800,
                        fontSize: 12, marginBottom: 24, letterSpacing: '0.5px'
                    }}>
                        NOW OPEN FOR EARLY ACCESS
                    </div>
                    <h1 style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
                        Book the world's best<br /><span style={{ color: '#2563EB' }}>Operators</span> by the hour.
                    </h1>
                    <p style={{ fontSize: 20, color: '#4B72BC', maxWidth: 600, margin: '0 auto 40px', fontWeight: 600 }}>
                        Stop wasting months on "it depends." Get 1:1 tactical advice from founders who have actually done it.
                    </p>
                    <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                        <button
                            className="btn-blu"
                            onClick={() => {
                                const el = document.getElementById('waitlist');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            style={{ padding: '16px 32px', fontSize: 18 }}
                        >
                            Get Early Access
                        </button>
                    </div>
                </div>
            </section>

            {/* ── WAITLIST SECTION ── */}
            <section id="waitlist" style={{ padding: '100px 20px', display: 'flex', justifyContent: 'center' }}>
                <div className="auth-card" style={{ maxWidth: 500 }}>
                    <h2 style={{ textAlign: 'center', fontWeight: 900, marginBottom: 8 }}>Join the Waitlist</h2>
                    <p style={{ textAlign: 'center', color: 'var(--sub)', fontSize: 14, marginBottom: 32 }}>
                        We'll reach out as soon as Founder Edge launches.
                    </p>
                    <button className="btn-blu" style={{ width: '100%' }} onClick={onJoinWaitlist}>
                        🚀 Register Interest
                    </button>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <footer style={{ padding: '60px 20px', borderTop: '1px solid var(--bdr)', textAlign: 'center' }}>
                <div style={{ fontWeight: 900, color: '#2563EB', marginBottom: 16 }}>FOUNDER EDGE</div>
                <p style={{ color: 'var(--sub)', fontSize: 13, fontWeight: 600 }}>© 2024 Founder Edge. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Landing;
