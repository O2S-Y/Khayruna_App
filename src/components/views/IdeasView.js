"use client";
import React from 'react';
import Icon from '../Icon';

const IdeasView = () => (
  <div className="view-fade-in">
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '700' }}>Ideas Hub</h2>
      <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>AI-extracted concepts from chat.</div>
    </div>

    <div className="ideas-grid">
      <div className="idea-card glass-panel">
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#828fff', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>
          <Icon name="Sparkles" size={14}/> Extracted from #general
        </div>
        <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Upgrade Catering Provider</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5' }}>Pizza was poorly received last time. Suggestion to allocate $500 for better food options (e.g. local tacos or sandwiches).</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '16px' }}>
          <div className="btn-glass" style={{ padding: '6px 12px' }}>
            <Icon name="ArrowUp" size={16}/> 12
          </div>
          <button className="btn-primary" style={{ fontSize: '12px', padding: '8px 14px' }}>Generate Form</button>
        </div>
      </div>
    </div>
  </div>
);

export default IdeasView;
