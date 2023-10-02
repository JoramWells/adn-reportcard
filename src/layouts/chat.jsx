import '../css/Chat.css'

const Chat = () => {
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
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Chat With Us</title>
    <link rel="stylesheet" href="../../css pages/Chat.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <div className="container">
      <div className="row">
        <div className="sidebar">
          <div className="logo">
            <a href="../home.html"><img src="../../images/logo.jpeg" alt="Home" className="home-icon" /></a>
            <hr />
          </div>
          <ul>
            <li>
              <a href="#" className="active">
                <span className="item"><h2>Student</h2></span>
              </a>
            </li>
            <li>
              <a href="Student.html">
                <span className="item">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="Student-acc.html">
                <span className="item">Account</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="item">Grades</span>
              </a>
            </li>
            <li>
              <a href="Discussion.html">
                <span className="item">Discussion Forum</span>
              </a>
            </li>
            <li>
              <a href="Chat.html">
                <span className="item">Chat with us</span>
              </a>
            </li>
            <li>
              <a href="../login.html">
                <span className="item">Log Out</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="chat-container">
            <div className="chat-header">
              <h2>Chat with Us</h2>
              <button className="close-button"><i className="fa fa-times" /></button>
            </div>
            <div className="message-container">
              <div className="message admin">
                Admin: Hello! How can I assist you today?
              </div>
              <div className="message student">
                Student: Hi, I have a question about the assignment.
              </div>
              <div className="message admin">
                Admin: Sure, what's your question?
              </div>
              <div className="message student">
                Student: I'm having trouble with question #3. Can you help me understand it?
              </div>
            </div>
            <div className="input-container">
              <textarea className="message-input" placeholder="Write your message..." defaultValue={""} />
              <button className="send-button"><i className="fa fa-paper-plane" /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="footer">
          @ 2023 SKILLIFY, INC
        </div>
      </div>
    </div>
  </div>
  )
}

export default Chat