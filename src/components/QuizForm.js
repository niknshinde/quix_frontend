import React, { useState ,useContext } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import quizContex from '../contex/quiz/quizContext';

const QuizForm = () => {
  const context = useContext(quizContex);
  const {createQuizQuestion} = context;

  const [inputFields, setInputFields] = useState([{ text: '', isCorrect: false }]);
  const [isSubmitted, setSubmitted] = useState(false);
  const [language, setLanguage] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [question, setQuestion] = useState('');

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ text: '', isCorrect: false });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === 'isCorrect') {
      values[index].isCorrect = event.target.checked;
    } else {
      values[index].text = event.target.value;
    }
    setInputFields(values);
  };

  const resetForm = () => {
    setInputFields([{ text: '', isCorrect: false }]);
    setLanguage('');
    setDifficulty('easy');
    setQuestion('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    

    try {
      // POST request using fetch
      const lowerLanguage = language.toLowerCase();

      await createQuizQuestion(lowerLanguage , difficulty, question, inputFields)
      

      // Set submitted to true and reset the form after a delay
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        resetForm();
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="questionForm">
      {isSubmitted ? <h6 className='form_response'>question created succesfully</h6> : " "}
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="language">Language</Label>
        <Input
          type="text"
          name="language"
          id="language"
          placeholder="Enter language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="difficulty">Difficulty</Label>
        <Input
          type="select"
          name="difficulty"
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>easy</option>
          <option>medium</option>
          <option>hard</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="question">Question</Label>
        <Input
          type="textarea"
          name="question"
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </FormGroup>
      {inputFields.map((inputField, index) => (
        <div key={`${inputField}~${index}`}>
          <FormGroup>
            <Label for={`optionText${index + 1}`}>Option Text</Label>
            <Input
              type="text"
              id={`optionText${index + 1}`}
              name="text"
              value={inputField.text}
              onChange={(event) => handleInputChange(index, event)}
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                id={`isCorrect${index + 1}`}
                name="isCorrect"
                checked={inputField.isCorrect}
                onChange={(event) => handleInputChange(index, event)}
              />{' '}
              Correct Answer
            </Label>
          </FormGroup>
          <Button className='remove_btn' type="button" onClick={() => handleRemoveFields(index)}>
            Remove
          </Button>
        </div>
      ))}
      <Button className='add_option_btn' type="button" onClick={handleAddFields} disabled={inputFields.length >= 4}>
        Add Option
      </Button>
      <Button type="submit">Submit</Button>
    </Form>

    </div>
  );
};

export default QuizForm;
