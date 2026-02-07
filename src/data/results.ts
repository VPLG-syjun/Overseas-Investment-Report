import type { ReportType, ResultRule } from '../types';
import { agencies, forms } from './agencies';

// 신고 유형 데이터
export const reportTypes: Record<string, ReportType> = {
  // ========================================
  // 개인/개인사업자 결과들
  // ========================================

  // 개인 - 일반 해외법인 - 해외직접투자
  'individual-general-direct': {
    id: 'individual-general-direct',
    name: '해외직접투자 신고',
    description:
      '개인/개인사업자가 일반 해외법인에 지분 10% 이상 취득하거나 실질적 경영권을 행사하는 경우입니다.',
    agency: agencies['forex-bank'],
    requiredForms: [forms['form-direct-investment']],
    requiredDocuments: [
      '해외직접투자 신고서 (별지 제9-1호)',
      '사업계획서',
      '납세증명서 (국세, 지방세)',
      '신용정보조회동의서',
      '주민등록등본',
    ],
    legalBasis: '외국환거래규정 제9장 제1절',
    notes: [
      '신고 시점: 사전 신고 (송금 전 완료 필수)',
      '신고 수리 후 1년 이내 투자 이행',
    ],
  },

  // 개인 - 일반 해외법인 - 해외증권취득
  'individual-general-securities': {
    id: 'individual-general-securities',
    name: '해외증권취득 신고',
    description:
      '개인/개인사업자가 일반 해외법인 증권을 10% 미만으로 단순 투자하는 경우입니다.',
    agency: agencies['forex-bank'],
    requiredForms: [forms['form-securities']],
    requiredDocuments: [
      '해외증권취득 신고서 (별지 제7-10호)',
      '증권취득 입증서류',
      '납세증명서 (국세, 지방세)',
      '신용정보조회동의서',
      '주민등록등본',
    ],
    legalBasis: '외국환거래규정 제7장',
    notes: [
      '신고 시점: 사전 신고 (예외 있음)',
      '금융투자업자 통한 상장증권 취득 시 별도 신고 불요할 수 있음',
    ],
  },

  // 개인 - 역외금융회사 - 10% 미만
  'individual-offshore-under10': {
    id: 'individual-offshore-under10',
    name: '해외증권취득 신고 (역외금융회사)',
    description:
      '개인/개인사업자가 역외금융회사(해외 펀드 등)의 지분을 10% 미만으로 취득하는 경우입니다.',
    agency: agencies['bok-forex'],
    requiredForms: [forms['form-offshore-securities']],
    requiredDocuments: [
      '역외금융회사 증권취득 신고서',
      '펀드 개요서 (PPM)',
      '납세증명서 (국세, 지방세)',
      '신용정보조회동의서',
      '주민등록등본',
    ],
    legalBasis: '외국환거래규정 제7장 제4절',
    notes: [
      '신고 시점: 사전 신고',
      '신고 기관: 한국은행 또는 외국환은행',
    ],
  },

  // 개인 - 역외금융회사 - 10% 이상 (제한)
  'individual-offshore-restricted': {
    id: 'individual-offshore-restricted',
    name: '투자 불가 (제한됨)',
    description:
      '개인/개인사업자는 역외금융회사 지분 10% 이상 취득이 제한됩니다.',
    agency: agencies['forex-bank'],
    requiredForms: [],
    requiredDocuments: [],
    legalBasis: '외국환거래규정',
    notes: [
      '⚠️ 개인/개인사업자는 역외금융회사 10% 이상 취득 불가',
      '법인으로 투자하거나, 10% 미만으로 투자해야 합니다',
      '전문가 상담을 권장합니다',
    ],
  },

  // 개인 - 해외지사 설치
  'individual-branch': {
    id: 'individual-branch',
    name: '해외지사 설치 신고',
    description:
      '개인/개인사업자가 해외에 지점이나 사무소를 설치하는 경우입니다.',
    agency: agencies['forex-bank'],
    requiredForms: [forms['form-branch']],
    requiredDocuments: [
      '해외지사 설치 신고서 (별지 제9-4호)',
      '현지 사업계획서',
      '납세증명서 (국세, 지방세)',
      '신용정보조회동의서',
      '주민등록등본',
    ],
    legalBasis: '외국환거래규정 제9장',
    notes: [
      '신고 시점: 사전 신고',
      '설치비, 영업기금 송금 목적',
    ],
  },

  // ========================================
  // 법인 (일반) 결과들
  // ========================================

  // 법인 - 일반 해외법인 - 해외직접투자
  'corporation-general-direct': {
    id: 'corporation-general-direct',
    name: '해외직접투자 신고',
    description:
      '일반 법인이 해외법인에 지분 10% 이상 취득하거나 실질적 경영권을 행사하는 경우입니다.',
    agency: agencies['forex-bank'],
    requiredForms: [forms['form-direct-investment']],
    requiredDocuments: [
      '해외직접투자 신고서 (별지 제9-1호)',
      '사업계획서',
      '납세증명서 (국세, 지방세)',
      '신용정보조회동의서',
      '사업자등록증명',
      '법인등기부등본',
    ],
    legalBasis: '외국환거래규정 제9장 제1절',
    notes: [
      '신고 시점: 사전 신고 (송금 전 완료 필수)',
      '신고 수리 후 1년 이내 투자 이행',
    ],
  },

  // 법인 - 일반 해외법인 - 해외증권취득
  'corporation-general-securities': {
    id: 'corporation-general-securities',
    name: '해외증권취득 신고',
    description:
      '일반 법인이 해외법인 증권을 10% 미만으로 단순 투자하는 경우입니다.',
    agency: agencies['forex-bank'],
    requiredForms: [forms['form-securities']],
    requiredDocuments: [
      '해외증권취득 신고서 (별지 제7-10호)',
      '증권취득 입증서류',
      '납세증명서 (국세, 지방세)',
      '신용정보조회동의서',
      '사업자등록증명',
    ],
    legalBasis: '외국환거래규정 제7장',
    notes: [
      '신고 시점: 사전 신고 (예외 있음)',
    ],
  },

  // 법인 - 역외금융회사 - 10% 미만
  'corporation-offshore-under10': {
    id: 'corporation-offshore-under10',
    name: '해외증권취득 신고 (역외금융회사)',
    description:
      '일반 법인이 역외금융회사(해외 펀드 등)의 지분을 10% 미만으로 취득하는 경우입니다.',
    agency: agencies['bok-forex'],
    requiredForms: [forms['form-offshore-securities']],
    requiredDocuments: [
      '역외금융회사 증권취득 신고서',
      '펀드 개요서 (PPM)',
      '납세증명서 (국세, 지방세)',
      '신용정보조회동의서',
      '사업자등록증명',
    ],
    legalBasis: '외국환거래규정 제7장 제4절',
    notes: [
      '신고 시점: 사전 신고',
      '신고 기관: 한국은행 또는 외국환은행',
    ],
  },

  // 법인 - 역외금융회사 - 10% 이상 (조건부 가능)
  'corporation-offshore-over10': {
    id: 'corporation-offshore-over10',
    name: '역외금융회사 투자 신고 (10% 이상, 조건부)',
    description:
      '일반 법인이 역외금융회사 지분을 10% 이상 취득하는 경우입니다. 조건부로 가능하며 한국은행 또는 외국환은행에 신고합니다.',
    agency: agencies['bok-forex'],
    requiredForms: [forms['form-offshore-securities']],
    requiredDocuments: [
      '역외금융회사 투자 신고서',
      '사업계획서',
      '펀드 개요서 (PPM)',
      '납세증명서 (국세, 지방세)',
      '신용정보조회동의서',
      '사업자등록증명',
      '법인등기부등본',
    ],
    legalBasis: '외국환거래규정 제7장 제4절',
    notes: [
      '신고 시점: 사전 신고',
      '신고 기관: 한국은행 또는 외국환은행',
      '⚠️ 조건부 허용 - 세부 요건 확인 필요',
      '전문가 상담을 권장합니다',
    ],
  },

  // 법인 - 해외지사 설치
  'corporation-branch': {
    id: 'corporation-branch',
    name: '해외지사 설치 신고',
    description:
      '일반 법인이 해외에 지점이나 사무소를 설치하는 경우입니다.',
    agency: agencies['forex-bank'],
    requiredForms: [forms['form-branch']],
    requiredDocuments: [
      '해외지사 설치 신고서 (별지 제9-4호)',
      '현지 사업계획서',
      '납세증명서 (국세, 지방세)',
      '신용정보조회동의서',
      '사업자등록증명',
    ],
    legalBasis: '외국환거래규정 제9장',
    notes: [
      '신고 시점: 사전 신고',
      '설치비, 영업기금 송금 목적',
    ],
  },

  // ========================================
  // 금융회사 결과들
  // ========================================

  // 금융회사 - 일반 해외법인 - 금융/보험업
  'financial-general-fin': {
    id: 'financial-general-fin',
    name: '해외직접투자 신고 (금융위원회)',
    description:
      '금융회사가 해외에 금융/보험업 법인을 설립하거나 지분을 취득하는 경우입니다.',
    agency: agencies['fsc'],
    requiredForms: [forms['form-b-financial']],
    requiredDocuments: [
      '해외직접투자 신고서',
      '이사회 의사록',
      '사업계획서',
      '재무건전성 입증서류 (BIS 비율 등)',
      '정관',
    ],
    legalBasis: '금융회사의 해외진출에 관한 규정',
    notes: [
      '신고 시점: 사전 신고 (수리 필요)',
      '금융감독원 경유 → 금융위원회 최종 수리',
    ],
  },

  // 금융회사 - 일반 해외법인 - 비금융업
  'financial-general-non': {
    id: 'financial-general-non',
    name: '해외직접투자 신고 (금융감독원)',
    description:
      '금융회사가 해외에 비금융업(부동산, IT 등) 법인을 설립하거나 지분을 취득하는 경우입니다.',
    agency: agencies['fss'],
    requiredForms: [forms['form-b-non-financial']],
    requiredDocuments: [
      '해외직접투자 신고서',
      '이사회 의사록',
      '사업계획서',
      '재무건전성 입증서류 (BIS 비율 등)',
      '정관',
    ],
    legalBasis: '금융회사의 해외진출에 관한 규정',
    notes: [
      '신고 시점: 사전 신고',
      '금융업 투자 대비 심사 요건 완화',
    ],
  },

  // 금융회사 - 역외금융회사 (제한 없음)
  'financial-offshore': {
    id: 'financial-offshore',
    name: '역외금융회사 투자 보고 (금융감독원)',
    description:
      '금융회사가 역외금융회사(해외 펀드 등)에 투자하는 경우입니다. 지분율 제한 없이 가능합니다.',
    agency: agencies['fss'],
    requiredForms: [forms['form-b-offshore']],
    requiredDocuments: [
      '역외금융회사 투자 보고서',
      '펀드 개요서 (PPM)',
      '투자금 송금 증빙',
    ],
    legalBasis: '금융회사의 해외진출에 관한 규정',
    notes: [
      '보고 시점: 사후 보고 (투자 후)',
      '지분율 제한 없음',
    ],
  },

  // 금융회사 - 해외지사 설치
  'financial-branch': {
    id: 'financial-branch',
    name: '해외지사 설치 보고 (금융감독원)',
    description:
      '금융회사가 해외에 지점 또는 사무소를 설치하는 경우입니다.',
    agency: agencies['fss'],
    requiredForms: [forms['form-b-branch']],
    requiredDocuments: [
      '해외지사 설치 보고서',
      '현지 인가서류',
      '영업기금 송금 증빙',
    ],
    legalBasis: '금융회사의 해외진출에 관한 규정',
    notes: [
      '보고 시점: 사후 보고 (설치 후 1개월 이내)',
    ],
  },

  // ========================================
  // 기관투자가 결과
  // ========================================
  'institutional-securities': {
    id: 'institutional-securities',
    name: '신고 예외 (기관투자가 고유업무)',
    description:
      '은행, 증권사 등 기관투자가가 고유 업무로 해외증권에 투자하는 경우입니다.',
    agency: agencies['forex-bank'],
    requiredForms: [],
    requiredDocuments: [
      '사후 통보 서류 (내부 기록용)',
    ],
    legalBasis: '외국환거래규정 제7장',
    notes: [
      '별도 사전 신고 불요',
      '사후 통보로 갈음',
      '고유 업무 외의 투자는 금융회사 절차 적용',
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
      '📌 사업실적 보고: 매년 회계연도 종료 후 5개월 이내 결산 서류 제출',
      '📌 변경/청산 신고: 현지법인명 변경, 지분율 변동, 사업 종결 시 신고 필요',
    ],
  },
};

