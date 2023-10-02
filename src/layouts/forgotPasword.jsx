import Navbar from '../components/Navbar'
import '../css/forgotPassword.css'

const ForgotPasword = () => {
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
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <h4>Enter your email to reset your password</h4>
      <form action="#" method="post">
        <input type="email" className="forgot-input" placeholder="Email" required />
        <br /><br />
        <button type="submit" className="forgot-button">Reset Password</button>
      </form>
      <br />
      <div className="back-to-login">
        <a href="login.html">Back to Login</a>
      </div>
    </div>
    {/* Footer code */}
    <div className="fixed-footer">
      @ 2023 SKILLIFY, INC
    </div>
  </div>
  )
}

export default ForgotPasword