import type { ReportType, ResultRule } from '../types';
import { agencies, forms } from './agencies';

// 신고 유형 데이터
export const reportTypes: Record<string, ReportType> = {
  // 루트 A 결과들
  'a-direct-investment': {
    id: 'a-direct-investment',
    name: '해외직접투자 신고',
    description:
      '외국 법인의 경영에 참여하기 위해 지분 10% 이상 취득하거나, 10% 미만이라도 임원 파견, 계약 체결 등 실질적 경영권을 행사하는 경우 해당됩니다.',
    agency: agencies['forex-bank'],
    requiredForms: [forms['form-direct-investment']],
    requiredDocuments: [
      '해외직접투자 신고서 (별지 서식)',
      '사업계획서',
      '납세증명서 (국세, 지방세)',
      '신용정보조회동의서',
      '주민등록등본 (개인) 또는 사업자등록증명 (법인)',
    ],
    legalBasis: '외국환거래규정 제9장',
    notes: [
      '신고 시점: 사전 신고 (송금 전 완료 필수)',
      '신고 수리 후 1년 이내 투자를 이행해야 합니다',
    ],
  },
  'a-securities': {
    id: 'a-securities',
    name: '해외증권취득 신고',
    description:
      '지분 10% 미만의 주식, 채권 등 포트폴리오 투자를 하는 경우 해당됩니다. 경영 참여 목적이 아닌 단순 투자입니다.',
    agency: agencies['forex-bank'],
    requiredForms: [forms['form-securities']],
    requiredDocuments: [
      '해외증권취득 신고서 (별지 서식)',
      '납세증명서 (국세, 지방세)',
      '신용정보조회동의서',
      '주민등록등본 (개인) 또는 사업자등록증명 (법인)',
    ],
    legalBasis: '외국환거래규정 제7장',
    notes: [
      '신고 시점: 사전 신고 (송금 전 완료 필수)',
    ],
  },
  'a-branch': {
    id: 'a-branch',
    name: '해외지사 설치 신고',
    description:
      '법인 설립이 아닌 지점이나 사무소를 해외에 설치하는 경우 해당됩니다.',
    agency: agencies['forex-bank'],
    requiredForms: [forms['form-branch']],
    requiredDocuments: [
      '해외지사 설치 신고서 (별지 서식)',
      '사업계획서',
      '납세증명서 (국세, 지방세)',
      '신용정보조회동의서',
      '주민등록등본 (개인) 또는 사업자등록증명 (법인)',
    ],
    legalBasis: '외국환거래규정 제9장',
    notes: [
      '신고 시점: 사전 신고 (송금 전 완료 필수)',
    ],
  },
  'a-offshore': {
    id: 'a-offshore',
    name: '역외금융회사 투자 신고',
    description:
      '실체 없는 역외금융회사(해외 펀드 등)의 지분을 취득하는 경우 해당됩니다.',
    agency: agencies['forex-bank'],
    requiredForms: [forms['form-offshore']],
    requiredDocuments: [
      '역외금융회사 투자 신고서',
      '펀드 개요서 (PPM)',
      '납세증명서 (국세, 지방세)',
      '신용정보조회동의서',
      '주민등록등본 (개인) 또는 사업자등록증명 (법인)',
    ],
    legalBasis: '외국환거래규정 제9장',
    notes: [
      '신고 시점: 사전 신고 (송금 전 완료 필수)',
    ],
  },

  // 루트 B 결과들
  'b-direct-financial': {
    id: 'b-direct-financial',
    name: '금융업 해외직접투자 신고 (금융위원회)',
    description:
      '금융회사가 해외에 금융/보험업 법인을 설립하거나 지분을 취득하는 경우입니다. 금융감독원을 경유하여 금융위원회에 신고하며, 수리가 필요합니다.',
    agency: agencies['fsc'],
    requiredForms: [forms['form-b-financial']],
    requiredDocuments: [
      '해외직접투자 신고서',
      '이사회 의사록',
      '사업계획서',
      '재무건전성 자료 (BIS 비율 등)',
      '정관',
    ],
    legalBasis: '금융회사의 해외진출에 관한 규정',
    notes: [
      '신고 시점: 사전 신고 (수리 필요)',
      '금융감독원 경유 → 금융위원회 최종 수리',
    ],
  },
  'b-direct-non-financial': {
    id: 'b-direct-non-financial',
    name: '비금융업 해외직접투자 신고 (금융감독원)',
    description:
      '금융회사가 해외에 비금융업(부동산, IT 등) 법인을 설립하거나 지분을 취득하는 경우입니다. 금융감독원에 신고합니다.',
    agency: agencies['fss'],
    requiredForms: [forms['form-b-non-financial']],
    requiredDocuments: [
      '해외직접투자 신고서',
      '이사회 의사록',
      '사업계획서',
      '재무건전성 자료 (BIS 비율 등)',
      '정관',
    ],
    legalBasis: '금융회사의 해외진출에 관한 규정',
    notes: [
      '신고 시점: 사전 신고',
      '금융업 투자 대비 심사 요건이 완화됨',
    ],
  },
  'b-branch': {
    id: 'b-branch',
    name: '해외지사 설치 보고 (금융감독원)',
    description:
      '금융회사가 해외에 지점 또는 사무소를 설치하는 경우입니다. 사후 보고 형태로 진행됩니다.',
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
  'b-offshore': {
    id: 'b-offshore',
    name: '역외금융회사 투자 보고 (금융감독원)',
    description:
      '금융회사가 역외금융회사(해외 펀드 등)에 투자하는 경우입니다. 사후 보고 형태로 진행됩니다.',
    agency: agencies['fss'],
    requiredForms: [forms['form-b-offshore']],
    requiredDocuments: [
      '역외금융회사 투자 보고서',
      '펀드 개요서 (PPM)',
      '투자금 송금 증빙',
    ],
    legalBasis: '금융회사의 해외진출에 관한 규정',
    notes: [
      '보고 시점: 사후 보고 (투자 후 1개월 이내)',
    ],
  },

  // 공통 사후관리 안내
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
      '📌 송금 보고: 투자금을 보낸 후 즉시 또는 1개월 내 은행/금감원에 보고',
      '📌 사업실적 보고: 매년 회계연도 종료 후 5개월 이내에 결산 서류 제출',
      '📌 변경/청산 신고: 현지법인명 변경, 지분율 변동, 사업 종결 시 반드시 변경/청산 신고 필요',
    ],
  },
};

