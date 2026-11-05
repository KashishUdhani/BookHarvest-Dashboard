import React from "react";

const RecentActivity = ({ activities }) => {
  return (
    <div className="recent-activity-card">
      <div className="recent-activity">

        <div className="recent-activity-header">
          <h2 className="recent-activity-title">
            Recent Activity
          </h2>

          <button className="view-all-activity">
            View all activity
            <span>→</span>
          </button>
        </div>

        <div className="activity-list">
          {activities.map((activity) => (
            <div className="activity-item" key={activity.id}>

              <div className={`activity-icon ${activity.status}`}>
                {activity.status === "completed" ? "✓" : "◷"}
              </div>

              <div className="activity-content">
                <p className="activity-name">
                  {activity.title}
                </p>

                <p className="activity-date">
                  {activity.date} · {activity.time}
                </p>
              </div>

              {activity.badge && (
                <span className="activity-status">
                  {activity.badge}
                </span>
              )}

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default RecentActivity;
