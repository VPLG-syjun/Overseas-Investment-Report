import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSurvey } from '../hooks/useSurvey';
import { ProgressBar } from '../components/ProgressBar';
import { QuestionCard } from '../components/QuestionCard';

export const SurveyPage = () => {
  const navigate = useNavigate();
  const {
    currentQuestion,
    answers,
    collectedTags,
    isCompleted,
    progress,
    selectAnswer,
    goBack,
    reset,
  } = useSurvey();

  // 설문 완료 시 결과 페이지로 이동
  useEffect(() => {
    if (isCompleted) {
      // 결과 페이지로 태그 전달
      navigate('/result', { state: { tags: collectedTags } });
    }
  }, [isCompleted, collectedTags, navigate]);

  if (!currentQuestion) {
    return (
      <div className="survey-page">
        <p>질문을 불러오는 중 오류가 발생했습니다.</p>
        <button onClick={() => navigate('/')}>처음으로</button>
      </div>
    );
  }

  const canGoBack = Object.keys(answers).length > 0;

  return (
    <div className="survey-page">
      <div className="survey-header">
        <button className="home-link" onClick={() => navigate('/')}>
          ← 처음으로
        </button>
        <button className="reset-button" onClick={reset}>
          다시 시작
        </button>
      </div>

      <ProgressBar progress={progress} category={currentQuestion.category} />

      <QuestionCard
        question={currentQuestion}
        onAnswer={selectAnswer}
        onBack={goBack}
        canGoBack={canGoBack}
      />
    </div>
  );
};
