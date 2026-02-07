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
      '해외 현지법인에 지분 10% 이상 취득하거나, 임원 파견/1년 이상 파견 계약 등 경영 참여 목적의 투자입니다.',
    agency: agencies['forex-bank'],
    requiredForms: [forms['form-direct-investment']],
    requiredDocuments: [
      '해외직접투자 신고서 (별지 제9-1호)',
      '사업계획서',
      '정관(안)',
      '납세증명서 (국세, 지방세)',
      '신용정보조회동의서',
    ],
    legalBasis: '외국환거래규정 제9장',
    notes: [
      '신고 시점: 사전 신고 (송금 전 완료 필수)',
      '신고 수리 후 1년 이내 투자 이행',
    ],
  },

  // ========================================
  // 일반 증권취득 (영리법인/개인 - 일반법인 10% 미만)
  // ========================================
  'general-securities': {
    id: 'general-securities',
    name: '해외증권취득 신고',
    description:
      '해외 법인의 지분을 10% 미만으로 단순 투자(포트폴리오 투자)하는 경우입니다.',
    agency: agencies['forex-bank'],
    requiredForms: [forms['form-securities']],
    requiredDocuments: [
      '해외증권취득 신고서 (별지 제7-10호)',
      '증권취득 원인서류',
      '납세증명서 (국세, 지방세)',
      '신용정보조회동의서',
    ],
    legalBasis: '외국환거래규정 제7장',
    notes: [
      '신고 시점: 사전 신고',
      '금융투자업자 통한 상장증권 취득 시 별도 신고 불요할 수 있음',
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
      '해외지사 설치 신고서 (별지 제9-4호)',
      '사업계획서',
      '납세증명서 (국세, 지방세)',
      '신용정보조회동의서',
    ],
    legalBasis: '외국환거래규정 제9장',
    notes: [
      '신고 시점: 사전 신고',
      '설치비, 영업기금 송금 목적',
    ],
  },

  // ========================================
  // 역외금융회사 - 10% 미만 (해외증권취득)
  // ========================================
  'offshore-securities': {
    id: 'offshore-securities',
    name: '해외증권취득 신고 (역외금융회사)',
    description:
      '역외금융회사(현지 실체 없는 펀드, SPC 등)의 지분을 10% 미만으로 취득하는 경우입니다.',
    agency: agencies['bok-forex'],
    requiredForms: [forms['form-offshore-securities']],
    requiredDocuments: [
      '해외증권취득 신고서',
      '펀드 개요서 (PPM)',
      '납세증명서 (국세, 지방세)',
      '신용정보조회동의서',
    ],
    legalBasis: '외국환거래규정 제7장 제4절',
    notes: [
      '신고 시점: 사전 신고',
      '신고 기관: 지정거래외국환은행 또는 한국은행',
    ],
  },

  // ========================================
  // 역외금융회사 - 10% 이상 (영리법인만 가능)
  // ========================================
  'offshore-direct-corporation': {
    id: 'offshore-direct-corporation',
    name: '해외직접투자 신고 (역외금융회사)',
    description:
      '영리법인이 역외금융회사의 지분을 10% 이상 취득하는 경우입니다.',
    agency: agencies['forex-bank'],
    requiredForms: [forms['form-direct-investment']],
    requiredDocuments: [
      '해외직접투자 신고서 (별지 제9-1호)',
      '사업계획서',
      '펀드 개요서 (PPM)',
      '납세증명서 (국세, 지방세)',
      '신용정보조회동의서',
      '법인등기부등본',
    ],
    legalBasis: '외국환거래규정 제9장',
    notes: [
      '신고 시점: 사전 신고',
      '신고 기관: 지정거래외국환은행',
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
      '⚠️ 개인/개인사업자의 역외금융회사 10% 이상 취득은 규정상 금지됩니다',
      '대안 1: 영리법인을 통한 투자',
      '대안 2: 10% 미만으로 투자',
      '전문가 상담을 권장합니다',
    ],
  },

  // ========================================
  // 금융회사 - 금융/보험업 직접투자
  // ========================================
  'financial-direct-fin': {
    id: 'financial-direct-fin',
    name: '해외직접투자 신고 (금융위원회 신고수리)',
    description:
      '금융회사가 해외에 금융·보험업 법인을 설립하거나 지분을 취득하는 경우입니다.',
    agency: agencies['fsc'],
    requiredForms: [forms['form-b-financial']],
    requiredDocuments: [
      '해외직접투자 신고서',
      '이사회 의결서',
      '사업계획서',
      '재무건전성 자료 (BIS 비율 등)',
      '정관',
    ],
    legalBasis: '금융회사의 해외진출에 관한 규정 제3조',
    notes: [
      '신고 시점: 사전 신고 (수리 필요)',
      '금융감독원 경유 → 금융위원회 최종 수리',
    ],
  },

  // ========================================
  // 금융회사 - 비금융업 직접투자
  // ========================================
  'financial-direct-non': {
    id: 'financial-direct-non',
    name: '해외직접투자 신고 (금융감독원)',
    description:
      '금융회사가 해외에 비금융업 법인을 설립하거나 지분을 취득하는 경우입니다.',
    agency: agencies['fss'],
    requiredForms: [forms['form-b-non-financial']],
    requiredDocuments: [
      '해외직접투자 신고서',
      '이사회 의결서',
      '사업계획서',
      '재무건전성 자료 (BIS 비율 등)',
      '정관',
    ],
    legalBasis: '금융회사의 해외진출에 관한 규정 제3조',
    notes: [
      '신고 시점: 사전 신고',
      '금융업 투자 대비 심사 요건 완화',
    ],
  },

  // ========================================
  // 금융회사 - 역외금융회사 투자
  // ========================================
  'financial-offshore': {
    id: 'financial-offshore',
    name: '역외금융회사 투자 보고 (금융감독원)',
    description:
      '금융회사가 역외금융회사(해외 펀드, SPC 등)에 투자하는 경우입니다.',
    agency: agencies['fss'],
    requiredForms: [forms['form-b-offshore']],
    requiredDocuments: [
      '투자보고서',
      '펀드 개요서 (PPM)',
      '송금확인서',
      '설립증빙',
    ],
    legalBasis: '금융회사의 해외진출에 관한 규정 제4조',
    notes: [
      '보고 시점: 사후 보고 (투자 후 1개월 이내)',
      '지분율 제한 없음',
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
      '설립증빙 (현지 인가서류)',
    ],
    legalBasis: '금융회사의 해외진출에 관한 규정 제4조',
    notes: [
      '보고 시점: 사후 보고 (설치 후 1개월 이내)',
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
