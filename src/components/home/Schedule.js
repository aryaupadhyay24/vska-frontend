import React from 'react';

const Schedule = () => {
  const handleApplyNow = () => {
    // You can optionally perform any other actions before redirecting
    // For example, tracking the button click event

    // Redirect to the Google Form URL
    window.location.href = 'https://drive.google.com/file/d/1byW7bkKCzupN1F3H9uyd3wM3EQfc7qyz/view?usp=sharing';
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'row' ,marginTop:"12vh"}}>
      {/* First Section */}
      <div style={{ marginRight: '20px',width:"38vw",marginLeft:"6vw",marginTop:"2vh"  }}>
        {/* First Item */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src="/images/courses/online/o12.png" alt="Icon 1" style={{ width: '60px', height: '60px', marginRight: '10px' }} />
          <span style={{marginLeft:"24px"}}>
            <h5 style={{marginLeft:"32px"}}>Program Outcomes</h5>
            <ul>
              <li style={{marginBottom:"12px"}}>Grasp fundamentals of Excel
analytics functions and
conditional formatting</li>
              <li style={{marginBottom:"12px"}}>Understand the tools and
techniques used in business
analysis planning and monitoring
Understand generative AI, its
current state, and practical
applications.</li>
<li style={{marginBottom:"12px"}}>Learn about prompt engineering,
explainable AI, conversational
AI, large language models,
ChatGPT, and more.</li>
            </ul></span>
        </div>
        {/* Second Item */}
        <div style={{ display: 'flex', alignItems: 'center',marginTop:"10vh" }}>
          <img src="/images/courses/online/o11.png" alt="Icon 2" style={{ width: '60px', height: '60px', marginRight: '10px' }} />
          <span style={{marginLeft:"24px"}}>
            <h5 style={{marginLeft:"32px"}}>DATA WRANGLING : EXCEL & SQL</h5>
            <ul style={{fontSize:"16px",listStyleType: 'disc' }}>
              <li style={{marginBottom:"12px",fontSize:"13px"}}>DATA CLEANING AND FORMATTING IN EXCEL</li>
              <li style={{marginBottom:"12px",fontSize:"13px"}}>CONDITIONAL FOMATTING:</li>
<li style={{marginBottom:"12px",fontSize:"13px"}}>TABLE FORMATTING</li>
<li style={{marginBottom:"12px",fontSize:"13px"}}>TEXT TO COLUMN
</li>
              <li style={{marginBottom:"12px",fontSize:"13px"}}>REMOVE DUPLICATE</li>
<li style={{marginBottom:"12px",fontSize:"13px"}}>SORTING AND FORMATTING
</li>
            </ul></span>
          
        </div>
        <button className="btn btn-primary mt-3" onClick={handleApplyNow} style={{marginLeft:"8vw"}}>Download Curriculum</button>
      </div>
      
      {/* Second Section */}
      <div>
        <img src="/images/courses/online/vskaschedule.png" alt="Your Image" style={{ width: '600px', height: '680px' ,border:"7px solid #1eb2a6",borderRadius:"10px",marginLeft:"8vw"}}  />
      </div>
    </div>
  );
};

export default Schedule;
