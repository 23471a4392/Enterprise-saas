# TalentPulse - Enterprise Job & Recruitment Platform

**TalentPulse** is a production-grade, enterprise-ready recruitment suite spanning the full talent acquisition lifecycle:
**Candidates → Companies → Jobs → Applications → Resume Analysis → Skill Matching → Interviews → Hiring**.

---

## 🚀 Features Overview

- **Persona & Role Switching**: Seamless switching between **Recruiter / Employer**, **Hiring Manager**, **Candidate (Job Seeker)**, and **System Admin**.
- **Jobs Engine & Posting Wizard**: Multi-faceted filterable job board with salary range sliders, work mode tabs (`Remote`, `Hybrid`, `Onsite`), tech stack tags, and a multi-step **Job Requisition Posting Wizard** with AI description auto-generation.
- **Drag-and-Drop ATS (Applicant Tracking System)**: 6-stage Kanban pipeline board (`Sourced` → `Screened` → `Resume Matched` → `Interview` → `Offer Extended` → `Hired`), one-click stage advancement, and an **Application Detail Drawer**.
- **AI Resume Analysis Engine**: Real-time parser scoring candidate resumes (0-100), sub-breakdowns (Hard Skills, Soft Skills, Formatting, Experience), and keyword density matching.
- **Skill Matching & Gap Matrix Engine**: Radar/bar skill matrix comparing candidate proficiency against job requirements with gap detection.
- **Interview Scheduling & Live Evaluation Hub**: Scheduling wizard with calendar integration and a **Live Interview Room Simulator** featuring structured 1-5 star criteria scorecards and hiring recommendations (`Strong Hire`, `Hire`, `Weak Hire`, `Reject`).
- **Hiring, Offer Management & E-Signatures**: Offer letter builder (Base, Sign-On, Equity), e-signature simulation, and celebratory confetti upon acceptance.
- **Executive Recruitment Analytics**: Dashboards built with Recharts detailing Time-to-Hire, Cost-per-Hire, Funnel Conversion, and Sourcing Attribution.
- **HR Regulatory Compliance**: Governance audit view covering EEOC Equal Opportunity standards, GDPR right-to-erasure directives, and Salary Transparency disclosures.

---

## 🛠️ Prerequisites & Installation

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation Commands
```bash
# Clone repository or navigate to root
cd brave-hubble

# Install node dependencies
npm install
```

---

## 💻 Running the Platform

### Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

### Run Unit Tests & Coverage
```bash
# Run unit test suite
npm run test

# Run test coverage report
npm run coverage
```

### Build Production Bundle
```bash
# Compile TypeScript and bundle production assets
npm run build
```

---

## 📁 Repository & Architecture Structure

```
brave-hubble/
├── src/
│   ├── components/         # Modular React UI component suite (ATS, Jobs, Interviews, Offers, Resume, Skills)
│   ├── context/            # AppContext state store with persistent LocalStorage synchronization
│   ├── data/               # Production datasets & question banks
│   ├── services/           # Business logic engines (resumeParserEngine, skillMatchingEngine, complianceEngine)
│   ├── types/              # Domain TypeScript interfaces
│   ├── App.tsx             # Main routing and layout container
│   ├── main.tsx            # Vite entry point
│   └── index.css           # Tailwind CSS directives and glassmorphism design tokens
├── tests/                  # Vitest unit test suite
├── index.html              # HTML shell
├── package.json            # Project manifest & scripts
├── vite.config.ts          # Vite build configuration
└── vitest.config.ts        # Vitest testing configuration
```

---

## 🔒 License & Ownership

Proprietary & Confidential. All Rights Reserved. Not licensed under open-source licenses (MIT/Apache/GPL).
