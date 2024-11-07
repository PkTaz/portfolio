import './App.css';

function App() {
  const name = "William Chapman";
  const greeting = "Hello there!👋 I am";  // Greeting with emoji
  const title = "Software Engineer + Front-End Developer";
  const bio = "I’m deeply passionate about using technology to drive meaningful change. With a strong focus on understanding the needs of customers, I work to create solutions that not only address their immediate challenges but also anticipate future needs. My approach is always impact-driven, and I believe in delivering thoughtful, compassionate solutions that make a real difference in people’s lives. By combining technical expertise with a customer-first mindset, I strive to build systems that truly resonate and add value to those who use them."

  // Split the name into letters, preserving spaces as well
  const letters = name.split("").map((letter, index) => (
    <span key={index} className="letter" style={{ animationDelay: `${index * 0.1}s` }}>
      {letter === " " ? "\u00A0" : letter} {/* Preserve space using non-breaking space */}
    </span>
  ));

  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact Me</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="home">
        <h2 className="greeting">{greeting}</h2>
        <h1 className="centered-text">{letters}</h1> {/* Ensure the letters are rendered with animation */}
        <h2 className="title">{title}</h2>
        <p className="bio">{bio}</p>
      </section>
      <button className="hire-button">Hire Me!</button> {/* Hire Me! Button */}
      <img 
        src={`${process.env.PUBLIC_URL}/assets/profilep.jpeg`} 
        alt="Profile" 
        className="profile-image" 
      />
<div className="image-row">
  <img src={`${process.env.PUBLIC_URL}/assets/certL2.png`}  alt="certificate 1" className="image" />
  <img src={`${process.env.PUBLIC_URL}/assets/certL1.png`} alt="certificate 2" className="image" />
  <img src={`${process.env.PUBLIC_URL}/assets/certR1.png`} alt="certificate 3" className="image" />
  <img src={`${process.env.PUBLIC_URL}/assets/certR2.png`} alt="certificate 4" className="image" />
</div>
    </div>

  );
}

export default App;





