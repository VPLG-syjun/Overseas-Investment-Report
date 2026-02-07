// 질문 옵션 타입
export interface QuestionOption {
  id: string;
  label: string;
  description?: string;
  nextQuestionId?: string; // 조건부 분기를 위한 다음 질문 ID
  resultTags?: string[]; // 이 옵션 선택 시 부여되는 태그
}

// 질문 타입
export interface Question {
  id: string;
  category: string; // 질문 카테고리 (예: "투자자 유형", "투자 방식" 등)
  question: string;
  description?: string;
  options: QuestionOption[];
  multiSelect?: boolean; // 복수 선택 가능 여부
}

// 신고 서식 타입
export interface ReportForm {
  id: string;
  name: string; // 서식명
  formNumber?: string; // 서식 번호 (예: "별지 제9-1호")
  downloadUrl?: string; // 다운로드 링크
  description?: string;
}

// 신고 기관 타입
export interface ReportingAgency {
  id: string;
  name: string; // 기관명 (예: "외국환은행", "한국은행")
  description?: string;
  website?: string;
}

// 신고 유형 타입
export interface ReportType {
  id: string;
  name: string; // 신고 유형명 (예: "해외직접투자 신고", "증권취득 신고")
  description?: string;
  agency: ReportingAgency;
  requiredForms: ReportForm[];
  requiredDocuments: string[]; // 필요 서류 목록
  legalBasis?: string; // 법적 근거
  notes?: string[]; // 참고사항
}

// 설문 결과 매핑 규칙
export interface ResultRule {
  id: string;
  requiredTags: string[]; // 이 규칙이 적용되기 위해 필요한 태그들
  excludeTags?: string[]; // 이 태그가 있으면 제외
  reportTypes: string[]; // 결과로 보여줄 신고 유형 ID들
}

// 사용자 설문 응답 상태
export interface SurveyState {
  currentQuestionId: string;
  answers: Record<string, string[]>; // 질문ID -> 선택한 옵션ID들
  collectedTags: string[]; // 수집된 태그들
  isCompleted: boolean;
}

// 최종 결과
export interface SurveyResult {
  reportTypes: ReportType[];
  summary: string;
}
