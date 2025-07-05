# SAIR REIT - Digital Real Estate Investment Platform

## Overview
SAIR REIT is a modern, futuristic digital real estate investment trust platform built with React.js, TypeScript, and Express.js. The application provides a comprehensive solution for halal real estate investments with features including project management, investment tracking, user dashboard, and transparent profit sharing.

## Features
- **Futuristic Gaming UI**: Dark theme with neon accents and glassmorphism effects
- **Investment Dashboard**: Real-time portfolio tracking with interactive charts
- **Project Management**: Real estate project listings with search and filtering
- **PostgreSQL Database**: Persistent data storage with Drizzle ORM
- **Investor Education**: Comprehensive REIT education content
- **Responsive Design**: Mobile-first approach with smooth animations

## Tech Stack
- **Frontend**: React.js, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js, PostgreSQL
- **Database**: Drizzle ORM with PostgreSQL
- **UI Components**: Radix UI, shadcn/ui
- **Charts**: Recharts for interactive data visualization

## Installation

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn

### Setup Steps

1. **Install Dependencies**
```bash
npm install
```

2. **Environment Setup**
Create a `.env` file in the root directory:
```env
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=development
```

3. **Database Setup**
```bash
# Generate database schema
npx drizzle-kit generate --dialect=postgresql --schema=./shared/schema.ts --out=./drizzle

# Seed database with sample data
npm run seed
```

4. **Development**
```bash
npm run dev
```

5. **Production Build**
```bash
npm run build
npm start
```

## Project Structure
```
sair-reit/
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── lib/          # Utilities and configurations
│   │   └── hooks/        # Custom React hooks
│   └── index.html
├── server/               # Express backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Storage interface
│   ├── db-storage.ts     # PostgreSQL implementation
│   └── seed.ts           # Database seeding
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schema definitions
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── drizzle.config.ts
```

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run seed` - Seed database with sample data
- `npm run db:generate` - Generate database migrations
- `npm run db:push` - Push schema changes to database

## Customization

### Colors and Theme
Edit `client/src/index.css` to modify the color scheme:
```css
:root {
  --primary-cyan: #06b6d4;
  --primary-violet: #8b5cf6;
  --accent-mint: #10b981;
}
```

### Adding New Pages
1. Create component in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Update navigation in `client/src/components/layout/navbar.tsx`

### Database Changes
1. Update schema in `shared/schema.ts`
2. Generate migrations: `npm run db:generate`
3. Push changes: `npm run db:push`

## API Endpoints
- `GET /api/projects` - Get all real estate projects
- `POST /api/projects` - Create new project
- `GET /api/testimonials` - Get user testimonials
- `POST /api/testimonials` - Create new testimonial
- `GET /api/dashboard/stats` - Get dashboard statistics

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License
This project is licensed under the MIT License.

## Support
For support and questions, please create an issue in the repository.