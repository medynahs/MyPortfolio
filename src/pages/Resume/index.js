import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Brain from "../../assets/brain.jpg";

const ResumeStyles = styled.div`
  .title {
    font-size: 5rem;
    color: white;
    margin-bottom: 5%;
    margin-left: 8%;
  }

  .centeredTitle {
    font-size: 5rem;
    color: white;
    margin-bottom: 5%;
    text-align: center;
  }

  .skill {
    font-size: 2rem;
    color: #fff;
    margin-top: -10px;
  }

  .sideBySide {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 4%;
    margin-top: -2%;
  }

  .subtitle {
    font-size: 3rem;
    color: #fff;
  }

  .left {
    width: 50%;
  }

  .right {
    width: 50%;
  }

  .buttonDiv {
    display: flex;
    justify-content: center;
  }

  .leftDiv {
    margin-left: 10%;
    margin-top: 0px;

  }

  .rightDiv {
    margin-right: 10%;
  }

`;

export default function Resume() {
  return (
    <ResumeStyles>
      <p className="centeredTitle">Skills</p>
      <div className="sideBySide">
        <div className="leftDiv">
        <p className="subtitle">Front-End</p>
        <p className="skill">React Native</p>
        <p className="skill">ReactJs</p>
        <p className="skill">Javascript</p>
        <p className="skill">Html</p>
        <p className="skill">Css/ Css3</p>
        <p className="skill">Three.js</p>
        <p className="skill">Typescript</p>
      </div>

      <div>
        <img src={Brain} alt="Brain" />
      </div>

<div className="rightDiv">
  <div>
        <p className="subtitle">Tools</p>
        <p className="skill">Azure</p>
        <p className="skill">Scrum/ Kanban</p>
        <p className="skill">Git/ Github</p>
        <p className="skill">Postman/ Insomnia</p>
      </div>

      <div>
        <p className="subtitle">Back-End</p>
        <p className="skill">Java</p>
        <p className="skill">Rest Api</p>
        <p className="skill">Sql</p>
      </div>
</div>
      

      </div>
      
      <div className="sideBySide">
        <div className="left">
          <p className="title">Experience</p>
          <Card
            cardTitle={"Front-End Developer"}
            date={"2020/2021"}
            description={
              "Worked in a startup called PayCarbus, where i developed a mobile application using React Native. The premise of the project was money transfer with Qr Code for public transport. "
            }
          />
          <Card
            cardTitle={"Java Developer"}
            date={"2021"}
            description={
              "Worked in a software company called GFT , where i worked for their client Santander in a CRM project. "
            }
          />
          <Card
            cardTitle={"Mobile Developer"}
            date={"2021 - Present "}
            description={
              "Experience working in an software company called Iteris developing hybrid applications with React Native. Had training in technologies such as Git, Agile delivery, MySql and Api development with Java and C#. For learning purpose i built a complete restaurant app using various concepts like redux, hooks, responsiveness, axios, besides others."
            }
          />
        </div>
        <div className="right">
          <p className="title">Education</p>
          <Card
            cardTitle={"High School"}
            date={"2016-2019"}
            description={
              "Graduated High School with a GPA of 3.6. Participated in the school union and also in the robotics club for a while."
            }
          />
          <Card
            cardTitle={"Bachelors"}
            date={"2020 - Present"}
            description={
              "Pursing a Computer Science bachelors with a current GPA of 3.7. Currently on my 3th semester "
            }
          />
        </div>
      </div>
      <p className="centeredTitle">Certificates</p>
      <div className="sideBySide">
        <div className="left">
          <Card
            cardTitle={"Responsiveness and UX concepts"}
            date={"2020"}
            description={
              "Certified by Digital Innovation One. Learned the important concepts of responsiveness and UX and its applicability for web."
            }
          />
          <Card
            cardTitle={"Programming Logic"}
            date={"2019/2020"}
            description={
              "Course by Udemy. Learned the programming logic, concepts and more with Portugol, Java, Python and C#."
            }
          />
          <Card
            cardTitle={"Advanced development with JS"}
            date={"2020"}
            description={
              "Certified by Digital Innovation One. Learned and its more complex concepts."
            }
          />
        </div>
        <div className="right">
          <Card
            cardTitle={"Git and Github"}
            date={"2021"}
            description={
              "Certified by Alura. Learned about git, branching Strategies, conflicts, flow and Pull Requests."
            }
          />
          <Card
            cardTitle={"Web design for Web developers"}
            date={"2020 - 2021"}
            description={
              "Certified by Udemy. Learned HTML, CSS, JS and Bootstrap."
            }
          />
          <Card
            cardTitle={"Blender"}
            date={"2021"}
            description={
              "Certified by Alura. Learned the essencials concepts and tools for making low poly 3D objects with Blender."
            }
          />
        </div>
      </div>
      <div className="buttonDiv">
        <Button buttonTitle={"Download my resume"} />
      </div>
    </ResumeStyles>
  );
}
