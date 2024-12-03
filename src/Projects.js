import './App.css';
const projects = "Projects";
const projectsStyle = projects.split("").map((projectsStyle, index) => (
    <span key={index} className="letter" style={{ animationDelay: `${index * 0.3}s` }}>
      {projectsStyle === " " ? "\u00A0" : projectsStyle} 
    </span>
  ));
const Projects = () => {
    return (
        <div className="image-row2">
        <div>
          <h2 className="projectsStyle" id='projects'>{projectsStyle}</h2>
        </div>
        <div className='body-font'>
        <div>
          <h1 className="project-head1">CRM Software Redesign</h1>
        </div>
        <h2 className="technology">Technologies</h2>
        <div className="scroll-container">
          <h3 className="scroll-text">AWS RDS - AWS S3 - AWS Lambda - AWS QuickSight</h3>
        </div>
        <div className="project-details">
        <ul className="project-bullets">
          <li>
            <strong>Proposed a scalable CRM system</strong> for MJ gaming logistics company, leveraging <span className="aws-service">Amazon RDS</span> for database management, <span className="aws-service">Amazon S3</span> for scalable storage, and <span className="aws-service">AWS Lambda</span> for serverless computing, designed to support up to 500 concurrent users and handle an average of 2,000 daily user interactions.
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
        View CRM Project Overview
      </button>
        </div>
        <div>
          <h1 className="project-head2">Countries of The World</h1>
        </div>
        <h2 className="languages">Languages</h2>
        <div className="scroll-container2">
          <h3 className="scroll-text2">Angular🚀 Node.js🐸 JavaScript🟡 TypeScript🔵</h3>
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
<button 
        className="cotw-button" 
        onClick={() => window.open("https://pktaz.github.io/Countries-of-The-World/", "_blank")}
      >
        View App
      </button>
<div>
    <h1 className="project-head3">New Hue Restoration + Design</h1>
      </div>
        <h2 className="languages2">Languages</h2>
      <div className="scroll-container3">
        <h3 className="scroll-text2">HTML🔵 CSS🐸 JavaScript🟡</h3>
      </div>
<div className="project-details3">
<ul className="project-bullets3">
  <li>
  <span className='highlight2'>Design and Developed</span> a visually engaging, <span className="highlight2">responsive website</span> for a Conracting company specialized in Restoration and Design. Updating <span className='highlight2'>forms</span>, <span className='highlight2'>projects</span> page, and even the <span className='highlight2'>landing</span> page.
  </li>
  <li className="pushed-paragraph">
    <span className="highlight2">Rebuilt the projects page,</span> enhancing visual appeal and navigation to showcase completed projects with a <span className="highlight2">responsive</span>, portfolio-style layout.<span className="highlight2"></span>
  </li>
  <li>
    Built <span className="highlight2">custom user interface elements</span> that simplify the work requesting process, providing an <span className="highlight2">intuitive experience</span> for potential clients from initial browsing to booking a work request.
  </li>
</ul>
</div>
<button 
        className="web-button" 
        onClick={() => window.open("https://pktaz.github.io/Contracting-Company/", "_blank")}
      >
        View Design
      </button>
</div>
  <img src={`${process.env.PUBLIC_URL}/assets/project1.jpg`} alt="certificate 1" className="image2" />
  <img src={`${process.env.PUBLIC_URL}/assets/project2.gif`} alt="certificate 2" className="image2" />
  <img src={`${process.env.PUBLIC_URL}/assets/project3.png`} alt="certificate 3" className="image2" />
  </div>
    );
};

export default Projects;