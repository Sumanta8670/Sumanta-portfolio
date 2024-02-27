import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Yummy from "../assets/img/Yummy.png";
import Chatly from "../assets/img/Chatly.png";
import ElectroMart from "../assets/img/ElectroMart.png";
import expense from "../assets/img/expense.png";
import NoteZip from "../assets/img/Note-Zipper.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Chatly",
      description: "Real Time Chat Web-Application",
      imgUrl: Chatly,
    },
    {
      title: "Electromart",
      description: "Electronic E-Commerce Web-Application",
      imgUrl: ElectroMart,
    },
    {
      title: "Yummy",
      description: "Online Food Delivery Web-Application",
      imgUrl: Yummy,
    },
    {
      title: "My-Expense",
      description: "Expense Tracker Web-Application",
      imgUrl: expense,
    },
    {
      title: "Note-Zipper",
      description: "Personal Notebook Web-Application",
      imgUrl: NoteZip,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    As a MERN Stack Developer, I take pride in my work and enjoy
                    bringing ideas to real life through code.<br></br> Here are
                    some of the projects I've worked on:
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <h1> - | Chatly | -</h1>
                        <h3>
                          Real time chat web application with group chat and
                          vedio call feature using Socket.io
                          <br />
                          Used Lazy Loading technique to reduce page load time.
                        </h3>
                        <br></br>
                        <h5>
                          Tech Stack : React.js | Node.js | Express.js | MongoDB
                          | Socket.io | RestAPI | Heroku{" "}
                        </h5>
                        <br></br>
                        <br></br>
                        <h1>- | ElectroMart | -</h1>
                        <h3>
                          Electronic e-commerce web application with google
                          authentication login.
                          <br />
                          Integrated secure Slice payment.{" "}
                        </h3>
                        <br></br>
                        <h5>
                          Tech Stack : Express.js | React.js | Node.js |
                          Firebase | Slice | MongoDB | AWS EC2
                        </h5>
                        <br></br>
                        <br></br>
                        <h1>- | Yummy | -</h1>
                        <h3>
                          Online Food Ordering Web-app with mesmerizing UI/UX
                          Design.
                          <br />
                          Have BillDesk payment gateway with authentication
                          login.
                        </h3>
                        <br></br>
                        <h5>
                          Tech Stack : React.js | Tailwind CSS | MATERIAL UI |
                          Express.js | MongoDB | JWT | BillDesk{" "}
                        </h5>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <h1>- | My-Expense | -</h1>
                        <h3>
                          Expense Tacker web-app with motion UI graphics and
                          store the expenses with beutiful format.
                          <br />
                          Used RestAPI to fetch expense information from the
                          expense.
                        </h3>
                        <br></br>
                        <h5>
                          Tech Stack : React.js | SCSS | Express.js | MongoDB |
                          Framer Motion | RestAPI | Heroku{" "}
                        </h5>
                        <br></br>
                        <br></br>
                        <h1>- | Note-Zipper | -</h1>
                        <h3>
                          Stored your personal notes with in a scalable format
                          to access it quickly.
                          <br />
                          Used SANITY TABLE to store personal notes with in a scalable format to access it quickly.
                        </h3>
                        <br></br>
                        <h5>
                          Tech Stack : React.js | SANITY | Netlify
                        </h5>
                        <br></br>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
