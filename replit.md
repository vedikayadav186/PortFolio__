# Portfolio Website - Vedika Yadav

## Overview

This is a modern, responsive portfolio website built for Vedika Yadav, a tech student and developer. The application is a full-stack web application featuring a React frontend with a Node.js/Express backend, designed to showcase professional experience, projects, skills, and achievements.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and interactions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Design System
- **Color Scheme**: Dark theme with navy, charcoal, and electric blue accent colors
- **Typography**: Inter font family for clean, modern readability
- **Component Style**: New York variant of shadcn/ui components
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scroll navigation
- **Hero Section**: Animated landing area with gradient backgrounds
- **About Section**: Professional overview with placeholder for headshot
- **Experience Section**: Work history and education timeline
- **Projects Section**: Featured project showcases with technology badges
- **Skills Section**: Categorized technical skills and certifications
- **Achievements Section**: Awards and competition wins with icons
- **Contact Section**: Contact information and resume download functionality

### Backend Services
- **Resume Service**: File download endpoint for PDF resume
- **Contact API**: Form submission handling (prepared for future implementation)
- **User Management**: Basic user schema with authentication preparation

### Database Schema
- **Users Table**: Basic user management with username and password fields
- **Storage Layer**: In-memory storage with interface for future database integration

## Data Flow

1. **Client Requests**: Frontend makes API calls through TanStack Query
2. **Server Processing**: Express routes handle business logic and data operations
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Type-safe data transfer between client and server
5. **UI Updates**: React components update based on server responses

## External Dependencies

### Core Technologies
- **React Ecosystem**: React, React DOM, React Hook Form
- **Database**: Drizzle ORM, Neon Database, PostgreSQL
- **Styling**: Tailwind CSS, Radix UI, CVA (Class Variance Authority)
- **Build Tools**: Vite, ESBuild, PostCSS
- **Development**: TypeScript, TSX for development server

### UI Libraries
- **Component Library**: Complete Radix UI primitive set
- **Animation**: Framer Motion for enhanced user experience
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React for consistent iconography

### Development Tools
- **Hot Reload**: Vite HMR with runtime error overlay
- **Type Safety**: TypeScript configuration for full-stack type checking
- **Path Aliases**: Configured for clean import statements
- **Development Banner**: Replit integration for development environment

## Deployment Strategy

### Build Process
- **Frontend Build**: Vite builds optimized React application to `dist/public`
- **Backend Build**: ESBuild bundles Express server to `dist/index.js`
- **Asset Handling**: Static assets served through Express in production

### Environment Configuration
- **Development**: TSX server with hot reload and Vite middleware
- **Production**: Compiled Node.js server serving static files
- **Database**: Environment variable configuration for database URL

### Server Setup
- **Static Serving**: Express serves built React application
- **API Routes**: RESTful endpoints under `/api` prefix
- **Error Handling**: Centralized error middleware
- **Logging**: Request/response logging for API endpoints

### Database Management
- **Schema Definition**: Centralized schema in `shared/schema.ts`
- **Migrations**: Drizzle Kit for database schema management
- **Development Storage**: In-memory fallback with interface for database scaling

## Changelog
```
Changelog:
- July 03, 2025. Initial setup
```

## User Preferences

Preferred communication style: Simple, everyday language.