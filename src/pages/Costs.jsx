import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Save, Plus, Trash2, Calculator } from 'lucide-react'
import { useApp } from '../contexts/AppContext.jsx'
import { formatCurrency, formatPercentage } from '../utils/calculations.js'

export function Costs() {
  const { 
    fixedCosts, 
    variableCosts, 
    services, 
    monthlyFinancials,
    updateFixedCost, 
    updateVariableCost, 
    updateService,
    addService,
    removeService
  } = useApp()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Gestão de Custos</h1>
        <p className="text-gray-600">Controle seus custos fixos, variáveis e precificação de serviços</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CUSTOS FIXOS */}
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-600">Custos Fixos Mensais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Aluguel do Espaço</label>
              <Input
                type="number"
                placeholder="R$ 0,00"
                value={fixedCosts.rent || ''}
                onChange={(e) => updateFixedCost('rent', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Salários e Pró-labore</label>
              <Input
                type="number"
                placeholder="R$ 0,00"
                value={fixedCosts.salaries || ''}
                onChange={(e) => updateFixedCost('salaries', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Energia, Água, Internet</label>
              <Input
                type="number"
                placeholder="R$ 0,00"
                value={fixedCosts.utilities || ''}
                onChange={(e) => updateFixedCost('utilities', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Seguros</label>
              <Input
                type="number"
                placeholder="R$ 0,00"
                value={fixedCosts.insurance || ''}
                onChange={(e) => updateFixedCost('insurance', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Software de Gestão</label>
              <Input
                type="number"
                placeholder="R$ 0,00"
                value={fixedCosts.software || ''}
                onChange={(e) => updateFixedCost('software', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Marketing e Publicidade</label>
              <Input
                type="number"
                placeholder="R$ 0,00"
                value={fixedCosts.marketing || ''}
                onChange={(e) => updateFixedCost('marketing', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Manutenção de Equipamentos</label>
              <Input
                type="number"
                placeholder="R$ 0,00"
                value={fixedCosts.maintenance || ''}
                onChange={(e) => updateFixedCost('maintenance', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Outros Custos Fixos</label>
              <Input
                type="number"
                placeholder="R$ 0,00"
                value={fixedCosts.other || ''}
                onChange={(e) => updateFixedCost('other', e.target.value)}
              />
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-900">Total Custos Fixos:</span>
                <span className="font-bold text-blue-600">
                  {formatCurrency(monthlyFinancials.fixedCosts)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CUSTOS VARIÁVEIS */}
        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">Custos Variáveis Mensais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Produtos e Insumos</label>
              <Input
                type="number"
                placeholder="R$ 0,00"
                value={variableCosts.products || ''}
                onChange={(e) => updateVariableCost('products', e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">Cremes, óleos, géis, etc.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Comissões</label>
              <Input
                type="number"
                placeholder="R$ 0,00"
                value={variableCosts.commissions || ''}
                onChange={(e) => updateVariableCost('commissions', e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">Comissões de profissionais</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Materiais Descartáveis</label>
              <Input
                type="number"
                placeholder="R$ 0,00"
                value={variableCosts.disposables || ''}
                onChange={(e) => updateVariableCost('disposables', e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">Toalhas, luvas, máscaras, etc.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Transporte/Delivery</label>
              <Input
                type="number"
                placeholder="R$ 0,00"
                value={variableCosts.transportation || ''}
                onChange={(e) => updateVariableCost('transportation', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Embalagens</label>
              <Input
                type="number"
                placeholder="R$ 0,00"
                value={variableCosts.packaging || ''}
                onChange={(e) => updateVariableCost('packaging', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Outros Custos Variáveis</label>
              <Input
                type="number"
                placeholder="R$ 0,00"
                value={variableCosts.other || ''}
                onChange={(e) => updateVariableCost('other', e.target.value)}
              />
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-900">Total Custos Variáveis:</span>
                <span className="font-bold text-orange-600">
                  {formatCurrency(monthlyFinancials.variableCosts)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SERVIÇOS E PRECIFICAÇÃO */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-purple-600">Serviços e Precificação</CardTitle>
            <Button onClick={addService} size="sm" className="bg-gradient-to-r from-pink-500 to-purple-600">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Serviço
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 px-3 font-medium text-gray-700">Serviço</th>
                  <th className="text-left py-2 px-3 font-medium text-gray-700">Preço (R$)</th>
                  <th className="text-left py-2 px-3 font-medium text-gray-700">Custo (R$)</th>
                  <th className="text-left py-2 px-3 font-medium text-gray-700">Sessões/Mês</th>
                  <th className="text-left py-2 px-3 font-medium text-gray-700">Receita Mensal</th>
                  <th className="text-left py-2 px-3 font-medium text-gray-700">Margem</th>
                  <th className="text-left py-2 px-3 font-medium text-gray-700">Ações</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => {
                  const monthlyRevenue = service.price * service.sessions
                  const monthlyCost = service.cost * service.sessions
                  const margin = service.price > 0 ? ((service.price - service.cost) / service.price) * 100 : 0
                  
                  return (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-2 px-3">
                        <Input
                          value={service.name}
                          onChange={(e) => updateService(index, 'name', e.target.value)}
                          className="min-w-[150px]"
                        />
                      </td>
                      <td className="py-2 px-3">
                        <Input
                          type="number"
                          value={service.price || ''}
                          onChange={(e) => updateService(index, 'price', e.target.value)}
                          className="w-20"
                        />
                      </td>
                      <td className="py-2 px-3">
                        <Input
                          type="number"
                          value={service.cost || ''}
                          onChange={(e) => updateService(index, 'cost', e.target.value)}
                          className="w-20"
                        />
                      </td>
                      <td className="py-2 px-3">
                        <Input
                          type="number"
                          value={service.sessions || ''}
                          onChange={(e) => updateService(index, 'sessions', e.target.value)}
                          className="w-20"
                        />
                      </td>
                      <td className="py-2 px-3 text-green-600 font-medium">
                        {formatCurrency(monthlyRevenue)}
                      </td>
                      <td className="py-2 px-3">
                        <span className={`font-medium ${margin >= 50 ? 'text-green-600' : margin >= 30 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {formatPercentage(margin)}
                        </span>
                      </td>
                      <td className="py-2 px-3">
                        {services.length > 1 && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => removeService(index)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* RESUMO FINANCEIRO */}
      <Card>
        <CardHeader>
          <CardTitle>Resumo Financeiro Mensal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="text-sm font-semibold text-green-800">Receita Bruta</h3>
              <p className="text-xl font-bold text-green-600">
                {formatCurrency(monthlyFinancials.monthlyRevenue)}
              </p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-sm font-semibold text-blue-800">Custos Fixos</h3>
              <p className="text-xl font-bold text-blue-600">
                {formatCurrency(monthlyFinancials.fixedCosts)}
              </p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h3 className="text-sm font-semibold text-orange-800">Custos Variáveis</h3>
              <p className="text-xl font-bold text-orange-600">
                {formatCurrency(monthlyFinancials.variableCosts)}
              </p>
            </div>
            <div className={`text-center p-4 rounded-lg border ${
              monthlyFinancials.netProfit >= 0 
                ? 'bg-purple-50 border-purple-200' 
                : 'bg-red-50 border-red-200'
            }`}>
              <h3 className={`text-sm font-semibold ${
                monthlyFinancials.netProfit >= 0 ? 'text-purple-800' : 'text-red-800'
              }`}>
                Lucro Líquido
              </h3>
              <p className={`text-xl font-bold ${
                monthlyFinancials.netProfit >= 0 ? 'text-purple-600' : 'text-red-600'
              }`}>
                {formatCurrency(monthlyFinancials.netProfit)}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Margem: {formatPercentage(monthlyFinancials.profitMargin)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* BOTÕES DE AÇÃO */}
      <div className="flex justify-end space-x-3">
        <Button variant="outline">
          <Calculator className="h-4 w-4 mr-2" />
          Calcular Ponto de Equilíbrio
        </Button>
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
          <Save className="h-4 w-4 mr-2" />
          Dados Salvos Automaticamente
        </Button>
      </div>
    </div>
  )
}

