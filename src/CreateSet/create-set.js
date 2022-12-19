import React from 'react'
import './create-set.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function CreateSet() {

  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const card = {
    setTitle: title,
    cardQuestion: question,
    cardAnswer: answer
  }
  const handleSubmit = (e) => {
    // fetch('http:localhost:5000/createset', {
    //   method: 'POST',
    //   cache: 'no-cache',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(card)
    // })
    e.preventDefault();
    console.log(card);
  }

  function errorLog() {
    console.log("This works");
  }
  return (
    <>
      <div className="container">
        <div className='Heading'>
          <h2 className='text-center'>New Set</h2>
        </div>
        <form>
          <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Set Title</span>
          </div>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Question</span>
            </div>
            <textarea className="form-control" value={question} onChange={(e) => setQuestion(e.target.value)} aria-label="With textarea"></textarea>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Answer</span>
            </div>
            <textarea className="form-control"  value={answer} onChange={(e) => setAnswer(e.target.value)}aria-label="With textarea"></textarea>
          </div>
          <div className='buttons' align="center">
            <Link to="/" className='btn btn-primary space'>Exit</Link>
            <button className='btn btn-success' onClick={handleSubmit}>Add Card</button>
          </div>
        </form>
        
        
      </div>
    </>
  )
}

export default CreateSet;