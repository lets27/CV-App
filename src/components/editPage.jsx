import { useState } from "react";

import "./generalSec.css";
import ShowCv from "./mainDisplays";

export default function EditPage({ incomingData }) {
  const [formData, setFormData] = useState(incomingData);

  function submitHanlder(e) {
    e.preventDefault();
    setSubmitStatus(true);
  }

  const [submitStatus, setSubmitStatus] = useState(false);

  function changeHandler(e) {
    //extract the name and value of the target
    const { name, value } = e.target; //this targets the input form thats being selected
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  if (!submitStatus) {
    return (
      <>
        <h2>EDIT CV</h2>
        <form onSubmit={submitHanlder}>
          <fieldset className="personal">
            <legend>Personal Details</legend>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={changeHandler}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={changeHandler}
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              placeholder="Enter your phone number"
              required
              onChange={changeHandler}
            />
          </fieldset>

          <fieldset className="Education">
            <legend>Education History</legend>
            <label htmlFor="schoolName">School Name</label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              placeholder="Enter your school name"
              required
              value={formData.schoolName}
              onChange={changeHandler}
            />

            <label htmlFor="titleOfStudy">Title of Study</label>
            <input
              type="text"
              id="titleOfStudy"
              name="titleOfStudy"
              placeholder="Enter the title of your study"
              required
              value={formData.titleOfStudy}
              onChange={changeHandler}
            />

            <label htmlFor="dateOfStudy">Date of Study</label>
            <input
              type="date"
              id="dateOfStudy"
              name="dateOfStudy"
              required
              value={formData.dateOfStudy}
              onChange={changeHandler}
            />
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              name="companyName"
              placeholder="Enter company name"
              required
              value={formData.companyName}
              onChange={changeHandler}
            />
          </fieldset>
          <fieldset className="work">
            <legend>employment History</legend>
            <label htmlFor="position">Position Title</label>
            <input
              type="text"
              id="position"
              name="position"
              placeholder="Enter your position title"
              required
              value={formData.position}
              onChange={changeHandler}
            />

            <label htmlFor="responsibilities">Main Responsibilities</label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              placeholder="Describe your responsibilities"
              rows="4"
              required
              value={formData.responsibilities}
              onChange={changeHandler}
            ></textarea>

            <label htmlFor="dateFrom">Date From</label>
            <input
              type="date"
              id="dateFrom"
              name="dateFrom"
              required
              value={formData.dateFrom}
              onChange={changeHandler}
            />

            <label htmlFor="dateEnd">Date Until</label>
            <input
              type="date"
              id="dateEnd"
              name="dateEnd"
              required
              value={formData.dateEnd}
              onChange={changeHandler}
            />
          </fieldset>
          <button type="submit" onClick={submitHanlder}>
            Submit
          </button>
        </form>
      </>
    );
  } else {
    return <ShowCv formData={formData} />;
  }
}
