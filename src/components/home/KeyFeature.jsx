import React from 'react'
import { feature } from "../../dummydata"
import Card from './Card'
import Heading from "../common/heading/Heading"

function KeyFeature() {
  return (
    
    <div class="container" style={{marginTop:"8vh"}} >
      <Heading subtitle='Key Features' title="" />
      <div class="row" style={{width:"90vw",marginTop:"5vh"}}>
        <div class="col">
          <Card title="Comprehensive Curriculum" desc="VSKA World offers a well-structured and comprehensive curriculum covering the fundamental concepts, tools, and techniques in data science. Our courses are designed to provide students with a solid foundation and practical skills."  cover="./images/courses/online/o1.png" />
        </div>
        <div class="col">
        <Card title="Flexible Learning Options" desc="VSKA World understands that every learner has unique needs and schedules. We offer flexible learning options, including self-paced courses and live interactive sessions, so students can choose the format that best suits their learning style."  cover="./images/courses/online/o2.png"/>
        </div>
      </div>
      <div class="row"  style={{width:"90vw",marginTop:"5vh"}}>
        <div class="col">
        <Card title="Expert Instructors" desc="Our courses are taught by experienced data science professionals and industry experts who bring real-world insights and knowledge to the classroom. They are dedicated to ensuring that students receive top-quality education." cover="./images/courses/online/o3.png" />
        </div>
        <div class="col">
        <Card title="Career Support" desc="VSKA World goes beyond education by offering career support services such as resume building, interview preparation, and job placement guarantee. We aim to help our students transition into fulfilling data science careers." cover="./images/courses/online/o4.png" />
        </div>
      </div>
      <div class="row" style={{width:"90vw",marginTop:"5vh"}}>
        <div class="col">
          <Card title="Hands-On Projects" desc="Practical application is a core component of our courses. Students have the opportunity to work on real-world projects, allowing them to apply what they’ve learned and build a strong portfolio for future career prospects"  cover="./images/courses/online/o5.png"/>
        </div>
        <div class="col">
        <Card title="Continuous Improvement" desc="VSKA World is committed to continuously improving its courses based on student feedback and industry trends. We strive to provide the best possible learning experience."  cover="./images/courses/online/o6.png"/>
        </div>
      </div>
      <div class="row" style={{width:"90vw",marginTop:"5vh"}}>
        <div class="col">
          <Card title="Supportive Community" desc="We foster a supportive online learning community where students can interact with instructors and peers. This community helps students stay motivated, collaborate, and seek assistance when needed."  cover="./images/courses/online/o7.png"/>
        </div>
        <div class="col">
        <Card title="Industry Relevant Content" desc="Our courses are regularly updated to keep pace with the rapidly evolving field of data science. We ensure that students learn the latest tools and technologies used in the industry."  cover="./images/courses/online/o8.png"/>
        </div>
      </div>
      <div class="row" style={{width:"90vw",marginTop:"5vh"}}>
        <div class="col">
          <Card title="Accessible Learning Resources" desc="Students have access to a wealth of learning resources, including video lectures, reading materials, and software tools necessary for data science projects."  cover="./images/courses/online/o9.png"/>
        </div>
        <div class="col">
        <Card title="Certification" desc="Upon successful completion of our courses, students receive certification, which can be a valuable addition to their resumes and LinkedIn profiles, showcasing their proficiency in data science." cover="./images/courses/online/o10.png" />
        </div>
      </div>
    </div>
  )
}

export default KeyFeature
