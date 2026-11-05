import React from "react";

const CurrentStep = ({ steps }) => {
  const currentStep = steps.find((step) => step.status === "current");

  const { title, description, actionText } = currentStep;

  return (
    <div className="current-step">
      <img src="/currentStepBooks.png" alt="" className="current-step-books" />

      <div className="current-step-content">
        <p className="current-step-label">Current Step</p>
        <h2 className="current-step-title">{title}</h2>
        <p className="current-step-description">{description}</p>

        <button className="current-step-button">
          {actionText}
          <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default CurrentStep;
