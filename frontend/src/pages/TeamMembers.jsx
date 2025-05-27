// src/pages/TeamMembers.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import TeamCard from '../components/TeamCard';

export default function TeamMembers() {
  const [researchTeam, setResearchTeam] = useState([]);
  const [collaborators, setCollaborators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/team/')
      .then((res) => {
        const allMembers = res.data;

        // Split into two groups based on category
        const research = allMembers.filter(
          (m) => m.category === 'research'
        );
        const collabs = allMembers.filter(
          (m) => m.category === 'collaborator'
        );

        setResearchTeam(research);
        setCollaborators(collabs);
      })
      .catch((err) => {
        console.error('Error fetching team members:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading team members...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-6">Team</h1>

      {/* Research Team Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Research Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {researchTeam.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              photo={member.photo}
            />
          ))}
        </div>
      </section>

      {/* Collaborators Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Collaborators</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {collaborators.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              photo={member.photo}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
