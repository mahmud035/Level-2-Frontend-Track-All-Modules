import React, { useState } from 'react';

const UseStateExampleForm = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  //* Handle Multiple State Using Object
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        className="border-2 border-green-500"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="text"
        name="email"
        id="email"
        className="border-2 border-green-500"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <button type="submit" className="btn btn-accent">
        Submit
      </button>
    </form>
  );
};

export default UseStateExampleForm;
