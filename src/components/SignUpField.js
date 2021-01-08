import React from 'react';
import './InputField.css';
import InputField from './InputField';

function App() {
  const inputRefs = React.useRef([
    React.createRef(), React.createRef()
  ]);

  const [setData] = React.useState({});

  const handleChange = (name, value) => {
    setData(prev => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    let isValid = true;

    for (let i = 0; i < inputRefs.current.length; i++) {
      const valid = inputRefs.current[i].current.validate();
      console.log(valid);
      if (!valid) {
        isValid = false;
      }
    }

    if (!isValid) {
      return;
    }

    console.log("Logged In");
  };

  return (
    <div className="AppLogin">
      <form onSubmit={submitForm} className="loginForm">
        <h1>Sign In Form</h1>
        <InputField
          ref={inputRefs.current[0]}
          name="username"
          label="Username*:"
          onChange={handleChange}
          validation={"required|min:6|max:12"}
        />
        <InputField
          ref={inputRefs.current[1]}
          name="password"
          label="Password*:"
          validation="required|min:6"
          onChange={handleChange}
        />
        <button className="LogButton" type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
