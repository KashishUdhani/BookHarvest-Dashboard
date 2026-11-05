import React from "react";
import { useEffect, useState } from "react";
import ProgramJourney from "./ProgramJourney/ProgramJourney";
import CurrentStep from "./CurrentStep";
import RecentActivity from "./RecentActivity";

const steps = [
  {
    id: 1,
    title: "Service Agreement Information",
    status: "completed",
    description:
      "You've successfully submitted your program information. Our team is now reviewing your details.",
    actionText: "View Submission",
  },
  {
    id: 2,
    title: "Service Agreement",
    status: "current",
    description:
      "We're preparing your Service Agreement. Once it's ready, you'll be able to review and sign it here.",
    actionText: "View Agreement",
  },
  {
    id: 3,
    title: "Invoice",
    status: "upcoming",
    description:
      "After your Service Agreement is signed, we'll generate your invoice for the first payment.",
    actionText: "View Invoice",
  },
  {
    id: 4,
    title: "Enrollment",
    status: "upcoming",
    description:
      "You'll submit the number of students participating so we can prepare the correct number of books.",
    actionText: "Complete Enrollment",
  },
  {
    id: 5,
    title: "Materials Preparation",
    status: "upcoming",
    description:
      "Our team will carefully prepare your books, backpacks, and program materials for delivery.",
    actionText: "Track Progress",
  },
  {
    id: 6,
    title: "Delivery & Program Launch",
    status: "upcoming",
    description:
      "Your materials are on their way! Once delivered, you'll be ready to launch your Summer Books on Break program.",
    actionText: "Track Delivery",
  },
  {
    id: 7,
    title: "Program Complete",
    status: "upcoming",
    description:
      "Congratulations! Your program has been completed. We'll invite you to share your feedback and celebrate your impact.",
    actionText: "View Summary",
  },
];

const activities = [
  {
    id: 1,
    title: "Service Agreement Information submitted",
    date: "May 19, 2025",
    time: "10:24 AM",
    status: "completed"
  },
  {
    id: 2,
    title: "Agreement generated",
    date: "May 19, 2025",
    time: "10:28 AM",
    status: "waiting"
  },
  {
    id: 3,
    title: "Waiting for your signature",
    date: "May 19, 2025",
    time: "10:28 AM",
    status: "waiting",
    badge: "Waiting"
  }
];

const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [visible, setVisible] = useState(false);

useEffect(() => {
  requestAnimationFrame(() => {
    setVisible(true);
  });
}, []);
  

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 3500);
  }, []);

  return (
<main className={`dashboard-page ${visible ? "dashboard-visible" : ""}`}>
      <aside className="dashboard-sidebar">
        <div className="sidebar-logo">
          <img src="bookharvest-logo.png" alt="Book Harvest Logo" />
        </div>

        <nav className="sidebar-navigation">
          <div className="sidebar-item active">Dashboard</div>
          <div className="sidebar-item">My Program</div>
          <div className="sidebar-item">Documents</div>
          <div className="sidebar-item">Resources</div>
          <div className="sidebar-item">Help</div>
        </nav>
      </aside>

      <section className="dashboard-content">
  
            <CurrentStep steps={steps}/>
    
       
 
            <RecentActivity activities={activities}/>


            <ProgramJourney steps={steps}/>

      </section>
    </main>
  );
};

export default Dashboard;
