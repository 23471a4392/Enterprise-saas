export interface CompensationBreakdown {
  baseSalary: number;
  signOnBonus: number;
  estimatedAnnualEquityValuation: number;
  totalFirstYearCompensation: number;
  estimatedTaxes: number;
  netTakeHomeEst: number;
}

export class OfferCalculatorEngine {
  public static calculateTotalComp(
    baseSalary: number,
    signOnBonus: number,
    equityPct: number,
    companyValuation: number = 50000000
  ): CompensationBreakdown {
    const totalEquityVal = companyValuation * (equityPct / 100);
    const annualEquityValuation = totalEquityVal / 4; // 4-year vesting
    const totalFirstYearCompensation = baseSalary + signOnBonus + annualEquityValuation;
    const estimatedTaxes = Math.round(totalFirstYearCompensation * 0.32);
    const netTakeHomeEst = totalFirstYearCompensation - estimatedTaxes;

    return {
      baseSalary,
      signOnBonus,
      estimatedAnnualEquityValuation: Math.round(annualEquityValuation),
      totalFirstYearCompensation: Math.round(totalFirstYearCompensation),
      estimatedTaxes,
      netTakeHomeEst: Math.round(netTakeHomeEst)
    };
  }
}
