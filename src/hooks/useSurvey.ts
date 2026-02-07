import { useState, useCallback } from 'react';
import type { SurveyState } from '../types';
import {
  questions,
  getQuestionById,
  FIRST_QUESTION_ID,
  FINAL_QUESTION_IDS,
} from '../data/questions';

const initialState: SurveyState = {
  currentQuestionId: FIRST_QUESTION_ID,
  answers: {},
  collectedTags: [],
  isCompleted: false,
};

export const useSurvey = () => {
  const [state, setState] = useState<SurveyState>(initialState);

  // 현재 질문 가져오기
  const currentQuestion = getQuestionById(state.currentQuestionId);

  // 답변 선택 처리
  const selectAnswer = useCallback((optionIds: string[]) => {
    setState((prev) => {
      const question = getQuestionById(prev.currentQuestionId);
      if (!question) return prev;

      // 선택한 옵션들의 태그 수집
      const selectedOptions = question.options.filter((opt) =>
        optionIds.includes(opt.id)
      );
      const newTags = selectedOptions.flatMap((opt) => opt.resultTags || []);

      // 다음 질문 ID 결정 (첫 번째 선택 옵션 기준)
      const firstSelectedOption = selectedOptions[0];
      const nextQuestionId = firstSelectedOption?.nextQuestionId;

      // 마지막 질문인지 확인
      const isLastQuestion = FINAL_QUESTION_IDS.includes(prev.currentQuestionId);

      return {
        ...prev,
        answers: {
          ...prev.answers,
          [prev.currentQuestionId]: optionIds,
        },
        collectedTags: [...prev.collectedTags, ...newTags],
        currentQuestionId: isLastQuestion
          ? prev.currentQuestionId
          : nextQuestionId || prev.currentQuestionId,
        isCompleted: isLastQuestion,
      };
    });
  }, []);

  // 이전 질문으로 돌아가기
  const goBack = useCallback(() => {
    setState((prev) => {
      const answeredQuestionIds = Object.keys(prev.answers);
      if (answeredQuestionIds.length === 0) return prev;

      // 현재 질문의 이전 질문 찾기
      const currentIndex = answeredQuestionIds.findIndex(
        (id) => id === prev.currentQuestionId
      );

      // 마지막으로 답변한 질문으로 돌아가기
      const prevQuestionId =
        currentIndex > 0
          ? answeredQuestionIds[currentIndex - 1]
          : answeredQuestionIds[answeredQuestionIds.length - 1];

      // 해당 질문의 답변과 태그 제거
      const prevQuestion = getQuestionById(prevQuestionId);
      const prevAnswers = prev.answers[prevQuestionId] || [];
      const tagsToRemove = prevQuestion?.options
        .filter((opt) => prevAnswers.includes(opt.id))
        .flatMap((opt) => opt.resultTags || []) || [];

      const newAnswers = { ...prev.answers };
      delete newAnswers[prevQuestionId];

      return {
        ...prev,
        answers: newAnswers,
        collectedTags: prev.collectedTags.filter(
          (tag) => !tagsToRemove.includes(tag)
        ),
        currentQuestionId: prevQuestionId,
        isCompleted: false,
      };
    });
  }, []);

  // 설문 초기화
  const reset = useCallback(() => {
    setState(initialState);
  }, []);

  // 진행률 계산
  const progress = Math.round(
    (Object.keys(state.answers).length / questions.length) * 100
  );

  return {
    currentQuestion,
    answers: state.answers,
    collectedTags: state.collectedTags,
    isCompleted: state.isCompleted,
    progress,
    selectAnswer,
    goBack,
    reset,
  };
};
