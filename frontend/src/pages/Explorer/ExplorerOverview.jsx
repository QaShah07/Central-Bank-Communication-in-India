// src/pages/Explorer/ExplorerOverview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// import ExplorerLinkCard from '../../components/ExplorerLinkCard';

const explorerPages = [
  {
    path: 'sentiment-overtime',
    title: 'Sentiment Over Time',
    imgSrc: '/assets/images/sentiment-overtime.png',
  },
  {
    path: 'decent-overtime',
    title: 'Decent Over Time',
    imgSrc: '/assets/images/decent-overtime.png',
  },
  {
    path: 'topic-trends',
    title: 'Topic Trends',
    imgSrc: '/assets/images/topic-trends.png',
  },
  {
    path: 'chatbot',
    title: 'Chatbot',
    imgSrc: '/assets/images/chatbot.png',
  },
];

export default function ExplorerOverview() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6">Explorer Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {explorerPages.map((page) => (
          <Link key={page.path} to={`/explorer/${page.path}`}>
            <ExplorerLinkCard title={page.title} imgSrc={page.imgSrc} />
          </Link>
        ))}
      </div>
    </div>
  );
}
