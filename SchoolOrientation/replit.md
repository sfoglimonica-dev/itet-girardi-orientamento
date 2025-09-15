# Overview

This is a modern full-stack web application for ITET Giacinto Girardi, a technical high school in Cittadella, Italy. The application serves as the school's main website, featuring detailed information about their 5 study programs (SIA, AFM, RIM, CAT, and Turismo), student testimonials, contact forms, and orientation request systems. Built with React frontend and Express backend, it provides a comprehensive digital presence for prospective students and their families to learn about the school's offerings.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack React Query for server state management and API data fetching
- **Form Handling**: React Hook Form with Zod for validation and type safety
- **Styling**: Tailwind CSS with custom CSS variables for theming, supporting both light and dark modes

## Backend Architecture
- **Framework**: Express.js server with TypeScript
- **API Design**: RESTful endpoints for contact forms, orientation requests, and testimonials
- **Development Setup**: Hot module replacement via Vite middleware in development mode
- **Error Handling**: Centralized error middleware with status code management
- **Logging**: Custom request/response logging middleware for API endpoints

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle migrations with shared schema definitions
- **Connection**: Neon Database serverless PostgreSQL for production
- **Fallback Storage**: In-memory storage class for development/testing with pre-seeded testimonial data

## Development and Build System
- **Bundling**: Vite for frontend development and building, esbuild for server-side bundling
- **Type Safety**: Shared TypeScript schemas between frontend and backend using Drizzle-Zod
- **Path Aliases**: Configured absolute imports for cleaner code organization
- **Hot Reloading**: Full-stack development with Vite HMR and server restart capabilities

## UI/UX Design Patterns
- **Design System**: Comprehensive component library with consistent styling and accessibility
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Animation**: CSS-based animations and transitions for enhanced user experience
- **Accessibility**: ARIA-compliant components using Radix UI primitives

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack React Query
- **Backend Framework**: Express.js with TypeScript support via tsx
- **Build Tools**: Vite, esbuild for production builds
- **Database**: Drizzle ORM, Neon Database serverless PostgreSQL driver

## UI and Styling
- **Component Library**: Radix UI primitives for accessible base components
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React for consistent iconography
- **Utilities**: Class-variance-authority for component variants, clsx for conditional classes

## Form and Validation
- **Form Management**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for runtime type validation and schema definitions
- **Date Handling**: date-fns for date manipulation and formatting

## Development Tools
- **Replit Integration**: Vite plugins for Replit development environment
- **Error Overlay**: Runtime error modal for better development experience
- **Session Management**: Connect-pg-simple for PostgreSQL session storage (configured but not actively used)

## Third-party Services
- **Database Hosting**: Neon Database for serverless PostgreSQL
- **Font Loading**: Google Fonts for typography (Inter, DM Sans, Fira Code, Architects Daughter)
- **Image Hosting**: Unsplash for placeholder and demo images
- **Development Environment**: Replit-specific tooling and banner integration