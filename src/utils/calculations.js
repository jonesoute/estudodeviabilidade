// Cálculos financeiros para análise de viabilidade

export const calculateWorkingCapital = (assets, liabilities) => {
  const totalAssets = Object.values(assets).reduce((sum, value) => sum + (parseFloat(value) || 0), 0)
  const totalLiabilities = Object.values(liabilities).reduce((sum, value) => sum + (parseFloat(value) || 0), 0)
  return totalAssets - totalLiabilities
}

export const calculateTotalCosts = (fixedCosts, variableCosts) => {
  const totalFixed = Object.values(fixedCosts).reduce((sum, value) => sum + (parseFloat(value) || 0), 0)
  const totalVariable = Object.values(variableCosts).reduce((sum, value) => sum + (parseFloat(value) || 0), 0)
  return { totalFixed, totalVariable, total: totalFixed + totalVariable }
}

export const calculateServiceMetrics = (services) => {
  return services.map(service => {
    const monthlyRevenue = (parseFloat(service.price) || 0) * (parseFloat(service.sessions) || 0)
    const monthlyCost = (parseFloat(service.cost) || 0) * (parseFloat(service.sessions) || 0)
    const margin = service.price > 0 ? ((service.price - service.cost) / service.price) * 100 : 0
    
    return {
      ...service,
      monthlyRevenue,
      monthlyCost,
      margin
    }
  })
}

export const calculateMonthlyFinancials = (services, fixedCosts, variableCosts) => {
  const serviceMetrics = calculateServiceMetrics(services)
  
  const monthlyRevenue = serviceMetrics.reduce((sum, service) => sum + service.monthlyRevenue, 0)
  const monthlyCostOfServices = serviceMetrics.reduce((sum, service) => sum + service.monthlyCost, 0)
  
  const costs = calculateTotalCosts(fixedCosts, variableCosts)
  const totalMonthlyCosts = costs.totalFixed + costs.totalVariable + monthlyCostOfServices
  
  const grossProfit = monthlyRevenue - monthlyCostOfServices - costs.totalVariable
  const netProfit = grossProfit - costs.totalFixed
  const profitMargin = monthlyRevenue > 0 ? (netProfit / monthlyRevenue) * 100 : 0
  
  return {
    monthlyRevenue,
    monthlyCostOfServices,
    totalMonthlyCosts,
    grossProfit,
    netProfit,
    profitMargin,
    fixedCosts: costs.totalFixed,
    variableCosts: costs.totalVariable + monthlyCostOfServices
  }
}

export const calculateBreakEvenPoint = (fixedCosts, averageMargin) => {
  if (averageMargin <= 0) return 0
  return fixedCosts / (averageMargin / 100)
}

export const calculatePayback = (initialInvestment, monthlyNetProfit) => {
  if (monthlyNetProfit <= 0) return Infinity
  return initialInvestment / monthlyNetProfit
}

export const calculateROI = (netProfit, initialInvestment, periodInMonths = 12) => {
  if (initialInvestment <= 0) return 0
  const annualProfit = netProfit * periodInMonths
  return (annualProfit / initialInvestment) * 100
}

export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value || 0)
}

export const formatPercentage = (value) => {
  return `${(value || 0).toFixed(1)}%`
}

// Simulação de projeção de fluxo de caixa
export const generateCashFlowProjection = (monthlyFinancials, months = 12) => {
  const projection = []
  let cumulativeProfit = 0
  
  for (let i = 1; i <= months; i++) {
    // Simula crescimento gradual de 2% ao mês
    const growthFactor = Math.pow(1.02, i - 1)
    const monthlyRevenue = monthlyFinancials.monthlyRevenue * growthFactor
    const monthlyProfit = monthlyFinancials.netProfit * growthFactor
    
    cumulativeProfit += monthlyProfit
    
    projection.push({
      month: i,
      revenue: monthlyRevenue,
      costs: monthlyFinancials.totalMonthlyCosts * growthFactor,
      profit: monthlyProfit,
      cumulativeProfit
    })
  }
  
  return projection
}

// Análise de sensibilidade
export const sensitivityAnalysis = (baseScenario, variationPercentage = 10) => {
  const scenarios = {
    optimistic: {
      ...baseScenario,
      monthlyRevenue: baseScenario.monthlyRevenue * (1 + variationPercentage / 100),
      netProfit: baseScenario.netProfit * (1 + variationPercentage / 100)
    },
    pessimistic: {
      ...baseScenario,
      monthlyRevenue: baseScenario.monthlyRevenue * (1 - variationPercentage / 100),
      netProfit: baseScenario.netProfit * (1 - variationPercentage / 100)
    },
    base: baseScenario
  }
  
  return scenarios
}

