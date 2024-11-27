import React from 'react'
import Compo1 from "./compo1"
import Compo2 from "./compo2"
import Compo3 from "./compo3"
import "./style4.css"


const Portfolio = () => {
  return (
    <>
    <div className='main'>
      <Compo1/>

      <Compo2 name="Summary" data="I am a motivated Front-End Developer with hands-on experience in HTML, CSS, JavaScript, and React.js, 
      specializing in creating responsive, mobile-friendly websites with Bootstrap and ensuring cross-browser 
      compatibility. Proficient in using Git and GitHub for version control and collaborative development. In addition 
      to front-end expertise, I have a foundation in SQL and basic knowledge of Python, and I am currently enhancing 
      my full-stack skills by learning Node.js. I am eager to contribute to innovative projects and grow as a developer 
      in a dynamic environment. "/>

      <Compo2 name="Education" data="Vignana Bharathi Institute of Technology, Aushapur                                         
      Bachelor of Technology ( Information Technology )"/>

      <Compo3 head="Projects" 
      sidehead="Title: Stateful Restaurant Cards with React" 
      data1="Created a responsive website using React.js, JavaScript, HTML, and CSS. Improved the layout with 
      a clear Header, Body, and Footer, which increased user satisfaction by 25%. 
      • Reduced page load time by 40%, which led to a 30% rise in user engagement and a 20% boost in 
      overall website performance. 
      • Used useState and useEffect hooks to manage state and update in real-time, cutting website crashes 
      by 15% and making the user experience smoother. 
      • Enhanced website performance by applying React.js best practices, achieving a 35% faster load time 
      and a 20% increase in user retention, resulting in a more responsive and user-friendly interface." 
      sidehead2="Title: AI Based Scarecrow"
      data2="• Developed a real-time animal detection system to enhance wildlife management, covering 2 square 
      miles of protected land. 
      • Achieved a 95% detection rate, significantly improving the monitoring of animal intrusions. 
      • Reduced animal intrusions by 40% through automated sound alerts that scare them away. 
      • Increased the accuracy of response measures by 25% with the implementation of sound-based alerts. "/>

      <Compo3 head="Skills"
      sidehead="Technical Skills: "
      data1="• Programming Languages:JavaScript (ES6+) 
      • Web Development: HTML5, CSS3, React 
      • Framework: Bootstrap 
      • Database: SQL 
      • Developer Tools: Jupyter Notebook, VS Code, Git, GitHub "
      sidehead2="Soft Skills:"
      data2="Communication, Flexibility, Creativity and Innovation, Teamwork, Leadership, Problem Solving."/>

      <Compo2 name="Certifications" data="• Infosys The Complete Web Developer Course 2.0  
      • Infosys HTML CSS and JavaScript for Beginners - A Web Design Course "/>

      <Compo2 name="Participation" data=" Collaborated in the Tech Fiesta Hackathon 2023, developing innovative solutions with a team of 5."/>

    </div>
    <h1>Task 4 Completed</h1>
      <hr style={{ border: "none", borderTop: "2px dotted #333", margin: "20px 0" }} />
    </>
  )
}

export default Portfolio
