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
      <section className="basic-info">
        <h2>
          {fname} {lname}
        </h2>
        <div className="contact">
          <div>
            <FontAwesomeIcon icon={solid("phone")} /> {number}
          </div>
          <div>
            <FontAwesomeIcon icon={solid("envelope")} /> {email}
          </div>
          <div>
            <FontAwesomeIcon icon={solid("user")} /> {social}
          </div>
        </div>
      </section>
      <section className="about">
        <i>{about}</i>
      </section>
      <section className="edu">
        <h3>Education</h3>
        {education.map((edu) => {
          const { schoolName, titleOfStudy, eduFrom, eduTo } = edu
          return (
            <div key={edu.id} className="list-item">
              <div>
                {eduFrom}-{eduTo}
              </div>
              <div>
                <strong>{titleOfStudy}</strong>
                <br />
                {schoolName}
              </div>
            </div>
          )
        })}
      </section>
      <section className="exp">
        <h3>Professional Experience</h3>
        {experience.map((exp) => {
          const { companyName, titleOfJob, jobFrom, jobTo, jobDuty } = exp
          return (
            <div key={exp.id} className="list-item">
              <div>
                {jobFrom}-{jobTo}
              </div>
              <div>
                <strong>{titleOfJob}</strong>
                <br />
                {companyName}
              </div>
              <div>{jobDuty}</div>
            </div>
          )
        })}
      </section>
    </article>
  )
}

export default CV
