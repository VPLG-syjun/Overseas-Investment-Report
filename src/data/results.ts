import type { ReportType, ResultRule } from '../types';
import { agencies, forms } from './agencies';

// 신고 유형 데이터
export const reportTypes: Record<string, ReportType> = {
  // ========================================
  // 일반 직접투자 (영리법인/개인 - 일반법인 10% 이상)
  // ========================================
  'general-direct': {
    id: 'general-direct',
    name: '해외직접투자 신고',
    description:
      '해외 현지법인에 지분 10% 이상 취득하거나, 임원 파견/1년 이상 제품매매 계약 등 경영 참여 목적의 투자입니다.',
    agency: agencies['forex-bank'],
    requiredForms: [forms['form-direct-investment']],
    requiredDocuments: [
      '해외직접투자신고서',
      '사업계획서',
      '신용정보조회서',
      '조세체납증명서 (납세증명서)',
      '주민등록등본 (개인) / 법인등기부등본 (법인)',
    ],
    legalBasis: '외국환거래규정 제9장',
    notes: [
      '📌 신고 시점: 사전 신고 (송금 전 완료 필수)',
      '📌 신고 기관: 지정거래 외국환은행장',
      '신고 수리 후 1년 이내 투자 이행',
    ],
  },

  // ========================================
  // 일반 증권취득 (영리법인/개인 - 일반법인 10% 미만)
  // ========================================
  'general-securities': {
    id: 'general-securities',
    name: '증권취득 신고',
    description:
      '해외 법인의 지분을 10% 미만으로 단순 자산 운용 목적으로 투자하는 경우입니다.',
    agency: agencies['bok'],
    requiredForms: [forms['form-securities']],
    requiredDocuments: [
      '증권취득신고서',
      '취득 사유서',
      '증권 가치 입증 서류',
    ],
    legalBasis: '외국환거래규정 제7장',
    notes: [
      '📌 신고 시점: 사전 신고',
      '📌 신고 기관: 한국은행총재 (증권사를 통하지 않는 경우)',
      '금융투자업자(증권사) 통한 상장증권 취득 시 별도 신고 불요할 수 있음',
    ],
  },

  // ========================================
  // 해외지사 설치 (영리법인/개인)
  // ========================================
  'general-branch': {
    id: 'general-branch',
    name: '해외지사 설치 신고',
    description:
      '해외에 법인격 없는 지점 또는 사무소를 설치하는 경우입니다.',
    agency: agencies['forex-bank'],
    requiredForms: [forms['form-branch']],
    requiredDocuments: [
      '해외지사 설치 신고서',
      '사업계획서',
      '납세증명서',
      '신용정보조회서',
    ],
    legalBasis: '외국환거래규정 제9장',
    notes: [
      '📌 신고 시점: 사전 신고',
      '📌 신고 기관: 지정거래 외국환은행장',
      '설치비, 영업기금 송금 목적',
    ],
  },

  // ========================================
  // 역외금융회사 - 10% 미만 (증권취득)
  // ========================================
  'offshore-securities': {
    id: 'offshore-securities',
    name: '증권취득 신고 (역외금융회사)',
    description:
      '역외금융회사(투자목적 페이퍼컴퍼니, SPC 등)의 지분을 10% 미만으로 취득하는 경우입니다.',
    agency: agencies['bok'],
    requiredForms: [forms['form-securities']],
    requiredDocuments: [
      '증권취득신고서',
      '취득 사유서',
      '증권 가치 입증 서류',
    ],
    legalBasis: '외국환거래규정 제7장',
    notes: [
      '📌 신고 시점: 사전 신고',
      '📌 신고 기관: 한국은행총재 (또는 증권사 대행)',
      '일반 증권취득 절차 준용',
    ],
  },

  // ========================================
  // 역외금융회사 - 10% 이상 (영리법인만 가능)
  // ========================================
  'offshore-direct-corporation': {
    id: 'offshore-direct-corporation',
    name: '역외금융회사 투자 신고',
    description:
      '영리법인이 역외금융회사(투자목적 페이퍼컴퍼니)의 지분을 10% 이상 취득하는 경우입니다.',
    agency: agencies['bok'],
    requiredForms: [forms['form-offshore-investment']],
    requiredDocuments: [
      '역외금융회사 투자신고서',
      '사업계획서',
      '투자자금 내역서',
    ],
    legalBasis: '외국환거래규정 제9장',
    notes: [
      '📌 신고 시점: 사전 신고',
      '📌 신고 기관: 한국은행총재',
      '해외직접투자 요건 충족 시 적용',
    ],
  },

  // ========================================
  // 역외금융회사 - 10% 이상 (개인 투자 불가)
  // ========================================
  'offshore-restricted-individual': {
    id: 'offshore-restricted-individual',
    name: '투자 불가 (규정상 금지)',
    description:
      '개인 또는 개인사업자는 역외금융회사의 지분을 10% 이상 취득할 수 없습니다.',
    agency: agencies['forex-bank'],
    requiredForms: [],
    requiredDocuments: [],
    legalBasis: '외국환거래규정 제9-15조의2',
    notes: [
      '⚠️ 개인/개인사업자의 역외금융회사 10% 이상 취득은 규정상 금지',
      '📌 대안 1: 영리법인을 설립하여 투자',
      '📌 대안 2: 10% 미만으로 투자 (해외증권취득 신고)',
      '전문가 상담을 권장합니다',
    ],
  },

  // ========================================
  // 금융회사 - 금융/보험업 직접투자
  // ========================================
  'financial-direct-fin': {
    id: 'financial-direct-fin',
    name: '해외직접투자 신고수리 (금융위원회)',
    description:
      '금융회사가 해외에 금융·보험업 법인을 설립하거나 지분을 취득하는 경우입니다.',
    agency: agencies['fsc'],
    requiredForms: [forms['form-b-financial']],
    requiredDocuments: [
      '투자신고서',
      '향후 3년간 사업계획서 및 추정재무제표',
      '이사회 의사록',
      '외화경비 조달계획서',
      '현지법인 정관 및 최근 결산서',
    ],
    legalBasis: '금융회사의 해외진출에 관한 규정 제3조',
    notes: [
      '📌 신고 시점: 사전 신고 (수리 필요)',
      '📌 신고 기관: 금융위원회 (금융감독원 경유)',
    ],
  },

  // ========================================
  // 금융회사 - 비금융업 직접투자
  // ========================================
  'financial-direct-non': {
    id: 'financial-direct-non',
    name: '해외직접투자 신고 (금융감독원)',
    description:
      '금융회사가 해외에 비금융업(핀테크, 부동산 등) 법인을 설립하거나 지분을 취득하는 경우입니다.',
    agency: agencies['fss'],
    requiredForms: [forms['form-b-non-financial']],
    requiredDocuments: [
      '투자신고서',
      '사업계획서',
      '주식평가의견서 (비상장주식의 경우)',
      '조세체납 여부 증빙',
    ],
    legalBasis: '금융회사의 해외진출에 관한 규정 제3조',
    notes: [
      '📌 신고 시점: 사전 신고',
      '📌 신고 기관: 금융감독원장',
    ],
  },

  // ========================================
  // 금융회사 - 역외금융회사 투자
  // ========================================
  'financial-offshore': {
    id: 'financial-offshore',
    name: '역외금융회사 투자 보고 (금융감독원)',
    description:
      '금융회사가 역외금융회사(SPC, 펀드 등)에 투자하는 경우입니다.',
    agency: agencies['fss'],
    requiredForms: [forms['form-b-offshore']],
    requiredDocuments: [
      '역외금융회사 투자보고서',
      '사업계획서',
      '투자약정서 (LPA 등)',
    ],
    legalBasis: '금융회사의 해외진출에 관한 규정 제4조',
    notes: [
      '📌 신고 시점: 사후 보고 (투자 후 1개월 이내)',
      '📌 신고 기관: 금융감독원장',
    ],
  },

  // ========================================
  // 금융회사 - 해외지사 설치
  // ========================================
  'financial-branch': {
    id: 'financial-branch',
    name: '해외지사 설치 보고 (금융감독원)',
    description:
      '금융회사가 해외에 지점 또는 사무소를 설치하는 경우입니다.',
    agency: agencies['fss'],
    requiredForms: [forms['form-b-branch']],
    requiredDocuments: [
      '설치보고서',
      '송금확인서',
      '설립증빙',
    ],
    legalBasis: '금융회사의 해외진출에 관한 규정 제4조',
    notes: [
      '📌 신고 시점: 사후 보고 (설치 후 1개월 이내)',
      '📌 신고 기관: 금융감독원장',
    ],
  },

  // ========================================
  // 공통 사후관리 안내
  // ========================================
  'common-post-management': {
    id: 'common-post-management',
    name: '사후관리 의무 안내',
    description:
      '신고가 끝이 아닙니다. 투자 이후에도 지속적인 보고 및 관리 의무가 있습니다.',
    agency: agencies['forex-bank'],
    requiredForms: [],
    requiredDocuments: [],
    legalBasis: '외국환거래규정, 금융회사의 해외진출에 관한 규정',
    notes: [
      '📌 송금 보고: 투자금 송금 후 즉시 또는 1개월 내 보고',
      '📌 내용 변경 보고: 변경 발생 시 3개월 이내',
      '📌 연간 사업실적 보고: 회계연도 종료 후 5개월 이내',
      '📌 청산/회수 신고: 투자 종료 시 신고 필요',
    ],
  },
};

