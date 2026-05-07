"use client";
import React, { useState } from 'react';
import Icon from '../Icon';

const TasksView = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskClick = (taskName, status) => {
    setSelectedTask({ name: taskName, status, assignee: 'Alex', due: 'Friday, Oct 24' });
  };

  return (
    <div className="view-fade-in" style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '700' }}>Tasks</h2>
        <button className="btn-primary"><Icon name="Plus" size={16}/> New Task</button>
      </div>
      
      <div className="kanban">
        <div className="kanban-col">
          <div className="kanban-col-title"><span>To Do</span> <span style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '10px' }}>2</span></div>
          <div className="task-card glass-panel" onClick={() => handleTaskClick('Draft Admin Request for $800 Budget', 'To Do')}>
            <div style={{ fontWeight: '500', marginBottom: '8px', lineHeight: '1.4' }}>Draft Admin Request for $800 Budget</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>From thread: Spring Hackathon...</div>
            <div className="task-meta">
              <span style={{ color: '#828fff', background: 'rgba(94,106,210,0.1)', padding: '4px 8px', borderRadius: '6px', fontWeight: '500', display: 'flex', alignItems: 'center' }}><Icon name="Sparkles" size={10} style={{marginRight:'4px'}}/> AI Extracted</span>
              <div className="avatar">A</div>
            </div>
          </div>
          <div className="task-card glass-panel" onClick={() => handleTaskClick('Book Room 402', 'To Do')}>
            <div style={{ fontWeight: '500', marginBottom: '8px' }}>Book Room 402</div>
            <div className="task-meta">
              <span>Due Friday</span>
              <div className="avatar" style={{ background: '#e27b5e' }}>M</div>
            </div>
          </div>
        </div>
        
        <div className="kanban-col">
          <div className="kanban-col-title"><span>In Progress</span> <span style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '10px' }}>1</span></div>
          <div className="task-card glass-panel" onClick={() => handleTaskClick('Sponsorship Outreach', 'In Progress')}>
            <div style={{ fontWeight: '500', marginBottom: '8px' }}>Sponsorship Outreach</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Contacted 5 companies.</div>
            <div className="task-meta">
              <span>Updated 2h ago</span>
              <div className="avatar" style={{ background: '#5eb3e2' }}>S</div>
            </div>
          </div>
        </div>
      </div>

      {/* Task Detail Modal */}
      {selectedTask && (
        <div className="modal-overlay" onClick={(e) => e.target.className.includes('modal-overlay') && setSelectedTask(null)}>
          <div className="task-detail-panel glass-panel">
            <div className="task-detail-header">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ color: 'var(--accent)', fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{selectedTask.status}</div>
                <div onClick={() => setSelectedTask(null)}><Icon name="X" size={20} style={{ cursor: 'pointer', color: 'var(--text-muted)' }} /></div>
              </div>
              <h2 style={{ fontSize: '22px', fontWeight: '700', lineHeight: '1.3', marginBottom: '16px' }}>{selectedTask.name}</h2>
              
              <div style={{ display: 'flex', gap: '20px', fontSize: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                  <Icon name="Users" size={16}/> Assigned: <span style={{ color: '#fff' }}>{selectedTask.assignee}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                  <Icon name="Calendar" size={16}/> Due: <span style={{ color: '#fff' }}>{selectedTask.due}</span>
                </div>
              </div>
            </div>
            <div className="task-detail-body">
              <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '16px' }}>Action Steps</h3>
              
              <div className="step-item done">
                <div className="step-checkbox"><Icon name="Check" size={12}/></div>
                <span>Review budget limits with treasurer</span>
              </div>
              <div className="step-item">
                <div className="step-checkbox"></div>
                <span>Draft formal request document</span>
              </div>
              <div className="step-item">
                <div className="step-checkbox"></div>
                <span>Send to university admin portal</span>
              </div>

              <h3 style={{ fontSize: '15px', fontWeight: '600', marginTop: '32px', marginBottom: '12px' }}>AI Context</h3>
              <div style={{ background: 'rgba(94, 106, 210, 0.1)', border: '1px solid rgba(94, 106, 210, 0.2)', padding: '16px', borderRadius: '12px', fontSize: '14px', lineHeight: '1.5', color: 'rgba(255,255,255,0.8)' }}>
                Extracted from <strong>#general</strong> chat thread. The team agreed on a $500 allocation for food and $300 for prizes to improve upon last year's event.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TasksView;
