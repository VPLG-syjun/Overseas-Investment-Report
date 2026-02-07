import type { ReportingAgency, ReportForm } from '../types';

// 신고 기관 데이터
export const agencies: Record<string, ReportingAgency> = {
  'forex-bank': {
    id: 'forex-bank',
    name: '지정거래 외국환은행',
    description: '주거래 은행 (외국환거래규정에 따른 지정거래외국환은행)',
    website: 'https://www.bok.or.kr',
  },
  'bok': {
    id: 'bok',
    name: '한국은행',
    description: '한국은행 외환심사팀',
    website: 'https://www.bok.or.kr',
  },
  'bok-forex': {
    id: 'bok-forex',
    name: '한국은행 / 외국환은행',
    description: '한국은행 또는 지정거래 외국환은행',
    website: 'https://www.bok.or.kr',
  },
  'fsc': {
    id: 'fsc',
    name: '금융위원회',
    description: '금융감독원 경유하여 금융위원회에 신고',
    website: 'https://www.fsc.go.kr',
  },
  'fss': {
    id: 'fss',
    name: '금융감독원',
    description: '금융회사의 해외진출 관련 신고/보고 기관',
    website: 'https://www.fss.or.kr',
  },
};

// 서식 데이터
export const forms: Record<string, ReportForm> = {
  // 루트 A 서식
  'form-direct-investment': {
    id: 'form-direct-investment',
    name: '해외직접투자 신고서',
    formNumber: '별지 제9-1호',
    downloadUrl: '/forms/form-direct-investment.pdf',
    description: '해외직접투자 시 외국환은행에 제출하는 신고서',
  },
  'form-securities': {
    id: 'form-securities',
    name: '해외증권취득 신고서',
    formNumber: '별지 제7-10호',
    downloadUrl: '/forms/form-securities.pdf',
    description: '해외증권 취득 시 제출하는 신고서',
  },
  'form-offshore-securities': {
    id: 'form-offshore-securities',
    name: '역외금융회사 증권취득 신고서',
    formNumber: '',
    downloadUrl: '/forms/form-offshore-securities.pdf',
    description: '역외금융회사 증권 취득 시 제출하는 신고서',
  },
  'form-branch': {
    id: 'form-branch',
    name: '해외지사 설치 신고서',
    formNumber: '별지 제9-4호',
    downloadUrl: '/forms/form-branch.pdf',
    description: '해외 지점/사무소 설치 시 제출하는 신고서',
  },
  // 루트 B 서식 (금융회사)
  'form-b-financial': {
    id: 'form-b-financial',
    name: '금융업 해외직접투자 신고서',
    formNumber: '',
    downloadUrl: '/forms/form-b-financial.pdf',
    description: '금융회사의 금융업 해외직접투자 신고서',
  },
  'form-b-non-financial': {
    id: 'form-b-non-financial',
    name: '비금융업 해외직접투자 신고서',
    formNumber: '',
    downloadUrl: '/forms/form-b-non-financial.pdf',
    description: '금융회사의 비금융업 해외직접투자 신고서',
  },
  'form-b-branch': {
    id: 'form-b-branch',
    name: '해외지사 설치 보고서',
    formNumber: '',
    downloadUrl: '/forms/form-b-branch.pdf',
    description: '금융회사의 해외지사 설치 보고서',
  },
  'form-b-offshore': {
    id: 'form-b-offshore',
    name: '역외금융회사 투자 보고서',
    formNumber: '',
    downloadUrl: '/forms/form-b-offshore.pdf',
    description: '금융회사의 역외금융회사 투자 보고서',
  },
};
