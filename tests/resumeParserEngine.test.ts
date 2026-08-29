import { describe, it, expect } from 'vitest';
import { ResumeParserEngine } from '../src/services/resumeParserEngine';

describe('ResumeParserEngine Unit Tests', () => {
  it('should correctly parse plain text resume keywords and compute ATS score', () => {
    const resumeSample = `Alexandre Mercer - Senior Software Engineer
Summary: Experienced engineer skilled in React 19, TypeScript, Node.js, Python, PostgreSQL, and AWS Docker infrastructure. Led engineering initiatives.`;

    const result = ResumeParserEngine.parseResumeText(resumeSample);

    expect(result).toBeDefined();
    expect(result.matchScore).toBeGreaterThan(70);
    expect(result.matchedSkills).toContain('react');
    expect(result.matchedSkills).toContain('typescript');
    expect(result.matchedSkills).toContain('node.js');
    expect(result.strengths.length).toBeGreaterThan(0);
  });

  it('should extract keyword frequency density accurately', () => {
    const sample = 'React TypeScript React Node.js PostgreSQL React';
    const density = ResumeParserEngine.calculateKeywordDensity(sample);

    expect(density['react']).toBe(3);
    expect(density['typescript']).toBe(1);
  });
});
