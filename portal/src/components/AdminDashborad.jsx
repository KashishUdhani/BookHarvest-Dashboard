import { useMemo, useState } from "react";
import "../AdminDashboard.css";

const partners = [
  {
    id: 1,
    organization: "Maplewood Unified School District",
    currentStage: "Awaiting Payment",
    paymentStatus: "Invoiced",
    sites: 6,
    primaryContact: "Ashley Nakamura",
    email: "ashley@maplewood.org",
    phone: "(919) 555-0148",
    studentCount: 820,
    programYear: "2026",
    internalOwner: "Danielle Price",
    shippingAddress: "1450 Maplewood Drive, Durham, NC",
    lastUpdated: "2 hours ago",
    needsAttention: true,
    attentionMessage: "Invoice has been open for 8 days",
    documents: [
      {
        id: 1,
        name: "Service Agreement",
        type: "Agreement",
        status: "Signed",
        date: "July 14, 2026",
      },
      {
        id: 2,
        name: "Initial Invoice",
        type: "Invoice",
        status: "Awaiting Payment",
        date: "July 18, 2026",
      },
      {
        id: 3,
        name: "Enrollment Form",
        type: "Enrollment",
        status: "Not Started",
        date: "—",
      },
    ],
    timeline: [
      {
        id: 1,
        title: "Agreement Created",
        date: "July 10",
        status: "completed",
      },
      {
        id: 2,
        title: "Agreement Signed",
        date: "July 14",
        status: "completed",
      },
      {
        id: 3,
        title: "Invoice Generated",
        date: "July 18",
        status: "completed",
      },
      {
        id: 4,
        title: "Payment Received",
        date: "Waiting",
        status: "current",
      },
      {
        id: 5,
        title: "Enrollment Submitted",
        date: "Upcoming",
        status: "upcoming",
      },
      {
        id: 6,
        title: "Shipment Scheduled",
        date: "Upcoming",
        status: "upcoming",
      },
    ],
    notes: [
      {
        id: 1,
        text: "Ashley requested a copy of the invoice by email.",
        author: "Danielle",
        date: "Today",
      },
      {
        id: 2,
        text: "Partner may add one additional elementary school.",
        author: "Ginger",
        date: "July 22",
      },
    ],
    activities: [
      {
        id: 1,
        title: "Invoice generated",
        date: "July 18 at 10:32 AM",
      },
      {
        id: 2,
        title: "Service agreement signed",
        date: "July 14 at 4:10 PM",
      },
      {
        id: 3,
        title: "Primary contact information updated",
        date: "July 12 at 9:20 AM",
      },
    ],
  },
  {
    id: 2,
    organization: "Durham Community Learning Center",
    currentStage: "Enrollment",
    paymentStatus: "Paid",
    sites: 3,
    primaryContact: "Jordan Ellis",
    email: "jordan@durhamlearning.org",
    phone: "(919) 555-0164",
    studentCount: 460,
    programYear: "2026",
    internalOwner: "Ashley",
    shippingAddress: "805 Holloway Street, Durham, NC",
    lastUpdated: "Yesterday",
    needsAttention: true,
    attentionMessage: "Enrollment information is incomplete",
    documents: [
      {
        id: 1,
        name: "Service Agreement",
        type: "Agreement",
        status: "Signed",
        date: "July 6, 2026",
      },
      {
        id: 2,
        name: "Initial Invoice",
        type: "Invoice",
        status: "Paid",
        date: "July 9, 2026",
      },
      {
        id: 3,
        name: "Enrollment Form",
        type: "Enrollment",
        status: "In Progress",
        date: "July 24, 2026",
      },
    ],
    timeline: [
      {
        id: 1,
        title: "Agreement Created",
        date: "July 3",
        status: "completed",
      },
      {
        id: 2,
        title: "Agreement Signed",
        date: "July 6",
        status: "completed",
      },
      {
        id: 3,
        title: "Invoice Generated",
        date: "July 7",
        status: "completed",
      },
      {
        id: 4,
        title: "Payment Received",
        date: "July 9",
        status: "completed",
      },
      {
        id: 5,
        title: "Enrollment Submitted",
        date: "In progress",
        status: "current",
      },
      {
        id: 6,
        title: "Shipment Scheduled",
        date: "Upcoming",
        status: "upcoming",
      },
    ],
    notes: [],
    activities: [
      {
        id: 1,
        title: "Enrollment form opened",
        date: "July 24 at 2:15 PM",
      },
      {
        id: 2,
        title: "Payment marked as received",
        date: "July 9 at 11:40 AM",
      },
    ],
  },
  {
    id: 3,
    organization: "Oak Grove Elementary Network",
    currentStage: "Ready for Shipment",
    paymentStatus: "Paid",
    sites: 4,
    primaryContact: "Maya Johnson",
    email: "maya@oakgrove.org",
    phone: "(919) 555-0122",
    studentCount: 610,
    programYear: "2026",
    internalOwner: "Charlia",
    shippingAddress: "2820 Oak Grove Road, Durham, NC",
    lastUpdated: "Today",
    needsAttention: false,
    attentionMessage: "",
    documents: [
      {
        id: 1,
        name: "Service Agreement",
        type: "Agreement",
        status: "Signed",
        date: "June 28, 2026",
      },
      {
        id: 2,
        name: "Initial Invoice",
        type: "Invoice",
        status: "Paid",
        date: "July 2, 2026",
      },
      {
        id: 3,
        name: "Enrollment Form",
        type: "Enrollment",
        status: "Submitted",
        date: "July 20, 2026",
      },
    ],
    timeline: [
      {
        id: 1,
        title: "Agreement Created",
        date: "June 24",
        status: "completed",
      },
      {
        id: 2,
        title: "Agreement Signed",
        date: "June 28",
        status: "completed",
      },
      {
        id: 3,
        title: "Invoice Generated",
        date: "June 29",
        status: "completed",
      },
      {
        id: 4,
        title: "Payment Received",
        date: "July 2",
        status: "completed",
      },
      {
        id: 5,
        title: "Enrollment Submitted",
        date: "July 20",
        status: "completed",
      },
      {
        id: 6,
        title: "Shipment Scheduled",
        date: "Ready",
        status: "current",
      },
    ],
    notes: [],
    activities: [
      {
        id: 1,
        title: "Partner marked ready for shipment",
        date: "Today at 9:10 AM",
      },
      {
        id: 2,
        title: "Enrollment reviewed",
        date: "Yesterday at 3:30 PM",
      },
    ],
  },
  {
    id: 4,
    organization: "Bright Futures Charter Academy",
    currentStage: "Awaiting Signature",
    paymentStatus: "Not Invoiced",
    sites: 2,
    primaryContact: "Elena Rodriguez",
    email: "elena@brightfutures.org",
    phone: "(919) 555-0190",
    studentCount: 290,
    programYear: "2026",
    internalOwner: "Ginger",
    shippingAddress: "410 Foster Avenue, Durham, NC",
    lastUpdated: "3 days ago",
    needsAttention: true,
    attentionMessage: "Agreement has not been signed",
    documents: [
      {
        id: 1,
        name: "Service Agreement",
        type: "Agreement",
        status: "Awaiting Signature",
        date: "July 21, 2026",
      },
    ],
    timeline: [
      {
        id: 1,
        title: "Agreement Created",
        date: "July 21",
        status: "completed",
      },
      {
        id: 2,
        title: "Agreement Signed",
        date: "Waiting",
        status: "current",
      },
      {
        id: 3,
        title: "Invoice Generated",
        date: "Upcoming",
        status: "upcoming",
      },
      {
        id: 4,
        title: "Payment Received",
        date: "Upcoming",
        status: "upcoming",
      },
      {
        id: 5,
        title: "Enrollment Submitted",
        date: "Upcoming",
        status: "upcoming",
      },
      {
        id: 6,
        title: "Shipment Scheduled",
        date: "Upcoming",
        status: "upcoming",
      },
    ],
    notes: [],
    activities: [
      {
        id: 1,
        title: "Signature reminder sent",
        date: "Yesterday at 1:20 PM",
      },
      {
        id: 2,
        title: "Service agreement created",
        date: "July 21 at 10:05 AM",
      },
    ],
  },
];

