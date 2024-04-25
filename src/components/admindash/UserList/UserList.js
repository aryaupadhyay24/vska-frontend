import React from "react"
// import Back from "../common/back/Back"
import UserCard from "./UserCard"

import "./UserList.css"

const UserList = () => {
  console.log("wqewrt")
  return (
    <>
      {/* <Back title='Blog Posts' /> */}
      <section style={{marginTop:"18px"}}>
        <div className='container grid2'>
          <UserCard />
        </div>
      </section>
    </>
  )
}

export default UserList
