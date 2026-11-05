import React from "react";

const Milestone = ({ step, index }) => {
  const { title, status } = step;
  return (
    <div className="milestone">
      <div className={`milestone-circle ${status}`}></div>

      <div className="milestone-content">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Milestone;
