import { ComplianceRule } from '../types';

export class ComplianceEngine {
  public static getActiveComplianceRules(): ComplianceRule[] {
    return [
      {
        id: 'comp-1',
        region: 'US Federal & California',
        category: 'EEOC Diversity',
        title: 'EEOC Equal Employment Opportunity Data Collection',
        description: 'Self-identification forms for race, gender, and veteran status collected anonymously without affecting recruiter review.',
        status: 'Compliant'
      },
      {
        id: 'comp-2',
        region: 'US (NY, CA, WA, CO)',
        category: 'Equal Pay Transparency',
        title: 'Mandatory Salary Band Transparency Directive',
        description: 'All public job requisitions must display verified minimum and maximum base salary compensation ranges.',
        status: 'Compliant'
      },
      {
        id: 'comp-3',
        region: 'European Union (EU)',
        category: 'GDPR Data Privacy',
        title: 'GDPR Right to Erasure & Data Anonymization',
        description: 'Candidate data automatically scheduled for anonymization after 24 months of inactivity unless consent is renewed.',
        status: 'Compliant'
      },
      {
        id: 'comp-4',
        region: 'US Federal',
        category: 'Right to Work',
        title: 'Form I-9 & E-Verify Authorization Check',
        description: 'Automated digital verification of identity and employment eligibility upon offer acceptance.',
        status: 'Compliant'
      }
    ];
  }
}
