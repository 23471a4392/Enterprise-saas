import { describe, it, expect } from 'vitest';
import { OfferCalculatorEngine } from '../src/services/offerCalculatorEngine';

describe('OfferCalculatorEngine Unit Tests', () => {
  it('should accurately calculate total first year comp and net take-home estimation', () => {
    const base = 200000;
    const bonus = 20000;
    const equityPct = 0.4; // 0.4% of 50M valuation = $200k over 4 yrs ($50k/yr)

    const result = OfferCalculatorEngine.calculateTotalComp(base, bonus, equityPct, 50000000);

    expect(result.baseSalary).toBe(200000);
    expect(result.signOnBonus).toBe(20000);
    expect(result.estimatedAnnualEquityValuation).toBe(50000);
    expect(result.totalFirstYearCompensation).toBe(270000);
    expect(result.netTakeHomeEst).toBeLessThan(result.totalFirstYearCompensation);
  });
});
