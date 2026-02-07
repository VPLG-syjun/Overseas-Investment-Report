import type { Question } from '../types';

// 질문 데이터
export const questions: Question[] = [
  // Step 1: 투자자 본인 확인
  {
    id: 'investor-type',
    category: 'Step 1: 투자자 확인',
    question: '귀하(투자자)는 어떤 성격입니까?',
    options: [
      {
        id: 'general',
        label: '개인 또는 일반 법인',
        description: '제조업, 서비스업 등 일반 기업',
        nextQuestionId: 'route-a-purpose',
        resultTags: ['investor:general'],
      },
      {
        id: 'financial',
        label: '금융회사',
        description: '은행, 증권, 보험, 카드, 자산운용사 등',
        nextQuestionId: 'route-b-type',
        resultTags: ['investor:financial'],
      },
    ],
  },

  // 루트 A: 개인 또는 일반 법인 (외국환거래규정 적용)
  {
    id: 'route-a-purpose',
    category: '루트 A: 일반 투자자',
    question: '투자 목적이 무엇입니까?',
    description: '외국환거래규정이 적용됩니다',
    options: [
      {
        id: 'a1-direct',
        label: '경영 참여 또는 지분 투자',
        description: '지분 10% 이상 취득하거나, 10% 미만이라도 임원 파견/계약 체결 등 실질적 경영권 행사',
        resultTags: ['route:a', 'purpose:direct-investment'],
      },
      {
        id: 'a2-securities',
        label: '단순 투자 (포트폴리오 투자)',
        description: '지분 10% 미만의 주식, 채권 등 포트폴리오 투자',
        resultTags: ['route:a', 'purpose:securities'],
      },
      {
        id: 'a3-branch',
        label: '현지 영업소 설치',
        description: '법인 설립이 아닌 지점이나 사무소 설치',
        resultTags: ['route:a', 'purpose:branch'],
      },
      {
        id: 'a4-offshore',
        label: '해외 펀드 투자',
        description: '실체 없는 역외금융회사의 지분 취득',
        resultTags: ['route:a', 'purpose:offshore'],
      },
    ],
  },

  // 루트 B: 금융회사 (금융회사 해외진출 규정 적용)
  {
    id: 'route-b-type',
    category: '루트 B: 금융회사',
    question: '투자/진출의 형태가 무엇입니까?',
    description: '금융회사 해외진출 규정이 적용됩니다',
    options: [
      {
        id: 'b1-direct',
        label: '해외 법인 설립 또는 지분 투자 (직접투자)',
        description: '해외에 법인을 설립하거나 기존 법인의 지분 취득',
        nextQuestionId: 'route-b-industry',
        resultTags: ['route:b', 'type:direct'],
      },
      {
        id: 'b2-branch',
        label: '현지 지점 또는 사무소 설치',
        description: '해외에 지점이나 사무소 설치',
        resultTags: ['route:b', 'type:branch'],
      },
      {
        id: 'b3-offshore',
        label: '역외금융회사(해외 펀드 등) 투자',
        description: '역외금융회사에 대한 투자',
        resultTags: ['route:b', 'type:offshore'],
      },
    ],
  },

  // 루트 B - Q3: 직접투자 시 업종 확인
  {
    id: 'route-b-industry',
    category: '루트 B: 금융회사',
    question: '투자 대상 해외 법인의 업종은 무엇입니까?',
    description: '업종에 따라 신고 기관이 달라집니다',
    options: [
      {
        id: 'b1-financial-industry',
        label: '금융/보험업',
        description: '은행, 증권, 보험, 자산운용 등 금융업',
        resultTags: ['route:b', 'type:direct', 'industry:financial'],
      },
      {
        id: 'b1-non-financial-industry',
        label: '비금융업',
        description: '부동산, IT, 제조업 등 비금융업',
        resultTags: ['route:b', 'type:direct', 'industry:non-financial'],
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
export const FINAL_QUESTION_IDS = ['route-a-purpose', 'route-b-type', 'route-b-industry'];
