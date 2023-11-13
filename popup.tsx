"use client"

import { useCompletion } from "ai/react"

import "./style.css"

function IndexPopup() {
  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit
  } = useCompletion({
    api: "http://localhost:3000/api"
  })

  return (
    <div className="container">
      <div className="answer">{completion}</div>
      <div className="question--container">
        <form onSubmit={handleSubmit}>
          <input
            className="question"
            name="question"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your question here"
            required
            autoFocus></input>
          <button type="submit" disabled={isLoading} className="generate">
            Generate
          </button>
        </form>
      </div>
    </div>
  )
}

export default IndexPopup
