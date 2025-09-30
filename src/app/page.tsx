export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="flex flex-col items-center gap-8 p-8 text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
          Code<span className="text-indigo-600 dark:text-indigo-400">Path</span>
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
          CS Graduation Planner
        </p>
        <div className="flex flex-col gap-4 text-left bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Coming Soon
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>📊 Transcript Analysis</li>
            <li>✅ Progress Tracking</li>
            <li>🔍 Prerequisite Checking</li>
            <li>📅 Personalized Timeline</li>
          </ul>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          MSU Denver Computer Science
        </p>
      </main>
    </div>
  );
}
