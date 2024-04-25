import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './CoursePage.css'; // Import CSS for animations

const CoursePage = () => {
  const courses = [
    {
      title: 'PG Program In Data Science',
      duration: '7 Months Program',
      price: 'RS. 89,999/-',
      features: [
        'Full Lifetime Access',
        'No cost EMI available',
        '1:1 mentorship',
        'Certificate of Completion',
        '24*7 Live Support',
        'LinkedIn Branding',
        'Program With Internship',
        'Live Classes',
        'Placement Guarantee'
      ]
    },
    {
      title: 'Flexible Learning Program In Data Science',
      duration: '4 Months Program',
      features: [
        '100% Cost Effective Recorded Session',
        '1:1 Mentorship',
        'Topic wise Assignment, Project etc.',
        'Doubt clearing Session',
        '24*7 Live Support',
        'LinkedIn Branding',
        'Placement Support'
      ]
    }
  ];

  return (
    <div className="container mt-5" >
      {courses.map((course, index) => (
      <div className="row" style={{widht:"100vw"}}>
        
        {/* //   <CSSTransition key={index} classNames="fade" timeout={500}> */}
            <div className="col-md-18">
              <div className="card mb-4">
                <div className="card-body">
                  <h1 className="card-title">{course.title}</h1>
                  <p className="card-text">{course.duration}</p>
                  {course.price && <p className="card-text">Price: {course.price}</p>}
                  <ul className="list-group list-group-flush">
                    {course.features.map((feature, index) => (
                      <li key={index} className="list-group-item">{feature}</li>
                    ))}
                  </ul>
                  <button className="btn btn-primary mt-3">APPLY NOW</button>
                </div>
              </div>
            </div>
        {/* //   </CSSTransition> */}
        </div>
        ))}
      
    </div>
  );
};

export default CoursePage;
