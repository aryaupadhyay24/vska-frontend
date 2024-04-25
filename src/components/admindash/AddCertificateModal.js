import React, { useState } from 'react';

function AddCertificateModal({ showModal, closeModal }) {
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
            const response = await fetch('/api/certificates', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    certificateID,
                    courseName,
                    teacher,
                    certificateLink,
                    userId: 'user_id_here' // Replace 'user_id_here' with the actual user ID
                })
            });
            if (!response.ok) {
                throw new Error('Failed to add certificate');
            }
            closeModal();
        } catch (error) {
            console.error('Error adding certificate:', error.message);
        }
    };

    return (
        <div className={`modal ${showModal ? 'is-active' : ''}`}>
            <div className="modal-background" onClick={closeModal}></div>
            <div className="modal-content">
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
                            <button className="button is-link" onClick={handleSubmit}>Add Certificate</button>
                        </div>
                        <div className="control">
                            <button className="button is-link is-light" onClick={closeModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
        </div>
    );
}

export default AddCertificateModal;
