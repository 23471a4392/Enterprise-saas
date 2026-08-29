import { describe, it, expect } from 'vitest';
import { ComplianceEngine } from '../src/services/complianceEngine';

describe('ComplianceEngine Unit Tests', () => {
  it('should return verified regulatory HR compliance rules', () => {
    const rules = ComplianceEngine.getActiveComplianceRules();
    expect(rules.length).toBeGreaterThanOrEqual(4);
    expect(rules.every((r) => r.status === 'Compliant')).toBe(true);
  });
});
