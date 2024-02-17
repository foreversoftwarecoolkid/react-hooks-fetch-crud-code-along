// QuestionForm.js

import React, { useState } from 'react';

const QuestionForm = ({ onAddQuestion }) => {
  const [formData, setFormData] = useState({
    prompt: '',
    answers: [],
    correctIndex: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const newQuestion = await response.json();
      onAddQuestion(newQuestion);
    } catch (error) {
      console.error('Error adding question:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add input fields for prompt, answers, and correctIndex */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuestionForm;
