# AI QuizForge

AI QuizForge is a full-stack, AI-powered quiz generation and learning platform that helps users create quizzes, test their knowledge, review answers, and track their learning progress.

## Features

### Planned Core Features

- Secure authentication and role-based authorization
- AI-powered quiz generation using Groq
- Configurable topics, difficulty levels, and question counts
- Validated AI-generated questions and answers
- Interactive quiz-taking experience
- Automatic scoring and answer explanations
- Persistent quiz attempts and history
- Performance analytics dashboard
- Quiz management and sharing
- Responsive, modern user interface

## Technology Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router

### Backend

- Node.js
- Express.js
- REST APIs
- JWT authentication

### Database

- PostgreSQL
- Prisma ORM

### AI

- Groq API
- Structured AI-generated quiz data
- Backend-side response validation

### Development Tools

- Git and GitHub
- Visual Studio Code
- Postman / cURL

## Architecture

React Frontend → Express REST API → Prisma ORM → PostgreSQL

AI generation is handled securely by the backend through the Groq API. AI-generated data is validated before it is stored in the database.

## Project Structure

    quiz-generator-app/
    ├── client/       # React frontend
    ├── server/       # Express backend and Prisma
    ├── docs/         # Architecture and API documentation
    ├── .gitignore
    └── README.md

## Development Status

Currently in the initial project setup phase. Features will be implemented incrementally, tested at each milestone, and documented throughout development.

## Security

- API keys and database credentials must remain in environment variables.
- Secrets must never be committed to Git.
- AI-generated content must be validated on the backend.
- Protected resources must enforce authentication and ownership checks.

## Future Improvements

- Timed quizzes
- Additional question types
- PDF-to-quiz generation
- Advanced learning analytics
- Quiz leaderboards
- Realtime multiplayer quizzes

## License

To be determined.
