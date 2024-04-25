import React from 'react'
import { upcomingbatches } from '../../../dummydata'
import Heading from '../../common/heading/Heading'
import { upcoming } from '../../../dummydata'
// import "./style.css"
import CourseCard from './CourseCard'
import { useEffect, useState } from "react"

function UpcomingBatches() {
    const [data, setData] = useState([])
    let apiurl = "http://localhost:80/api/courses";
    // setloading(true)

    const fetchdata = () => {
        fetch(apiurl).then((response) => {
            // console.log("sdsfgb ",response.json())
            return response.json();
        }).then((element) => {
            console.log(element, " zbn")
            let p = element
            console.log(p, "  pa ka data")
            // setloading(false)
            // console.log(p);
            setData(p);

            // p&&p.map((d)=>{
            //     console.log(d)
            // })

        })
    }
    useEffect(()=>{
        fetchdata();
        console.log(data)
    },[])
    return (
        <div>

            <section className='testimonal padding upperclass'>
                <div className='container '>
                    <Heading subtitle='Upcoming Batches' title='' />

                    <div className='content grid2 mydef'>
                        {data && data.slice(0,3).map((val) => (
                            <CourseCard val={val} />
                        ))}
                    </div>
                </div>
            </section>


        </div>
    )
}
{/* <i className='fa fa-calendar-alt'></i> */ }

export default UpcomingBatches
