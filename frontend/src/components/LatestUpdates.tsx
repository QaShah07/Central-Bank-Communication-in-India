import React, { useState } from 'react';

// 1. Define the type for a single update item
type UpdateItem = {
  title: string;
  description: string;
  image: string;
};

// 2. Define the keys and the main updates object type
type TabKey = 'Publications' | 'Blogs' | 'Podcasts';
type AllUpdates = Record<TabKey, UpdateItem[]>;

const allUpdates: AllUpdates = {
  Publications: [
    {
      title: 'The Impact of Central Bank Communication on Market Volatility in India',
      description: "A study analyzing the effects of Reserve Bank of India's communication on market volatility.",
      image: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg',
    },
    {
      title: 'Monetary Policy Transmission in Emerging Markets',
      description: 'An analysis of the effectiveness of monetary policy transmission in emerging market economies.',
      image: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg',
    },
  ],
  Blogs: [
    {
      title: "Decoding the Reserve Bank of India's Monetary Policy Statements",
      description: 'An insightful blog post breaking down the key takeaways from recent monetary policy statements.',
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg',
    },
    {
      title: 'Digital Currency and the Future of Banking',
      description: 'Exploring the implications of CBDCs for the Indian banking sector.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg',
    },
  ],
  Podcasts: [
    {
      title: 'Expert Discussion on the Future of Central Banking in India',
      description: 'A podcast featuring leading economists discussing the future direction of central banking in India.',
      image: 'https://images.pexels.com/photos/1251845/pexels-photo-1251845.jpeg',
    },
    {
      title: 'Understanding Monetary Policy Communication',
      description: 'A deep dive into how central banks communicate their policy decisions.',
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
    },
  ],
};

const LatestUpdates: React.FC = () => {
  // 3. Type the state
  const [activeTab, setActiveTab] = useState<TabKey>('Publications');

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8">Latest Updates</h2>
        <div className="flex gap-8 mb-8 border-b">
          {(Object.keys(allUpdates) as TabKey[]).map((tab) => (
            <button
              key={tab}
              className={`pb-2 font-semibold ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="space-y-8">
          {allUpdates[activeTab].map((update, index) => (
            <div
              key={index}
              className="flex items-start gap-6 cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors"
            >
              <div className="flex-1">
                <span className="text-sm text-gray-600">{activeTab.slice(0, -1)}</span>
                <h3 className="text-xl font-semibold mb-2">{update.title}</h3>
                <p className="text-gray-600">{update.description}</p>
              </div>
              <div className="w-48 h-32 flex-shrink-0">
                <img
                  src={update.image}
                  alt={update.title}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestUpdates;