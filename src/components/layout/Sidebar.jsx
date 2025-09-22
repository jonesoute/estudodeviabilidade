import { 
  BarChart3, 
  Calculator, 
  DollarSign, 
  FileText, 
  Home,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'financial', label: 'Análise Financeira', icon: DollarSign },
  { id: 'costs', label: 'Custos', icon: Calculator },
  { id: 'reports', label: 'Relatórios', icon: FileText },
  { id: 'charts', label: 'Gráficos', icon: BarChart3 },
]

export function Sidebar({ isOpen, onClose, activeSection, onSectionChange }) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSectionChange(item.id)
                  onClose()
                }}
                className={`
                  w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors
                  ${isActive 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg border border-pink-200">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">
              Dica Financeira
            </h3>
            <p className="text-xs text-gray-600">
              Mantenha sempre um controle rigoroso do seu fluxo de caixa para garantir a saúde financeira do seu negócio.
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}

