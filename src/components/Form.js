import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"
import "../styles/Form.css"

function Form(props) {
  const { handleChange, handleDelete, handleAdd, education, experience } = props
  return (
    <form>
      <fieldset>
        <legend>General Information</legend>
        <label>
          <input
            onChange={(e) => handleChange(null, e)}
            name="fname"
            type="text"
            placeholder="First Name"
          />
        </label>
        <label>
          <input
            onChange={(e) => handleChange(null, e)}
            name="lname"
            type="text"
            placeholder="Last Name"
          />
        </label>
        <label>
          <input
            onChange={(e) => handleChange(null, e)}
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <label>
          <input
            onChange={(e) => handleChange(null, e)}
            name="number"
            type="tel"
            placeholder="Phone Number"
          />
        </label>
        <label>
          <input
            onChange={(e) => handleChange(null, e)}
            name="social"
            type="text"
            placeholder="Github"
          />
        </label>
        <textarea
          onChange={(e) => handleChange(null, e)}
          name="about"
          type="text"
          placeholder="About yourself"
        />
      </fieldset>

      <fieldset>
        <legend>Education</legend>
        {education.map((edu) => {
          return (
            <section key={edu.id}>
              <label>
                <input
                  onChange={(e) => handleChange(edu.id, e)}
                  data="edu"
                  name="schoolName"
                  type="text"
                  placeholder="School Name"
                />
              </label>
              <label>
                <input
                  onChange={(e) => handleChange(edu.id, e)}
                  data="edu"
                  name="titleOfStudy"
                  type="text"
                  placeholder="Title of Study"
                />
              </label>
              <label>
                <input
                  onChange={(e) => handleChange(edu.id, e)}
                  data="edu"
                  name="eduFrom"
                  type="text"
                  placeholder="From"
                />
              </label>
              <label>
                <input
                  onChange={(e) => handleChange(edu.id, e)}
                  data="edu"
                  name="eduTo"
                  type="text"
                  placeholder="To"
                />
              </label>
              <FontAwesomeIcon
                onClick={() => handleDelete(edu.id, "education")}
                icon={solid("trash")}
                size="2x"
              />
            </section>
          )
        })}
        <FontAwesomeIcon
          onClick={() => handleAdd("education")}
          icon={solid("plus")}
          size="2x"
        />
      </fieldset>

      <fieldset>
        <legend>Professional Experience</legend>
        {experience.map((exp) => {
          return (
            <section key={exp.id}>
              <label>
                <input
                  onChange={(e) => handleChange(exp.id, e)}
                  data="exp"
                  name="companyName"
                  type="text"
                  placeholder="Company"
                />
              </label>
              <label>
                <input
                  onChange={(e) => handleChange(exp.id, e)}
                  data="exp"
                  name="titleOfJob"
                  type="text"
                  placeholder="Position Title"
                />
              </label>
              <label>
                <input
                  onChange={(e) => handleChange(exp.id, e)}
                  data="exp"
                  name="jobFrom"
                  type="text"
                  placeholder="From"
                />
              </label>
              <label>
                <input
                  onChange={(e) => handleChange(exp.id, e)}
                  data="exp"
                  name="jobTo"
                  type="text"
                  placeholder="To"
                />
              </label>
              <textarea
                onChange={(e) => handleChange(exp.id, e)}
                data="exp"
                name="jobDuty"
                placeholder="Describe your duties"
              />
              <FontAwesomeIcon
                onClick={() => handleDelete(exp.id, "experience")}
                icon={solid("trash")}
                size="2x"
              />
            </section>
          )
        })}
        <FontAwesomeIcon
          onClick={() => handleAdd("experience")}
          icon={solid("plus")}
          size="2x"
        />
      </fieldset>
    </form>
  )
}

export default Form
