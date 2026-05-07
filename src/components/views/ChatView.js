"use client";
import React, { useState } from 'react';
import Icon from '../Icon';

const ChatView = () => {
  const [activeChannel, setActiveChannel] = useState('general');
  const [threadOpen, setThreadOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);

  const openThread = () => {
    setShowBanner(false);
    setThreadOpen(true);
  };

  return (
    <div className="chat-container view-fade-in">
      
      {showSidebar && (
        <div className="channels-sidebar glass-panel view-fade-in">
          <div className="channels-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Channels 
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div onClick={() => setShowSidebar(false)} style={{ cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }} title="Hide Channels">
                <Icon name="LayoutDashboard" size={14} />
              </div>
              <Icon name="Plus" size={14} style={{ cursor: 'pointer' }}/>
            </div>
          </div>
          <div className={`channel-item ${activeChannel === 'general' ? 'active' : ''}`} onClick={() => setActiveChannel('general')}>
            <Icon name="Hash" size={16}/> general
          </div>
          <div className={`channel-item ${activeChannel === 'hackathon' ? 'active' : ''}`} onClick={() => setActiveChannel('hackathon')}>
            <Icon name="Hash" size={16}/> hackathon-budget
          </div>
          <div className={`channel-item ${activeChannel === 'marketing' ? 'active' : ''}`} onClick={() => setActiveChannel('marketing')}>
            <Icon name="Hash" size={16}/> marketing
          </div>
        </div>
      )}

      <div className="chat-pane glass-panel">
        <div style={{ padding: '16px 20px', borderBottom: '0.5px solid var(--glass-border)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '12px' }}>
          {!showSidebar && (
            <div onClick={() => setShowSidebar(true)} style={{ cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }} title="Show Channels">
              <Icon name="LayoutDashboard" size={18} />
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Icon name="Hash" size={18} style={{ color: 'var(--text-muted)' }}/> {activeChannel}
          </div>
        </div>
        
        <div className="chat-messages">
          {activeChannel === 'general' ? (
            <>
              <div className="msg theirs">
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px', marginLeft: '4px' }}>Sarah K.</div>
                <div className="msg-bubble">Hey everyone! We need to finalize the budget for the Spring Hackathon.</div>
              </div>
              <div className="msg mine">
                <div className="msg-bubble">Agreed. Can we get $500 for food? We also need prizes.</div>
              </div>
              <div className="msg theirs">
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px', marginLeft: '4px' }}>Sarah K.</div>
                <div className="msg-bubble">Let's do $500 food, $300 prizes. I'll need someone to draft the admin request by tomorrow.</div>
              </div>
            </>
          ) : (
            <div style={{ margin: 'auto', color: 'var(--text-muted)', fontSize: '14px' }}>This channel is quiet today.</div>
          )}
        </div>
        
        {showBanner && !threadOpen && activeChannel === 'general' && (
          <div className="ai-banner">
            <Icon name="Sparkles" size={18} style={{ color: '#828fff' }}/>
            <div style={{ fontSize: '14px' }}>
              <span style={{ color: '#828fff', fontWeight: '500' }}>Deep discussion detected.</span><br/>
              Extracting tasks & ideas?
            </div>
            <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '13px', marginLeft: '8px' }} onClick={openThread}>Start Thread</button>
          </div>
        )}

        <div className="chat-input-area">
          <input type="text" placeholder={`Message #${activeChannel}...`} />
          <button className="btn-primary" style={{ padding: '0 16px', borderRadius: '16px' }}><Icon name="Send" size={18}/></button>
        </div>
      </div>

      {threadOpen && (
        <div className="thread-pane glass-panel view-fade-in">
          <div className="thread-header">
            <div style={{ fontWeight: '600' }}>Thread: Spring Hackathon</div>
            <div style={{ cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => setThreadOpen(false)}><Icon name="X" size={18}/></div>
          </div>
          
          <div className="ai-summary">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#828fff', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}><Icon name="Sparkles" size={14}/> AI Extraction</h4>
            <ul style={{ fontSize: '14px', lineHeight: '1.5', color: 'rgba(255,255,255,0.8)', marginLeft: '20px', marginBottom: '12px' }}>
              <li><strong>Budget:</strong> $500 Food, $300 Prizes.</li>
              <li><strong>Agreement:</strong> Pizza was bad last time; upgrade catering.</li>
            </ul>
            <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
              <button className="btn-primary" style={{ fontSize: '12px', padding: '6px 10px', flex: 1 }}>Assign Tasks (2)</button>
              <button className="btn-glass" style={{ fontSize: '12px', padding: '6px 10px', flex: 1 }}>Save Ideas</button>
            </div>
          </div>

          <div className="chat-messages" style={{ background: 'rgba(0,0,0,0.1)' }}>
            <div className="msg theirs" style={{ maxWidth: '90%' }}>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Khayruna AI</div>
              <div className="msg-bubble" style={{ background: 'rgba(94, 106, 210, 0.1)', border: '1px solid rgba(94, 106, 210, 0.3)' }}>
                I've created a Task: <strong>"Draft Admin Request for $800"</strong> and assigned it to Alex.
              </div>
            </div>
          </div>
          
          <div className="chat-input-area" style={{ borderTop: 'none', background: 'rgba(0,0,0,0.1)' }}>
            <input type="text" placeholder="Reply in thread..." />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatView;
