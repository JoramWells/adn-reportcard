import Navbar from '../components/Navbar'
import '../css/signUp.css'

const Register = () => {
  return (
    <div>

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sign Up Page</title>
        <link rel="stylesheet" href="../css pages/signUp.css" />
<Navbar />
        <div className="signUp-container">
          <h2>Sign Up</h2>
          <h4>Create a new Account..!</h4>
          <form action="#" method="post">
            <input type="text" className="signUp-input" placeholder="Name" required />
            <input type="email" className="signUp-input" placeholder="Email" required />
            <input type="password" className="signUp-input" placeholder="Password" required />
            <input type="password" className="signUp-input" placeholder="Confirm Password" required />
            <br /><br />
            <button type="submit" className="signUp-button">Sign Up</button>
          </form>
          <br />
          <h6>By signing up you agree to our</h6>
          <h6>Terms and Conditions</h6>
        </div>
        {/* Footer code */}
        <div className="fixed-footer">
          @ 2023 SKILLIFY, INC
        </div>
      </div>
  )
}

export default Register