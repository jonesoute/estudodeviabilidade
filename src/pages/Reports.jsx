import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Download, FileText, TrendingUp, Calendar } from 'lucide-react'

export function Reports() {
  const reports = [
    {
      title: 'Relatório de Fluxo de Caixa',
      description: 'Análise detalhada das entradas e saídas de caixa',
      type: 'Mensal',
      lastUpdate: '15/09/2024',
      status: 'Atualizado'
    },
    {
      title: 'Análise de Rentabilidade por Serviço',
      description: 'Margem de lucro e performance de cada serviço oferecido',
      type: 'Trimestral',
      lastUpdate: '01/09/2024',
      status: 'Pendente'
    },
    {
      title: 'Relatório de Custos Operacionais',
      description: 'Breakdown completo dos custos fixos e variáveis',
      type: 'Mensal',
      lastUpdate: '10/09/2024',
      status: 'Atualizado'
    },
    {
      title: 'Projeção de Payback',
      description: 'Análise do retorno sobre investimento e tempo de recuperação',
      type: 'Anual',
      lastUpdate: '05/09/2024',
      status: 'Atualizado'
    }
  ]

  const kpis = [
    { label: 'Receita Mensal Média', value: 'R$ 12.500', trend: '+8%', color: 'text-green-600' },
    { label: 'Margem de Lucro', value: '44%', trend: '+2%', color: 'text-blue-600' },
    { label: 'Ticket Médio', value: 'R$ 75', trend: '+5%', color: 'text-purple-600' },
    { label: 'Clientes Ativos', value: '85', trend: '+12%', color: 'text-pink-600' }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Relatórios e Análises</h1>
        <p className="text-gray-600">Acompanhe o desempenho financeiro do seu negócio</p>
      </div>

      {/* KPIs Principais */}
      <Card>
        <CardHeader>
          <CardTitle>Indicadores Principais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpis.map((kpi, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="text-sm font-medium text-gray-700">{kpi.label}</h3>
                <p className="text-2xl font-bold text-gray-900 mt-1">{kpi.value}</p>
                <p className={`text-sm ${kpi.color} mt-1`}>{kpi.trend} vs mês anterior</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Lista de Relatórios */}
      <Card>
        <CardHeader>
          <CardTitle>Relatórios Disponíveis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{report.title}</h3>
                    <p className="text-sm text-gray-600">{report.description}</p>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-xs text-gray-500">Tipo: {report.type}</span>
                      <span className="text-xs text-gray-500">Atualizado: {report.lastUpdate}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        report.status === 'Atualizado' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {report.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Visualizar
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Baixar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Análise de Tendências */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Análise de Tendências</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Crescimento da Receita</span>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <span className="text-green-600 font-semibold">+8%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Redução de Custos</span>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <span className="text-blue-600 font-semibold">-3%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Satisfação do Cliente</span>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                  <span className="text-purple-600 font-semibold">4.8/5</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Próximas Ações Recomendadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Revisar precificação</p>
                  <p className="text-xs text-gray-600">Alguns serviços estão com margem abaixo do ideal</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Otimizar custos variáveis</p>
                  <p className="text-xs text-gray-600">Negociar melhores preços com fornecedores</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Expandir serviços populares</p>
                  <p className="text-xs text-gray-600">Massagem modeladora tem alta demanda</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Botões de Ação */}
      <div className="flex justify-end space-x-3">
        <Button variant="outline">
          <Calendar className="h-4 w-4 mr-2" />
          Agendar Relatório
        </Button>
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
          <Download className="h-4 w-4 mr-2" />
          Exportar Todos
        </Button>
      </div>
    </div>
  )
}

