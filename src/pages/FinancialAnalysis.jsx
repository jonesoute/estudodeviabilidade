import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Save, Trash2 } from 'lucide-react'
import { useApp } from '../contexts/AppContext.jsx'
import { formatCurrency } from '../utils/calculations.js'

export function FinancialAnalysis() {
  const { 
    assets, 
    liabilities, 
    workingCapital,
    updateAsset, 
    updateLiability,
    resetAllData
  } = useApp()

  const totalAssets = Object.values(assets).reduce((sum, value) => sum + value, 0)
  const totalLiabilities = Object.values(liabilities).reduce((sum, value) => sum + value, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Análise Financeira</h1>
        <p className="text-gray-600">Gerencie seus direitos e obrigações financeiras</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* DIREITOS (ATIVOS) */}
        <Card>
          <CardHeader>
            <CardTitle className="text-green-600">I - DIREITOS (ATIVOS)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                1. Disponibilidades
              </label>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">1.1 Caixa</label>
                  <Input
                    type="number"
                    placeholder="R$ 0,00"
                    value={assets.cash || ''}
                    onChange={(e) => updateAsset('cash', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">1.2 Bancos</label>
                  <Input
                    type="number"
                    placeholder="R$ 0,00"
                    value={assets.bank || ''}
                    onChange={(e) => updateAsset('bank', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">1.3 Aplicações</label>
                  <Input
                    type="number"
                    placeholder="R$ 0,00"
                    value={assets.investments || ''}
                    onChange={(e) => updateAsset('investments', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                2. Contas a Receber
              </label>
              <Input
                type="number"
                placeholder="R$ 0,00"
                value={assets.receivables || ''}
                onChange={(e) => updateAsset('receivables', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                3. Produtos e Insumos
              </label>
              <Input
                type="number"
                placeholder="R$ 0,00"
                value={assets.inventory || ''}
                onChange={(e) => updateAsset('inventory', e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Cremes, óleos, descartáveis, equipamentos, etc.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-900">Total de Direitos:</span>
                <span className="font-bold text-green-600">
                  {formatCurrency(totalAssets)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* OBRIGAÇÕES (PASSIVOS) */}
        <Card>
          <CardHeader>
            <CardTitle className="text-red-600">II - OBRIGAÇÕES (PASSIVOS)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                1. Contas a Pagar/Fornecedores
              </label>
              <Input
                type="number"
                placeholder="R$ 0,00"
                value={liabilities.suppliers || ''}
                onChange={(e) => updateLiability('suppliers', e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Fornecedores de produtos, equipamentos, etc.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                2. Financiamentos
              </label>
              <Input
                type="number"
                placeholder="R$ 0,00"
                value={liabilities.loans || ''}
                onChange={(e) => updateLiability('loans', e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Empréstimos, financiamentos de equipamentos, etc.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                3. Salários e Encargos
              </label>
              <Input
                type="number"
                placeholder="R$ 0,00"
                value={liabilities.salaries || ''}
                onChange={(e) => updateLiability('salaries', e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Salários de funcionários, pró-labore, encargos sociais
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                4. Impostos e Taxas
              </label>
              <Input
                type="number"
                placeholder="R$ 0,00"
                value={liabilities.taxes || ''}
                onChange={(e) => updateLiability('taxes', e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Simples Nacional, INSS, ISS, etc.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-900">Total de Obrigações:</span>
                <span className="font-bold text-red-600">
                  {formatCurrency(totalLiabilities)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* RESUMO */}
      <Card>
        <CardHeader>
          <CardTitle>Resumo da Análise Financeira</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-800">Total de Direitos</h3>
              <p className="text-2xl font-bold text-green-600">
                {formatCurrency(totalAssets)}
              </p>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="text-lg font-semibold text-red-800">Total de Obrigações</h3>
              <p className="text-2xl font-bold text-red-600">
                {formatCurrency(totalLiabilities)}
              </p>
            </div>
            <div className={`text-center p-4 rounded-lg border ${
              workingCapital >= 0 
                ? 'bg-blue-50 border-blue-200' 
                : 'bg-orange-50 border-orange-200'
            }`}>
              <h3 className={`text-lg font-semibold ${
                workingCapital >= 0 ? 'text-blue-800' : 'text-orange-800'
              }`}>
                Capital de Giro
              </h3>
              <p className={`text-2xl font-bold ${
                workingCapital >= 0 ? 'text-blue-600' : 'text-orange-600'
              }`}>
                {formatCurrency(workingCapital)}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                {workingCapital >= 0 ? 'Situação positiva' : 'Atenção necessária'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* BOTÕES DE AÇÃO */}
      <div className="flex justify-end space-x-3">
        <Button variant="outline" onClick={resetAllData}>
          <Trash2 className="h-4 w-4 mr-2" />
          Limpar Dados
        </Button>
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
          <Save className="h-4 w-4 mr-2" />
          Dados Salvos Automaticamente
        </Button>
      </div>
    </div>
  )
}

