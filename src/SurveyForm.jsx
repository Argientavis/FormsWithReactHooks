import React, { useState } from 'react';


const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    feedback: '',
    feeling: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Feedback:</label>
        <textarea
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label>How are you feeling right now?</label>
        <div className="radio-group">
          <div>
            <input
              type="radio"
              name="feeling"
              value="happy"
              checked={formData.feeling === 'happy'}
              onChange={handleChange}
            /> Happy
          </div>
          <div>
            <input
              type="radio"
              name="feeling"
              value="sad"
              checked={formData.feeling === 'sad'}
              onChange={handleChange}
            /> Sad
          </div>
          <div>
            <input
              type="radio"
              name="feeling"
              value="neutral"
              checked={formData.feeling === 'neutral'}
              onChange={handleChange}
            /> Neutral
          </div>
          <div>
            <input
              type="radio"
              name="feeling"
              value="excited"
              checked={formData.feeling === 'excited'}
              onChange={handleChange}
            /> Excited
          </div>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SurveyForm;
