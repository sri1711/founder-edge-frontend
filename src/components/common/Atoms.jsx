import React from 'react';

export const Av = ({ s, size = 44, bg = '#2563EB' }) => (
    <div style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 700,
        fontSize: size * 0.4,
        flexShrink: 0,
        textTransform: 'uppercase'
    }}>
        {s}
    </div>
);

export const Stars = ({ n = 0, small = false }) => (
    <div style={{ display: 'flex', gap: 2, color: '#F59E0B' }}>
        {[...Array(5)].map((_, i) => (
            <span key={i} style={{ fontSize: small ? 12 : 16 }}>
                {i < Math.floor(n) ? '★' : '☆'}
            </span>
        ))}
    </div>
);

export const Tag = ({ children, active = false, onDark = false }) => (
    <div style={{
        padding: '4px 10px',
        borderRadius: 8,
        fontSize: 12,
        fontWeight: 600,
        background: active ? '#2563EB' : (onDark ? 'rgba(255,255,255,0.1)' : '#EFF6FF'),
        color: active ? '#fff' : (onDark ? '#fff' : '#2563EB'),
        whiteSpace: 'nowrap'
    }}>
        {children}
    </div>
);

export const SBadge = ({ status }) => {
    const isC = status === 'confirmed' || status === 'completed';
    return (
        <div style={{
            padding: '4px 10px',
            borderRadius: 20,
            fontSize: 11,
            fontWeight: 800,
            textTransform: 'uppercase',
            background: isC ? '#D1FAE5' : '#FEF3C7',
            color: isC ? '#059669' : '#D97706',
            display: 'inline-block'
        }}>
            {status}
        </div>
    );
};

export const Toast = ({ msg, type, onDone }) => {
    React.useEffect(() => {
        const t = setTimeout(onDone, 3000);
        return () => clearTimeout(t);
    }, [onDone]);

    return (
        <div style={{
            position: 'fixed', bottom: 30, right: 30, zIndex: 9999,
            background: type === 'err' ? '#EF4444' : '#10B981',
            color: '#fff', padding: '12px 24px', borderRadius: 12,
            fontWeight: 700, boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            animation: 'fadeUp 0.3s ease'
        }}>
            {msg}
        </div>
    );
};
