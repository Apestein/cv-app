import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"
import "../styles/CV.css"

function CV(props) {
  const { fname, lname, email, number, social, about, education, experience } =
    props
  return (
    <article>
      <section>
        <h2>
          {fname} {lname}
        </h2>
        <p className="contact">
          <div>
            <FontAwesomeIcon icon={solid("phone")} /> {number}
          </div>
          <div>
            <FontAwesomeIcon icon={solid("envelope")} /> {email}
          </div>
          <div>
            <FontAwesomeIcon icon={solid("user")} /> {social}
          </div>
        </p>
        <p>{about}</p>
      </section>
      <section>
        <h2>Education</h2>
        {education.map((edu) => {
          const { schoolName, titleOfStudy, eduFrom, eduTo } = edu
          return (
            <p key={edu.id} className="edu">
              <div>
                {eduFrom}-{eduTo}
              </div>
              <div>
                <strong>{titleOfStudy}</strong>
                <br />
                {schoolName}
              </div>
            </p>
          )
        })}
      </section>
      <section>
        <h2>Professional Experience</h2>
        {experience.map((exp) => {
          const { companyName, titleOfJob, jobFrom, jobTo, jobDuty } = exp
          return (
            <p key={exp.id}>
              Company: {companyName}
              Title: {titleOfJob}
              From: {jobFrom}
              To: {jobTo}
              Job Description: {jobDuty}
            </p>
          )
        })}
      </section>
    </article>
  )
}

export default CV
