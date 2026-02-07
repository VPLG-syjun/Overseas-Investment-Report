import { useLocation, useNavigate } from 'react-router-dom';
import { ResultCard } from '../components/ResultCard';
import { findApplicableReportTypes } from '../data/results';

export const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tags: string[] = location.state?.tags || [];

  // 태그 기반으로 적용되는 신고 유형 찾기
  const applicableReportTypes = findApplicableReportTypes(tags);

  if (applicableReportTypes.length === 0) {
    return (
      <div className="result-page">
        <div className="result-header">
          <h1>결과 안내</h1>
        </div>
        <div className="no-results">
          <p>선택하신 조건에 해당하는 신고 유형을 찾을 수 없습니다.</p>
          <p>질문에 다시 답해주시거나, 전문가와 상담해 주세요.</p>
          <button onClick={() => navigate('/survey')}>다시 시작하기</button>
        </div>
      </div>
    );
  }

  return (
    <div className="result-page">
      <div className="result-page-header">
        <h1>신고 안내 결과</h1>
        <p className="result-summary">
          선택하신 조건에 따라 <strong>{applicableReportTypes.length}개</strong>의
          신고가 필요할 수 있습니다.
        </p>
      </div>

      <div className="results-container">
        {applicableReportTypes.map((reportType) => (
          <ResultCard key={reportType.id} reportType={reportType} />
        ))}
      </div>

      <div className="result-actions">
        <button
          className="restart-button"
          onClick={() => navigate('/survey')}
        >
          다른 조건으로 다시 조회
        </button>
        <button
          className="home-button"
          onClick={() => navigate('/')}
        >
          처음으로
        </button>
      </div>

      <div className="result-disclaimer">
        <p>
          ※ 위 내용은 일반적인 안내이며, 실제 신고 요건은 개별 상황에 따라 다를 수 있습니다.
          <br />
          정확한 신고 절차는 해당 기관 또는 전문가와 상담하시기 바랍니다.
        </p>
      </div>
    </div>
  );
};