const filters = [
  "All",
  "Awaiting Signature",
  "Payment",
  "Enrollment",
  "Shipping",
  "Completed",
];

function AdminDashboard() {
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPartners = useMemo(() => {
    return partners.filter((partner) => {
      const matchesSearch =
        partner.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        partner.primaryContact.toLowerCase().includes(searchTerm.toLowerCase());

      let matchesFilter = true;

      if (selectedFilter === "Awaiting Signature") {
        matchesFilter = partner.currentStage === "Awaiting Signature";
      }

      if (selectedFilter === "Payment") {
        matchesFilter =
          partner.currentStage === "Awaiting Payment" ||
          partner.paymentStatus === "Invoiced";
      }

      if (selectedFilter === "Enrollment") {
        matchesFilter = partner.currentStage === "Enrollment";
      }

      if (selectedFilter === "Shipping") {
        matchesFilter = partner.currentStage === "Ready for Shipment";
      }

      if (selectedFilter === "Completed") {
        matchesFilter = partner.currentStage === "Completed";
      }

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, selectedFilter]);

  if (selectedPartner) {
    return (
      <PartnerDetails
        partner={selectedPartner}
        onBack={() => setSelectedPartner(null)}
      />
    );
  }

  return (
    <div className="admin-dashboard-page">
      <AdminSidebar />

      <main className="admin-main">
        <section className="admin-top-grid">
          <OperationsOverview />

          <NeedsAttention
            partners={partners}
            onSelectPartner={setSelectedPartner}
          />
        </section>

        <PartnerPipeline
          partners={filteredPartners}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSelectPartner={setSelectedPartner}
        />
      </main>
    </div>
  );
}

function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="admin-brand">
        <img
          src="/bookharvest-logo.png"
          alt="Book Harvest"
          className="admin-logo"
        />

        <div>
          <h1>Book Harvest</h1>
          <p>ADMIN</p>
        </div>
      </div>

      <nav className="admin-navigation">
        <p className="admin-navigation-label">OPERATIONS</p>

        <button className="admin-navigation-item active">
          <span>▦</span>
          Overview
        </button>

        <button className="admin-navigation-item">
          <span>♙</span>
          Partners
        </button>

        <button className="admin-navigation-item">
          <span>▧</span>
          Agreements
        </button>

        <button className="admin-navigation-item">
          <span>$</span>
          Invoices
        </button>

        <button className="admin-navigation-item">
          <span>▱</span>
          Shipments
        </button>

        <p className="admin-navigation-label workspace-label">WORKSPACE</p>

        <button className="admin-navigation-item">
          <span>⚙</span>
          Settings
        </button>

        <button className="admin-navigation-item">
          <span>?</span>
          Help
        </button>
      </nav>

      <div className="admin-sidebar-impact">
        <strong>187,400 books</strong>
        <p>placed in children's hands this program year.</p>

        <div className="impact-progress">
          <div className="impact-progress-value" />
        </div>
      </div>

      <div className="admin-profile">
        <div className="admin-avatar">DP</div>

        <div>
          <strong>Danielle Price</strong>
          <p>Program Director</p>
        </div>
      </div>
    </aside>
  );
}

