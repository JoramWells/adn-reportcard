import '../css/DiscussionF.css'
const Discussion = () => {
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
    <title>Discussion Forum</title>
    <link rel="stylesheet" href="../../css pages/DiscussionF.css" />
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
              <a href="#">
                <span className="item"><h2>Student</h2></span>
              </a>
            </li>
            <li>
              <a href="Student.html" className="active">
                <span className="item">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="Student-acc.html">
                <span className="a-active">Account</span>
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
          <div className="discussion-container">
            <div className="discussion-header">
              <select id="discussion-topic">
                <option value="topic1">Discussion Topic 1</option>
                <option value="topic2">Discussion Topic 2</option>
                <option value="topic3">Discussion Topic 3</option>
                <option value="topic4">Discussion Topic 4</option>
              </select>
            </div>
            <div className="message-container">
              <div className="message student">
                Student1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
              <div className="message instructor">
                Instructor a: Nullam ac libero sed arcu vehicula commodo.
              </div>
              <div className="message student">
                Student2: Nullam ac libero sed arcu vehicula commodo.
              </div>
              {/* Add more messages here */}
            </div>
            <div className="input-container">
              <textarea className="message-input" placeholder="Write your message..." defaultValue={""} />
              <button className="send-button"><i className="fa fa-paper-plane" /> Send</button>
            </div>
            <button className="create-topic-button">Create Topic</button>
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
  )
}

export default Discussion