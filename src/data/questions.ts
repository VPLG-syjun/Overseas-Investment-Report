import type { Question } from '../types';

// 질문 데이터 - 실제 내용은 차차 업데이트 예정
export const questions: Question[] = [
  {
    id: 'investor-type',
    category: '투자자 정보',
    question: '투자자 유형을 선택해주세요',
    description: '거주자(한국인)가 해외에 투자하는 경우를 기준으로 합니다',
    options: [
      {
        id: 'individual',
        label: '개인',
        description: '개인 자격으로 해외 투자',
        nextQuestionId: 'investment-type',
        resultTags: ['investor:individual'],
      },
      {
        id: 'corporation',
        label: '법인',
        description: '법인(회사) 자격으로 해외 투자',
        nextQuestionId: 'investment-type',
        resultTags: ['investor:corporation'],
      },
    ],
  },
  {
    id: 'investment-type',
    category: '투자 방식',
    question: '투자 방식을 선택해주세요',
    description: '해외 투자의 유형에 따라 신고 절차가 달라집니다',
    options: [
      {
        id: 'direct-investment',
        label: '해외직접투자',
        description: '외국 법인의 경영에 참여하기 위한 투자 (지분 10% 이상 등)',
        nextQuestionId: 'direct-investment-method',
        resultTags: ['type:direct-investment'],
      },
      {
        id: 'securities',
        label: '증권취득',
        description: '외국 증권(주식, 채권 등) 취득 (지분 10% 미만)',
        nextQuestionId: 'securities-type',
        resultTags: ['type:securities'],
      },
      {
        id: 'offshore-finance',
        label: '역외금융회사 설립/투자',
        description: '조세피난처 등에 역외금융회사 설립 또는 투자',
        nextQuestionId: 'offshore-purpose',
        resultTags: ['type:offshore'],
      },
    ],
  },
  {
    id: 'direct-investment-method',
    category: '해외직접투자',
    question: '해외직접투자 방법을 선택해주세요',
    options: [
      {
        id: 'new-establishment',
        label: '현지법인 신규 설립',
        description: '해외에 새로운 법인을 설립',
        nextQuestionId: 'investment-amount',
        resultTags: ['method:new-establishment'],
      },
      {
        id: 'capital-participation',
        label: '기존 법인 지분 취득',
        description: '기존 외국 법인의 지분을 취득하여 경영 참여',
        nextQuestionId: 'investment-amount',
        resultTags: ['method:capital-participation'],
      },
      {
        id: 'branch',
        label: '지점/사무소 설치',
        description: '해외에 지점 또는 연락사무소 설치',
        nextQuestionId: 'investment-amount',
        resultTags: ['method:branch'],
      },
    ],
  },
  {
    id: 'securities-type',
    category: '증권취득',
    question: '취득하려는 증권 유형을 선택해주세요',
    options: [
      {
        id: 'listed-securities',
        label: '상장 증권',
        description: '외국 증권거래소에 상장된 주식, ETF 등',
        nextQuestionId: 'investment-amount',
        resultTags: ['securities:listed'],
      },
      {
        id: 'unlisted-securities',
        label: '비상장 증권',
        description: '비상장 주식, 사모펀드 지분 등',
        nextQuestionId: 'investment-amount',
        resultTags: ['securities:unlisted'],
      },
    ],
  },
  {
    id: 'offshore-purpose',
    category: '역외금융회사',
    question: '역외금융회사 투자 목적을 선택해주세요',
    options: [
      {
        id: 'holding',
        label: '지주회사 목적',
        description: '해외 자회사 관리를 위한 지주회사 설립',
        nextQuestionId: 'investment-amount',
        resultTags: ['offshore:holding'],
      },
      {
        id: 'spc',
        label: 'SPC/페이퍼컴퍼니',
        description: '특수목적회사(SPC) 설립',
        nextQuestionId: 'investment-amount',
        resultTags: ['offshore:spc'],
      },
    ],
  },
  {
    id: 'investment-amount',
    category: '투자 금액',
    question: '예상 투자 금액을 선택해주세요',
    description: '투자 금액에 따라 신고 기관이 달라질 수 있습니다',
    options: [
      {
        id: 'under-1m',
        label: '100만 달러 미만',
        resultTags: ['amount:under-1m'],
      },
      {
        id: '1m-to-10m',
        label: '100만 달러 이상 ~ 1,000만 달러 미만',
        resultTags: ['amount:1m-to-10m'],
      },
      {
        id: 'over-10m',
        label: '1,000만 달러 이상',
        resultTags: ['amount:over-10m'],
      },
    ],
  },
];

// 질문 ID로 질문 찾기
export const getQuestionById = (id: string): Question | undefined => {
  return questions.find((q) => q.id === id);
};

// 첫 번째 질문 ID
export const FIRST_QUESTION_ID = 'investor-type';

// 마지막 질문 ID들 (이 질문 이후 결과 페이지로 이동)
export const FINAL_QUESTION_IDS = ['investment-amount'];
