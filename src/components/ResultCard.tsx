import type { ReportType } from '../types';

interface ResultCardProps {
  reportType: ReportType;
}

export const ResultCard = ({ reportType }: ResultCardProps) => {
  return (
    <div className="result-card">
      <div className="result-header">
        <h3 className="result-title">{reportType.name}</h3>
        <span className="result-agency">{reportType.agency.name}</span>
      </div>

      <p className="result-description">{reportType.description}</p>

      {reportType.legalBasis && (
        <div className="result-section">
          <h4>법적 근거</h4>
          <p>{reportType.legalBasis}</p>
        </div>
      )}

      <div className="result-section">
        <h4>필요 서류</h4>
        <ul className="document-list">
          {reportType.requiredDocuments.map((doc, index) => (
            <li key={index}>{doc}</li>
          ))}
        </ul>
      </div>

      <div className="result-section">
        <h4>신고 서식</h4>
        <div className="forms-list">
          {reportType.requiredForms.map((form) => (
            <div key={form.id} className="form-item">
              <div className="form-info">
                <span className="form-name">{form.name}</span>
                {form.formNumber && (
                  <span className="form-number">{form.formNumber}</span>
                )}
              </div>
              {form.downloadUrl && (
                <a
                  href={form.downloadUrl}
                  className="download-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  다운로드
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {reportType.notes && reportType.notes.length > 0 && (
        <div className="result-section notes">
          <h4>참고사항</h4>
          <ul>
            {reportType.notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      {reportType.agency.website && (
        <a
          href={reportType.agency.website}
          className="agency-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {reportType.agency.name} 웹사이트 방문 →
        </a>
      )}
    </div>
  );
};
