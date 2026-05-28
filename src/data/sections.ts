import type { Section } from '../types'
import { picture } from '../images'

// All your portfolio content lives here. Edit the text freely —
// the components read from this array, so the page updates automatically.
// `picture('me.jpg')` looks up an image in src/pictures/. Polaroids without
// an image fall back to a vintage textured fill (no emoji anywhere).
export const sections: Section[] = [
  {
    id: 'about',
    caption: 'about me',
    image: picture('me.jpg'),
    photoColor: '#f6d9c4',
    rotation: -4,
    modalTitle: 'About Me',
    body: [
      "Hi, I'm Isabella! I grew up in Oulu and currently live in Espoo, where I'm studying Computer Science at Aalto University.",
      "I've always been the kind of person who wants to know how things work, taking things apart, asking too many questions, and getting lost in a good problem. That's what drew me to computer science. It's a field where curiosity actually pays off, and where you get to build things that didn't exist yesterday.",
      'Fun facts about me:',
      '- I grew up bilingual, with Finnish and Mandarin as my two mother tongues. Living between two languages and cultures has always felt natural to me. English came along later and now sits comfortably beside them as my third language.',
      '- My comfort food is Hotpot and snails.',
      '- My record for planking is 8 minutes.',
    ],
  },
  {
    id: 'education',
    caption: 'education',
    image: picture('education.jpg'),
    photoColor: '#cfe0d8',
    rotation: 3,
    modalTitle: 'Education',
    timeline: [
      {
        title: 'Aalto University',
        years: '2025–2030',
        description: 'BSc & MSc in Computer Science.',
      },
      {
        title: 'Oulun Lyseon lukio',
        years: '2022–2025',
        description: 'High School diploma.',
      },
    ],
  },
  {
    id: 'experience',
    caption: 'experience',
    image: picture('experience.jpg'),
    photoColor: '#e6d4b8',
    rotation: -2,
    modalTitle: 'Experience',
    timeline: [
      {
        title: 'Oulun Luistelukerho',
        description: 'Figure Skating Coach · Oulu, Finland · Sep 2024 — Apr 2025',
      },
      {
        title: 'Cafe Rantsu',
        description: 'Cafe Worker · Oulu · Jul 2021',
      },
    ],
  },
  {
    id: 'skills',
    caption: 'skills',
    image: picture('skills.jpg'),
    photoColor: '#d8d3e6',
    rotation: 4,
    modalTitle: 'Skills',
    bulleted: true,
    body: [
      'Programming: Python, Scala, React, TypeScript',
      'Web: HTML, CSS',
      'Tools: Git, VS Code, GitHub, Terminal, IntelliJ',
      'Soft Skills: Teamwork, Problem-solving, Public speaking',
      'Languages: Finnish, English, Chinese',
    ],
  },
  {
    id: 'projects',
    caption: 'projects',
    image: picture('projects.jpg'),
    photoColor: '#f3e2a9',
    rotation: -3,
    modalTitle: 'Projects',
    link: { label: 'github.com/isabellayuu', url: 'https://github.com/isabellayuu' },
    timeline: [
      {
        title: 'Calendar Application',
        years: 'Scala · University project',
        description:
          'Built a calendar application with a graphical user interface. Features include creating and categorizing events, day and week views, recurring reminders, color-coded event types, and filtering by category. Events are saved to and loaded from files, with support for a standard format for importing and exporting to other calendar applications.',
      },
      {
        title: 'Weather App',
        years: 'Scala · University project',
        description:
          'Built a weather app on a provided Scala framework and API. It visualizes current weather conditions with dynamic backgrounds, icons, and themes, and recommends what to bring (e.g. an umbrella for rainy weather).',
      },
      {
        title: 'Telegram Language Quiz Bot',
        years: 'Scala · University project',
        description:
          'Built the logic for a Telegram quiz bot using a provided Scala framework. Users can define vocabulary pairs in different languages and get quizzed with feedback.',
      },
      {
        title: 'Laser Heart Demo',
        years: 'Scala · University project',
        description:
          'Developed an animated graphics effect that renders a heart shape by sampling radial line segments each frame, with the accumulated lines gradually forming the heart.',
      },
    ],
  },
  {
    id: 'achievements',
    caption: 'achievements',
    image: picture('achievements.jpg'),
    photoColor: '#f1c9c9',
    rotation: 2,
    modalTitle: 'Achievements',
    body: [
      'EF Language Award',
      'Represented my team at the Finnish National Synchronized Skating Championships.'
    ],
  },
  {
    id: 'volunteer',
    caption: 'volunteer work',
    image: picture('volunteerwork.jpg'),
    photoColor: '#cfdfe6',
    rotation: -3,
    modalTitle: 'Volunteer Work',
    body: [
      'Between May 2022 and May 2023, I volunteered as a fundraiser at Oulun Luistelukerho (Oulu Skating Club), my former skating club. It was a great way to give back to a community that had been a big part of my life.',
    ],
  },
  {
    id: 'hobbies',
    caption: 'hobbies',
    image: picture('hobbies.jpg'),
    photoColor: '#e6cfd8',
    rotation: 3,
    modalTitle: 'Hobbies',
    bulleted: true,
    body: [
      'Former synchronized skater, competed at the Finnish national (SM) level',
      'I played the violin for several years',
      'Going to the gym',
      'Traveling',
      'Doing personal programming projects',
    ],
    // file lives in public/, so it's served from the site root
    video: '/skating.mp4',
  },
  {
    id: 'travel',
    caption: 'travel',
    image: picture('travel.jpg'),
    photoColor: '#d8e6cf',
    rotation: -2,
    modalTitle: 'Travel',
    // `gallery` makes the modal open a board of country polaroids instead of
    // text. Countries with a matching photo in src/pictures/ use it; the rest
    // (Italy, Germany, Greece) get a vintage fill. Order matters: the pink
    // Coldplay ticket is inserted between Finland and Sweden.
    gallery: [
      { name: 'China', image: picture('china.jpg'), photoColor: '#e6cdbe', rotation: -5 },
      { name: 'France', image: picture('france.jpg'), photoColor: '#d8d3e6', rotation: 4 },
      { name: 'England', image: picture('england.jpg'), photoColor: '#cfe0d8', rotation: -3 },
      { name: 'Finland', image: picture('finland.jpg'), photoColor: '#cfdfe6', rotation: 3 },
      { name: 'Sweden', image: picture('sweden.jpg'), photoColor: '#e6dccf', rotation: -4 },
      { name: 'Norway', image: picture('norway.jpg'), photoColor: '#d8e6cf', rotation: 5 },
      { name: 'Italy', image: picture('italy.jpg'), photoColor: '#f1c9c9', rotation: -2 },
      { name: 'Netherlands', image: picture('netherlands.jpg'), photoColor: '#f3e2a9', rotation: 4 },
      { name: 'Germany', image: picture('germany.jpg'), photoColor: '#e6d4b8', rotation: -5 },
      { name: 'Poland', image: picture('poland.jpg'), photoColor: '#f6d9c4', rotation: 3 },
      { name: 'Spain', image: picture('spain.jpg'), photoColor: '#f3e2a9', rotation: -3 },
      { name: 'Greece', image: picture('greece.jpg'), photoColor: '#cfdfe6', rotation: 4 },
      { name: 'Croatia', image: picture('croatia.jpg'), photoColor: '#d8e6cf', rotation: -4 },
      { name: 'Estonia', image: picture('estonia.jpg'), photoColor: '#e6cfd8', rotation: 3 },
      { name: 'Hongkong', image: picture('hongkong.jpg'), photoColor: '#e6cdbe', rotation: -5 },
    ],
  },
  {
    id: 'contact',
    caption: 'contact',
    image: picture('contact.jpg'),
    photoColor: '#e6dccf',
    rotation: 4,
    modalTitle: 'Contact',
    fields: [
      {
        label: 'Email',
        value: 'isabella.2.yu@gmail.com',
        href: 'mailto:isabella.2.yu@gmail.com',
      },
      { label: 'Phone', value: '+358 40 147 3300' },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/isabella-yu-b7b234390',
        href: 'https://www.linkedin.com/in/isabella-yu-b7b234390/',
      },
    ],
  },
]
