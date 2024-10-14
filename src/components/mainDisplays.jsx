// import General from "./generalSection";
import { useState } from "react";
import EditPage from "./editPage";

export default function ShowCv({ formData }) {
  const [submitStatus, setSubmitStatus] = useState(false);

  function switchToEdit(e) {
    e.preventDefault();
    setSubmitStatus(true);
  }

  if (!submitStatus) {
    return (
      <>
        {/* Displaying the formData */}
        <h3> CV OF MR {formData.name}</h3>
        <div className="personal">
          <h4>Personal Information</h4>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
        </div>

        <div className="education">
          <h4>Education Information</h4>
          <p>School Name: {formData.schoolName}</p>
          <p>Title of Study: {formData.titleOfStudy}</p>
          <p>Date of Study: {formData.dateOfStudy}</p>
        </div>

        <div className="work-experience">
          <h4>Work Experience</h4>
          <p>Company Name: {formData.companyName}</p>
          <p>Position: {formData.position}</p>
          <p>Responsibilities: {formData.responsibilities}</p>
          <p>Date From: {formData.dateFrom}</p>
          <p>Date Until: {formData.dateEnd}</p>
        </div>

        <button type="submit" onClick={switchToEdit}>
          submit
        </button>
      </>
    );
  } else {
    return <EditPage incomingData={formData} />;
  }
}
