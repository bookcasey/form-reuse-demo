import { useState } from "react";
import Form from './Form';

function SignUpForm() {
  const [formInfo, setFormInfo] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();

    console.log('Sign up called');

    // TODO: POST /users
  }

  return (
    <>
      <Form
        welcomeMessage="Welcome to my app!"
        buttonText="Sign up"
        handleSubmit={handleSubmit}
        formInfo={formInfo}
        setFormInfo={setFormInfo}
      />
    </>
  )
}

export default SignUpForm;