import { Candidate, Job, SkillMatchComparison } from '../types';

export class SkillMatchingEngine {
  public static computeSkillMatrix(candidate: Candidate, job: Job): SkillMatchComparison[] {
    return job.requiredSkills.map((reqSkill) => {
      const foundSkill = candidate.skills.find(
        (s) => s.name.toLowerCase().includes(reqSkill.toLowerCase()) || reqSkill.toLowerCase().includes(s.name.toLowerCase())
      );

      const candidateRating = foundSkill ? foundSkill.rating : 6.2;
      const requiredRating = 8.0;

      let status: 'exceeds' | 'matches' | 'gap' = 'matches';
      if (candidateRating >= 9.0) {
        status = 'exceeds';
      } else if (candidateRating < 7.5) {
        status = 'gap';
      }

      return {
        skillName: reqSkill,
        candidateRating,
        requiredRating,
        weight: 1.0,
        status
      };
    });
  }

  public static calculateOverallFitPercentage(candidate: Candidate, job: Job): number {
    const matrix = this.computeSkillMatrix(candidate, job);
    const avgSkillRating = matrix.reduce((sum, item) => sum + item.candidateRating, 0) / matrix.length;
    
    // Weightings: Skills 40%, Experience 30%, Education 15%, Salary Fit 15%
    const skillScore = (avgSkillRating / 10) * 100;
    const expScore = Math.min(100, (candidate.yearsOfExperience / 5) * 100);
    const eduScore = candidate.education.length > 0 ? 95 : 80;
    
    // Salary expectation alignment
    const salaryScore = candidate.expectedSalary <= job.salaryMax ? 98 : 75;

    const weightedScore = Math.round(
      (skillScore * 0.4) + (expScore * 0.3) + (eduScore * 0.15) + (salaryScore * 0.15)
    );

    return Math.min(99, Math.max(60, weightedScore));
  }
}
