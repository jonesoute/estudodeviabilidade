import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import { 
  calculateWorkingCapital, 
  calculateMonthlyFinancials,
  calculatePayback,
  calculateROI,
  generateCashFlowProjection
} from '../utils/calculations.js'

const AppContext = createContext()

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}

export function AppProvider({ children }) {
  // Estados persistidos no localStorage
  const [assets, setAssets] = useLocalStorage('estetica-assets', {
    cash: 0,
    bank: 0,
    investments: 0,
    receivables: 0,
    inventory: 0
  })

  const [liabilities, setLiabilities] = useLocalStorage('estetica-liabilities', {
    suppliers: 0,
    loans: 0,
    salaries: 0,
    taxes: 0
  })

  const [fixedCosts, setFixedCosts] = useLocalStorage('estetica-fixed-costs', {
    rent: 0,
    salaries: 0,
    utilities: 0,
    insurance: 0,
    software: 0,
    marketing: 0,
    maintenance: 0,
    other: 0
  })

  const [variableCosts, setVariableCosts] = useLocalStorage('estetica-variable-costs', {
    products: 0,
    commissions: 0,
    disposables: 0,
    transportation: 0,
    packaging: 0,
    other: 0
  })

  const [services, setServices] = useLocalStorage('estetica-services', [
    { name: 'Massagem Modeladora', price: 80, cost: 25, sessions: 20 },
    { name: 'Drenagem Linfática', price: 70, cost: 20, sessions: 15 },
    { name: 'Limpeza de Pele', price: 60, cost: 18, sessions: 25 }
  ])

  const [businessSettings, setBusinessSettings] = useLocalStorage('estetica-settings', {
    initialInvestment: 15000,
    targetProfitMargin: 40,
    businessName: 'Estética Corporal'
  })

  // Cálculos derivados
  const workingCapital = calculateWorkingCapital(assets, liabilities)
  const monthlyFinancials = calculateMonthlyFinancials(services, fixedCosts, variableCosts)
  const paybackMonths = calculatePayback(businessSettings.initialInvestment, monthlyFinancials.netProfit)
  const roi = calculateROI(monthlyFinancials.netProfit, businessSettings.initialInvestment)
  const cashFlowProjection = generateCashFlowProjection(monthlyFinancials, 12)

  // Funções para atualizar dados
  const updateAsset = (field, value) => {
    setAssets(prev => ({ ...prev, [field]: parseFloat(value) || 0 }))
  }

  const updateLiability = (field, value) => {
    setLiabilities(prev => ({ ...prev, [field]: parseFloat(value) || 0 }))
  }

  const updateFixedCost = (field, value) => {
    setFixedCosts(prev => ({ ...prev, [field]: parseFloat(value) || 0 }))
  }

  const updateVariableCost = (field, value) => {
    setVariableCosts(prev => ({ ...prev, [field]: parseFloat(value) || 0 }))
  }

  const updateService = (index, field, value) => {
    setServices(prev => prev.map((service, i) => 
      i === index ? { ...service, [field]: field === 'name' ? value : parseFloat(value) || 0 } : service
    ))
  }

  const addService = () => {
    setServices(prev => [...prev, { name: 'Novo Serviço', price: 0, cost: 0, sessions: 0 }])
  }

  const removeService = (index) => {
    setServices(prev => prev.filter((_, i) => i !== index))
  }

  const updateBusinessSetting = (field, value) => {
    setBusinessSettings(prev => ({ ...prev, [field]: value }))
  }

  // Função para resetar todos os dados
  const resetAllData = () => {
    setAssets({
      cash: 0,
      bank: 0,
      investments: 0,
      receivables: 0,
      inventory: 0
    })
    setLiabilities({
      suppliers: 0,
      loans: 0,
      salaries: 0,
      taxes: 0
    })
    setFixedCosts({
      rent: 0,
      salaries: 0,
      utilities: 0,
      insurance: 0,
      software: 0,
      marketing: 0,
      maintenance: 0,
      other: 0
    })
    setVariableCosts({
      products: 0,
      commissions: 0,
      disposables: 0,
      transportation: 0,
      packaging: 0,
      other: 0
    })
    setServices([
      { name: 'Massagem Modeladora', price: 80, cost: 25, sessions: 20 },
      { name: 'Drenagem Linfática', price: 70, cost: 20, sessions: 15 },
      { name: 'Limpeza de Pele', price: 60, cost: 18, sessions: 25 }
    ])
  }

  const value = {
    // Estados
    assets,
    liabilities,
    fixedCosts,
    variableCosts,
    services,
    businessSettings,
    
    // Cálculos
    workingCapital,
    monthlyFinancials,
    paybackMonths,
    roi,
    cashFlowProjection,
    
    // Funções de atualização
    updateAsset,
    updateLiability,
    updateFixedCost,
    updateVariableCost,
    updateService,
    addService,
    removeService,
    updateBusinessSetting,
    resetAllData
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

