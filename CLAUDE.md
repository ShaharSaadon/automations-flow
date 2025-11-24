# Design System

IMPORTANT: Always refer to this design system when creating or modifying components.

## Design Philosophy
- **Material Design**: This project follows Material Design principles
- Focus on clean, modern, and professional aesthetics
- Maintain consistency across all components

## Color Palette
- **Primary Gradient**: from-[#685bff] to-[#acb0ff] (violet to light purple)
- **Hover Gradient**: from-[#5a4ceb] to-[#9ca0f5]
- **Accent Colors**:
  - violet-600, violet-700
  - purple-600
  - violet-100 (borders)
  - violet-50 (backgrounds)
- **Neutral Colors**: neutral-900, neutral-600

## Typography
- **Font Family**: font-display (custom display font)
- **Text Sizes**: text-xs, text-sm, text-base
- **Font Weights**: font-medium, font-bold

## Spacing & Layout
- Use Tailwind's spacing scale consistently
- Container component for consistent page width
- Standard spacing: space-x-3, space-x-8, py-6, px-5

## Components Styling
- **Buttons**: Gradient backgrounds with smooth transitions, shadow-sm to shadow-md on hover
- **Cards**: backdrop-blur-xl, white/90 or white/95 backgrounds
- **Borders**: border-violet-100 for subtle borders
- **Shadows**: Use shadow-sm for subtle depth
- **Transitions**: transition-all duration-300 for smooth animations

## Responsive Design
- Mobile-first approach
- Breakpoint: md:hidden / md:flex for mobile/desktop variations
- Use Framer Motion for smooth animations (AnimatePresence, motion components)

## Material Design Principles
- **Elevation**: Use shadows and backdrop-blur for depth
- **Motion**: Smooth transitions and animations
- **Feedback**: Hover states with color and shadow changes
- **Consistency**: Maintain visual hierarchy and spacing
- remember to missions: to "use" the navigator as the most important space in the site and how to use it write,other mission is to anlyze tight up and improve all the responsive deisgn.