import { ResumeAnalysis, Candidate, Job } from '../types';

export class ResumeParserEngine {
  private static TECH_KEYWORDS = [
    'react', 'next.js', 'typescript', 'javascript', 'node.js', 'python', 'pytorch',
    'postgresql', 'redis', 'docker', 'kubernetes', 'aws', 'gcp', 'terraform',
    'graphql', 'rest api', 'microservices', 'ci/cd', 'git', 'llm', 'langchain',
    'rag', 'vector database', 'system design', 'tailwind css', 'redux', 'zustand'
  ];

  public static parseResumeText(text: string, targetJob?: Job): ResumeAnalysis {
    const lowerText = text.toLowerCase();
    
    // Detect keywords present in text
    const matchedSkills = this.TECH_KEYWORDS.filter((k) => lowerText.includes(k.toLowerCase()));
    
    // Determine missing required skills from targetJob if provided
    const requiredJobSkills = targetJob ? targetJob.requiredSkills.map((s) => s.toLowerCase()) : ['react', 'typescript', 'node.js'];
    const missingSkills = requiredJobSkills.filter((req) => !matchedSkills.some((m) => m.toLowerCase().includes(req) || req.includes(m.toLowerCase())));

    // Keyword match ratio
    const keywordMatchCount = matchedSkills.length;
    const totalRequiredKeywords = requiredJobSkills.length || 10;
    const keywordCoverageRatio = Math.min(1, keywordMatchCount / Math.max(1, totalRequiredKeywords));

    // Calculate sub-scores
    const hardSkillsScore = Math.min(98, Math.round(keywordCoverageRatio * 75 + 20));
    const softSkillsScore = lowerText.includes('led') || lowerText.includes('mentored') || lowerText.includes('architected') ? 92 : 82;
    const formatScore = lowerText.includes('summary:') && lowerText.includes('experience:') ? 95 : 85;
    const experienceScore = lowerText.includes('years') || lowerText.includes('present') ? 90 : 80;

    const overallScore = Math.round((hardSkillsScore * 0.4) + (softSkillsScore * 0.2) + (formatScore * 0.2) + (experienceScore * 0.2));

    const strengths: string[] = [];
    if (hardSkillsScore > 80) strengths.push('Strong technical keyword alignment with required role stack.');
    if (softSkillsScore > 85) strengths.push('Demonstrated leadership, mentoring, and architectural ownership.');
    if (formatScore > 90) strengths.push('Clean ATS-compliant section structure (Summary, Experience, Education).');

    const areaOfImprovements: string[] = [];
    if (missingSkills.length > 0) {
      areaOfImprovements.push(`Add explicit metrics and bullet points for missing skills: ${missingSkills.join(', ')}.`);
    }
    if (text.length < 300) {
      areaOfImprovements.push('Resume payload is concise; expand accomplishment metrics with quantifiable outcomes (e.g. % latency reduction, $ cost savings).');
    }

    const aiSummary = `Parsed resume demonstrates ${matchedSkills.length} core technical proficiencies. Overall candidate ATS score is ${overallScore}/100 with high alignment in ${matchedSkills.slice(0, 3).join(', ')}.`;

    return {
      candidateId: 'cand-parsed',
      matchScore: overallScore,
      hardSkillsScore,
      softSkillsScore,
      formatScore,
      experienceScore,
      keywordMatchCount,
      totalRequiredKeywords,
      matchedSkills,
      missingSkills,
      aiSummary,
      strengths,
      areaOfImprovements,
      redFlags: missingSkills.length > 3 ? ['Multiple mandatory tech stack requirements absent from plain text resume.'] : []
    };
  }

  public static calculateKeywordDensity(text: string): Record<string, number> {
    const words = text.toLowerCase().match(/\b[a-z]{3,}\b/g) || [];
    const counts: Record<string, number> = {};
    for (const w of words) {
      if (!['and', 'the', 'for', 'with', 'that', 'this', 'from', 'have', 'were'].includes(w)) {
        counts[w] = (counts[w] || 0) + 1;
      }
    }
    return counts;
  }
}
