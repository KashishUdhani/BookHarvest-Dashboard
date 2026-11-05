import React from "react";
import { useState } from "react";

const ServiceAgreementForm = ({ onComplete }) => {
  const [formData, setFormData] = useState({
    organizationName: "",
    numberOfSites: "",
    totalStudents: "",
    preferredDeliveryDate: "",

    signerFirstName: "",
    signerLastName: "",
    signerTitle: "",
    signerPhone: "",
    signerEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted form:", formData);

    onComplete();
  };

  return (
    <div className="form-page">
      <section className="form-introduction">
        <section className="left-card">
          <div className="left-card-content">
            <p className="left-card-eyebrow">WELCOME TO</p>

            <h1>
              <span> BookHarvest Partner Portal.</span>
            </h1>

            <p className="left-card-description">
              Share a few details about your organization so we can prepare your
              service agreement and guide you through the next steps.
            </p>
          </div>
        </section>
      </section>

      <section className="form-section">
        <section className="form-card">
          <div className="form-container">
            <div className="form-header">
              <h2>Service Agreement Information</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend>Organization Information</legend>

                <div className="field-grid">
                  <div className="form-field full-width">
                    <label htmlFor="organizationName">
                      Participating organization name
                    </label>

                    <input
                      id="organizationName"
                      name="organizationName"
                      type="text"
                      value={formData.organizationName}
                      onChange={handleChange}
                      placeholder="Organization name"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="numberOfSites">
                      Number of participating sites
                    </label>

                    <input
                      id="numberOfSites"
                      name="numberOfSites"
                      type="number"
                      value={formData.numberOfSites}
                      onChange={handleChange}
                      min="1"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="totalStudents">
                      Total number of enrolled students
                    </label>

                    <input
                      id="totalStudents"
                      name="totalStudents"
                      type="number"
                      value={formData.totalStudents}
                      onChange={handleChange}
                      min="1"
                    />
                  </div>

                  <div className="form-field full-width">
                    <label htmlFor="preferredDeliveryDate">
                      Preferred delivery date
                    </label>

                    <input
                      id="preferredDeliveryDate"
                      name="preferredDeliveryDate"
                      type="date"
                      value={formData.preferredDeliveryDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <legend>Authorized Signer</legend>

                <div className="field-grid">
                  <div className="form-field">
                    <label htmlFor="signerFirstName">First name</label>

                    <input
                      id="signerFirstName"
                      name="signerFirstName"
                      type="text"
                      value={formData.signerFirstName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="signerLastName">Last name</label>

                    <input
                      id="signerLastName"
                      name="signerLastName"
                      type="text"
                      value={formData.signerLastName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field full-width">
                    <label htmlFor="signerTitle">Title</label>

                    <input
                      id="signerTitle"
                      name="signerTitle"
                      type="text"
                      value={formData.signerTitle}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="signerPhone">Phone number</label>

                    <input
                      id="signerPhone"
                      name="signerPhone"
                      type="tel"
                      value={formData.signerPhone}
                      onChange={handleChange}
                      placeholder="(919) 555-0142"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="signerEmail">Primary email address</label>

                    <input
                      id="signerEmail"
                      name="signerEmail"
                      type="email"
                      value={formData.signerEmail}
                      onChange={handleChange}
                      placeholder="signer@organization.org"
                    />
                  </div>
                </div>
              </fieldset>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ServiceAgreementForm;
