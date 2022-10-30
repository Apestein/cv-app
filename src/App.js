import React, { Component } from "react"
import Form from "./components/Form"
import CV from "./components/CV"
import uniqid from "uniqid"
import "./styles/App.css"

class App extends Component {
  constructor() {
    super()

    this.state = {
      fname: "Luke",
      lname: "Skywalker",
      email: "lukeskywalker@gmail.com",
      number: "000-111-2222",
      social: "@github.com/skywalker",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.",
      education: [
        {
          schoolName: "Jedi Academy",
          titleOfStudy: "Jedi Master",
          eduFrom: "9969",
          eduTo: "9976",
          id: uniqid(),
        },
      ],
      experience: [
        {
          companyName: "The Resistance",
          titleOfJob: "The Chosen One",
          jobFrom: "9977",
          jobTo: "9979",
          jobDuty: "Bring balance to the force",
          id: uniqid(),
        },
      ],
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleChange(id, e) {
    const name = e.target.name
    if (e.target.getAttribute("data") == "edu") {
      this.setState({
        education: this.state.education.map((edu) =>
          edu.id == id ? { ...edu, [name]: e.target.value } : edu
        ),
      })
    } else if (e.target.getAttribute("data") == "exp") {
      this.setState({
        experience: this.state.experience.map((exp) =>
          exp.id == id ? { ...exp, [name]: e.target.value } : exp
        ),
      })
    } else
      this.setState({
        [name]: e.target.value,
      })
  }

  handleDelete(id, name) {
    this.setState({
      [name]: this.state[name].filter((element) => element.id != id),
    })
  }

  handleAdd(name) {
    const eduTemplate = {
      schoolName: "",
      titleOfStudy: "",
      eduFrom: "",
      eduTo: "",
      id: uniqid(),
    }
    const expTemplate = {
      companyName: "",
      titleOfJob: "",
      jobFrom: "",
      jobTo: "",
      jobDuty: "",
      id: uniqid(),
    }
    const addElement = name == "education" ? eduTemplate : expTemplate
    this.setState({
      [name]: [...this.state[name], addElement],
    })
  }

  render() {
    return (
      <>
        <header>
          <h1>CV Creator</h1>
        </header>
        <main>
          <Form
            handleChange={this.handleChange}
            handleDelete={this.handleDelete}
            handleAdd={this.handleAdd}
            education={this.state.education}
            experience={this.state.experience}
          />
          <CV {...this.state} />
        </main>
        <footer>Copyright © 2022 Anon</footer>
      </>
    )
  }
}

export default App
