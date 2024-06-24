import React from 'react'
import './Question.css';
import { IoMdAdd } from "react-icons/io";
import { question_list } from '../../assets/assets';

const Question = () => {
  return (
    <div className="question">
        <h1>Frequently Asked Questions</h1>

        <div className="question-container">
        {question_list.map((item, index) => (
          <div className="question-box" key={index}>
            <p>{item.question}</p>
            <span><IoMdAdd /></span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Question