function OperationsOverview() {
  return (
    <section className="operations-overview-card">
      <p className="overview-date">TUESDAY, JULY 28</p>

      <h2>Good morning, Danielle.</h2>

      <p className="overview-message">
        Seven partners need your attention today.
      </p>

      <div className="overview-status-list">
        <div className="overview-status-row">
          <div>
            <span className="status-dot signature-dot" />
            Awaiting signature
          </div>

          <strong>5</strong>
        </div>

        <div className="overview-status-row">
          <div>
            <span className="status-dot payment-dot" />
            Outstanding invoices
          </div>

          <strong>7</strong>
        </div>

        <div className="overview-status-row">
          <div>
            <span className="status-dot enrollment-dot" />
            Pending enrollment
          </div>

          <strong>4</strong>
        </div>

        <div className="overview-status-row">
          <div>
            <span className="status-dot shipping-dot" />
            Ready for shipment
          </div>

          <strong>3</strong>
        </div>
      </div>

      <div className="overview-bottom">
        <button className="primary-admin-button">
          Review Priority Tasks
          <span>→</span>
        </button>

        <div className="overview-impact">
          <strong>18,240</strong>
          <p>books will reach children this week</p>
        </div>
      </div>
    </section>
  );
}

function NeedsAttention({ partners, onSelectPartner }) {
  const attentionPartners = partners.filter(
    (partner) => partner.needsAttention,
  );

  return (
    <section className="needs-attention-card">
      <div className="section-heading-row">
        <div>
          <p className="section-eyebrow">TODAY</p>
          <h2>Needs Attention</h2>
        </div>

        <span className="attention-count">{attentionPartners.length}</span>
      </div>

      <div className="attention-list">
        {attentionPartners.slice(0, 3).map((partner) => (
          <button
            key={partner.id}
            className="attention-item"
            onClick={() => onSelectPartner(partner)}
          >
            <span className="attention-warning">!</span>

            <span className="attention-content">
              <strong>{partner.organization}</strong>
              <small>{partner.attentionMessage}</small>
            </span>

            <span className="attention-arrow">→</span>
          </button>
        ))}
      </div>

      <button className="text-button">View all priority tasks</button>
    </section>
  );
}

