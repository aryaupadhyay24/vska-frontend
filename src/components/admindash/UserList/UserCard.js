import React from "react"
import { useEffect,useState } from "react"
import { UserList } from "../../../dummydata"
import CardOnCard from './CardOnCard'


const UserCard = () => {
    const [data,setData]=useState([])
    let apiurl="http://localhost:80/api/fetchAllUser";
    // setloading(true)
    
    const fetchdata=()=>{
    fetch(apiurl).then((response)=>{
        // console.log("sdsfgb ",response.json())
         return response.json();
    }).then((element)=>{
        console.log(element," zbn")
        let p=element
        console.log(p,"  pa ka data")
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
    console.log("user car")
    
  return (
    
    <>
      {data && data.map((val) => (
        <CardOnCard val={val}/>
      ))}
    </>
  )
}

export default UserCard
