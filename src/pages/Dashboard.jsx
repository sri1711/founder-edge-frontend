import React, { useState, useEffect } from 'react';
import { SBadge } from '../components/common/Atoms';

const Dashboard = ({ user }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboard();
    }, [user]);

    const fetchDashboard = async () => {
        try {
            const res = await fetch(`https://founder-edge-backend-593995890672.us-central1.run.app/api/dashboard/${user.role}/${user.id}`);
            const d = await res.json();
            setData(d);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div style={{ textAlign: 'center', padding: 100, fontWeight: 700, color: 'var(--sub)' }}>Loading dashboard...</div>;

    const stats = data?.stats || {};
    const list = user.role === 'founder' ? data?.bookings : data?.sessions;

    return (
        <div style={{ padding: '0 24px' }}>
            <div style={{ marginBottom: 40 }}>
                <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Hello, {user.name} 👋</h1>
                <p style={{ color: 'var(--sub)', fontWeight: 600 }}>Here's what's happening with your sessions.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 48 }}>
                <div className="card">
                    <p style={{ fontSize: 13, fontWeight: 800, color: 'var(--sub)', marginBottom: 8 }}>TOTAL SESSIONS</p>
                    <p style={{ fontSize: 32, fontWeight: 900, color: 'var(--blu)' }}>{stats.sessions || 0}</p>
                </div>
                <div className="card">
                    <p style={{ fontSize: 13, fontWeight: 800, color: 'var(--sub)', marginBottom: 8 }}>{user.role === 'founder' ? 'TOTAL HOURS' : 'AVG RATING'}</p>
                    <p style={{ fontSize: 32, fontWeight: 900, color: 'var(--blu)' }}>{user.role === 'founder' ? (stats.hours || 0) : (stats.rating || '0.0')}</p>
                </div>
                <div className="card">
                    <p style={{ fontSize: 13, fontWeight: 800, color: 'var(--sub)', marginBottom: 8 }}>{user.role === 'founder' ? 'TOTAL SPENT' : 'TOTAL EARNINGS'}</p>
                    <p style={{ fontSize: 32, fontWeight: 900, color: 'var(--blu)' }}>₹{user.role === 'founder' ? (stats.spent || 0) : (stats.earnings || 0)}</p>
                </div>
            </div>

            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--bdr)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: 18, fontWeight: 800 }}>{user.role === 'founder' ? 'Your Bookings' : 'Upcoming Sessions'}</h3>
                </div>
                <div style={{ width: '100%', overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ background: 'var(--blull)' }}>
                                <th style={{ padding: '12px 24px', fontSize: 12, fontWeight: 800, color: 'var(--sub)' }}>DATE</th>
                                <th style={{ padding: '12px 24px', fontSize: 12, fontWeight: 800, color: 'var(--sub)' }}>TIME</th>
                                <th style={{ padding: '12px 24px', fontSize: 12, fontWeight: 800, color: 'var(--sub)' }}>{user.role === 'founder' ? 'MENTOR' : 'FOUNDER'}</th>
                                <th style={{ padding: '12px 24px', fontSize: 12, fontWeight: 800, color: 'var(--sub)' }}>STATUS</th>
                                <th style={{ padding: '12px 24px', fontSize: 12, fontWeight: 800, color: 'var(--sub)' }}>AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list && list.length > 0 ? list.map(item => (
                                <tr key={item.id} style={{ borderBottom: '1px solid var(--bdr)' }}>
                                    <td style={{ padding: '16px 24px', fontSize: 14, fontWeight: 700 }}>{item.date}</td>
                                    <td style={{ padding: '16px 24px', fontSize: 14, fontWeight: 700 }}>{item.slot}</td>
                                    <td style={{ padding: '16px 24px', fontSize: 14, fontWeight: 700 }}>{user.role === 'founder' ? item.mentor_id : item.founder_id}</td>
                                    <td style={{ padding: '16px 24px' }}><SBadge status={item.status} /></td>
                                    <td style={{ padding: '16px 24px', fontSize: 14, fontWeight: 800, color: 'var(--blu)' }}>₹{item.amount}</td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="5" style={{ padding: '40px', textAlign: 'center', color: 'var(--sub)', fontWeight: 600 }}>No sessions found yet.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
