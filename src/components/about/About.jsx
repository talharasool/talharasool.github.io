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
        <div className="parabox">
          
          <p className="a-desc">
            Greetings, Talha here. I am a Mobile App Developer with a keen interest in building tech products. My passion lies in developing apps that are elegant and easy to use, as well as having a strong user experience from the perspective of an end-user. From creating artwork for mobile apps to designing prototypes UI. Designing a responsive interface for apps, developing, testing & launching apps. I always prefer working with startup companies as they provide us with an opportunity to grow individually as well as professionally. So what are you waiting for? Let’s transfer your great ideas into amazing development.
          </p>
        </div>

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
