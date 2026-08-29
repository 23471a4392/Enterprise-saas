import React, { useState } from 'react';
import { mockAssessmentQuestions } from '../../data/assessmentBank';
import { Award, CheckCircle2, XCircle, Clock, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

export const SkillAssessmentRunner: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const question = mockAssessmentQuestions[currentIdx];

  const handleSelectOption = (optIdx: number) => {
    setSelectedAnswers({ ...selectedAnswers, [currentIdx]: optIdx });
  };

  const handleNext = () => {
    if (currentIdx < mockAssessmentQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    mockAssessmentQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctOptionIndex) {
        correct++;
      }
    });
    return Math.round((correct / mockAssessmentQuestions.length) * 100);
  };

  if (isCompleted) {
    const score = calculateScore();
    return (
      <div className="glass-panel p-8 rounded-2xl border border-slate-800 text-center space-y-6 max-w-xl mx-auto animate-fade-in">
        <div className="w-16 h-16 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center mx-auto">
          <Award className="w-8 h-8 text-purple-400" />
        </div>
        <h2 className="text-xl font-extrabold text-white">Skill Verification Assessment Complete!</h2>
        <div className="text-4xl font-extrabold text-emerald-400">{score}% Passed</div>
        <p className="text-xs text-slate-300">
          Your skill assessment score has been verified and synced to your TalentPulse candidate profile for high recruiter visibility.
        </p>
        <button
          onClick={() => {
            setIsCompleted(false);
            setCurrentIdx(0);
            setSelectedAnswers({});
          }}
          className="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-brand-500/20 transition"
        >
          Retake Skill Verification
        </button>
      </div>
    );
  }

  return (
    <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-6 max-w-2xl mx-auto animate-fade-in">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <span className="text-[10px] font-bold uppercase text-purple-400">Verified Technical Assessment</span>
          <h3 className="text-base font-bold text-slate-100">{question.domain}</h3>
        </div>
        <span className="text-xs font-semibold text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
          Question {currentIdx + 1} of {mockAssessmentQuestions.length}
        </span>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-semibold text-slate-200">{question.question}</p>

        {question.codeSnippet && (
          <pre className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-brand-300 overflow-x-auto">
            {question.codeSnippet}
          </pre>
        )}

        <div className="space-y-2">
          {question.options.map((opt, optIdx) => {
            const isSelected = selectedAnswers[currentIdx] === optIdx;

            return (
              <button
                key={optIdx}
                onClick={() => handleSelectOption(optIdx)}
                className={`w-full text-left p-3.5 rounded-xl text-xs font-medium border transition ${
                  isSelected
                    ? 'bg-brand-500/20 border-brand-500 text-white shadow-md'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span className="font-bold mr-2 text-brand-400">{String.fromCharCode(65 + optIdx)}.</span> {opt}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t border-slate-800">
        <button
          onClick={handleNext}
          disabled={selectedAnswers[currentIdx] === undefined}
          className="px-5 py-2 rounded-xl text-xs font-bold bg-brand-500 hover:bg-brand-600 text-white flex items-center gap-1.5 shadow-lg shadow-brand-500/20 disabled:opacity-50 transition"
        >
          {currentIdx === mockAssessmentQuestions.length - 1 ? 'Submit Verification' : 'Next Question'} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
