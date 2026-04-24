import React, { useState } from 'react';
import { Av, Stars } from '../common/Atoms';

const SLOTS = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"];

const BookingModal = ({ m, onClose, onConfirm }) => {
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    if (!m) return null;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(30, 58, 138, 0.4)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyCenter: 'center', zIndex: 1000,
            padding: 20
        }}>
            <div className="auth-card" style={{ maxWidth: 500, margin: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 24 }}>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                        <Av s={m.avatar} size={48} />
                        <div>
                            <h3 style={{ fontSize: 18, fontWeight: 800 }}>Book Session</h3>
                            <p style={{ fontSize: 13, color: 'var(--sub)' }}>with {m.name}</p>
                        </div>
                    </div>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: 'var(--sub)' }}>×</button>
                </div>

                <div style={{ marginBottom: 20 }}>
                    <label style={{ fontSize: 12, fontWeight: 800, color: 'var(--sub)', display: 'block', marginBottom: 8 }}>SELECT DATE</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        style={{ width: '100%', padding: '12px', borderRadius: 10, border: '1px solid var(--bdr)', fontFamily: 'inherit' }}
                    />
                </div>

                <div style={{ marginBottom: 24 }}>
                    <label style={{ fontSize: 12, fontWeight: 800, color: 'var(--sub)', display: 'block', marginBottom: 8 }}>SELECT TIME SLOT</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                        {SLOTS.map(s => (
                            <button
                                key={s}
                                onClick={() => setSelectedSlot(s)}
                                style={{
                                    padding: '10px', borderRadius: 8, border: '1.5px solid',
                                    borderColor: selectedSlot === s ? 'var(--blu)' : 'var(--bdr)',
                                    background: selectedSlot === s ? 'var(--blull)' : 'var(--wht)',
                                    color: selectedSlot === s ? 'var(--blu)' : 'var(--txt)',
                                    fontWeight: 700, fontSize: 13, cursor: 'pointer'
                                }}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ padding: '16px', background: 'var(--bgg)', borderRadius: 12, marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 14, fontWeight: 700 }}>Total Payable</span>
                    <span style={{ fontSize: 20, fontWeight: 900, color: 'var(--blu)' }}>₹{m.rate}</span>
                </div>

                <button
                    className="btn-blu"
                    style={{ width: '100%' }}
                    disabled={!selectedSlot}
                    onClick={() => onConfirm({ date, slot: selectedSlot, amount: m.rate })}
                >
                    Confirm & Pay
                </button>
            </div>
        </div>
    );
};

export default BookingModal;
