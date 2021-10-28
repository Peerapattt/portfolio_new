import React from "react";
import "assets/css/Condition.css";
import SkillBar from "react-skillbars";

export default function Portfolio() {
  const skills = [
    { type: "PremierPro", level: 60 },
    { type: "AdobeAfter", level: 50 },
    { type: "Photoshop", level: 80 },
    { type: "Illustrator", level: 75 },
    { type: "Audition", level: 60 },
  ];
  const skills2 = [
    { type: "AdobeID", level: 70 },
    { type: "3D max", level: 50 },
    { type: "Photoshop", level: 80 },
    { type: "Illustrator", level: 75 },
    { type: "Audition", level: 60 },
  ];
  const skills3 = [
    { type: "HTML", level: 80 },
    { type: "CSS3", level: 50 },
    { type: "Bootstrap", level: 50 },
    { type: "ReactJS", level: 60 },
    { type: "javascript", level:70 },
  ];

  const colors = {
    bar: "#CC0000",
    title: {
      text: "#000000",
      background: "#66CCFF",
    },
  };

  const colors2 = {
    bar: "#2E8B579",
    title: {
      text: "#000000",
      background: "#66CCFF	",
    },
  };

  const colors3 = {
    bar: "#0000FF",
    title: {
      text: "#000000",
      background: "#66CCFF",
    },
  };
  return (
    <div>
      
      <br></br>
      <br></br>
      <br></br>


      <div className="container">
            
              <h1>Condition</h1>
              <hr />
            
          </div>


      <div className="con-con">
        <div>
         
          <div className="row">
            <div className="col-3">
              <div>
              <br></br>
          <br></br>
              <div className="border-con">
                <div className="text-con">
            <h2>Video Editor</h2>
          </div>
          <br></br>
          <br></br>
          <div className="container">
                <div className="text-editor">
                  <h3 >
                    1.เชี่ยวชาญในการใช้ซอฟต์แวร์ตัดต่อวิดีโอ อาทิ Adobe Premier
                    Pro
                  </h3>

                  <h3>
                    2.สามารถใช้ซอฟต์แวร์ด้านกราฟฟิกอื่นๆ อาทิ Adobe After
                    Effect, Photoshop, Illustrator เป็นต้น
                  </h3>

                  <h3>
                    3.มีประสบการณ์งานตัดต่อวิดีโอ ถ่ายวิดีโอ
                    และงานสร้างกราฟิกต่างๆ ในวิดีโอ
                  </h3>

                  <h3>
                    4.มีความคิดสร้างสรรค์ ละเอียดรอบคอบ มีความรับผิดชอบสูง
                    และมีทัศนคติเชิงบวก
                  </h3>
</div>
                  <h3>5.ถ้ามีพื้นฐานความรู้ทางภาษาอังกฤษจะพิจารณาเป็นพิเศษ</h3>
                  <div className="container">
                    <div className="helloBG">
                      <br></br>
                      <br></br>
                      <h1> Video Editor SKILL </h1>
                      <hr />
                      <br></br>
                      <br></br>
                      <div className="helloSkill">
                        <SkillBar skills={skills} colors={colors} />
                      </div>
                      <br></br>
                      <br></br>
                      <br></br>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
            
            
            <div class="col-4">
            <br></br>
            <br></br>
          
            <div className="border-con">
                <div className="text-con">
                  <h2>Graphic Designer</h2>
                </div>
                <br></br>
                <br></br>
                <div className="container">
                <div className="text-editor">
                  <h3>
                    1.ออกแบบงานกราฟิกและสื่อโฆษณาให้ถูกต้องตรงตามแผนงานที่การตลาดกำหนด
                  </h3>

                  <h3>
                    2.ออกแบบงานกราฟิกและสื่อโฆษณาให้แล้วเสร็จภายในเวลาที่กำหนด
                  </h3>

                  <h3>
                    3.ออกแบบสร้างสรรค์สื่อภาพนิ่ง VDO
                    สื่อโฆษณารวมทั้งงานสื่อสิ่งพิมพ์ทั้งออนไลน์และออฟไลน์
                  </h3>

                  <h3>
                    4.ออกแบบตกแต่งทำรูปภาพ ป้ายต่างๆ
                    หรือสื่อโฆษณาออฟไลน์ทั้งหมดของคลินิก
                  </h3>

                  <h3>
                    5.ถ่ายรูป Review และ VDO Review นางแบบ/นายแบบ
                    ของคลินิกให้ตรงตามมาตรฐานการรักษา
                  </h3>

                  <h3>
                    6.รีทัชตกแต่งภาพนางแบบ/นายแบบ ภาพสินค้า
                    ให้ได้ตามมาตรฐานของบริษัท
                  </h3>

                  <h3>7.ช่วยตัดต่อ VDO หรือ Motion กราฟฟิก</h3>

                  <h3>
                    8.ดูแลและรับผิดชอบอุปกรณ์เครื่องมือที่ใช้ในการทำงานด้านกราฟฟิกดีไซน์
                    ทั้ง Hardware และ Softwareให้ถูกต้องพร้อมใช้งานอยู่เสมอ
                  </h3>
                  </div>
                  <div>
                  <div className="container">

                    <div className="helloBG">
                      <br></br>
                      <br></br>
                      <h1> Graphic Designer SKILL </h1>
                      <hr />
                      <br></br>
                      <br></br>
                      <div className="helloSkill">
                        <SkillBar skills={skills2} colors={colors2} />
                      </div>
                      <br></br>
                      <br></br>
                      <br></br>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div>
              <br></br>
            <br></br>
          
            <div className="border-con">
                <div className="text-con">
                    <h2>Web Developer </h2>
                  </div>
                  <br></br>
                  <br></br>
                  <div className="container">
                  <div className="text-editor">
                  
                    
                    <h3>1.พัฒนาเว็บไซต์ด้วย HTML, CSS, C# Pro</h3>

                    <h3>
                      2.พัฒนาเว็บไซต์ให้ใช้งานได้ดีทุกอุปกรณ์ (Responsive Web
                      Design)
                    </h3>

                    <h3>3.รวบรวม requirement</h3>

                    <h3>4.รวบรวม requirement</h3>
</div>
                    <div className="container">
                      <div className="helloBG">
                        <br></br>
                        <br></br>
                        <h1> Web Developer SKILL </h1>
                        <hr />
                        <br></br>
                        <br></br>
                        <div className="helloSkill">
                          <SkillBar skills={skills3} colors={colors3} />
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <div>
          <br></br>
          <br></br>

          <div className="container">
            <div className="port-frame">
              <h1>Condition</h1>
            </div>
          </div>
          <br></br>
          <br></br>
        
            <div className="port-video">
              <div className="port-text">
                <h2>Video Editor</h2>
              </div>
              <br></br>
              <br></br>
              <div className="text-editor">
              <h2>
                  รายละเอียดงานและหน้าที่รับผิดชอบ
                  </h2>
                <h3>
                  1.เชี่ยวชาญในการใช้ซอฟต์แวร์ตัดต่อวิดีโอ อาทิ Adobe Premier
                  Pro
                </h3>

                <h3>
                2.สามารถใช้ซอฟต์แวร์ด้านกราฟฟิกอื่นๆ อาทิ Adobe After Effect,
                  Photoshop, Illustrator เป็นต้น
                </h3>

                <h3>
                3.มีประสบการณ์งานตัดต่อวิดีโอ ถ่ายวิดีโอ
                  และงานสร้างกราฟิกต่างๆ ในวิดีโอ
                </h3>

                <h3>
                4.มีความคิดสร้างสรรค์ ละเอียดรอบคอบ มีความรับผิดชอบสูง
                  และมีทัศนคติเชิงบวก
                </h3>

                <h3>5.ถ้ามีพื้นฐานความรู้ทางภาษาอังกฤษจะพิจารณาเป็นพิเศษ</h3>
                <div className="container">
                  <div className="helloBG">
                    <br></br>
                    <br></br>
                    <h1> Video Editor SKILL </h1>
                    <hr />
                    <br></br>
                    <br></br>
                    <div className="helloSkill">
                      <SkillBar skills={skills} colors={colors} />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
          <br></br>
            <div className="port-video">
              <div className="port-text">
                <h2>Graphic Designer</h2>
              </div>
              <br></br>
              <br></br>
              <div className="text-editor">
                  

                <h3>
                  1.ออกแบบงานกราฟิกและสื่อโฆษณาให้ถูกต้องตรงตามแผนงานที่การตลาดกำหนด
                </h3>

                <h3>
                  2.ออกแบบงานกราฟิกและสื่อโฆษณาให้แล้วเสร็จภายในเวลาที่กำหนด
                </h3>

                <h3>
                  3.ออกแบบสร้างสรรค์สื่อภาพนิ่ง VDO สื่อโฆษณารวมทั้งงานสื่อสิ่งพิมพ์ทั้งออนไลน์และออฟไลน์
                </h3>

                <h3>
                  4.ออกแบบตกแต่งทำรูปภาพ ป้ายต่างๆ หรือสื่อโฆษณาออฟไลน์ทั้งหมดของคลินิก
                </h3>

                <h3>5.ถ่ายรูป Review และ VDO Review นางแบบ/นายแบบ ของคลินิกให้ตรงตามมาตรฐานการรักษา</h3>
                
                <h3>6.รีทัชตกแต่งภาพนางแบบ/นายแบบ ภาพสินค้า ให้ได้ตามมาตรฐานของบริษัท</h3>

                <h3>7.ช่วยตัดต่อ VDO หรือ Motion กราฟฟิก</h3>

                <h3>8.ดูแลและรับผิดชอบอุปกรณ์เครื่องมือที่ใช้ในการทำงานด้านกราฟฟิกดีไซน์ ทั้ง Hardware และ Softwareให้ถูกต้องพร้อมใช้งานอยู่เสมอ</h3>


                <div className="container">
                  <div className="helloBG">
                    <br></br>
                    <br></br>
                    <h1> Graphic Designer SKILL </h1>
                    <hr />
                    <br></br>
                    <br></br>
                    <div className="helloSkill">
                      <SkillBar skills={skills} colors={colors} />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>

            <br></br>
      
            <div className="port-sort">
            <div className="port-video">
              <div className="port-text">
                <h2>Web Developer </h2>
              </div>
              <br></br>
              <br></br>
              <div className="text-editor">
              <h2>
                  รายละเอียดงานและหน้าที่รับผิดชอบ
                  </h2>
                <h3>
                  1.พัฒนาเว็บไซต์ด้วย HTML, CSS, C#
                  Pro
                </h3>

                <h3>
                2.พัฒนาเว็บไซต์ให้ใช้งานได้ดีทุกอุปกรณ์ (Responsive Web Design)

                </h3>

                <h3>
                3.รวบรวม requirement
                </h3>

                <h3>
                4.รวบรวม requirement
                </h3>

                <div className="container">
                  <div className="helloBG">
                    <br></br>
                    <br></br>
                    <h1> Web Developer  SKILL </h1>
                    <hr />
                    <br></br>
                    <br></br>
                    <div className="helloSkill">
                      <SkillBar skills={skills} colors={colors} />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    */}
    </div>
  );
}
