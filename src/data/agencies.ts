import type { ReportingAgency, ReportForm } from '../types';

// 신고 기관 데이터
export const agencies: Record<string, ReportingAgency> = {
  'forex-bank': {
    id: 'forex-bank',
    name: '외국환은행',
    description: '외국환거래법에 따른 지정거래외국환은행',
    website: 'https://www.bok.or.kr',
  },
  'bank-of-korea': {
    id: 'bank-of-korea',
    name: '한국은행',
    description: '대규모 투자 등 특정 경우 한국은행에 신고',
    website: 'https://www.bok.or.kr',
  },
  'financial-supervisory': {
    id: 'financial-supervisory',
    name: '금융감독원',
    description: '금융투자업자를 통한 투자 시 관련',
    website: 'https://www.fss.or.kr',
  },
  'tax-office': {
    id: 'tax-office',
    name: '관할 세무서',
    description: '해외금융계좌 신고 및 세금 관련',
    website: 'https://www.nts.go.kr',
  },
};

// 서식 데이터
export const forms: Record<string, ReportForm> = {
  'form-9-1': {
    id: 'form-9-1',
    name: '해외직접투자 신고서',
    formNumber: '별지 제9-1호',
    downloadUrl: '/forms/form-9-1.pdf', // 실제 URL로 교체 필요
    description: '해외직접투자 시 외국환은행에 제출하는 신고서',
  },
  'form-9-2': {
    id: 'form-9-2',
    name: '해외직접투자 변경신고서',
    formNumber: '별지 제9-2호',
    downloadUrl: '/forms/form-9-2.pdf',
    description: '기존 해외직접투자 내용 변경 시 제출',
  },
  'form-9-3': {
    id: 'form-9-3',
    name: '해외직접투자 사후보고서',
    formNumber: '별지 제9-3호',
    downloadUrl: '/forms/form-9-3.pdf',
    description: '투자 완료 후 결과 보고',
  },
  'form-7-10': {
    id: 'form-7-10',
    name: '증권취득 신고서',
    formNumber: '별지 제7-10호',
    downloadUrl: '/forms/form-7-10.pdf',
    description: '해외 증권 취득 시 제출하는 신고서',
  },
  'offshore-report': {
    id: 'offshore-report',
    name: '역외금융회사 신고서',
    formNumber: '',
    downloadUrl: '/forms/offshore-report.pdf',
    description: '역외금융회사 설립/투자 시 제출',
  },
  'foreign-account': {
    id: 'foreign-account',
    name: '해외금융계좌 신고서',
    formNumber: '',
    downloadUrl: '/forms/foreign-account.pdf',
    description: '해외금융계좌 신고 시 세무서 제출',
  },
};
