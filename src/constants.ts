import { Cpu, Users, Layers } from 'lucide-react';

export const SMART_FEATURES = [
    {
        id: 1,
        title: 'Adaptive Learning',
        description: 'Personalized study plans that adapt to your pace and learning style.',
        icon: 'Cpu'
    },
    {
        id: 2,
        title: 'Expert Mentorship',
        description: 'Connect with industry experts who will guide you every step of the way.',
        icon: 'Users'
    },
    {
        id: 3,
        title: 'Comprehensive Library',
        description: 'Access a vast library of resources, tutorials, and practice problems.',
        icon: 'Layers'
    }
];

export const SYLLABUS_DATA = [
    {
        class: "Class 10",
        title: "Secondary Board Prep",
        overview: "Focused preparation for board exams with deep conceptual understanding.",
        milestones: [
            {
                term: "Term 1",
                period: "April - September",
                details: ["Real Numbers & Algebra basics", "Chemical Reactions & Acids", "Life Processes & Control"]
            },
            {
                term: "Term 2",
                period: "October - March",
                details: ["Trigonometry & Statistics", "Carbon Compounds", "Electricity & Magnetism"]
            }
        ]
    },
    {
        class: "Class 12",
        title: "Higher Secondary Science",
        overview: "Advanced physics, chemistry, and mathematics for competitive exams.",
        milestones: [
            {
                term: "Semester 1",
                period: "April - August",
                details: ["Calculus & Vectors", "Electrostatics & Current", "Solid State & Solutions"]
            },
            {
                term: "Semester 2",
                period: "September - February",
                details: ["Probability & 3D Geometry", "Optics & Modern Physics", "Organic Chemistry"]
            }
        ]
    }
];
