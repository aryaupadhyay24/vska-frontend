import React from 'react'

function Card(props) {
  return (
    <div>
      <div style={{display:"flex",flexDirection:"col"}}>
        <div >
            {/* <div  style={{height:"15px"}}> */}
                <img src={props.cover} alt=''  style={{width:"75px"}}/>
            {/* </div> */}
        </div>
        <div style={{marginLeft:"2vw"}}>
            <p style={{color:"black",fontFamily:"sans-serif",fontSize:"20px",textEmphasisColor:"ButtonShadow",fontWeight:"bold"}}>
                {props.title}
            </p>
            <p style={{ fontSize:"13px",marginTop:"-12px",lineHeight:"22px"}}>
               
               {props.desc}
            </p>

        </div>
      </div>
    </div>
  )
}

export default Card
