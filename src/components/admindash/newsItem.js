import { useEffect,useState } from "react"
import NewsItemComponent from "./newsItemComponent"
import NewItemComponent from "./NewItemComponent"
// import Spinner from "./spinner"

import { UserList } from "../../dummydata"


const NewsItem = () => {
    const [data,setData]=useState([])
    // const data=UserList
    // const [countpage,setCount]=useState(1)
    // const [loading,setloading]=useState(false)
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
    },[])

    // function handlenext(){
    //     console.log("why");
    //     setCount(countpage+1);
            
    //     apiurl=`https://newsapi.org/v2/everything?q=cricket&apiKey=4cf0ca7f59464714ad700ebe58e6e8cd&page=${countpage}`;
    //     fetch(apiurl).then((response)=>{
    //         return response.json();
    //    }).then((element)=>{
    //        let p=element.articles
    //        console.log(p);
    //        setData(p);
   
    //     //    pp.map((d)=>{
    //     //        console.log(d)
    //     //    })
   
    //    })
    // }
    // function handleprevious(){
    //     console.log("hello");
    //     setCount(countpage-1);
    //     apiurl=`https://newsapi.org/v2/everything?q=cricket&apiKey=4cf0ca7f59464714ad700ebe58e6e8cd&page=${countpage}`;
    //     fetch(apiurl).then((response)=>{
    //         return response.json();
    //    }).then((element)=>{
    //        let p=element.articles
    //        console.log(p);
    //        setData(p);
   
    //     //    p.map((d)=>{
    //     //        console.log(d)
    //     //    })
   
    //    })
    // }
    
    return (
        <>
        {/* {loading && <Spinner/>} */}

            {/* <h3 style={{textAlign:"center"}}>this is newsitem hwere nes to be feed</h3> */}
            <div className="container my-3">
            <div className="row">
                {data && data.map(user=>(
                    
                    // {console.log(user)};
                    // {console.log("hello")};
                    // {console.log(user.urlToImage,user.title,user.description,user.url)}
                    
                    <div style={{textAlign:"center"}}>
                        
                    <div className="col-md-3"><NewItemComponent name={user.name} email={user.email} certificates={user.certificates} alte="hello"/></div>
                    {/* <div classNameName="col-md-4"><NewsItemComponent /></div>
                    <div classNameName="col-md-4"><NewsItemComponent /></div>
                    <div classNameName="col-md-4"><NewsItemComponent /></div>
                    <div classNameName="col-md-4"><NewsItemComponent /></div>
                    <div classNameName="col-md-4"><NewsItemComponent /></div>
                    <div classNameName="col-md-4"><NewsItemComponent /></div> */}
                    </div>
                    
                    

                )

                )
                }
                </div>
                {/* <div className="d-flex justify-content-between">
                <button className="btn btn-primary justify-content-between" type="submit" onClick={handleprevious}  disabled={countpage<=1}>&larr;Previous</button>
                <button className="btn btn-primary justify-content-between " type="submit" onClick={handlenext}>Next &rarr;</button>
                </div> */}
                </div>
            

            
        </>
    )
}
export default NewsItem