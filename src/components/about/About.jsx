import "./about.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <div className="a">
      {/* <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div> */}
      <div className="a-right">
        <h1 className="a-title">About Me</h1>

        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Greetings,

          Talha here, a Full-Stack Web and Mobile App (IOS/Android) Developer. I can develop both Native and Hybrid apps. From Creating Artwork for mobile apps to making prototypes UI designing to Developing, Testing, and Launching apps. I will provide you with proper plans. I have done great developments with the help of core frameworks of IOS such as Touch, Google SDK, and Cocoa. My strong grip on languages like JavaScript, Objective C, Python, and CSS has made a long way in my development.  I have 5+ years of industry experience in this field and I have always worked so hard to provide my clients with the best. You can see my work details and samples on Google Play Store and Apple store. I always prefer working with startup companies as they provide us the opportunity to grow individually as well as professionally. So, what are you waiting for? Let’s catch up.


          Let’s transfer your great ideas into amazing development.
        </p>
        {/* <div className="a-award">
          <div className="singleCol social-media-icon-white">
            <Container className="diff">
              <a href="https://github.com/talharasool">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/talha-rasool-812250144/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.linkedin.com/in/talha-rasool-812250144/">
                <img src="./images/upwork.jpeg" />
              </a>
            </Container>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default About;
