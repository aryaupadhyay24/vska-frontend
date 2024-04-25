import React, { useState } from 'react'
import UserList from './UserList/UserList'
import NewsItem from './newsItem'
import AdminHero from './AdminHero'
import { useNavigate } from 'react-router-dom'

function Adminhome() {
  const navigate=useNavigate();
  // const [admin, setAdmin] = useState("");
  const admin=localStorage.getItem("isAdmin")
  console.log(admin)
  
  if(admin!=="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyMmM0MWM4MGUwMjcyMzBhYTQ2ZTA1In0sImlhdCI6MTcxMzU1NDQ2MH0.-H8sEpMUSd1KcMv-9b40KfI8WPqs9zWRxfQBe8xOO-o"){
    navigate('/')
    console.log("ye kyun nhi chala")
  }
  
  return (
    <div>
      {/* <UserList/> */}
      {/* <NewsItem/> */}
      <AdminHero/>
      
    </div>
  )
}

export default Adminhome
