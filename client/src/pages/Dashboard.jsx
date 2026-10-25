import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <main className="dashboard-page">
      <header className="dashboard-nav">
        <a href="/dashboard" className="brand">
          <span className="brand-icon">Q</span>
          AI QuizForge
        </a>

        <button className="secondary-button" onClick={logout}>
          Sign out
        </button>
      </header>

      <section className="dashboard-content">
        <p className="eyebrow">YOUR LEARNING WORKSPACE</p>
        <h1>Welcome back, {user?.name}!</h1>
        <p className="muted">
          Your account is ready. Next, we'll build AI-powered quiz creation and
          your learning dashboard.
        </p>

        <div className="welcome-panel">
          <span className="welcome-icon">✦</span>
          <h2>Your next great quiz starts here.</h2>
          <p>
            Soon, you'll be able to generate quizzes from any topic, challenge
            yourself, and track your progress.
          </p>
          <span className="status-label">QUIZ GENERATION — COMING NEXT</span>
        </div>
      </section>
    </main>
  );
}
