export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow px-4 py-3 md:ml-60 md:mr-4 rounded-b-md">
        <h1 className="text-2xl font-bold text-purple-700">🌈 My Colorful Dashboard</h1>
      </header>

      {/* Sidebar for desktop */}
      <aside className="hidden md:fixed md:flex flex-col space-y-4 top-0 left-0 h-screen w-60 bg-gradient-to-b from-indigo-600 to-purple-600 text-white px-6 py-8 shadow-lg z-20">
        <h2 className="text-xl font-semibold mb-4">Navigation</h2>
        <button className="text-white hover:text-yellow-300 text-left">🏠 Home</button>
        <button className="text-white hover:text-yellow-300 text-left">📦 All Items</button>
        <button className="text-white hover:text-yellow-300 text-left">⚙️ Settings</button>
        <button className="text-white hover:text-yellow-300 text-left">📞 Contact</button>
      </aside>

      {/* Main Content */}
      <div className="md:ml-60 px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-indigo-400">
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">📊 Stats Overview</h3>
            <p className="text-sm text-gray-600">Check today&#39;s analytics and trends.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-pink-400">
            <h3 className="text-lg font-semibold text-pink-700 mb-2">🧾 Recent Invoices</h3>
            <p className="text-sm text-gray-600">View and manage recent billing activity.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-green-400">
            <h3 className="text-lg font-semibold text-green-700 mb-2">📦 Inventory</h3>
            <p className="text-sm text-gray-600">Manage items and check stock levels.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-yellow-400">
            <h3 className="text-lg font-semibold text-yellow-700 mb-2">📅 Schedule</h3>
            <p className="text-sm text-gray-600">See upcoming meetings and events.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-blue-400">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">📬 Messages</h3>
            <p className="text-sm text-gray-600">Communicate with your team easily.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-red-400">
            <h3 className="text-lg font-semibold text-red-700 mb-2">🛠️ Support</h3>
            <p className="text-sm text-gray-600">Need help? Contact support team.</p>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-inner flex justify-around py-3 z-10">
        <button className="flex flex-col items-center text-sm text-indigo-600 font-medium">
          <span className="material-symbols-outlined text-xl">home</span>
          Home
        </button>
        <button className="flex flex-col items-center text-sm text-gray-600 hover:text-indigo-600">
          <span className="material-symbols-outlined text-xl">apps</span>
          All
        </button>
        <button className="flex flex-col items-center text-sm text-gray-600 hover:text-indigo-600">
          <span className="material-symbols-outlined text-xl">settings</span>
          Settings
        </button>
      </nav>
    </main>
  );
}
