import { useState } from 'react';
import type { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (optionIds: string[]) => void;
  onBack?: () => void;
  canGoBack?: boolean;
}

export const QuestionCard = ({
  question,
  onAnswer,
  onBack,
  canGoBack = false,
}: QuestionCardProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionClick = (optionId: string) => {
    if (question.multiSelect) {
      setSelectedOptions((prev) =>
        prev.includes(optionId)
          ? prev.filter((id) => id !== optionId)
          : [...prev, optionId]
      );
    } else {
      // 단일 선택인 경우 바로 다음으로 이동
      onAnswer([optionId]);
    }
  };

  const handleSubmit = () => {
    if (selectedOptions.length > 0) {
      onAnswer(selectedOptions);
      setSelectedOptions([]);
    }
  };

  return (
    <div className="question-card">
      <div className="question-header">
        <span className="question-category">{question.category}</span>
        <h2 className="question-title">{question.question}</h2>
        {question.description && (
          <p className="question-description">{question.description}</p>
        )}
      </div>

      <div className="options-container">
        {question.options.map((option) => (
          <button
            key={option.id}
            className={`option-button ${
              selectedOptions.includes(option.id) ? 'selected' : ''
            }`}
            onClick={() => handleOptionClick(option.id)}
          >
            <span className="option-label">{option.label}</span>
            {option.description && (
              <span className="option-description">{option.description}</span>
            )}
          </button>
        ))}
      </div>

      <div className="question-actions">
        {canGoBack && (
          <button className="back-button" onClick={onBack}>
            ← 이전
          </button>
        )}
        {question.multiSelect && (
          <button
            className="submit-button"
            onClick={handleSubmit}
            disabled={selectedOptions.length === 0}
          >
            다음 →
          </button>
        )}
      </div>
    </div>
  );
};
