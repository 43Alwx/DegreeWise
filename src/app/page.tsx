export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Code<span className="text-indigo-600 dark:text-indigo-400">Path</span>
              </span>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                About
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-block px-4 py-2 mb-6 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              MSU Denver Computer Science
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6">
            Your Path to
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              CS Graduation
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Smart graduation planning made simple. Analyze transcripts, track progress,
            and get personalized timelines to graduation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button className="px-8 py-4 text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-lg hover:shadow-xl transition-all">
              Upload Transcript
            </button>
            <button className="px-8 py-4 text-lg font-semibold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700">
              View Demo
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Transcript Analysis
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Automatically parse and analyze your academic transcript
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Progress Tracking
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              See your degree progress with visual indicators
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Prerequisite Checker
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Validate course prerequisites automatically
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Personalized Timeline
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Get a custom plan to reach graduation faster
            </p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-full">
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-amber-700 dark:text-amber-400">
              In Development - Coming Soon
            </span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © 2025 CodePath - MSU Denver Computer Science Graduation Planner
          </p>
        </div>
      </footer>
    </div>
  );
}
