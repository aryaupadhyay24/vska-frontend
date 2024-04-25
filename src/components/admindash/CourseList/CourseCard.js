import React from 'react'
import { useEffect, useState } from "react"
const CourseCard = (props) => {
    const { val } = props
    const [Name, setName] = useState('');
    const [Date, setDate] = useState('');
    const [Time, setTime] = useState('');
    const [Role, setRole] = useState('');
    const [Company,setCompany]= useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'Name':
                setName(value);
                break;
            case 'Date':
                setDate(value);
                break;
            case 'Time':
                setTime(value);
                break;
            case 'Role':
                setRole(value);
                break;
            case 'Company':
                setCompany(value);
                break;
            default:
                break;
        }
    };
    const handleSubmit = async () => {
        try {
            const Date2=val.Date
            const url = `http://localhost:80/api/courses/${Date2}`;
            console.log(url);
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Date,
                    Time,
                    Role,
                    Company,
                    Name
                })
            });
            const res=await response.json;
            console.log(res)
            console.log("yaha to gaya")
            if (!response.ok) {
                throw new Error('Failed to add certificate');
            }

        } catch (error) {
            console.error('Error adding certificate:', error.message);
        }
    };
    return (
        <>
        <div className='items shadow'>
            <div className='box flex' style={{ display: "flex", flexDirection: "column", width: "23vw", fontSize: "22px" }} >
                <div style={{ fontFamily: "cursive", fontWeight: "Bold", textAlign: "center", paddingBottom: "15px" }}>
                    {val.Date}
                </div>
                <div style={{ fontFamily: "sans-serif", fontWeight: "Bold", textAlign: "center", paddingBottom: "35px" }}>
                    {val.Time}

                </div>
                <div style={{ fontFamily: "cursive", fontWeight: "Bold", textAlign: "center" }}>
                    {val.Name}

                </div>
                <div style={{ fontFamily: "cursive", fontWeight: "Bold", textAlign: "center" }}>
                    {val.Role}
                </div>
                <div style={{ fontFamily: "cursive", fontWeight: "Bold", textAlign: "center" }}>
                    {val.Company}
                </div>

            </div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Update Course
            </button>

        </div>
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
                                <h2 className="title" >Update Course</h2>
                                <div className="field">
                                    <label className="label">Date</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            name="Date"
                                            value={Date}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Time</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            name="Time"
                                            value={Time}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Name</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            name="Name"
                                            value={Name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Role</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            name="Role"
                                            value={Role}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Company</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            type="text"
                                            name="Company"
                                            value={Company}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                {console.log("niche")}
                                <div className="field is-grouped">
                                    <div className="control">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={handleSubmit}>Update Course</button>
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
    )
}

export default CourseCard
