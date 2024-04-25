import React, { useState } from "react";
import axios from "axios";
import AddCertificateModal from "./AddCertificateModal"; // Assuming you have the modal component in a separate file

const NewItemComponent = (props) => {
    const { certificates, name, email } = props;
    const [newUrl, setNewUrl] = useState("");
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility
    const [certificateID, setCertificateID] = useState('');
    const [courseName, setCourseName] = useState('');
    const [teacher, setTeacher] = useState('');
    const [certificateLink, setCertificateLink] = useState('');
    console.log("dssfg")

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'certificateID':
                setCertificateID(value);
                break;
            case 'courseName':
                setCourseName(value);
                break;
            case 'teacher':
                setTeacher(value);
                break;
            case 'certificateLink':
                setCertificateLink(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async () => {
        try {
            console.log( certificateID, courseName, teacher, certificateLink, email )
            const response = await fetch('http://localhost:80/api/create/certificate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    certificateID,
                    courseName,
                    teacher,
                    certificateLink,
                    email:email // Replace 'user_id_here' with the actual user ID
                })
            });
            console.log("yaha to gaya")
            if (!response.ok) {
                throw new Error('Failed to add certificate');
            }

        } catch (error) {
            console.error('Error adding certificate:', error.message);
        }
    };

    // const handleClick = async () => {
    //     try {
    //         const res = await axios.put("http://localhost:80/api/updateUser", { username: name, email, newUrl });
    //         console.log("Response:", res);
    //     } catch (error) {
    //         console.log("Error in adding certificate:", error);
    //     }
    // };

    return (
        <>
            <div className="card" style={{ width: "28rem", textAlign: "center" }}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{email}</p>
                    <h2>Certificates</h2>
                    {certificates && certificates.map(certificate => (
                        <div style={{border:"2px solid black",marginTop:"18px"}}>
                        <p >CertficateId: {certificate.certificateID}</p>
                        <p >CourseName  : {certificate.courseName}</p>
                        <p >Teacher   :{certificate.teacher}</p>
                        <p >CertificateLink :{certificate.certificateLink}</p>
                        </div>
                    ))}
                    {/* <div className="input-div">
                        <input
                            id="password"
                            value={newUrl}
                            placeholder="New Url"
                            onChange={(e) => setNewUrl(e.target.value)}
                            required
                        />
                    </div> */}
                    {/* <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add Certificate</button> */}
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
Add Certificate
</button>
                </div>
            </div>
            {console.log(showModal)}
            {/* Pass props to the modal and conditionally render it */}
            {/* <AddCertificateModal showModal={showModal} closeModal={() => setShowModal(false)} /> */}
            {/* <!-- Button trigger modal --> */}


{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div className="box">
                    <h2 className="title" >Add Certificate</h2>
                    <div className="field">
                        <label className="label">Certificate ID</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name="certificateID"
                                value={certificateID}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Course Name</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name="courseName"
                                value={courseName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Teacher</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name="teacher"
                                value={teacher}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Certificate Link</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                name="certificateLink"
                                value={certificateLink}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    {console.log("niche")}
                    <div className="field is-grouped">
                        <div className="control">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={handleSubmit}>Add Certificate</button>
                            {/* <button className="button is-link" onClick={handleSubmit}>Add Certificate</button> */}
                        </div>

                    </div>
                </div>
      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> */}
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default NewItemComponent;
