import React from 'react'

function ProfileCard(props) {
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
            <p style={{ fontSize:"15px",marginTop:"-12px",lineHeight:"22px"}}>
               
               {props.desc}
            </p>
            <p>
                Average Package {props.value}
            </p>

        </div>
      </div>
    </div>
  )
}

export default ProfileCard
