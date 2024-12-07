import './styles/App.css';
import './styles/Footer.css';
import Cube from './components/Cube.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import Lcards from './components/Languages.jsx';
import Header from './components/Header.jsx';
import Certifications from './components/Certifications.jsx';
import Projects from './components/Projects.jsx';
import Lightsaber from './components/Lightsaber.jsx';

function App() {
  const name = "William Chapman";
  const greeting = "Hello there!👋 I am";  
  const title = "Software Engineer + Front-End Developer";
  const bio = "I’m deeply passionate about using technology to drive meaningful change. With a strong focus on understanding the needs of customers, I work to create solutions that not only address their immediate challenges but also anticipate future needs. My approach is always impact-driven, and I believe in delivering thoughtful, compassionate solutions that make a real difference in people’s lives. By combining technical expertise with a customer-first mindset, I strive to build systems that truly resonate and add value to those who use them.";
  const certH2 = "Certifications";
  const title2 = "Programming Languages, Libraries, and Frameworks"
  const certTitle = certH2.split("").map((certTitle, index) => (
    <span key={index} className="letter" style={{ animationDelay: `${index * 0.2}s` }}>
      {certTitle === " " ? "\u00A0" : certTitle} 
    </span>
  ));
  const letters = name.split("").map((letter, index) => (
    <span key={index} className="letter" style={{ animationDelay: `${index * 0.1}s` }}>
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));

const titleStyle = title2.split("").map((titleStyle, index) => (
  <span key={index} className="letter" style={{ animationDelay: `${index * 0.1}s` }}>
    {titleStyle === " " ? "\u00A0" : titleStyle}
  </span>
));
  return (
    <div className="App">
      <Header />
      <Cube />
        <section id="home" className="home-section">
          <h2 className="greeting">{greeting}</h2>
          <h1 className="centered-text">{letters}</h1>
          <h2 className="jobtitle">{title}</h2>
          <p className="bio">{bio}</p>
        </section>
        <div class="profile-wrapper">
        <img src={`${process.env.PUBLIC_URL}/assets/profilep.jpeg`} alt="Profile" className="profile-image" />
        </div>
        <button className="hire-button"><a className="hire-style" href="mailto:chapmanw811@gmail.com">Hire Me!</a></button>
        <h2 className='title2'>{titleStyle}</h2>

      <Lcards />
      
        <h2 className="certH2">{certTitle}</h2>
      
      <Certifications />
      <Lightsaber />
    <Projects />
  <Contact />
  <Footer />
    </div>
  );
}
export default App;
