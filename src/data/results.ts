import type { ReportType, ResultRule } from '../types';
import { agencies, forms } from './agencies';

// 신고 유형 데이터
export const reportTypes: Record<string, ReportType> = {
  'direct-investment-forex': {
    id: 'direct-investment-forex',
    name: '해외직접투자 신고 (외국환은행)',
    description:
      '외국환거래규정에 따른 해외직접투자 신고. 외국 법인의 경영에 참여하기 위해 지분 10% 이상 취득하거나 1년 이상 금전을 대여하는 경우 해당됩니다.',
    agency: agencies['forex-bank'],
    requiredForms: [forms['form-9-1'], forms['form-9-3']],
    requiredDocuments: [
      '사업계획서',
      '투자대상 법인 정관 또는 설립예정 정관',
      '투자대상 법인 재무제표 (기존 법인인 경우)',
      '투자자 신분증 사본',
      '법인의 경우: 사업자등록증, 법인등기부등본',
    ],
    legalBasis: '외국환거래규정 제9-5조',
    notes: [
      '투자 실행 전 사전 신고가 원칙입니다',
      '신고 수리 후 1년 이내 투자를 이행해야 합니다',
    ],
  },
  'direct-investment-bok': {
    id: 'direct-investment-bok',
    name: '해외직접투자 신고 (한국은행)',
    description:
      '대규모 해외직접투자의 경우 한국은행에 신고해야 합니다.',
    agency: agencies['bank-of-korea'],
    requiredForms: [forms['form-9-1']],
    requiredDocuments: [
      '사업계획서',
      '투자대상 법인 정관',
      '투자자 신분증 사본',
      '법인의 경우: 사업자등록증, 법인등기부등본',
      '자금조달계획서',
    ],
    legalBasis: '외국환거래규정 제9-5조',
    notes: [
      '투자금액이 일정 기준 이상인 경우 한국은행 신고 대상',
    ],
  },
  'securities-acquisition': {
    id: 'securities-acquisition',
    name: '증권취득 신고',
    description:
      '해외 증권(주식, 채권, 펀드 등)을 취득하는 경우의 신고입니다. 지분 10% 미만 취득으로 경영 참여 목적이 아닌 경우 해당됩니다.',
    agency: agencies['forex-bank'],
    requiredForms: [forms['form-7-10']],
    requiredDocuments: [
      '증권취득 신고서',
      '투자 대상 증권 설명서',
      '투자자 신분증 사본',
    ],
    legalBasis: '외국환거래규정 제7-31조',
    notes: [
      '상장증권의 경우 금융투자업자를 통한 취득 시 별도 신고 불요할 수 있음',
      '비상장증권은 외국환은행 신고 필요',
    ],
  },
  'offshore-company': {
    id: 'offshore-company',
    name: '역외금융회사 설립/투자 신고',
    description:
      '조세피난처 등 역외금융센터에 소재한 금융회사에 대한 설립 또는 투자 신고입니다.',
    agency: agencies['forex-bank'],
    requiredForms: [forms['offshore-report']],
    requiredDocuments: [
      '역외금융회사 설립/투자 신고서',
      '사업계획서',
      '설립지 관련 정보',
    ],
    legalBasis: '외국환거래규정 관련 조항',
    notes: [
      '역외금융회사 투자는 별도의 신고 요건이 있습니다',
      '세무 관련 추가 의무가 발생할 수 있습니다',
    ],
  },
  'foreign-account-report': {
    id: 'foreign-account-report',
    name: '해외금융계좌 신고',
    description:
      '해외금융계좌 잔액이 5억원을 초과하는 경우 매년 6월 세무서에 신고해야 합니다.',
    agency: agencies['tax-office'],
    requiredForms: [forms['foreign-account']],
    requiredDocuments: [
      '해외금융계좌 신고서',
      '해외금융계좌 잔액 증빙',
    ],
    legalBasis: '국제조세조정에 관한 법률 제52조',
    notes: [
      '매년 6월 1일~30일 신고',
      '전년도 말일 기준 계좌 잔액 합계가 5억원 초과 시 신고 대상',
    ],
  },
};

// 결과 매핑 규칙 - 태그 조합에 따라 어떤 신고가 필요한지 결정
export const resultRules: ResultRule[] = [
  // 해외직접투자 - 외국환은행 신고
  {
    id: 'rule-direct-forex',
    requiredTags: ['type:direct-investment'],
    excludeTags: ['amount:over-10m'],
    reportTypes: ['direct-investment-forex', 'foreign-account-report'],
  },
  // 해외직접투자 - 대규모 (한국은행)
  {
    id: 'rule-direct-bok',
    requiredTags: ['type:direct-investment', 'amount:over-10m'],
    reportTypes: ['direct-investment-bok', 'foreign-account-report'],
  },
  // 증권취득
  {
    id: 'rule-securities',
    requiredTags: ['type:securities'],
    reportTypes: ['securities-acquisition', 'foreign-account-report'],
  },
  // 역외금융회사
  {
    id: 'rule-offshore',
    requiredTags: ['type:offshore'],
    reportTypes: ['offshore-company', 'foreign-account-report'],
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
