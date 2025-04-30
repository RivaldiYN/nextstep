// MentorModal.tsx
import React from 'react';
import Image from 'next/image';

interface ModalProps {
      isOpen: boolean;
      onClose: () => void;
      mentor: 'fauzan' | 'dalimi' | 'syifa';
}

const mentorData = {
      fauzan: {
            name: 'Fauzan Al-Rasyid',
            title: 'Career & College Life Coach',
            img: '/fauzan.png',
            focus: [
                  {
                        title: 'Career Clarity & Exploration',
                        points: [
                              'Helps to discover strengths, interests, and values.',
                              'Offers tools like personality assessments (MBTI, Holland Codes, etc.).',
                              'Provides career mapping strategies for long-term planning.',
                        ],
                  },
                  {
                        title: 'Major & Degree Planning',
                        points: [
                              'Guidance on choosing the right major based on career goals.',
                              'Support in switching majors or planning double majors/minors.',
                              'Understanding industry trends and aligning education with demand.',
                        ],
                  },
                  {
                        title: 'Graduate School & Scholarships',
                        points: [
                              'Step-by-step guidance on graduate school applications.',
                              'Personal statement writing and scholarship essays.',
                              'Planning gap years and gaining relevant experience.',
                        ],
                  },
            ],
      },
      dalimi: {
            name: 'Dalimi Nurdin',
            title: 'Education Consultant',
            img: '/dalimi.png',
            focus: [
                  {
                        title: 'College Life Success',
                        points: [
                              'Time management, productivity hacks, and study methods.',
                              'Balancing academics, social life, and personal growth.',
                              'Mental health support during stressful semesters.',
                        ],
                  },
                  {
                        title: 'Internships & First Job Prep',
                        points: [
                              'Resume reviews, cover letter writing, and LinkedIn profile building.',
                              'Mock interviews and application strategy coaching.',
                              'Tips on networking and finding hidden job opportunities.',
                        ],
                  },
            ],
      },
      syifa: {
            name: 'Syifa Aulia Putri',
            title: 'Passion Discovery & Purpose Coach',
            img: '/syifa.png',
            focus: [
                  {
                        title: 'Passion Discovery Journey',
                        points: [
                              'Helps mentees explore their “why” through self-reflection exercises.',
                              'Tools like passion tests, journaling, and guided visualizations.',
                              'Encourages curiosity and experimentation to find what excites them.',
                        ],
                  },
                  {
                        title: 'Purpose-Driven Life Planning',
                        points: [
                              'Aligns personal values with life and career choices.',
                              'Helps build vision boards and future blueprints.',
                              'Teaches goal-setting rooted in meaning and fulfillment.',
                        ],
                  },
                  {
                        title: 'Turning Passion into Action',
                        points: [
                              'Guides on starting passion projects or small ventures.',
                              'Supports planning or starting project initiatives.',
                              'Encourages leadership through authenticity.',
                        ],
                  },
                  {
                        title: 'Overcoming Fear & Limiting Beliefs',
                        points: [
                              'Provides coaching on mindset blocks like “I’m not good enough.”',
                              'Helps shift from comparison to confidence.',
                              'Empowers mentees to take bold, small steps.',
                        ],
                  },
            ],
      },
};

const MentorModal: React.FC<ModalProps> = ({ isOpen, onClose, mentor }) => {
      if (!isOpen) return null;

      const data = mentorData[mentor];

      return (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                  <div className="border-4 border-[#71a894] bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 relative">
                        <button
                              onClick={onClose}
                              className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                              ✕
                        </button>

                        <Image
                              src={data.img}
                              alt={data.name}
                              width={120}
                              height={120}
                              className="rounded-full mx-auto mb-4"
                        />

                        <h2 className="text-2xl font-bold text-center text-gray-800">{data.name}</h2>
                        <p className="text-sm text-center text-gray-500 mb-6">{data.title}</p>

                        {data.focus.map((item, index) => (
                              <div key={index} className="mb-5">
                                    <h3 className="font-semibold text-lg text-blue-600">{item.title}</h3>
                                    <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1">
                                          {item.points.map((point, idx) => (
                                                <li key={idx}>{point}</li>
                                          ))}
                                    </ul>
                              </div>
                        ))}
                  </div>

            </div>
      );
};

export default MentorModal;
