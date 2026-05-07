"use client";
import React, { useState } from 'react';
import Icon from '../Icon';

const AuthView = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  return (
    <div className="auth-card glass-panel view-fade-in" style={{ textAlign: 'center' }}>
      <div style={{ width: '48px', height: '48px', background: 'var(--accent)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
        <Icon name="Phone" size={24} />
      </div>

      {step === 1 ? (
        <div className="view-fade-in" style={{ width: '100%' }}>
          <h2 className="auth-title">Join Khayruna</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Enter your phone number to join your university club's workspace.</p>
          <input type="tel" className="input-glass" placeholder="+1 (555) 000-0000" value={phone} onChange={e => setPhone(e.target.value)} />
          <button className="btn-primary" style={{ width: '100%', marginTop: '20px', padding: '16px', fontSize: '16px' }} disabled={phone.length < 5} onClick={() => setStep(2)}>
            Send Verification Code
          </button>
        </div>
      ) : (
        <div className="view-fade-in" style={{ width: '100%' }}>
          <h2 className="auth-title">Verify Phone</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>We sent a 6-digit code to {phone}</p>
          <input type="text" className="input-glass" placeholder="000000" maxLength="6" value={code} onChange={e => setCode(e.target.value)} style={{ letterSpacing: '4px', textAlign: 'center', fontSize: '24px' }} />
          <button className="btn-primary" style={{ width: '100%', marginTop: '20px', padding: '16px', fontSize: '16px' }} disabled={code.length < 6} onClick={onComplete}>
            Verify & Join
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthView;
