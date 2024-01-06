import React, { useState } from 'react';

const TodoList = () => {
  const [inputData, setInputData] = useState('');
  const [activities, setActivities] = useState([]);

  const addActivities = () => {
    if (inputData.trim() !== '') {
      setActivities([...activities, inputData]);
      setInputData('');
    }
  };

  const deleteActivity = (index) => {
    const updatedActivities = activities.filter((_, i) => i !== index);
    setActivities(updatedActivities);
  };

  const editActivity = (index) => {
    const newActivity = prompt('Enter new activity');
    if (newActivity !== null) {
      const updatedActivities = [...activities];
      updatedActivities[index] = newActivity;
      setActivities(updatedActivities);
    }
  };

  return (
    <div>
      <input
        placeholder='Type Here'
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={addActivities}>Add</button>
      <ul>
        {activities.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => editActivity(index)}>Edit</button>
            <button onClick={() => deleteActivity(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