// 결과 매핑 규칙 - 태그 조합에 따라 어떤 신고가 필요한지 결정
export const resultRules: ResultRule[] = [
  // 루트 A: 개인/일반법인
  {
    id: 'rule-a-direct',
    requiredTags: ['route:a', 'purpose:direct-investment'],
    reportTypes: ['a-direct-investment', 'common-post-management'],
  },
  {
    id: 'rule-a-securities',
    requiredTags: ['route:a', 'purpose:securities'],
    reportTypes: ['a-securities', 'common-post-management'],
  },
  {
    id: 'rule-a-branch',
    requiredTags: ['route:a', 'purpose:branch'],
    reportTypes: ['a-branch', 'common-post-management'],
  },
  {
    id: 'rule-a-offshore',
    requiredTags: ['route:a', 'purpose:offshore'],
    reportTypes: ['a-offshore', 'common-post-management'],
  },

  // 루트 B: 금융회사
  {
    id: 'rule-b-direct-financial',
    requiredTags: ['route:b', 'type:direct', 'industry:financial'],
    reportTypes: ['b-direct-financial', 'common-post-management'],
  },
  {
    id: 'rule-b-direct-non-financial',
    requiredTags: ['route:b', 'type:direct', 'industry:non-financial'],
    reportTypes: ['b-direct-non-financial', 'common-post-management'],
  },
  {
    id: 'rule-b-branch',
    requiredTags: ['route:b', 'type:branch'],
    reportTypes: ['b-branch', 'common-post-management'],
  },
  {
    id: 'rule-b-offshore',
    requiredTags: ['route:b', 'type:offshore'],
    reportTypes: ['b-offshore', 'common-post-management'],
  },
];

// 태그 기반으로 적용되는 신고 유형 찾기
export const findApplicableReportTypes = (tags: string[]): ReportType[] => {
  const applicableTypeIds = new Set<string>();

  for (const rule of resultRules) {
    // 필수 태그가 모두 있는지 확인
    const hasAllRequired = rule.requiredTags.every((tag) => tags.includes(tag));

    // 제외 태그가 없는지 확인
    const hasNoExcluded = !rule.excludeTags?.some((tag) => tags.includes(tag));

    if (hasAllRequired && hasNoExcluded) {
      rule.reportTypes.forEach((id) => applicableTypeIds.add(id));
    }
  }

  return Array.from(applicableTypeIds)
    .map((id) => reportTypes[id])
    .filter(Boolean);
};
