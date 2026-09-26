import React from 'react';
import { Linkedin, Mail, UserCheck, Briefcase } from 'lucide-react';
import { TeamMemberItem } from '../../types';

export const TeamCard: React.FC<{ member: TeamMemberItem }> = ({ member }) => {
  return (
    <div className="bg-white dark:bg-navy-surface border border-gray-100 dark:border-navy-card rounded-2xl p-6 shadow-sm hover:shadow-xl dark:hover:shadow-navy-accent/10 transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex items-center space-x-4 mb-4">
          {member.photoUrl ? (
            <img
              src={member.photoUrl}
              alt={member.fullName}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-brand-red/30 shadow-md shrink-0 group-hover:scale-105 transition-transform"
            />
          ) : (
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-red to-purple-800 text-white flex items-center justify-center font-extrabold text-xl shadow-md shrink-0">
              {member.fullName.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-brand-red transition-colors">
              {member.fullName}
            </h3>
            <p className="text-xs font-bold text-brand-red dark:text-red-400">
              {member.designation}
            </p>
            <span className="text-[11px] text-gray-500 dark:text-navy-muted block mt-0.5 font-medium">
              {member.department}
            </span>
          </div>
        </div>

        {member.bio && (
          <p className="text-xs text-gray-600 dark:text-navy-muted leading-relaxed line-clamp-3 mb-3">
            {member.bio}
          </p>
        )}

        {member.experience && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-300 font-bold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{member.experience}</span>
          </div>
        )}

        {member.skills && member.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {member.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[10px] bg-gray-100 dark:bg-navy-card text-gray-600 dark:text-navy-muted border border-gray-200 dark:border-navy-border font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-navy-card flex items-center justify-between text-xs">
        <div className="flex space-x-3">
          {member.linkedinUrl && (
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="text-gray-400 hover:text-brand-red transition-colors"
              title="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>
        <span className="inline-flex items-center gap-1 text-[11px] text-green-600 dark:text-green-400 font-bold">
          <UserCheck className="w-3.5 h-3.5" /> Verified Instructor
        </span>
      </div>
    </div>
  );
};
