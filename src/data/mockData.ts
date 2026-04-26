import { BlogPost, Resource } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'deep-work-systems',
    title: 'Deep Work Systems for the Modern Creator',
    description: 'How to build a focused environment that eliminates distractions and maximizes output.',
    category: 'Productivity',
    date: 'Oct 24, 2023',
    readingTime: '6 min read',
    coverImage: 'https://picsum.photos/seed/setup1/800/600',
    content: `
# The Art of Deep Work

In an age of constant notification, the ability to focus is a superpower. Deep work isn't just about working hard; it's about working without distraction.

## 1. Environment Design
Your space dictates your pace. A clean desk with only the essentials allows your mind to settle into a single task.

## 2. Time Blocking
Schedule your sessions. Don't just "work"—decide exactly what the next 90 minutes will produce.

## 3. Digital Hygiene
Turn off notifications. Use focus modes. If it's not essential to the task at hand, it's a distraction.
    `
  },
  {
    id: 'morning-routine-discipline',
    title: 'The Disciplined Morning: 5 AM to Clarity',
    description: 'A breakdown of a morning routine designed for peak mental performance and long-term growth.',
    category: 'Routines',
    date: 'Oct 12, 2023',
    readingTime: '5 min read',
    coverImage: 'https://picsum.photos/seed/routine/800/600',
    content: `
# Winning the Morning

Discipline begins the moment you wake up. A consistent morning routine isn't about being productive immediately; it's about priming your brain for the day ahead.

## 05:00 - Hydrate & Movement
Start with water and light stretching. Wake the body up before the mind.

## 05:30 - Deep Work Session 1
The most important work happens when the world is quiet. Use this time for your most demanding creative task.

## 07:00 - Reflection & Planning
Review your goals. Adjust your trajectory. 
    `
  },
  {
    id: 'aesthetic-setup-guide',
    title: 'Designing the Ultimate Focus Station',
    description: 'Minimalist desk setup inspiration that balances aesthetics with functional discipline.',
    category: 'Aesthetic Setups',
    date: 'Sep 28, 2023',
    readingTime: '8 min read',
    coverImage: 'https://picsum.photos/seed/setup2/800/600',
    content: `
# Aesthetics Meet Function

Your setup isn't just about how it looks; it's about how it makes you feel. A "disciplined" setup removes friction.

## Color Palette
Stick to neutrals. Navy, grey, and off-white reduce visual noise.

## Lighting
Warm indirect light for focus. Natural light for energy.

## Essential Tools
High-quality keyboard. Clean monitor. Physical notebook for quick thoughts.
    `
  },
  {
    id: 'mental-models-for-discipline',
    title: 'Mental Models: The Architecture of Discipline',
    description: 'How to reprogram your decision-making patterns to favor long-term growth over short-term comfort.',
    category: 'Self-Improvement',
    date: 'Sep 15, 2023',
    readingTime: '10 min read',
    coverImage: 'https://picsum.photos/seed/growth/800/600',
    content: `
# Systems Over Motivation

Motivation is a feeling. Discipline is a system. Relying on motivation is the fastest way to fail.

## Rule of 3
Identify three non-negotiables for the day. Everything else is a bonus.

## Choice Architecture
Remove the choice to fail. If you want to study, put your phone in another room.
    `
  }
];

export const RESOURCES: Resource[] = [
  {
    id: 'focused-planner-template',
    title: 'The Disciplined Day Planner',
    type: 'Template',
    link: '#',
    description: 'A Notion template designed for time-blocking and goal tracking.',
    image: 'https://picsum.photos/seed/notion/400/500',
    price: '$0.00'
  },
  {
    id: 'minimal-study-lamp',
    title: 'Curated Focus Lamp',
    type: 'Setup',
    link: '#',
    description: 'The exact warm-light lamp featured in our "Deep Work" setups.',
    image: 'https://picsum.photos/seed/lamp/400/500'
  },
  {
    id: 'forest-focus-app',
    title: 'Forest App',
    type: 'Tool',
    link: 'https://www.forestapp.cc/',
    description: 'Stay focused by planting virtual trees as you work.',
    image: 'https://picsum.photos/seed/forest/400/500'
  }
];
