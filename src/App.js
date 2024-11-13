import './App.css';

function App() {
  const name = "William Chapman";
  const greeting = "Hello there!👋 I am";  
  const title = "Software Engineer + Front-End Developer";
  const bio = "I’m deeply passionate about using technology to drive meaningful change. With a strong focus on understanding the needs of customers, I work to create solutions that not only address their immediate challenges but also anticipate future needs. My approach is always impact-driven, and I believe in delivering thoughtful, compassionate solutions that make a real difference in people’s lives. By combining technical expertise with a customer-first mindset, I strive to build systems that truly resonate and add value to those who use them.";
  const certH2 = "Certifications";
  const projects = "Projects";
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
  const projectsStyle = projects.split("").map((projectsStyle, index) => (
    <span key={index} className="letter" style={{ animationDelay: `${index * 0.3}s` }}>
      {projectsStyle === " " ? "\u00A0" : projectsStyle} 
    </span>
  ));

  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact Me</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="home-section">
        <h2 className="greeting">{greeting}</h2>
        <h1 className="centered-text">{letters}</h1>
        <h2 className="title">{title}</h2>
        <p className="bio">{bio}</p>
      </section>

      <button className="hire-button">Hire Me!</button>

      <img src={`${process.env.PUBLIC_URL}/assets/profilep.jpeg`} alt="Profile" className="profile-image" />

      <h2 className="certH2">{certTitle}</h2>
      <div className="image-row">
        <img src={`${process.env.PUBLIC_URL}/assets/certL2.png`} alt="certificate 1" className="image" />
        <img src={`${process.env.PUBLIC_URL}/assets/certL1.png`} alt="certificate 2" className="image" />
        <img src={`${process.env.PUBLIC_URL}/assets/certR1.png`} alt="certificate 3" className="image" />
        <img src={`${process.env.PUBLIC_URL}/assets/certR2.png`} alt="certificate 4" className="image" />
      </div>
      <div className="image-row2">
        <div>
          <h2 className="projectsStyle" id='projects'>{projectsStyle}</h2>
        </div>
        <div>
          <h1 className="project-head1">CRM Software Redesign</h1>
        </div>
        <h2 className="technology">Technologies: </h2>
        <div className="scroll-container">
          <h3 className="scroll-text">AWS RDS, AWS S3, AWS Lambda, Amazon QuickSight</h3>
        </div>
        <div className="project-details">
        <ul className="project-bullets">
          <li>
            <strong>Proposed a scalable CRM system</strong> for a logistics company, leveraging <span className="aws-service">Amazon RDS</span> for database management, <span className="aws-service">Amazon S3</span> for scalable storage, and <span className="aws-service">AWS Lambda</span> for serverless computing, designed to support up to 500 concurrent users and handle an average of 2,000 daily user interactions.
          </li>
          <li className="pushed-paragraph">
            <strong>Developed a CRM solution</strong> in response to the company's need for scalability following a 42% increase in sales the previous year. This solution utilized <span className="aws-service">Amazon RDS</span> to handle growing customer data, <span className="aws-service">Amazon S3</span> for secure and scalable storage, and <span className="aws-service">AWS Lambda</span> to ensure efficient user interactions while supporting future business expansion.
          </li>
          <li>
            <strong>Addressed communication challenges</strong> by recommending the integration of advanced ticketing and calendar systems with MS Exchange, using <span className="aws-service">Amazon QuickSight</span> for advanced reporting, and leveraging APIs to fetch and synchronize information seamlessly.
          </li>
        </ul>
        <button 
        className="button crm-button" 
        onClick={() => window.open("https://docs.google.com/document/d/19SlGq47Lvz6FjakNmUhr8yz57Cz8VCHI/edit?usp=sharing&ouid=115633295017463972231&rtpof=true&sd=true", "_blank")}
      >
        View CRM
      </button>
        </div>
        <div>
          <h1 className="project-head2">Countries of The World</h1>
        </div>
        <h2 className="languages">Languages: </h2>
        <div className="scroll-container2">
          <h3 className="scroll-text2">Angular🚀, Node.js🐸, JavaScript🟡, TypeScript🔵</h3>
        </div>
        <div className="project-details2">
  <ul className="project-bullets2">
    <li>
    <strong>Developed a robust web application</strong> utilizing <span className="highlight">Angular</span>, <span className="highlight">JavaScript</span>, and <span className="highlight">TypeScript</span>, with seamless integration of the <span className="highlight">World Bank API</span> to provide real-time, data-driven insights on global countries.
    </li>
    <li className="pushed-paragraph">
      <strong>Designed and implemented an interactive SVG world map</strong>, allowing users to hover over countries and access in-depth details, including <span className="highlight">country name</span>, <span className="highlight">capital city</span>, <span className="highlight">coordinates</span>, <span className="highlight">income levels</span>, and <span className="highlight">population statistics</span>.
    </li>
    <li>
      <strong>Enhanced user experience</strong> by optimizing <span className="highlight">data retrieval</span> processes and ensuring smooth <span className="highlight">hover animations</span>, providing users with immediate and responsive information on any country of interest.
    </li>
  </ul>
</div>
<div>
    <h1 className="project-head3">Costa Rica Website</h1>
      </div>
        <h2 className="languages2">Languages: </h2>
      <div className="scroll-container3">
        <h3 className="scroll-text2">HTML🔵, CSS🐸, JavaScript🟡</h3>
      </div>
<div className="project-details3">
<ul className="project-bullets3">
  <li>
    Designed and developed a visually engaging, <span className="highlight2">responsive website</span> for a Costa Rica villa resort, tailored to attract international travelers and showcase the resort’s unique offerings.
  </li>
  <li className="pushed-paragraph">
    Implemented an <span className="highlight2">automated booking system</span> with a <span className="highlight2">dynamic calendar</span>, allowing for <span className="highlight2">real-time pricing adjustments</span> and eliminating the need for manual quoting, improving <span className="highlight2">operational efficiency</span>.
  </li>
  <li>
    Built <span className="highlight2">custom user interface elements</span> that simplify the reservation process, providing an <span className="highlight2">intuitive experience</span> for potential guests from initial browsing to booking.
  </li>
</ul>
</div>
          <img src={`${process.env.PUBLIC_URL}/assets/project1.jpg`} alt="certificate 1" className="image2" />
          <img src={`${process.env.PUBLIC_URL}/assets/project2.gif`} alt="certificate 2" className="image2" />
          <img src={`${process.env.PUBLIC_URL}/assets/project3.jpg`} alt="certificate 3" className="image2" />
        </div>
      </div>
    );
}

export default App;
