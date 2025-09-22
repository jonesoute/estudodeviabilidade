import { useState } from 'react'
import { AppProvider } from './contexts/AppContext.jsx'
import { Header } from './components/layout/Header.jsx'
import { Sidebar } from './components/layout/Sidebar.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { FinancialAnalysis } from './pages/FinancialAnalysis.jsx'
import { Costs } from './pages/Costs.jsx'
import { Reports } from './pages/Reports.jsx'
import { Charts } from './pages/Charts.jsx'
import './App.css'

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('dashboard')

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />
      case 'financial':
        return <FinancialAnalysis />
      case 'costs':
        return <Costs />
      case 'reports':
        return <Reports />
      case 'charts':
        return <Charts />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuToggle={toggleSidebar} />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen}
          onClose={closeSidebar}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        
        <main className="flex-1 lg:ml-64 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}

export default App

