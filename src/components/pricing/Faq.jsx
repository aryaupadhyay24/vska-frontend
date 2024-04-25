import React, { useRef, useState } from "react"
import { faq } from "../../dummydata"
import Heading from "../common/heading/Heading"

const Faq = () => {
  const [click, setClick] = useState(false)

  const toggle = (index) => {
    if (click === index) {
      return setClick(null)
    }
    setClick(index)
  }

  return (
    <>
      <Heading subtitle='FAQS' title='Frequesntly Ask Question' />
      <section className='faq'>
        <div className='container' style={{fontSize:"18px"}}>
          {faq.map((val, index) => (
            <div className='box' style={{fontSize:"18px"}}>
              <button className='accordion' onClick={() => toggle(index)} key={index}>
                <h2 style={{fontSize:"18px",marginTop:"-4px",marginBottom:"-8px"}}>{val.title}</h2>
                <span>{click === index ? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
              </button>
              {click === index ? (
                <div className='text'>
                  <p>{val.desc}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Faq
