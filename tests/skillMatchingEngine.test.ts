import { describe, it, expect } from 'vitest';
import { SkillMatchingEngine } from '../src/services/skillMatchingEngine';
import { mockCandidates, mockJobs } from '../src/data/mockData';

describe('SkillMatchingEngine Unit Tests', () => {
  it('should compute skill proficiency comparisons against job requirements', () => {
    const candidate = mockCandidates[0];
    const job = mockJobs[0];

    const matrix = SkillMatchingEngine.computeSkillMatrix(candidate, job);
    expect(matrix).toBeDefined();
    expect(matrix.length).toBe(job.requiredSkills.length);
  });

  it('should compute overall fit percentage within valid 0-100 range', () => {
    const candidate = mockCandidates[0];
    const job = mockJobs[0];

    const fitScore = SkillMatchingEngine.calculateOverallFitPercentage(candidate, job);
    expect(fitScore).toBeGreaterThanOrEqual(60);
    expect(fitScore).toBeLessThanOrEqual(100);
  });
});
