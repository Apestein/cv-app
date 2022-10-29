import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"

function Form(props) {
  const { handleChange, handleDelete, handleAdd, education, experience } = props
  return (
    <form>
      <fieldset>
        <legend>General Information</legend>
        <label>
          First Name:{" "}
          <input
            onChange={(e) => handleChange(null, e)}
            name="fname"
            type="text"
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            onChange={(e) => handleChange(null, e)}
            name="lname"
            type="text"
          />
        </label>
        <label>
          Email:{" "}
          <input
            onChange={(e) => handleChange(null, e)}
            name="email"
            type="email"
          />
        </label>
        <label>
          Phone Number:{" "}
          <input
            onChange={(e) => handleChange(null, e)}
            name="number"
            type="tel"
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Education</legend>
        {education.map((edu) => {
          return (
            <section key={edu.id}>
              <label>
                School Name:{" "}
                <input
                  onChange={(e) => handleChange(edu.id, e)}
                  data="edu"
                  name="schoolName"
                  type="text"
                />
              </label>
              <label>
                Title of Study:{" "}
                <input
                  onChange={(e) => handleChange(edu.id, e)}
                  data="edu"
                  name="titleOfStudy"
                  type="text"
                />
              </label>
              <label>
                From:{" "}
                <input
                  onChange={(e) => handleChange(edu.id, e)}
                  data="edu"
                  name="eduFrom"
                  type="date"
                />
              </label>
              <label>
                To:{" "}
                <input
                  onChange={(e) => handleChange(edu.id, e)}
                  data="edu"
                  name="eduTo"
                  type="date"
                />
              </label>
              <button onClick={(e) => handleDelete(edu.id, e)} name="education">
                Delete
              </button>
              <FontAwesomeIcon icon="fa-solid fa-trash" />
              <FontAwesomeIcon icon={solid("user-secret")} />
            </section>
          )
        })}
        <button onClick={handleAdd} type="button" name="education">
          Add
        </button>
      </fieldset>

      <fieldset>
        <legend>Professional Experience</legend>
        {experience.map((exp) => {
          return (
            <section key={exp.id}>
              <label>
                Company:{" "}
                <input
                  onChange={(e) => handleChange(exp.id, e)}
                  data="exp"
                  name="companyName"
                  type="text"
                />
              </label>
              <label>
                Position Title:{" "}
                <input
                  onChange={(e) => handleChange(exp.id, e)}
                  data="exp"
                  name="titleOfJob"
                  type="text"
                />
              </label>
              <label>
                From:{" "}
                <input
                  onChange={(e) => handleChange(exp.id, e)}
                  data="exp"
                  name="jobFrom"
                  type="date"
                />
              </label>
              <label>
                To:{" "}
                <input
                  onChange={(e) => handleChange(exp.id, e)}
                  data="exp"
                  name="jobTo"
                  type="date"
                />
              </label>
              <textarea
                onChange={(e) => handleChange(exp.id, e)}
                data="exp"
                name="jobDuty"
                placeholder="Describe your duties"
              />
              <button
                onClick={(e) => handleDelete(exp.id, e)}
                name="experience"
              >
                Delete
              </button>
            </section>
          )
        })}
        <button onClick={handleAdd} type="button" name="experience">
          Add
        </button>
      </fieldset>
    </form>
  )
}

export default Form
