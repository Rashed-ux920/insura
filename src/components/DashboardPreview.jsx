import React from 'react'

/**
 * Dashboard Preview Section Component
 * Mock dashboard layout showcasing the platform interface
 */
const DashboardPreview = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Your <span className="text-spotify-green">Centralized</span> Command Center
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Monitor operations, track performance, and manage everything from one powerful dashboard
          </p>
        </div>

        {/* Mock Dashboard */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-6 lg:p-8 overflow-hidden">
            {/* Dashboard Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Dashboard Overview</h3>
                <p className="text-gray-400">Last updated: Just now</p>
              </div>
              <div className="flex gap-3">
                <div className="px-4 py-2 bg-spotify-green/10 border border-spotify-green/30 rounded-lg text-spotify-green text-sm font-semibold">
                  Active
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Total Clients', value: '2,847', change: '+12%' },
                { label: 'Forms Generated', value: '15,234', change: '+8%' },
                { label: 'Campaigns Active', value: '23', change: '+5' },
                { label: 'Email Open Rate', value: '68%', change: '+4%' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-deep-black border border-gray-800 rounded-lg p-4 hover:border-spotify-green/50 transition-colors"
                >
                  <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-spotify-green text-xs font-semibold">{stat.change}</div>
                </div>
              ))}
            </div>

            {/* Charts and Tables Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Chart Placeholder */}
              <div className="bg-deep-black border border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4 text-white">Form Generation Trends</h4>
                <div className="h-48 flex items-end justify-between gap-2">
                  {[65, 80, 72, 90, 85, 95, 88].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-spotify-green to-spotify-green/50 rounded-t"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-gray-500">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-deep-black border border-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4 text-white">Recent Activity</h4>
                <div className="space-y-3">
                  {[
                    { action: 'Form Generated', client: 'John Smith', time: '2 min ago' },
                    { action: 'Campaign Sent', client: 'Marketing Q4', time: '15 min ago' },
                    { action: 'Client Added', client: 'Sarah Johnson', time: '1 hour ago' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0">
                      <div>
                        <div className="text-white text-sm font-medium">{activity.action}</div>
                        <div className="text-gray-500 text-xs">{activity.client}</div>
                      </div>
                      <div className="text-gray-500 text-xs">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="bg-deep-black border border-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-white">Automation Status</h4>
              <div className="space-y-4">
                {[
                  { label: 'ACORD Form Processing', progress: 95 },
                  { label: 'Email Campaign Delivery', progress: 87 },
                  { label: 'Data Synchronization', progress: 100 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">{item.label}</span>
                      <span className="text-spotify-green text-sm font-semibold">{item.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-spotify-green h-2 rounded-full transition-all"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardPreview
