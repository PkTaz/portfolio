import './Certifications.css';


const certH2 = "Certifications";
const certTitle = certH2.split("").map((certTitle, index) => (
    <span key={index} className="letter" style={{ animationDelay: `${index * 0.2}s` }}>
      {certTitle === " " ? "\u00A0" : certTitle} 
    </span>
));
const Certifications = () => {
    return (
        <div><h2 className="certH2">{certTitle}</h2>
      <div className="image-row">
        <img src={`${process.env.PUBLIC_URL}/assets/certL2.png`} alt="certificate 1" className="image" />
        <img src={`${process.env.PUBLIC_URL}/assets/certL1.png`} alt="certificate 2" className="image" />
        <img src={`${process.env.PUBLIC_URL}/assets/certR1.png`} alt="certificate 3" className="image" />
        <img src={`${process.env.PUBLIC_URL}/assets/certR2.png`} alt="certificate 4" className="image" />
      </div>
      </div>
    );
};

export default Certifications;