# Webna - Modern Corporate Website

A modern, responsive corporate website built with React, Tailwind CSS, and internationalization support. The website showcases IT and technology services with a focus on user experience and accessibility.

## Features

- 🌐 Multilingual Support (English & Arabic)
- 📱 Fully Responsive Design
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- 📅 Appointment Booking System
- 📝 Contact Form
- ⚡ Server-side Data Persistence
- 🔄 RTL Support
- ✨ Animated UI Elements

## Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- i18next (internationalization)
- React Query (data fetching)
- shadcn/ui (UI components)
- Wouter (routing)

### Backend
- Express.js
- PostgreSQL with Drizzle ORM
- Zod (validation)

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```env
DATABASE_URL=postgresql://user:password@host:port/database
```

4. Initialize the database:
```bash
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Database Schema

The project uses PostgreSQL with Drizzle ORM for data persistence. Main tables include:

- `contact_submissions`: Stores contact form submissions
- `bookings`: Manages appointment bookings
- `services`: Stores service information
- `team_members`: Stores team member information

## Internationalization

The website supports both English and Arabic languages with full RTL support. Language files are located in:

```
client/public/locales/
├── en/
│   └── translation.json
└── ar/
    └── translation.json
```

To add a new language:
1. Create a new translation file in `client/public/locales/[lang]/translation.json`
2. Add the language to supported languages in `i18n/config.ts`

## Project Structure

```
├── client/
│   ├── public/
│   │   └── locales/         # Translation files
│   └── src/
│       ├── components/      # React components
│       ├── hooks/          # Custom hooks
│       ├── lib/            # Utilities
│       ├── pages/          # Page components
│       └── i18n/           # i18n configuration
├── server/
│   ├── routes.ts           # API routes
│   ├── storage.ts          # Database operations
│   └── db.ts              # Database configuration
└── shared/
    └── schema.ts          # Database schema
```

## Features In Detail

### Booking System
- Calendar-based appointment scheduling
- Time slot selection
- Service selection
- Automated email notifications
- Database persistence

### Contact Form
- Form validation
- Email notifications
- Spam protection
- Database storage

### Multilingual Support
- Language switcher
- RTL layout support
- Automatic language detection
- Persistent language preference

### Responsive Design
- Mobile-first approach
- Adaptive layouts
- Touch-friendly interactions
- Cross-browser compatibility

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow React best practices
- Use functional components
- Implement proper error handling
- Write clean, documented code

### Database Operations
- Use Drizzle ORM for database operations
- Implement proper validation
- Handle errors gracefully
- Use transactions where necessary

### UI/UX
- Follow accessibility guidelines
- Ensure responsive design
- Implement proper loading states
- Add proper error handling

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run db:push`: Update database schema

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
