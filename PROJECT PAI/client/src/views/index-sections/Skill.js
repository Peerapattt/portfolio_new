import React from 'react'
import 'assets/css/Hello.css'
import SkillBar from 'react-skillbars';

export default function Skill() {
    const skills = [
        {type: "Javascript", level: 40},
        {type: "PHP", level: 50},
        {type: "HTML", level: 80},
        {type: "CSS", level: 75},
        {type: "C++", level: 70},
    
      ];
      
      const colors = {
        "bar": "#3498db",
        "title": {
          "text": "#fff",
          "background": "#2980b9"
        }
      }
    return (
        
        <div>
            <div className="container">
            <div className = "helloBG">
              <br></br>
              <br></br>
            <h1> CODING SKILL </h1>
            <hr />
            <br></br>
            <br></br>
                <div className="helloSkill">
                    <SkillBar  skills={skills} colors={colors}/>
                </div>        
                <br></br>
                <br></br>
                <br></br>   
            </div>
            </div>
        </div>
    )
}
