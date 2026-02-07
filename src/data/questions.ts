import type { Question } from '../types';

// 질문 데이터 - 법령 기반 Decision Tree
export const questions: Question[] = [
  // ========================================
  // [Level 1] 투자자 본인 식별
  // ========================================
  {
    id: 'q1-investor-type',
    category: 'Level 1: 투자자 식별',
    question: '귀하(투자자)는 어떤 범주에 해당합니까?',
    options: [
      {
        id: 'financial-company',
        label: '금융회사',
        description: '은행, 증권, 보험, 운용사 등 「금융회사 해외진출 규정」 적용 대상',
        nextQuestionId: 'q2-investment-type-financial',
        resultTags: ['investor:financial'],
      },
      {
        id: 'corporation',
        label: '영리법인',
        description: '일반 기업 (제조업, 서비스업 등)',
        nextQuestionId: 'q2-investment-type-general',
        resultTags: ['investor:corporation'],
      },
      {
        id: 'individual',
        label: '개인 또는 개인사업자',
        description: '개인 자격으로 해외 투자',
        nextQuestionId: 'q2-investment-type-general',
        resultTags: ['investor:individual'],
      },
    ],
  },

  // ========================================
  // [Level 2] 투자 대상 및 방식 식별
  // ========================================

  // 일반인/일반법인용
  {
    id: 'q2-investment-type-general',
    category: 'Level 2: 투자 방식',
    question: '어떤 형태의 투자를 계획하고 계십니까?',
    options: [
      {
        id: 'establish-or-acquire',
        label: '해외 현지법인 설립 또는 지분 취득',
        description: '주식, 출자지분 취득',
        nextQuestionId: 'q3-is-offshore',
        resultTags: ['method:equity'],
      },
      {
        id: 'branch-office',
        label: '해외 지점 또는 사무소 설치',
        description: '법인격 없는 영업소',
        resultTags: ['method:branch'],
      },
      {
        id: 'fund-or-spc',
        label: '해외 펀드 또는 특수목적법인(SPC) 투자',
        description: '현지 실체 없는 역외금융회사',
        nextQuestionId: 'q4-offshore-ratio',
        resultTags: ['method:offshore'],
      },
    ],
  },

  // 금융회사용
  {
    id: 'q2-investment-type-financial',
    category: 'Level 2: 투자 방식',
    question: '어떤 형태의 투자를 계획하고 계십니까?',
    description: '「금융회사 해외진출 규정」이 적용됩니다',
    options: [
      {
        id: 'fin-establish-or-acquire',
        label: '해외 현지법인 설립 또는 지분 취득',
        description: '주식, 출자지분 취득',
        nextQuestionId: 'q3-financial-industry',
        resultTags: ['investor:financial', 'method:equity'],
      },
      {
        id: 'fin-branch-office',
        label: '해외 지점 또는 사무소 설치',
        description: '법인격 없는 영업소',
        resultTags: ['investor:financial', 'method:branch'],
      },
      {
        id: 'fin-fund-or-spc',
        label: '해외 펀드 또는 특수목적법인(SPC) 투자',
        description: '현지 실체 없는 역외금융회사',
        resultTags: ['investor:financial', 'method:offshore'],
      },
    ],
  },

  // ========================================
  // [Level 3] 상세 경로 판별
  // ========================================

  // Case 1: 일반인/일반법인 - 역외금융회사 여부 확인
  {
    id: 'q3-is-offshore',
    category: 'Level 3: 투자 대상',
    question: '투자하려는 대상이 "역외금융회사"입니까?',
    description: '역외금융회사: 현지 사무실/인력이 없는 펀드, SPC 등',
    options: [
      {
        id: 'is-offshore-yes',
        label: '예 (역외금융회사)',
        description: '현지 실체가 없는 펀드, 페이퍼컴퍼니 등',
        nextQuestionId: 'q4-offshore-ratio',
        resultTags: ['target:offshore'],
      },
      {
        id: 'is-offshore-no',
        label: '아니오 (일반 해외법인)',
        description: '현지에 실제 사업장이 있는 법인',
        nextQuestionId: 'q5-general-ratio',
        resultTags: ['target:general'],
      },
    ],
  },

  // Case 1: 역외금융회사 - 지분율 확인
  {
    id: 'q4-offshore-ratio',
    category: 'Level 3: 지분율',
    question: '취득하려는 지분율이 어떻게 됩니까?',
    description: '지분율에 따라 신고 방식과 가능 여부가 달라집니다',
    options: [
      {
        id: 'offshore-under-10',
        label: '10% 미만',
        description: '해외증권취득으로 신고',
        resultTags: ['target:offshore', 'ratio:under10'],
      },
      {
        id: 'offshore-over-10',
        label: '10% 이상',
        description: '개인은 투자 불가, 법인은 해외직접투자로 신고',
        resultTags: ['target:offshore', 'ratio:over10'],
      },
    ],
  },

  // Case 1: 일반법인 - 지분율/방식 확인
  {
    id: 'q5-general-ratio',
    category: 'Level 3: 투자 유형',
    question: '지분율 또는 투자 방식이 무엇입니까?',
    options: [
      {
        id: 'general-direct',
        label: '지분 10% 이상 취득 또는 임원 파견/1년 이상 파견 계약',
        description: '경영 참여 목적 → 해외직접투자',
        resultTags: ['target:general', 'type:direct'],
      },
      {
        id: 'general-securities',
        label: '지분 10% 미만 (단순 투자)',
        description: '포트폴리오 투자 → 해외증권취득',
        resultTags: ['target:general', 'type:securities'],
      },
    ],
  },

  // Case 2: 금융회사 - 업종 확인
  {
    id: 'q3-financial-industry',
    category: 'Level 3: 투자 업종',
    question: '해외에서 영위하려는 사업의 업종이 무엇입니까?',
    description: '업종에 따라 신고 기관이 달라집니다',
    options: [
      {
        id: 'fin-industry-financial',
        label: '금융·보험업',
        description: '금융위원회 신고수리 (금감원 경유)',
        resultTags: ['investor:financial', 'method:equity', 'industry:financial'],
      },
      {
        id: 'fin-industry-non-financial',
        label: '비금융업',
        description: '금융감독원 신고',
        resultTags: ['investor:financial', 'method:equity', 'industry:non-financial'],
      },
    ],
  },
];

// 질문 ID로 질문 찾기
export const getQuestionById = (id: string): Question | undefined => {
  return questions.find((q) => q.id === id);
};

// 첫 번째 질문 ID
export const FIRST_QUESTION_ID = 'q1-investor-type';

// 마지막 질문 ID들 (이 질문 이후 결과 페이지로 이동)
export const FINAL_QUESTION_IDS = [
  'q2-investment-type-general',   // 지점/사무소 선택 시
  'q2-investment-type-financial', // 금융회사 지점/사무소, 역외금융회사 선택 시
  'q4-offshore-ratio',            // 역외금융회사 지분율 선택 시
  'q5-general-ratio',             // 일반법인 투자유형 선택 시
  'q3-financial-industry',        // 금융회사 업종 선택 시
];
