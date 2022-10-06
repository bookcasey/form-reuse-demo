import logo from './logo.svg';
import './App.css';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Casey's Cool App!!!
        </h1>
        <SignUpForm />
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