// 결과 매핑 규칙
export const resultRules: ResultRule[] = [
  // ========================================
  // 영리법인/개인 - 일반법인 투자
  // ========================================
  {
    id: 'rule-general-direct',
    requiredTags: ['target:general', 'type:direct'],
    reportTypes: ['general-direct', 'common-post-management'],
  },
  {
    id: 'rule-general-securities',
    requiredTags: ['target:general', 'type:securities'],
    reportTypes: ['general-securities', 'common-post-management'],
  },

  // ========================================
  // 영리법인/개인 - 해외지사 설치
  // ========================================
  {
    id: 'rule-general-branch-corp',
    requiredTags: ['investor:corporation', 'method:branch'],
    reportTypes: ['general-branch', 'common-post-management'],
  },
  {
    id: 'rule-general-branch-indiv',
    requiredTags: ['investor:individual', 'method:branch'],
    reportTypes: ['general-branch', 'common-post-management'],
  },

  // ========================================
  // 역외금융회사 - 10% 미만 (영리법인)
  // ========================================
  {
    id: 'rule-offshore-under10-corp',
    requiredTags: ['investor:corporation', 'target:offshore', 'ratio:under10'],
    reportTypes: ['offshore-securities', 'common-post-management'],
  },
  {
    id: 'rule-offshore-under10-corp-method',
    requiredTags: ['investor:corporation', 'method:offshore', 'ratio:under10'],
    reportTypes: ['offshore-securities', 'common-post-management'],
  },

  // ========================================
  // 역외금융회사 - 10% 미만 (개인)
  // ========================================
  {
    id: 'rule-offshore-under10-indiv',
    requiredTags: ['investor:individual', 'target:offshore', 'ratio:under10'],
    reportTypes: ['offshore-securities', 'common-post-management'],
  },
  {
    id: 'rule-offshore-under10-indiv-method',
    requiredTags: ['investor:individual', 'method:offshore', 'ratio:under10'],
    reportTypes: ['offshore-securities', 'common-post-management'],
  },

  // ========================================
  // 역외금융회사 - 10% 이상 (영리법인 - 가능)
  // ========================================
  {
    id: 'rule-offshore-over10-corp',
    requiredTags: ['investor:corporation', 'target:offshore', 'ratio:over10'],
    reportTypes: ['offshore-direct-corporation', 'common-post-management'],
  },
  {
    id: 'rule-offshore-over10-corp-method',
    requiredTags: ['investor:corporation', 'method:offshore', 'ratio:over10'],
    reportTypes: ['offshore-direct-corporation', 'common-post-management'],
  },

  // ========================================
  // 역외금융회사 - 10% 이상 (개인 - 불가)
  // ========================================
  {
    id: 'rule-offshore-over10-indiv',
    requiredTags: ['investor:individual', 'target:offshore', 'ratio:over10'],
    reportTypes: ['offshore-restricted-individual'],
  },
  {
    id: 'rule-offshore-over10-indiv-method',
    requiredTags: ['investor:individual', 'method:offshore', 'ratio:over10'],
    reportTypes: ['offshore-restricted-individual'],
  },

  // ========================================
  // 금융회사 - 현지법인 (금융업)
  // ========================================
  {
    id: 'rule-financial-direct-fin',
    requiredTags: ['investor:financial', 'method:equity', 'industry:financial'],
    reportTypes: ['financial-direct-fin', 'common-post-management'],
  },

  // ========================================
  // 금융회사 - 현지법인 (비금융업)
  // ========================================
  {
    id: 'rule-financial-direct-non',
    requiredTags: ['investor:financial', 'method:equity', 'industry:non-financial'],
    reportTypes: ['financial-direct-non', 'common-post-management'],
  },

  // ========================================
  // 금융회사 - 역외금융회사
  // ========================================
  {
    id: 'rule-financial-offshore',
    requiredTags: ['investor:financial', 'method:offshore'],
    reportTypes: ['financial-offshore', 'common-post-management'],
  },

  // ========================================
  // 금융회사 - 해외지사
  // ========================================
  {
    id: 'rule-financial-branch',
    requiredTags: ['investor:financial', 'method:branch'],
    reportTypes: ['financial-branch', 'common-post-management'],
  },
];

// 태그 기반으로 적용되는 신고 유형 찾기
export const findApplicableReportTypes = (tags: string[]): ReportType[] => {
  const applicableTypeIds = new Set<string>();

  for (const rule of resultRules) {
    const hasAllRequired = rule.requiredTags.every((tag) => tags.includes(tag));
    const hasNoExcluded = !rule.excludeTags?.some((tag) => tags.includes(tag));

    if (hasAllRequired && hasNoExcluded) {
      rule.reportTypes.forEach((id) => applicableTypeIds.add(id));
    }
  }

  return Array.from(applicableTypeIds)
    .map((id) => reportTypes[id])
    .filter(Boolean);
};
