import React from 'react';

const Certificate = () => {
  const handleApplyNow = () => {
    // You can optionally perform any other actions before redirecting
    // For example, tracking the button click event

    // Redirect to the Google Form URL
    window.location.href = 'https://drive.google.com/file/d/14ANHEgMb_MrvJzZZzm9LZJ6Mlm2lGy0R/view?usp=sharing';
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'row' ,marginTop:"12vh"}}>
      {/* First Section */}
      <div style={{ marginRight: '20px',width:"38vw",marginLeft:"6vw",marginTop:"7vh"  }}>
        {/* First Item */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src="/images/courses/online/o12.png" alt="Icon 1" style={{ width: '60px', height: '60px', marginRight: '10px' }} />
          <span style={{marginLeft:"24px"}}><h5>Industry Recognised Certification.</h5><p style={{fontSize:"16px"}}>VSKAWorld gives you Industry Recognised <br></br> Certification as per ISO 27001 with <br></br>  verifiable credentials</p></span>
        </div>
        {/* Second Item */}
        <div style={{ display: 'flex', alignItems: 'center',marginTop:"10vh" }}>
          <img src="/images/courses/online/o11.png" alt="Icon 2" style={{ width: '60px', height: '60px', marginRight: '10px' }} />
          <span style={{marginLeft:"24px",fontSize:"10px"}}><h5>Industry Recognised Certification.</h5><p style={{fontSize:"16px"}}>VSKAWorld gives you Industry <br></br> You can add the VSKAWorld<br></br> Certificate on your  Linkedin profile,<br></br> resume and even share it over <br></br> Whatsapp or any other <br></br> social channels.</p></span>
          
        </div>
        <button className="btn btn-primary mt-3" onClick={handleApplyNow} style={{marginLeft:"8vw"}}>Download Brochure</button>
      </div>
      
      {/* Second Section */}
      <div>
        <img src="/images/courses/online/vskacertificate.jpg" alt="Your Image" style={{ width: '750px', height: '600px' }}  />
      </div>
    </div>
  );
};

export default Certificate;
