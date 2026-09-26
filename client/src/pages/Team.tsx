import React, { useEffect, useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { TeamCard } from '../components/cards/TeamCard';
import { CertificationGallery } from '../components/gallery/CertificationGallery';
import { api } from '../services/api';
import { TeamMemberItem } from '../types';
import { LoadingSpinner } from '../components/common/LoadingSpinner';

export const Team: React.FC = () => {
  const [team, setTeam] = useState<TeamMemberItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .getTeamMembers()
      .then((data) => setTeam(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <SectionHeading
        badge="Leadership & Team"
        title="Meet Our Experienced Team"
        subtitle="Process-driven software architects, digital advertising managers, and academic mentors guiding candidates toward engineering excellence."
      />

      {loading ? (
        <LoadingSpinner message="Loading team directory..." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <TeamCard key={member._id} member={member} />
          ))}
        </div>
      )}

      {/* Student Certification Distribution Gallery at Bottom of Team Page */}
      <CertificationGallery />
    </div>
  );
};
