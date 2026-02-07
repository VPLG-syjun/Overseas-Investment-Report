import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="hero">
        <h1>해외투자 신고 가이드</h1>
        <p className="hero-subtitle">
          한국인(개인/법인)의 해외 투자 시 필요한 신고 절차를 안내합니다
        </p>
        <p className="hero-description">
          몇 가지 질문에 답하시면, 어느 기관에 어떤 신고를 해야 하는지
          <br />
          필요한 서류와 서식을 안내해 드립니다.
        </p>
        <button
          className="start-button"
          onClick={() => navigate('/survey')}
        >
          시작하기 →
        </button>
      </div>

      <div className="info-section">
        <h2>이런 경우에 활용하세요</h2>
        <div className="info-cards">
          <div className="info-card">
            <h3>해외직접투자</h3>
            <p>해외 법인 설립, 지분 취득, 지점 설치 등</p>
          </div>
          <div className="info-card">
            <h3>해외증권 취득</h3>
            <p>해외 주식, 채권, 펀드 등 증권 투자</p>
          </div>
          <div className="info-card">
            <h3>역외금융회사</h3>
            <p>역외금융센터 소재 회사 설립/투자</p>
          </div>
        </div>
      </div>

      <div className="disclaimer">
        <p>
          ※ 본 서비스는 참고용 정보 제공을 목적으로 하며, 법률 자문을 대체하지 않습니다.
          <br />
          실제 신고 시에는 관련 기관 또는 전문가와 상담하시기 바랍니다.
        </p>
      </div>
    </div>
  );
};
