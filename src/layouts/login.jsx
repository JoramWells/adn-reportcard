import Navbar from '../components/Navbar'
import '../css/login.css'

const Login = () => {
  return (
    <div>
    {/* 

Project Group: 5

Project Group Members: Vaibhavi Arjunwadkar (1001826818)
                   Sashidhar Boyapati (1002087319)
                   Hema Sai Desai (1002029973)
                   Hemanth Reddy Gillela (1002033611)
                   Smrithi Gujjula (1002073701) 

*/}

<Navbar />
    <div className="login-container">
      <h2>Login</h2>
      <h4>Welcome back..!</h4>
      <form action="#" method="post">
        <input type="email" className="login-input" placeholder="Email" required />
        <input type="password" className="login-input" placeholder="Password" required />
        <br /><br />
        <button type="submit" className="login-button">Login</button>
      </form>
      <br />
      <div className="forgot-password">
        <a href="#">Forgot my password</a>
      </div>
    </div>
    {/* Footer code */}
    <div className="fixed-footer">
      @ 2023 SKILLIFY, INC
    </div>
  </div>
  )
}

export default Login