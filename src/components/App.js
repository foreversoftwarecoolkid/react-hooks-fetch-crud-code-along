// App.js

import React from 'react';
import Filter from './Filter';
import Header from './Header';
import Item from './Item';
import ItemForm from './ItemForm';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';
import ShoppingList from './ShoppingList';

const App = () => {
  const handleAddQuestion = (newQuestion) => {
    // Implement logic to add the new question to the list or perform any necessary updates
    // You can use state management libraries or local state as per your project structure
    console.log('Added question:', newQuestion);
  };

  const openAppInBrowser = () => {
    window.open('http://localhost:4000', '_blank');
  };

  return (
    <div>
      <Header />
      <Filter />
      <ShoppingList />
      <Item />
      <ItemForm />
      <QuestionForm onAddQuestion={handleAddQuestion} />
      <QuestionList />
      <button onClick={openAppInBrowser}>Open App</button>
    </div>
  );
};

export default App;
