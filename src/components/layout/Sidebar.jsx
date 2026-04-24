import React from 'react';
import { Av } from '../common/Atoms';

const Sidebar = ({ items, active, onNav, user }) => {
    return (
        <div style={{
            width: 260, height: '100vh', background: 'var(--wht)',
            borderRight: '1px solid var(--bdr)', display: 'flex', flexDirection: 'column',
            padding: '24px 16px', position: 'fixed', left: 0, top: 0
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 8px 32px' }}>
                <div style={{ width: 28, height: 28, background: 'var(--blu)', borderRadius: 8 }}></div>
                <span style={{ fontWeight: 900, fontSize: 18, color: 'var(--blu)', letterSpacing: '-0.5px' }}>FOUNDER EDGE</span>
            </div>

            <nav style={{ flexGrow: 1 }}>
                {items.map(it => (
                    <div
                        key={it.id}
                        onClick={() => onNav(it.id)}
                        style={{
                            padding: '12px 16px', borderRadius: 10, cursor: 'pointer',
                            marginBottom: 4, fontWeight: 700, fontSize: 14,
                            display: 'flex', alignItems: 'center', gap: 12,
                            background: active === it.id ? 'var(--blull)' : 'transparent',
                            color: active === it.id ? 'var(--blu)' : 'var(--sub)'
                        }}
                    >
                        <span style={{ opacity: active === it.id ? 1 : 0.6 }}>{it.icon}</span>
                        {it.label}
                    </div>
                ))}
            </nav>

            {user && (
                <div style={{
                    marginTop: 'auto', padding: 16, background: 'var(--bgg)',
                    borderRadius: 14, display: 'flex', alignItems: 'center', gap: 12
                }}>
                    <Av s={user.avatar} size={36} />
                    <div style={{ overflow: 'hidden' }}>
                        <p style={{ fontSize: 13, fontWeight: 800, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.name}</p>
                        <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--sub)', textTransform: 'capitalize' }}>{user.role}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
