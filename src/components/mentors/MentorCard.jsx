import React from 'react';
import { Av, Stars, Tag } from '../common/Atoms';

const MentorCard = ({ m, onViewProfile, onBook, booked = false }) => {
    return (
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'start' }}>
                <Av s={m.avatar} size={56} />
                <div style={{ flexGrow: 1 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--txt)' }}>{m.name}</h3>
                    <p style={{ fontSize: 14, color: 'var(--sub)', fontWeight: 600 }}>{m.title} @ {m.company}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                        <Stars n={m.rating} small />
                        <span style={{ fontSize: 12, color: 'var(--sub)', fontWeight: 700 }}>({m.reviews} reviews)</span>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {m.domain.slice(0, 3).map(d => <Tag key={d}>{d}</Tag>)}
            </div>

            <p style={{ fontSize: 13, color: 'var(--sub)', lineClamp: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {m.bio}
            </p>

            <div style={{
                marginTop: 'auto',
                paddingTop: 16,
                borderTop: '1px solid var(--bdr)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div>
                    <span style={{ fontSize: 20, fontWeight: 900, color: 'var(--blu)' }}>₹{m.rate}</span>
                    <span style={{ fontSize: 11, color: 'var(--sub)', fontWeight: 700 }}> / hr</span>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                    <button
                        className="btn-blu"
                        style={{ padding: '8px 16px', fontSize: 13 }}
                        onClick={() => onBook(m)}
                        disabled={booked}
                    >
                        {booked ? '✓ Booked' : 'Book Session'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MentorCard;
