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
      {
        id: 'institutional',
        label: '기관투자가',
        description: '은행, 증권사 등이 고유 업무로 해외증권에 투자하는 경우',
        nextQuestionId: 'route-c-type',
        resultTags: ['investor:institutional'],
      },
    ],
  },

  // ========================================
  // 루트 A: 개인 또는 일반 법인 (외국환거래규정 적용)
  // ========================================
  {
    id: 'route-a-purpose',
    category: '루트 A: 일반 투자자',
    question: '투자 목적이 무엇입니까?',
    description: '외국환거래규정이 적용됩니다',
    options: [
      {
        id: 'a1-direct',
        label: '경영 참여 또는 지분 투자 (해외직접투자)',
        description: '지분 10% 이상 취득하거나, 10% 미만이라도 임원 파견/계약 체결 등 실질적 경영권 행사',
        nextQuestionId: 'route-a-target',
        resultTags: ['route:a', 'purpose:direct-investment'],
      },
      {
        id: 'a2-securities',
        label: '단순 투자 (해외증권취득)',
        description: '지분 10% 미만의 주식, 채권 등 포트폴리오 투자',
        nextQuestionId: 'route-a-securities-target',
        resultTags: ['route:a', 'purpose:securities'],
      },
      {
        id: 'a3-branch',
        label: '현지 영업소 설치 (해외지사)',
        description: '법인 설립이 아닌 지점이나 사무소 설치',
        resultTags: ['route:a', 'purpose:branch'],
      },
    ],
  },

  // 루트 A - 해외직접투자 시 투자 대상 확인
  {
    id: 'route-a-target',
    category: '루트 A: 일반 투자자',
    question: '투자 대상은 무엇입니까?',
    options: [
      {
        id: 'a-target-general',
        label: '일반 해외법인',
        description: '해외에 설립된 일반 법인 (현지법인 설립, 지분 취득 등)',
        resultTags: ['route:a', 'purpose:direct-investment', 'target:general'],
      },
      {
        id: 'a-target-offshore',
        label: '역외금융회사',
        description: '실체 없는 역외금융회사 (해외 펀드 등)',
        resultTags: ['route:a', 'purpose:direct-investment', 'target:offshore'],
      },
    ],
  },

  // 루트 A - 해외증권취득 시 투자 대상 확인
  {
    id: 'route-a-securities-target',
    category: '루트 A: 일반 투자자',
    question: '취득하려는 증권의 발행 주체는 무엇입니까?',
    options: [
      {
        id: 'a-sec-general',
        label: '일반 해외법인 증권',
        description: '해외 상장/비상장 주식, 채권 등',
        resultTags: ['route:a', 'purpose:securities', 'target:general'],
      },
      {
        id: 'a-sec-offshore',
        label: '역외금융회사 증권',
        description: '역외금융회사(해외 펀드 등)의 지분 취득',
        resultTags: ['route:a', 'purpose:securities', 'target:offshore'],
      },
    ],
  },

  // ========================================
  // 루트 B: 금융회사 (금융회사 해외진출 규정 적용)
  // ========================================
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
        nextQuestionId: 'route-b-target',
        resultTags: ['route:b', 'type:direct'],
      },
      {
        id: 'b2-branch',
        label: '현지 지점 또는 사무소 설치',
        description: '해외에 지점이나 사무소 설치',
        resultTags: ['route:b', 'type:branch'],
      },
    ],
  },

  // 루트 B - 직접투자 시 투자 대상 확인
  {
    id: 'route-b-target',
    category: '루트 B: 금융회사',
    question: '투자 대상은 무엇입니까?',
    options: [
      {
        id: 'b-target-general',
        label: '일반 해외법인',
        description: '해외에 설립된 일반 법인',
        nextQuestionId: 'route-b-industry',
        resultTags: ['route:b', 'type:direct', 'target:general'],
      },
      {
        id: 'b-target-offshore',
        label: '역외금융회사',
        description: '역외금융회사 (해외 펀드 등)',
        resultTags: ['route:b', 'type:direct', 'target:offshore'],
      },
    ],
  },

  // 루트 B - 일반 해외법인 직접투자 시 업종 확인
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
        resultTags: ['route:b', 'type:direct', 'target:general', 'industry:financial'],
      },
      {
        id: 'b1-non-financial-industry',
        label: '비금융업',
        description: '부동산, IT, 제조업 등 비금융업',
        resultTags: ['route:b', 'type:direct', 'target:general', 'industry:non-financial'],
      },
    ],
  },

  // ========================================
  // 루트 C: 기관투자가 (신고 예외)
  // ========================================
  {
    id: 'route-c-type',
    category: '루트 C: 기관투자가',
    question: '투자 형태가 무엇입니까?',
    description: '기관투자가의 고유 업무로서 투자하는 경우입니다',
    options: [
      {
        id: 'c1-securities',
        label: '해외증권 취득 (고유 업무)',
        description: '은행, 증권사 등이 고유 업무로 해외증권에 투자',
        resultTags: ['route:c', 'type:securities'],
      },
      {
        id: 'c2-other',
        label: '그 외 투자',
        description: '고유 업무 외의 투자인 경우',
        nextQuestionId: 'route-b-type',
        resultTags: ['investor:financial'],
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
export const FINAL_QUESTION_IDS = [
  'route-a-purpose',      // 해외지사 설치 선택 시
  'route-a-target',       // 해외직접투자 대상 선택 시
  'route-a-securities-target', // 해외증권취득 대상 선택 시
  'route-b-type',         // 금융회사 지사 설치 선택 시
  'route-b-target',       // 금융회사 역외금융회사 선택 시
  'route-b-industry',     // 금융회사 일반법인 업종 선택 시
  'route-c-type',         // 기관투자가 선택 시
];
