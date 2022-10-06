import { useState } from "react";
import Form from "./Form";

function SignUpForm() {
  const [formInfo, setFormInfo] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();

    console.log('Log in called');

    // TODO: POST /login
  }


  return (
    <>
      <Form
        welcomeMessage={"Welcome back!"}
        buttonText={"Log in"}
        handleSubmit={handleSubmit}
        formInfo={formInfo}
        setFormInfo={setFormInfo}
      />
    </>
  )
}

export default SignUpForm;