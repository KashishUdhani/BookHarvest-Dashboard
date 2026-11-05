import React from "react";
import Milestone from "./Milestone";



const ProgramJourney = ({steps}) => {
  return (
    <div className="program-journey-card">
  <div className="program-journey-inner">
    <p className="program-journey-label">Program Journey</p>

    <div className="program-journey">
      {steps.map((step, index) => (
        <Milestone
          key={step.id}
          step={step}
          index={index}
        />
      ))}
    </div>
  </div>
</div>
  );
};

export default ProgramJourney;
