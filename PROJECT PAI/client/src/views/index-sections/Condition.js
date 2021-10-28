import React from 'react'
import 'assets/css/Condition.css'
import SkillBar from 'react-skillbars';

export default function Portfolio() {
    const skills = [
        {type: "PremierPro", level: 50},
        {type: "AdobeAfter", level: 50},
        {type: "Photoshop", level: 80},
        {type: "Illustrator", level: 75},
        {type: "Audition", level:60},
    
      ];
      
      const colors = {
        "bar": "#3498db",
        "title": {
          "text": "#000000",
          "background": "#2980b9"
        }
      }
    return (
        <div className="main-condition">
            <div >
            <div> 
                        <br></br>
                        <br></br>
                        
                <div className = "container">
                    <div className = "port-frame"><h1>Condition</h1></div>
                </div>
                <br></br>
                <br></br>
            <div className="port-sort">
                <div className="port-video">
                        <div className= "port-text"><h2>
                              Video Editor 
                         </h2>
                        </div>
                        <br></br>
                

                <div className = "text-editor">
                <h3>
                - เชี่ยวชาญในการใช้ซอฟต์แวร์ตัดต่อวิดีโอ อาทิ Adobe Premier Pro
                </h3>

                <h3>
                - สามารถใช้ซอฟต์แวร์ด้านกราฟฟิกอื่นๆ อาทิ  Adobe After Effect, Photoshop, Illustrator เป็นต้น
                </h3>

                <h3>
                - มีประสบการณ์งานตัดต่อวิดีโอ ถ่ายวิดีโอ และงานสร้างกราฟิกต่างๆ ในวิดีโอ
                </h3>

                <h3>
                - มีความคิดสร้างสรรค์ ละเอียดรอบคอบ มีความรับผิดชอบสูง และมีทัศนคติเชิงบวก
                </h3>

                <h3>
                - ถ้ามีพื้นฐานความรู้ทางภาษาอังกฤษจะพิจารณาเป็นพิเศษ
                </h3>
                <div className="container">
            <div className = "helloBG">
              <br></br>
              <br></br>
            <h1> Video Editor SKILL </h1>
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
                </div>

                <div className="port-video">
                        <div className= "port-text"><h2>
                              Video Editor 
                         </h2>
                        </div>
                        <br></br>
                

                <div className = "text-editor">
                <h3>
                - เชี่ยวชาญในการใช้ซอฟต์แวร์ตัดต่อวิดีโอ อาทิ Adobe Premier Pro
                </h3>

                <h3>
                - สามารถใช้ซอฟต์แวร์ด้านกราฟฟิกอื่นๆ อาทิ  Adobe After Effect, Photoshop, Illustrator เป็นต้น
                </h3>

                <h3>
                - มีประสบการณ์งานตัดต่อวิดีโอ ถ่ายวิดีโอ และงานสร้างกราฟิกต่างๆ ในวิดีโอ
                </h3>

                <h3>
                - มีความคิดสร้างสรรค์ ละเอียดรอบคอบ มีความรับผิดชอบสูง และมีทัศนคติเชิงบวก
                </h3>

                <h3>
                - ถ้ามีพื้นฐานความรู้ทางภาษาอังกฤษจะพิจารณาเป็นพิเศษ
                </h3>
                <div className="container">
            <div className = "helloBG">
              <br></br>
              <br></br>
            <h1> Video Editor SKILL </h1>
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
                </div>
                </div>   

                <div>
                    <div><h1></h1></div>
                
                </div>
            </div>
            </div>
        </div>
        
    )
}
