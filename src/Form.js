function Form({
  welcomeMessage,
  buttonText,
  handleSubmit,
  formInfo,
  setFormInfo,
}) {

  const handleChange = e => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <p>{welcomeMessage}</p>
      <form onSubmit={handleSubmit}>
        <label>Username/email:
          <input id='username'
            name='username'
            value={formInfo.username}
            onChange={handleChange} />
        </label><br />
        <label>Password:
          <input id='password'
            name='password'
            value={formInfo.password}
            type='password'
            onChange={handleChange} />
        </label><br />
        <button>{buttonText}</button>
      </form>
    </>
  )
}

export default Form;