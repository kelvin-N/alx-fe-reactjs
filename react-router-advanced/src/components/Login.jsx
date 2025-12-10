import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <p>This is a fake login page for testing protected routes.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default Login;
