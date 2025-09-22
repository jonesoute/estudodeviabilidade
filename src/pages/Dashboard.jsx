import { 
  TrendingUp, 
  DollarSign, 
  Calendar, 
  Target,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card.jsx'
import { useApp } from '../contexts/AppContext.jsx'
import { formatCurrency, formatPercentage } from '../utils/calculations.js'

export function Dashboard() {
  const { workingCapital, monthlyFinancials, paybackMonths, roi } = useApp()

  const metrics = [
    {
      title: 'Capital de Giro',
      value: formatCurrency(workingCapital),
      change: workingCapital >= 0 ? '+12%' : '-5%',
      trend: workingCapital >= 0 ? 'up' : 'down',
      icon: DollarSign,
      color: workingCapital >= 0 ? 'text-green-600' : 'text-red-600'
    },
    {
      title: 'Payback',
      value: paybackMonths === Infinity ? '∞' : `${Math.ceil(paybackMonths)} meses`,
      change: '-2 meses',
      trend: 'up',
      icon: Calendar,
      color: 'text-blue-600'
    },
    {
      title: 'Faturamento Mensal',
      value: formatCurrency(monthlyFinancials.monthlyRevenue),
      change: '+8%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: 'Margem de Lucro',
      value: formatPercentage(monthlyFinancials.profitMargin),
      change: '+5%',
      trend: 'up',
      icon: Target,
      color: 'text-pink-600'
    }
  ]

  const recentActivities = [
    { action: 'Atualização de custos fixos', time: '2 horas atrás', type: 'update' },
    { action: 'Novo serviço cadastrado', time: '1 dia atrás', type: 'new' },
    { action: 'Relatório mensal gerado', time: '3 dias atrás', type: 'report' },
    { action: 'Análise de viabilidade concluída', time: '1 semana atrás', type: 'analysis' }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Visão geral da sua análise financeira</p>
      </div>

      {/* Métricas principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon
          const TrendIcon = metric.trend === 'up' ? ArrowUpRight : ArrowDownRight
          
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                    <div className="flex items-center mt-2">
                      <TrendIcon className={`h-4 w-4 ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                      <span className={`text-sm ml-1 ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-50 ${metric.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Resumo Financeiro */}
        <Card>
          <CardHeader>
            <CardTitle>Resumo Financeiro</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Receita Mensal</span>
                <span className="font-semibold text-green-600">
                  {formatCurrency(monthlyFinancials.monthlyRevenue)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Custos Fixos</span>
                <span className="font-semibold text-red-600">
                  {formatCurrency(monthlyFinancials.fixedCosts)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Custos Variáveis</span>
                <span className="font-semibold text-orange-600">
                  {formatCurrency(monthlyFinancials.variableCosts)}
                </span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-900">Lucro Líquido</span>
                <span className={`font-bold ${monthlyFinancials.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatCurrency(monthlyFinancials.netProfit)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Atividades Recentes */}
        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Próximos Passos */}
      <Card>
        <CardHeader>
          <CardTitle>Próximos Passos Recomendados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-200">
              <h4 className="font-semibold text-gray-900 mb-2">Revisar Custos</h4>
              <p className="text-sm text-gray-600">Analise seus custos mensais para identificar oportunidades de economia.</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-2">Aumentar Receita</h4>
              <p className="text-sm text-gray-600">Considere novos serviços ou pacotes para aumentar o faturamento.</p>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-gray-900 mb-2">Planejar Investimentos</h4>
              <p className="text-sm text-gray-600">Avalie novos equipamentos ou expansão do negócio.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

