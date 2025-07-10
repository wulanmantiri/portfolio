# Portfolio Codebase Instructions

## Project Overview

This is **Wulan Mantiri's personal portfolio website** - a modern, responsive React TypeScript application showcasing professional experience, projects, and achievements. The site features a clean, minimalist design with dark/light theme support and smooth scrolling navigation.

## Tech Stack & Architecture

### Core Technologies

- **React 17.0.1** with TypeScript 4.1.2
- **Styled Components 5.2.1** for styling
- **React Router DOM 5.2.0** for routing
- **React Scripts 5.0.0** for build tooling

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── About/          # Hero section with profile
│   ├── ContactBox/     # Contact information
│   ├── ExperiencesList/# Work experience display
│   ├── ProjectsList/   # Project showcase
│   ├── Layout/         # Main layout wrapper
│   ├── Navbar/         # Navigation header
│   ├── Sidebar/        # Section navigation
│   ├── Section/        # Page sections
│   └── icons/          # SVG icon components
├── constants/          # Static data (biodata, experiences, projects)
├── containers/         # Page-level components
├── hooks/             # Custom React hooks
├── models/            # TypeScript type definitions
├── store/             # Context providers (Theme, Loading)
├── theme/             # Styled-components themes
├── types/             # Shared TypeScript types
└── utils/             # Utility functions
```

## Code Quality Standards

### TypeScript Configuration

- **Strict mode enabled** - all strict checks active
- **Base URL**: `./src` for clean imports
- **JSX**: React JSX transform
- **Module resolution**: Node.js style

### Code Style & Linting

- **ESLint** with TypeScript support
- **Prettier** for code formatting
- **Husky** with pre-commit hooks
- **Lint-staged** for staged file processing

### Import Patterns

- Use absolute imports from `src/` base
- Example: `import { Component } from 'components'`
- Barrel exports in component directories

## Design System & Theming

### Theme Architecture

- **Styled Components** with theme context
- **Light/Dark theme** support
- **Responsive design** with mobile-first approach
- **Custom fonts**: Clone Machine for headings

### Color Palette

```typescript
// Light Theme
{
  primary: '#FFFFFF',
  secondary: '#1D1D1F',
  evenSection: '#FFFFFF',
  oddSection: '#F7F7F7',
  highlightBlue: '#badbf8',
  blue: '#1984EA'
}

// Dark Theme
{
  primary: '#000000',
  secondary: '#F7F7F7',
  evenSection: '#0f0f0f',
  oddSection: '#0a0a0a',
  highlightBlue: '#21416e',
  blue: '#1984EA'
}
```

### Styled Components Patterns

- **Flex components**: `Row`, `Column`, `SpacedRow`, `SpacedColumn`
- **Interactive elements**: `LeftToRightUnderline`, `Highlight`
- **Responsive units**: `calc()` with viewport units
- **Mobile breakpoint**: 600px

## Component Architecture

### Component Structure

- **Functional components** with TypeScript
- **Props interfaces** for type safety
- **Styled components** for styling
- **Barrel exports** for clean imports

### Layout System

- **Fixed navbar** with backdrop blur
- **Sidebar navigation** (desktop only)
- **Section-based layout** with alternating backgrounds
- **Responsive grid** with flexbox

### State Management

- **React Context** for theme and loading state
- **Custom hooks** for window size and mouse tracking
- **Local state** for component-specific data

## Responsive Design Guidelines

### Breakpoints

- **Mobile**: ≤ 600px
- **Tablet**: 601px - 800px
- **Desktop**: > 800px

### Responsive Patterns

- **Viewport units**: `calc()` for fluid typography
- **Flexbox**: Responsive layouts
- **Conditional rendering**: Mobile/desktop components
- **Touch-friendly**: Mobile navigation

## Content Management

### Static Data Structure

- **Constants files** for all static content
- **TypeScript interfaces** for data models
- **Centralized content** in `src/constants/`

### Content Types

- **Biodata**: Personal information and links
- **Experiences**: Work history and achievements
- **Projects**: Portfolio projects with descriptions
- **Sections**: Page structure and navigation

## Performance & Optimization

### Build Configuration

- **React Scripts** for optimized builds
- **Netlify deployment** with SPA routing
- **Web Vitals** monitoring

### Code Splitting

- **Route-based** code splitting
- **Component-level** lazy loading (if needed)

## Development Workflow

### Setup Commands

```bash
npm install          # Install dependencies
npm start           # Development server
npm run build       # Production build
npm run lint        # ESLint check
npm run prettify    # Prettier format
```

### Git Hooks

- **Pre-commit**: Lint and format staged files
- **Lint-staged**: Process only changed files

### Code Quality Checks

- **TypeScript** strict mode
- **ESLint** with TypeScript rules
- **Prettier** formatting
- **Husky** pre-commit hooks

## Contribution Guidelines

### Code Style

1. **Use TypeScript** for all new code
2. **Follow existing patterns** for components
3. **Use styled-components** for styling
4. **Add proper types** for all props
5. **Follow naming conventions**:
   - Components: PascalCase
   - Files: kebab-case
   - Constants: UPPER_SNAKE_CASE

### Component Development

1. **Create component directory** with `index.tsx`
2. **Add styled components** in the same file
3. **Export from barrel file** (`components/index.ts`)
4. **Add TypeScript interfaces** for props
5. **Use theme context** for styling

### Styling Guidelines

1. **Use theme colors** from context
2. **Responsive design** with viewport units
3. **Mobile-first** approach
4. **Consistent spacing** with theme values
5. **Accessibility** considerations

### Data Management

1. **Add constants** to appropriate files
2. **Update TypeScript interfaces** if needed
3. **Follow existing data structure**
4. **Use proper typing** for all data

### Testing & Quality

1. **Run linting** before commits
2. **Check TypeScript** compilation
3. **Test responsive design** on different screen sizes
4. **Verify theme switching** works correctly

## Deployment

### Netlify Configuration

- **SPA routing** with redirects
- **Build command**: `npm run build`
- **Publish directory**: `build/`

### Environment Setup

- **Node.js** environment
- **npm** package manager
- **Git** version control

## Key Features

### Interactive Elements

- **Smooth scrolling** navigation
- **Mouse tracking** for sidebar
- **Theme switching** with context
- **Responsive navigation** (mobile/desktop)

### Content Sections

- **About**: Hero section with profile
- **Experiences**: Work history timeline
- **Projects**: Portfolio showcase
- **Contact**: Contact information

### Technical Features

- **TypeScript** for type safety
- **Styled Components** for styling
- **React Router** for navigation
- **Context API** for state management
- **Custom hooks** for reusable logic

## Maintenance Notes

### Dependencies

- **React 17** (consider upgrade path)
- **TypeScript 4.1** (consider upgrade)
- **Styled Components 5.2** (stable)

### Performance Considerations

- **Bundle size** optimization
- **Image optimization** for project screenshots
- **Lazy loading** for heavy components
- **Code splitting** for routes

### Security

- **No sensitive data** in client-side code
- **External links** properly handled
- **Content Security Policy** considerations

---

This codebase represents a well-structured, modern React TypeScript portfolio with clean architecture, responsive design, and maintainable code patterns. The project follows industry best practices for component organization, styling, and state management.
