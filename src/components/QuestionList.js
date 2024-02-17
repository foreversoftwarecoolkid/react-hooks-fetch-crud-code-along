// QuestionList.js

import React, { useState, useEffect } from 'react';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:4000/questions');
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleDelete = (questionId) => {
    // Implement logic to delete a question
    console.log('Deleting question with ID:', questionId);
  };

  const handleCorrectAnswerChange = (questionId, newIndex) => {
    // Implement logic to update the correct answer index for a question
    console.log(`Updating correct answer index for question ${questionId} to ${newIndex}`);
  };

  return (
    <div>
      <h2>Question List</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <p>{question.prompt}</p>
            {/* Add rendering for answers and other details */}
            <button onClick={() => handleDelete(question.id)}>Delete</button>
            <select
              value={question.correctIndex}
              onChange={(e) => handleCorrectAnswerChange(question.id, parseInt(e.target.value))}
            >
              {question.answers.map((_, index) => (
                <option key={index} value={index}>
                  {index}
                </option>
              ))}
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
