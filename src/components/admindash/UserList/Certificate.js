import React from 'react'

import './Certificate.css'
const Certificate = (props) => {
    console.log("dasfshj")
    const {certificates}=props
    console.log(certificates)
    const handleDownload = (certificateLink) => {
        // Create an anchor element
        const link = document.createElement('a');
        // Set the href attribute to the certificate link
        link.href = certificateLink;
        // Simulate a click on the anchor element
        link.click();
      };
    
  return (
    <div className="certificates-grid">
      {certificates && certificates.map(certificate => (
                        <div style={{border:"2px solid black",marginTop:"18px"}} className="certificate-item">
                        <p style={{textAlign:"center",color:"#1eb2a6",fontWeight:"bold"}}>Certficate Id: {certificate.certificateID}</p>
                        <p >CourseName  : {certificate.courseName}</p>
                        <p >Teacher   :{certificate.teacher}</p>
                        <p >CertificateLink :{certificate.certificateLink}</p>
                        <button onClick={() => handleDownload(certificate.certificateLink)} style={{alignItems:"center"}}>Open Certificate</button>
                        </div>
                    ))}
    </div>
  )
}

export default Certificate
