import { Heart, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

export function Header({ onMenuToggle }) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuToggle}
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Estética Financeira</h1>
            <p className="text-sm text-gray-500">Análise de Viabilidade</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="hidden md:block text-right">
          <p className="text-sm font-medium text-gray-900">Bem-vinda!</p>
          <p className="text-xs text-gray-500">Gerencie suas finanças</p>
        </div>
        <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-medium">U</span>
        </div>
      </div>
    </header>
  )
}

