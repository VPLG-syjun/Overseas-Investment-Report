import type { Question } from '../types';

// 질문 데이터
export const questions: Question[] = [
  // ========================================
  // Step 1: 투자자 본인 확인
  // ========================================
  {
    id: 'investor-type',
    category: 'Step 1: 투자자 확인',
    question: '귀하(투자자)는 어떤 성격입니까?',
    options: [
      {
        id: 'individual',
        label: '개인 / 개인사업자',
        description: '개인 자격으로 해외 투자',
        nextQuestionId: 'individual-target',
        resultTags: ['investor:individual'],
      },
      {
        id: 'corporation',
        label: '법인 (일반)',
        description: '제조업, 서비스업 등 일반 기업',
        nextQuestionId: 'corporation-target',
        resultTags: ['investor:corporation'],
      },
      {
        id: 'financial',
        label: '금융회사',
        description: '은행, 증권, 보험, 카드, 자산운용사 등',
        nextQuestionId: 'financial-type',
        resultTags: ['investor:financial'],
      },
      {
        id: 'institutional',
        label: '기관투자가 (고유업무)',
        description: '은행, 증권사 등이 고유 업무로 해외증권에 투자하는 경우',
        nextQuestionId: 'institutional-type',
        resultTags: ['investor:institutional'],
      },
    ],
  },

  // ========================================
  // 개인 / 개인사업자 루트
  // ========================================
  {
    id: 'individual-target',
    category: '개인 / 개인사업자',
    question: '투자 대상은 무엇입니까?',
    options: [
      {
        id: 'individual-general',
        label: '일반 해외법인',
        description: '해외에 설립된 일반 법인 (현지법인 설립, 지분 취득 등)',
        nextQuestionId: 'individual-general-type',
        resultTags: ['investor:individual', 'target:general'],
      },
      {
        id: 'individual-offshore',
        label: '역외금융회사',
        description: '해외 펀드 등 역외금융회사',
        nextQuestionId: 'individual-offshore-ratio',
        resultTags: ['investor:individual', 'target:offshore'],
      },
      {
        id: 'individual-branch',
        label: '해외지사 설치',
        description: '법인 설립이 아닌 지점이나 사무소 설치',
        resultTags: ['investor:individual', 'purpose:branch'],
      },
    ],
  },
  {
    id: 'individual-general-type',
    category: '개인 / 개인사업자',
    question: '투자 유형은 무엇입니까?',
    options: [
      {
        id: 'individual-direct',
        label: '해외직접투자 (지분 10% 이상)',
        description: '경영 참여 목적, 지분 10% 이상 취득 또는 실질적 경영권 행사',
        resultTags: ['investor:individual', 'target:general', 'type:direct'],
      },
      {
        id: 'individual-securities',
        label: '해외증권취득 (지분 10% 미만)',
        description: '단순 포트폴리오 투자, 지분 10% 미만',
        resultTags: ['investor:individual', 'target:general', 'type:securities'],
      },
    ],
  },
  {
    id: 'individual-offshore-ratio',
    category: '개인 / 개인사업자',
    question: '역외금융회사 지분 취득 비율은 얼마입니까?',
    description: '개인/개인사업자의 역외금융회사 투자는 지분율 제한이 있습니다',
    options: [
      {
        id: 'individual-offshore-under10',
        label: '10% 미만',
        description: '가능 - 해외증권취득으로 신고',
        resultTags: ['investor:individual', 'target:offshore', 'ratio:under10'],
      },
      {
        id: 'individual-offshore-over10',
        label: '10% 이상',
        description: '불가 - 개인/개인사업자는 역외금융회사 10% 이상 취득이 제한됩니다',
        resultTags: ['investor:individual', 'target:offshore', 'ratio:over10', 'restricted'],
      },
    ],
  },

  // ========================================
  // 법인 (일반) 루트
  // ========================================
  {
    id: 'corporation-target',
    category: '법인 (일반)',
    question: '투자 대상은 무엇입니까?',
    options: [
      {
        id: 'corp-general',
        label: '일반 해외법인',
        description: '해외에 설립된 일반 법인 (현지법인 설립, 지분 취득 등)',
        nextQuestionId: 'corporation-general-type',
        resultTags: ['investor:corporation', 'target:general'],
      },
      {
        id: 'corp-offshore',
        label: '역외금융회사',
        description: '해외 펀드 등 역외금융회사',
        nextQuestionId: 'corporation-offshore-ratio',
        resultTags: ['investor:corporation', 'target:offshore'],
      },
      {
        id: 'corp-branch',
        label: '해외지사 설치',
        description: '법인 설립이 아닌 지점이나 사무소 설치',
        resultTags: ['investor:corporation', 'purpose:branch'],
      },
    ],
  },
  {
    id: 'corporation-general-type',
    category: '법인 (일반)',
    question: '투자 유형은 무엇입니까?',
    options: [
      {
        id: 'corp-direct',
        label: '해외직접투자 (지분 10% 이상)',
        description: '경영 참여 목적, 지분 10% 이상 취득 또는 실질적 경영권 행사',
        resultTags: ['investor:corporation', 'target:general', 'type:direct'],
      },
      {
        id: 'corp-securities',
        label: '해외증권취득 (지분 10% 미만)',
        description: '단순 포트폴리오 투자, 지분 10% 미만',
        resultTags: ['investor:corporation', 'target:general', 'type:securities'],
      },
    ],
  },
  {
    id: 'corporation-offshore-ratio',
    category: '법인 (일반)',
    question: '역외금융회사 지분 취득 비율은 얼마입니까?',
    options: [
      {
        id: 'corp-offshore-under10',
        label: '10% 미만',
        description: '해외증권취득으로 신고',
        resultTags: ['investor:corporation', 'target:offshore', 'ratio:under10'],
      },
      {
        id: 'corp-offshore-over10',
        label: '10% 이상',
        description: '가능 (조건부) - 한국은행/외국환은행에 신고',
        resultTags: ['investor:corporation', 'target:offshore', 'ratio:over10'],
      },
    ],
  },

  // ========================================
  // 금융회사 루트
  // ========================================
  {
    id: 'financial-type',
    category: '금융회사',
    question: '투자/진출의 형태가 무엇입니까?',
    description: '금융회사 해외진출 규정이 적용됩니다',
    options: [
      {
        id: 'financial-general',
        label: '일반 해외법인 투자 (직접투자)',
        description: '해외에 법인을 설립하거나 기존 법인의 지분 취득',
        nextQuestionId: 'financial-industry',
        resultTags: ['investor:financial', 'target:general'],
      },
      {
        id: 'financial-offshore',
        label: '역외금융회사 투자',
        description: '역외금융회사 (해외 펀드 등) 투자 - 지분율 제한 없음',
        resultTags: ['investor:financial', 'target:offshore'],
      },
      {
        id: 'financial-branch',
        label: '현지 지점 또는 사무소 설치',
        description: '해외에 지점이나 사무소 설치',
        resultTags: ['investor:financial', 'purpose:branch'],
      },
    ],
  },
  {
    id: 'financial-industry',
    category: '금융회사',
    question: '투자 대상 해외 법인의 업종은 무엇입니까?',
    description: '업종에 따라 신고 기관이 달라집니다',
    options: [
      {
        id: 'financial-industry-fin',
        label: '금융/보험업',
        description: '은행, 증권, 보험, 자산운용 등 금융업',
        resultTags: ['investor:financial', 'target:general', 'industry:financial'],
      },
      {
        id: 'financial-industry-non',
        label: '비금융업',
        description: '부동산, IT, 제조업 등 비금융업',
        resultTags: ['investor:financial', 'target:general', 'industry:non-financial'],
      },
    ],
  },

  // ========================================
  // 기관투자가 루트
  // ========================================
  {
    id: 'institutional-type',
    category: '기관투자가',
    question: '투자 형태가 무엇입니까?',
    description: '기관투자가의 고유 업무로서 투자하는 경우입니다',
    options: [
      {
        id: 'institutional-securities',
        label: '해외증권 취득 (고유 업무)',
        description: '은행, 증권사 등이 고유 업무로 해외증권에 투자',
        resultTags: ['investor:institutional', 'type:securities'],
      },
      {
        id: 'institutional-other',
        label: '그 외 투자',
        description: '고유 업무 외의 투자인 경우 → 금융회사 절차 적용',
        nextQuestionId: 'financial-type',
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
  // 개인
  'individual-target',        // 해외지사 선택 시
  'individual-general-type',  // 일반법인 투자유형 선택 시
  'individual-offshore-ratio', // 역외금융회사 지분율 선택 시
  // 법인
  'corporation-target',        // 해외지사 선택 시
  'corporation-general-type',  // 일반법인 투자유형 선택 시
  'corporation-offshore-ratio', // 역외금융회사 지분율 선택 시
  // 금융회사
  'financial-type',           // 역외금융회사, 지사 선택 시
  'financial-industry',       // 일반법인 업종 선택 시
  // 기관투자가
  'institutional-type',       // 고유업무 증권취득 선택 시
];
