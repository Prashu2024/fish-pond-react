// README.md
# Fish Pond React + Pixi.js TypeScript Project

A beautiful, interactive fish pond simulation built with React, Pixi.js, and TypeScript. This project demonstrates the integration of Pixi.js rendering capabilities with React's component architecture.

## Features

- 🐠 **Interactive Fish**: Click on fish to see their information
- 🎨 **Multiple Themes**: Switch between different pond themes
- 🔧 **Dynamic Fish Management**: Add new fish or clear the pond
- 📱 **Responsive Design**: Adapts to all screen sizes
- ⚡ **Smooth Animation**: 60fps fish movement with realistic physics
- 🎯 **TypeScript**: Full type safety throughout the application
- 🏗️ **Component Architecture**: Well-structured, reusable components


## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd fish-pond-react-pixi
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/          # React components
│   ├── Background.tsx   # Pond background component
│   ├── Fish.tsx        # Individual fish component
│   ├── FishPond.tsx    # Main pond container
│   ├── Controls.tsx    # UI controls
│   └── FishInfoModal.tsx # Fish information modal
├── hooks/              # Custom React hooks
│   ├── useWindowDimensions.ts
│   └── useTextureLoader.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   └── fishUtils.ts
│   └── animationUtils.ts
│   └── performanceUtils.ts
│   └── constants.ts
│   └── storageUtils.ts
└── App.tsx            # Main application component
```

## Key Features Implementation

### Component Structure
- **FishPond**: Main container managing state and rendering
- **Fish**: Individual fish with animation and interaction
- **Background**: Responsive pond background
- **Controls**: UI for fish management and theme switching
- **FishInfoModal**: Information display for selected fish

### Props Management
- All dynamic values passed via props from parent to child
- No global state access in child components
- Clean prop interfaces with TypeScript

### Responsiveness
- `useWindowDimensions` hook for screen size management
- Dynamic fish boundaries based on screen size
- Responsive UI controls

### Performance Optimization
- `React.memo` for component memoization
- `useCallback` for stable function references
- Efficient animation loops with cleanup
- Texture loading optimization

### Animation Handling
- RequestAnimationFrame for smooth movement
- Physics-based fish movement with wall bouncing
- Vertical oscillation for realistic swimming

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
