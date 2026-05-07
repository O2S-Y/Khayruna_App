"use client";
import React from 'react';
import Icon from '../Icon';

const DashboardView = ({ navigate }) => (
  <div className="view-fade-in">
    <h2 style={{ fontSize: '28px', marginBottom: '8px', fontWeight: '700' }}>Welcome back, Alex.</h2>
    <p style={{ color: 'var(--text-muted)' }}>Here's what's happening in the Tech Club.</p>
    
    <div className="dash-grid">
      <div className="dash-card glass-panel">
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', fontSize: '16px' }}><Icon name="MessageSquare" size={16}/> Active Threads</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '12px', cursor: 'pointer' }} onClick={() => navigate('chat')}>
            <div style={{ fontWeight: '500', marginBottom: '4px' }}>Hackathon Budget 2026</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>3 new ideas extracted</div>
          </div>
        </div>
      </div>
      
      <div className="dash-card glass-panel">
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', fontSize: '16px' }}><Icon name="CheckSquare" size={16}/> My Tasks</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '12px', cursor: 'pointer' }} onClick={() => navigate('tasks')}>
            <div style={{ width: '20px', height: '20px', borderRadius: '6px', border: '1px solid var(--glass-border)' }}></div>
            <div style={{ fontSize: '14px' }}>Draft sponsorship email</div>
          </div>
        </div>
      </div>

      <div className="dash-card glass-panel" style={{ background: 'linear-gradient(145deg, rgba(94, 106, 210, 0.1), rgba(28, 28, 30, 0.4))' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', fontSize: '16px', color: '#828fff' }}><Icon name="Sparkles" size={16}/> AI Insights</h3>
        <p style={{ fontSize: '14px', lineHeight: '1.5', color: 'rgba(255,255,255,0.8)' }}>
          Based on recent chats, your club is highly focused on <strong>Event Logistics</strong>. I've automatically drafted 2 venue request forms.
        </p>
        <button className="btn-glass" style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }} onClick={() => navigate('ideas')}>View Drafts</button>
      </div>
    </div>
  </div>
);

export default DashboardView;
