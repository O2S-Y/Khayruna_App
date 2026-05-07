"use client";
import React from 'react';
import Icon from '../Icon';

const LandingView = ({ onStart }) => (
  <div className="centered-page view-fade-in">
    <h1 className="landing-hero">Where club conversations<br/>become actions.</h1>
    <p className="landing-sub">Khayruna uses AI to instantly turn your chaotic group chats into structured threads, actionable tasks, and formal ideas.</p>
    <button className="btn-primary" onClick={onStart} style={{ padding: '16px 32px', fontSize: '18px', borderRadius: '16px' }}>
      Get Started <Icon name="ChevronRight" />
    </button>
  </div>
);

export default LandingView;
