import React, { useState, useEffect } from 'react';
import MentorCard from '../components/mentors/MentorCard';
import BookingModal from '../components/mentors/BookingModal';
import { Tag } from '../common/Atoms';

const DOMAINS = ["All", "Fintech", "SaaS", "D2C", "Consumer", "EdTech", "AI/ML", "Marketplace", "HR Tech", "AgriTech", "Dev Tools"];

const Browse = ({ onBookSuccess, user }) => {
    const [mentors, setMentors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All');
    const [bookingMentor, setBookingMentor] = useState(null);

    useEffect(() => {
        fetchMentors();
    }, []);

    const fetchMentors = async () => {
        try {
            const res = await fetch('https://founder-edge-backend-593995890672.us-central1.run.app/api/mentors');
            const data = await res.json();
            setMentors(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleBooking = async (bookingData) => {
        try {
            const payload = {
                id: 'b-' + Math.random().toString(36).substr(2, 9),
                mentor_id: bookingMentor.id,
                founder_id: user.id,
                ...bookingData,
                status: 'confirmed'
            };

            const res = await fetch('https://founder-edge-backend-593995890672.us-central1.run.app/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                setBookingMentor(null);
                onBookSuccess();
            }
        } catch (err) {
            console.error(err);
        }
    };

    const filtered = mentors.filter(m => filter === 'All' || m.domain.includes(filter));

    return (
        <div style={{ padding: '0 24px' }}>
            <div style={{ marginBottom: 40 }}>
                <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Find your next mentor</h1>
                <p style={{ color: 'var(--sub)', fontWeight: 600 }}>Book 1:1 sessions with vetted startup operators.</p>
            </div>

            <div style={{ display: 'flex', gap: 12, marginBottom: 32, overflowX: 'auto', paddingBottom: 8 }}>
                {DOMAINS.map(d => (
                    <div key={d} onClick={() => setFilter(d)} style={{ cursor: 'pointer' }}>
                        <Tag active={filter === d}>{d}</Tag>
                    </div>
                ))}
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', padding: 100, color: 'var(--sub)', fontWeight: 700 }}>Loading mentors...</div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
                    {filtered.map(m => (
                        <MentorCard
                            key={m.id}
                            m={m}
                            onBook={setBookingMentor}
                        />
                    ))}
                </div>
            )}

            {bookingMentor && (
                <BookingModal
                    m={bookingMentor}
                    onClose={() => setBookingMentor(null)}
                    onConfirm={handleBooking}
                />
            )}
        </div>
    );
};

export default Browse;