function PartnerPipeline({
  partners,
  selectedFilter,
  setSelectedFilter,
  searchTerm,
  setSearchTerm,
  onSelectPartner,
}) {
  return (
    <section className="partner-pipeline-card">
      <div className="pipeline-header">
        <div>
          <p className="section-eyebrow">PARTNER MANAGEMENT</p>
          <h2>Partner Pipeline</h2>
          <p>Every organization currently moving through the program.</p>
        </div>

        <label className="partner-search">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search partners or contacts"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </label>
      </div>

      <div className="pipeline-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`pipeline-filter ${
              selectedFilter === filter ? "active" : ""
            }`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="partner-table-wrapper">
        <table className="partner-table">
          <thead>
            <tr>
              <th>Partner Organization</th>
              <th>Current Stage</th>
              <th>Payment</th>
              <th>Sites</th>
              <th>Primary Contact</th>
              <th>Last Updated</th>
              <th aria-label="Open partner" />
            </tr>
          </thead>

          <tbody>
            {partners.map((partner) => (
              <tr key={partner.id} onClick={() => onSelectPartner(partner)}>
                <td>
                  <div className="partner-name-cell">
                    <div className="partner-table-avatar">
                      {partner.organization.charAt(0)}
                    </div>

                    <div>
                      <strong>{partner.organization}</strong>
                      <small>{partner.studentCount} expected students</small>
                    </div>
                  </div>
                </td>

                <td>
                  <StatusBadge status={partner.currentStage} />
                </td>

                <td>
                  <StatusBadge status={partner.paymentStatus} />
                </td>

                <td>{partner.sites}</td>

                <td>{partner.primaryContact}</td>

                <td>{partner.lastUpdated}</td>

                <td className="partner-row-arrow">→</td>
              </tr>
            ))}
          </tbody>
        </table>

        {partners.length === 0 && (
          <div className="empty-partners">
            <h3>No partners found</h3>
            <p>Try changing your search or selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function StatusBadge({ status }) {
  const formattedStatus = status.toLowerCase().replaceAll(" ", "-");

  return (
    <span className={`admin-status-badge ${formattedStatus}`}>{status}</span>
  );
}

function PartnerDetails({ partner, onBack }) {
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState(partner.notes);

  function addNote() {
    if (!noteText.trim()) {
      return;
    }

    const newNote = {
      id: Date.now(),
      text: noteText,
      author: "Danielle",
      date: "Just now",
    };

    setNotes((currentNotes) => [newNote, ...currentNotes]);

    setNoteText("");
  }

  return (
    <div className="admin-dashboard-page">
      <AdminSidebar />

      <main className="partner-details-main">
        <button className="back-button" onClick={onBack}>
          ← Back to partner pipeline
        </button>

        <header className="partner-details-header">
          <div>
            <p className="section-eyebrow">PARTNER WORKSPACE</p>

            <h1>{partner.organization}</h1>

            <div className="partner-header-meta">
              <StatusBadge status={partner.currentStage} />

              <span>
                {partner.sites} sites · {partner.studentCount} students
              </span>
            </div>
          </div>

          <div className="partner-header-actions">
            <button className="secondary-admin-button">Edit Partner</button>

            <button className="primary-admin-button">Send Reminder</button>
          </div>
        </header>

        <div className="partner-details-grid">
          <PartnerInformation partner={partner} />

          <QuickActions />

          <PartnerDocuments documents={partner.documents} />

          <WorkflowTimeline timeline={partner.timeline} />

          <InternalNotes
            notes={notes}
            noteText={noteText}
            setNoteText={setNoteText}
            onAddNote={addNote}
          />

          <RecentPartnerActivity activities={partner.activities} />
        </div>
      </main>
    </div>
  );
}

function PartnerInformation({ partner }) {
  return (
    <section className="partner-detail-card partner-information-card">
      <div className="detail-card-header">
        <div>
          <p className="section-eyebrow">PROFILE</p>
          <h2>Partner Information</h2>
        </div>

        <button className="small-text-button">Edit</button>
      </div>

      <div className="partner-information-grid">
        <InformationItem
          label="Primary Contact"
          value={partner.primaryContact}
        />

        <InformationItem label="Email" value={partner.email} />

        <InformationItem label="Phone" value={partner.phone} />

        <InformationItem label="Program Year" value={partner.programYear} />

        <InformationItem label="Number of Sites" value={partner.sites} />

        <InformationItem
          label="Expected Students"
          value={partner.studentCount}
        />

        <InformationItem label="Internal Owner" value={partner.internalOwner} />

        <InformationItem
          label="Shipping Address"
          value={partner.shippingAddress}
          wide
        />
      </div>
    </section>
  );
}

function InformationItem({ label, value, wide = false }) {
  return (
    <div className={`information-item ${wide ? "wide" : ""}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function QuickActions() {
  return (
    <section className="partner-detail-card quick-actions-card">
      <div className="detail-card-header">
        <div>
          <p className="section-eyebrow">SHORTCUTS</p>
          <h2>Quick Actions</h2>
        </div>
      </div>

      <div className="quick-action-list">
        <button>
          <span>＋</span>
          Generate Invoice
        </button>

        <button>
          <span>✉</span>
          Send Reminder
        </button>

        <button>
          <span>⇧</span>
          Upload Document
        </button>

        <button>
          <span>✓</span>
          Mark Payment Received
        </button>

        <button>
          <span>▣</span>
          Send Enrollment Form
        </button>
      </div>
    </section>
  );
}

function PartnerDocuments({ documents }) {
  return (
    <section className="partner-detail-card documents-card">
      <div className="detail-card-header">
        <div>
          <p className="section-eyebrow">FILES</p>
          <h2>Documents</h2>
        </div>

        <button className="small-text-button">Upload Document</button>
      </div>

      <div className="documents-grid">
        {documents.map((document) => (
          <article className="document-card" key={document.id}>
            <div className="document-card-top">
              <span className="document-icon">▤</span>

              <StatusBadge status={document.status} />
            </div>

            <div>
              <p>{document.type}</p>
              <h3>{document.name}</h3>
              <small>{document.date}</small>
            </div>

            <div className="document-actions">
              <button>View</button>
              <button>Download</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WorkflowTimeline({ timeline }) {
  return (
    <section className="partner-detail-card timeline-card">
      <div className="detail-card-header">
        <div>
          <p className="section-eyebrow">PROGRESS</p>
          <h2>Workflow Timeline</h2>
        </div>
      </div>

      <div className="admin-timeline">
        {timeline.map((step, index) => (
          <div className="admin-timeline-step" key={step.id}>
            <div className="timeline-marker-column">
              <span className={`timeline-marker ${step.status}`}>
                {step.status === "completed" ? "✓" : index + 1}
              </span>

              {index < timeline.length - 1 && (
                <span className={`timeline-line ${step.status}`} />
              )}
            </div>

            <div className="timeline-step-content">
              <strong>{step.title}</strong>
              <span>{step.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InternalNotes({ notes, noteText, setNoteText, onAddNote }) {
  return (
    <section className="partner-detail-card internal-notes-card">
      <div className="detail-card-header">
        <div>
          <p className="section-eyebrow">TEAM ONLY</p>
          <h2>Internal Notes</h2>
        </div>
      </div>

      <div className="add-note-area">
        <textarea
          placeholder="Add an internal note..."
          value={noteText}
          onChange={(event) => setNoteText(event.target.value)}
        />

        <button className="primary-admin-button" onClick={onAddNote}>
          Add Note
        </button>
      </div>

      <div className="notes-list">
        {notes.map((note) => (
          <article className="note-item" key={note.id}>
            <p>{note.text}</p>

            <div>
              <strong>{note.author}</strong>
              <span>{note.date}</span>
            </div>
          </article>
        ))}

        {notes.length === 0 && (
          <p className="empty-message">No internal notes have been added.</p>
        )}
      </div>
    </section>
  );
}

function RecentPartnerActivity({ activities }) {
  return (
    <section className="partner-detail-card partner-activity-card">
      <div className="detail-card-header">
        <div>
          <p className="section-eyebrow">HISTORY</p>
          <h2>Recent Activity</h2>
        </div>
      </div>

      <div className="partner-activity-list">
        {activities.map((activity) => (
          <div className="partner-activity-item" key={activity.id}>
            <span className="activity-marker" />

            <div>
              <strong>{activity.title}</strong>
              <p>{activity.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminDashboard;
