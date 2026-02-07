interface ProgressBarProps {
  progress: number;
  category?: string;
}

export const ProgressBar = ({ progress, category }: ProgressBarProps) => {
  return (
    <div className="progress-container">
      {category && <span className="progress-category">{category}</span>}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="progress-text">{progress}%</span>
    </div>
  );
};
