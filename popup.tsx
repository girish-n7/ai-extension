import { useState, useTransition } from "react"

import "./style.css"

function IndexPopup() {
  //manage state for input
  let [data, setData] = useState({ question: "", answer: "" })

  //handle change (can handle multiple input fields' changes in future)
  function handleChange(e: any) {
    let { name, value } = e.target
    setData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="container">
      <div className="answer">{data.answer}</div>
      <div className="question--container">
        <input
          className="question"
          name="question"
          value={data.question}
          onChange={(e) => handleChange(e)}
          placeholder="Type your question here"
          required
          autoFocus></input>
        <button className="generate">Generate</button>
      </div>
    </div>
  )
}

export default IndexPopup
