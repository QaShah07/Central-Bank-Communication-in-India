// src/pages/MPC/MPCOverview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import MPCLinkCard from '../../components/MPCLinkCard';

const mpcPages = [
  {
    path: 'evaluation',
    title: 'MPC Evaluation',
    imgSrc: '/assets/images/mpc-evaluation.png',
  },
  {
    path: 'decision',
    title: 'MPC Decision',
    imgSrc: '/assets/images/mpc-decision.png',
  },
  {
    path: 'meeting-analysis',
    title: 'MPC Meeting Analysis',
    imgSrc: '/assets/images/mpc-meeting.png',
  },
  {
    path: 'member',
    title: 'MPC Member',
    imgSrc: '/assets/images/mpc-member.png',
  },
  {
    path: 'correlation-graph',
    title: 'MPC Correlation',
    imgSrc: '/assets/images/mpc-correlation.png',
  },
  {
    path: 'voting-pattern',
    title: 'MPC Voting Pattern',
    imgSrc: '/assets/images/mpc-voting.png',
  },
];

export default function MPCOverview() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6">MPC Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mpcPages.map((page) => (
          <Link key={page.path} to={`/mpc/${page.path}`}>
            <MPCLinkCard title={page.title} imgSrc={page.imgSrc} />
          </Link>
        ))}
      </div>
    </div>
  );
}
