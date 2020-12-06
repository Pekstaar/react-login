import './login.css';
import LoginForm from './LoginForm';

const Login = () => {
  const signin = (details) => {
    console.log(details);
  };

  return (
    <div className="login-container">
      <div className="login-title">
        <h2>Login</h2>
      </div>
      <LoginForm signin={signin} />
    </div>
  );
};

export default Login;