// 결과 매핑 규칙
export const resultRules: ResultRule[] = [
  // ========================================
  // 개인/개인사업자
  // ========================================
  {
    id: 'individual-general-direct',
    requiredTags: ['investor:individual', 'target:general', 'type:direct'],
    reportTypes: ['individual-general-direct', 'common-post-management'],
  },
  {
    id: 'individual-general-securities',
    requiredTags: ['investor:individual', 'target:general', 'type:securities'],
    reportTypes: ['individual-general-securities', 'common-post-management'],
  },
  {
    id: 'individual-offshore-under10',
    requiredTags: ['investor:individual', 'target:offshore', 'ratio:under10'],
    reportTypes: ['individual-offshore-under10', 'common-post-management'],
  },
  {
    id: 'individual-offshore-restricted',
    requiredTags: ['investor:individual', 'target:offshore', 'ratio:over10'],
    reportTypes: ['individual-offshore-restricted'],
  },
  {
    id: 'individual-branch',
    requiredTags: ['investor:individual', 'purpose:branch'],
    reportTypes: ['individual-branch', 'common-post-management'],
  },

  // ========================================
  // 법인 (일반)
  // ========================================
  {
    id: 'corporation-general-direct',
    requiredTags: ['investor:corporation', 'target:general', 'type:direct'],
    reportTypes: ['corporation-general-direct', 'common-post-management'],
  },
  {
    id: 'corporation-general-securities',
    requiredTags: ['investor:corporation', 'target:general', 'type:securities'],
    reportTypes: ['corporation-general-securities', 'common-post-management'],
  },
  {
    id: 'corporation-offshore-under10',
    requiredTags: ['investor:corporation', 'target:offshore', 'ratio:under10'],
    reportTypes: ['corporation-offshore-under10', 'common-post-management'],
  },
  {
    id: 'corporation-offshore-over10',
    requiredTags: ['investor:corporation', 'target:offshore', 'ratio:over10'],
    reportTypes: ['corporation-offshore-over10', 'common-post-management'],
  },
  {
    id: 'corporation-branch',
    requiredTags: ['investor:corporation', 'purpose:branch'],
    reportTypes: ['corporation-branch', 'common-post-management'],
  },

  // ========================================
  // 금융회사
  // ========================================
  {
    id: 'financial-general-fin',
    requiredTags: ['investor:financial', 'target:general', 'industry:financial'],
    reportTypes: ['financial-general-fin', 'common-post-management'],
  },
  {
    id: 'financial-general-non',
    requiredTags: ['investor:financial', 'target:general', 'industry:non-financial'],
    reportTypes: ['financial-general-non', 'common-post-management'],
  },
  {
    id: 'financial-offshore',
    requiredTags: ['investor:financial', 'target:offshore'],
    reportTypes: ['financial-offshore', 'common-post-management'],
  },
  {
    id: 'financial-branch',
    requiredTags: ['investor:financial', 'purpose:branch'],
    reportTypes: ['financial-branch', 'common-post-management'],
  },

  // ========================================
  // 기관투자가
  // ========================================
  {
    id: 'institutional-securities',
    requiredTags: ['investor:institutional', 'type:securities'],
    reportTypes: ['institutional-securities'],
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
