import React, { useEffect, useState } from 'react';
import TeamCard from '../components/TeamCard';
import api from '../services/api';
import { TeamMember } from '../data/teamData';
import { Users } from 'lucide-react';

export default function TeamPage() {
  const [researchTeam, setResearchTeam] = useState<TeamMember[]>([]);
  const [collaborators, setCollaborators] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.get('/team/')
      .then((response) => {
        const allMembers = response.data;
        setResearchTeam(allMembers.filter((m: TeamMember) => m.category === 'research'));
        setCollaborators(allMembers.filter((m: TeamMember) => m.category === 'collaborator'));
        setError(null);
      })
      .catch((err) => {
        console.error('Error fetching team members:', err);
        setError('Failed to load team members. Please try again later.');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex items-center space-x-3">
          <Users className="w-8 h-8 text-blue-500" />
          <span className="text-xl text-gray-600">Loading team members...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600 flex items-center space-x-3">
          <span>⚠️</span>
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900 text-center mb-16">Our Team</h1>

        {/* Research Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Research Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {researchTeam.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                photo={member.photo}
                affiliation={member.affiliation}
              />
            ))}
          </div>
        </section>

        {/* Collaborators */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Collaborators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {collaborators.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                photo={member.photo}
                affiliation={member.affiliation}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}