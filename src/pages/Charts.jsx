import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Download, RefreshCw } from 'lucide-react'

export function Charts() {
  // Dados simulados para os gráficos
  const monthlyData = [
    { month: 'Jan', revenue: 8500, costs: 6200, profit: 2300 },
    { month: 'Fev', revenue: 9200, costs: 6400, profit: 2800 },
    { month: 'Mar', revenue: 10100, costs: 6800, profit: 3300 },
    { month: 'Abr', revenue: 11200, costs: 7100, profit: 4100 },
    { month: 'Mai', revenue: 12500, costs: 7500, profit: 5000 },
    { month: 'Jun', revenue: 13200, costs: 7800, profit: 5400 }
  ]

  const serviceData = [
    { service: 'Massagem Modeladora', revenue: 4800, percentage: 38.4 },
    { service: 'Drenagem Linfática', revenue: 3150, percentage: 25.2 },
    { service: 'Limpeza de Pele', revenue: 2700, percentage: 21.6 },
    { service: 'Outros Serviços', revenue: 1850, percentage: 14.8 }
  ]

  const paybackData = [
    { month: 1, investment: -15000, cumulative: -15000 },
    { month: 2, investment: 2300, cumulative: -12700 },
    { month: 3, investment: 2800, cumulative: -9900 },
    { month: 4, investment: 3300, cumulative: -6600 },
    { month: 5, investment: 4100, cumulative: -2500 },
    { month: 6, investment: 5000, cumulative: 2500 },
    { month: 7, investment: 5400, cumulative: 7900 },
    { month: 8, investment: 5400, cumulative: 13300 }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Gráficos e Visualizações</h1>
        <p className="text-gray-600">Análise visual do desempenho financeiro</p>
      </div>

      {/* Gráfico de Receita vs Custos */}
      <Card>
        <CardHeader>
          <CardTitle>Evolução Mensal - Receita vs Custos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 flex items-end justify-between space-x-2 p-4">
            {monthlyData.map((data, index) => {
              const maxValue = Math.max(...monthlyData.map(d => d.revenue))
              const revenueHeight = (data.revenue / maxValue) * 100
              const costsHeight = (data.costs / maxValue) * 100
              const profitHeight = (data.profit / maxValue) * 100
              
              return (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full flex justify-center space-x-1 mb-2">
                    <div 
                      className="w-4 bg-gradient-to-t from-green-400 to-green-600 rounded-t"
                      style={{ height: `${revenueHeight}%` }}
                      title={`Receita: R$ ${data.revenue.toLocaleString('pt-BR')}`}
                    ></div>
                    <div 
                      className="w-4 bg-gradient-to-t from-red-400 to-red-600 rounded-t"
                      style={{ height: `${costsHeight}%` }}
                      title={`Custos: R$ ${data.costs.toLocaleString('pt-BR')}`}
                    ></div>
                    <div 
                      className="w-4 bg-gradient-to-t from-blue-400 to-blue-600 rounded-t"
                      style={{ height: `${profitHeight}%` }}
                      title={`Lucro: R$ ${data.profit.toLocaleString('pt-BR')}`}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600">{data.month}</span>
                </div>
              )
            })}
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded"></div>
              <span className="text-sm text-gray-600">Receita</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-red-600 rounded"></div>
              <span className="text-sm text-gray-600">Custos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded"></div>
              <span className="text-sm text-gray-600">Lucro</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de Pizza - Receita por Serviço */}
        <Card>
          <CardHeader>
            <CardTitle>Receita por Serviço</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-64">
              <div className="relative w-48 h-48">
                {/* Simulação de gráfico de pizza com CSS */}
                <div className="w-full h-full rounded-full bg-gradient-to-r from-pink-400 via-purple-400 via-blue-400 to-green-400 relative">
                  <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">R$ 12.5k</p>
                      <p className="text-sm text-gray-600">Total</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              {serviceData.map((service, index) => {
                const colors = ['bg-pink-500', 'bg-purple-500', 'bg-blue-500', 'bg-green-500']
                return (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded ${colors[index]}`}></div>
                      <span className="text-sm text-gray-700">{service.service}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-900">
                        R$ {service.revenue.toLocaleString('pt-BR')}
                      </span>
                      <span className="text-xs text-gray-500 ml-2">
                        ({service.percentage}%)
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Gráfico de Payback */}
        <Card>
          <CardHeader>
            <CardTitle>Análise de Payback</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between space-x-1 p-4">
              {paybackData.map((data, index) => {
                const maxValue = Math.max(...paybackData.map(d => Math.abs(d.cumulative)))
                const height = Math.abs(data.cumulative / maxValue) * 80
                const isPositive = data.cumulative >= 0
                
                return (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div className="flex flex-col items-center justify-end h-32">
                      {!isPositive && (
                        <div 
                          className="w-6 bg-gradient-to-t from-red-400 to-red-600 rounded-t mb-1"
                          style={{ height: `${height}%` }}
                          title={`Mês ${data.month}: R$ ${data.cumulative.toLocaleString('pt-BR')}`}
                        ></div>
                      )}
                      <div className="w-full h-px bg-gray-300"></div>
                      {isPositive && (
                        <div 
                          className="w-6 bg-gradient-to-t from-green-400 to-green-600 rounded-b mt-1"
                          style={{ height: `${height}%` }}
                          title={`Mês ${data.month}: R$ ${data.cumulative.toLocaleString('pt-BR')}`}
                        ></div>
                      )}
                    </div>
                    <span className="text-xs text-gray-600 mt-2">{data.month}</span>
                  </div>
                )
              })}
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Payback estimado: <span className="font-semibold text-green-600">6 meses</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Métricas de Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Métricas de Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-3">
                <div className="w-full h-full rounded-full bg-gray-200">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-green-400 to-green-600" style={{
                    background: `conic-gradient(from 0deg, #10b981 0deg, #10b981 ${44 * 3.6}deg, #e5e7eb ${44 * 3.6}deg, #e5e7eb 360deg)`
                  }}>
                    <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900">44%</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900">Margem de Lucro</h3>
              <p className="text-sm text-gray-600">Meta: 40%</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-3">
                <div className="w-full h-full rounded-full bg-gray-200">
                  <div className="w-full h-full rounded-full" style={{
                    background: `conic-gradient(from 0deg, #8b5cf6 0deg, #8b5cf6 ${85 * 3.6}deg, #e5e7eb ${85 * 3.6}deg, #e5e7eb 360deg)`
                  }}>
                    <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900">85%</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900">Ocupação</h3>
              <p className="text-sm text-gray-600">Meta: 80%</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-3">
                <div className="w-full h-full rounded-full bg-gray-200">
                  <div className="w-full h-full rounded-full" style={{
                    background: `conic-gradient(from 0deg, #ec4899 0deg, #ec4899 ${92 * 3.6}deg, #e5e7eb ${92 * 3.6}deg, #e5e7eb 360deg)`
                  }}>
                    <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-900">92%</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900">Satisfação</h3>
              <p className="text-sm text-gray-600">Meta: 90%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Botões de Ação */}
      <div className="flex justify-end space-x-3">
        <Button variant="outline">
          <RefreshCw className="h-4 w-4 mr-2" />
          Atualizar Dados
        </Button>
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
          <Download className="h-4 w-4 mr-2" />
          Exportar Gráficos
        </Button>
      </div>
    </div>
  )
}

