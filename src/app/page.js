"use client";
import React, { useState } from 'react';
import Icon from '../components/Icon';
import LandingView from '../components/views/LandingView';
import AuthView from '../components/views/AuthView';
import DashboardView from '../components/views/DashboardView';
import ChatView from '../components/views/ChatView';
import TasksView from '../components/views/TasksView';
import IdeasView from '../components/views/IdeasView';

export default function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  if (currentView === 'landing') return (
    <div style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <LandingView onStart={() => setCurrentView('auth')} />
      <div style={{ position: 'absolute', bottom: '24px', width: '100%', textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)' }}>
        &copy; 2026 Khayruna. All rights reserved.
      </div>
    </div>
  );

  if (currentView === 'auth') return (
    <div style={{ position: 'relative', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <AuthView onComplete={() => setCurrentView('dashboard')} />
      <div style={{ position: 'absolute', bottom: '24px', width: '100%', textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)' }}>
        &copy; 2026 Khayruna. All rights reserved.
      </div>
    </div>
  );

  return (
    <div className="workspace-wrapper">
      <div className="app-window glass-panel view-fade-in" style={{ padding: 0 }}>
        <div className="app-layout">
          {/* Sidebar */}
          <nav className="sidebar">
            <div style={{ width: '48px', height: '48px', marginTop: '-8px', marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/logo.svg" alt="Khayruna Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            
            <div className={`sidebar-icon ${currentView === 'dashboard' ? 'active' : ''}`} onClick={() => setCurrentView('dashboard')} title="Dashboard">
              <Icon name="LayoutDashboard" />
            </div>
            <div className={`sidebar-icon ${currentView === 'chat' ? 'active' : ''}`} onClick={() => setCurrentView('chat')} title="Group Chat">
              <Icon name="MessageSquare" />
            </div>
            <div className={`sidebar-icon ${currentView === 'tasks' ? 'active' : ''}`} onClick={() => setCurrentView('tasks')} title="Tasks">
              <Icon name="CheckSquare" />
            </div>
            <div className={`sidebar-icon ${currentView === 'ideas' ? 'active' : ''}`} onClick={() => setCurrentView('ideas')} title="Ideas Hub">
              <Icon name="Lightbulb" />
            </div>

            <div style={{ marginTop: 'auto', fontSize: '9px', color: 'var(--text-muted)', textAlign: 'center', padding: '0 4px', lineHeight: '1.4' }}>
              &copy; 2026<br/>Khayruna<br/>Rights<br/>Reserved
            </div>
          </nav>

          <main className="main-area">
            {/* Topbar */}
            <header className="topbar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="Users" size={16}/>
                </div>
                <span style={{ fontWeight: '600', fontSize: '15px' }}>University Tech Club</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', position: 'relative' }}>
                <div 
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #5e6ad2, #828fff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(94, 106, 210, 0.3)', cursor: 'pointer' }}
                >
                  A
                </div>
                
                {/* Profile Dropdown */}
                {showProfileMenu && (
                  <>
                    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 90 }} onClick={() => setShowProfileMenu(false)} />
                    <div className="view-fade-in" style={{ position: 'absolute', top: '48px', right: '0', minWidth: '220px', width: 'max-content', height: 'auto', borderRadius: '16px', padding: '12px', zIndex: 100, display: 'flex', flexDirection: 'column', gap: '8px', background: '#1c1c1e', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '12px', marginBottom: '4px', paddingLeft: '8px', paddingRight: '8px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #5e6ad2, #828fff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 'bold' }}>A</div>
                        <div>
                          <div style={{ fontWeight: '600', fontSize: '15px' }}>Alex Johnson</div>
                          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>+1 (555) 123-4567</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', cursor: 'pointer', padding: '10px', borderRadius: '8px', transition: 'background 0.2s' }} className="channel-item">
                        <Icon name="Users" size={16}/> Profile Settings
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', cursor: 'pointer', padding: '10px', borderRadius: '8px', transition: 'background 0.2s' }} className="channel-item">
                        <Icon name="Lightbulb" size={16}/> Preferences
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', cursor: 'pointer', padding: '10px', borderRadius: '8px', transition: 'background 0.2s', color: '#ff6b6b' }} className="channel-item" onClick={() => setCurrentView('landing')}>
                        <Icon name="X" size={16}/> Log Out
                      </div>
                    </div>
                  </>
                )}
              </div>
            </header>

            {/* Dynamic Content */}
            <div className="content-area">
              {currentView === 'dashboard' && <DashboardView navigate={setCurrentView} />}
              {currentView === 'chat' && <ChatView />}
              {currentView === 'tasks' && <TasksView />}
              {currentView === 'ideas' && <IdeasView />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
