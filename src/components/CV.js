import React from "react"

function CV(props) {
  const { fname, lname, email, number, education, experience } = props
  return (
    <article>
      <section>
        <h2>Description</h2>
        <p>
          First Name: {fname}
          Last Name: {lname}
          Email: {email}
          Phone Number: {number}
        </p>
      </section>
      <section>
        <h2>Education</h2>
        {education.map((edu) => {
          const { schoolName, titleOfStudy, eduFrom, eduTo } = edu
          return (
            <p key={edu.id}>
              School Name: {schoolName}
              Title of Study: {titleOfStudy}
              From: {eduFrom}
              To: {eduTo}
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
