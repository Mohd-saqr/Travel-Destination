import {useParams} from 'react-router-dom'
import {useState} from 'react'
import '../TourDetails/TourDetails.css'
export default function TourDetails(probs){
    let {key} = useParams()
    const [isClick,setClick]= useState(false)
  let city=  filterF(probs.data,key)
  function seemore(){
    
    setClick(!isClick)
   
   }
  if(isClick){
    return(

        <div className='cityDetails'>
        <h1> id : {city.id}</h1>
        <h1 id='NameCity'>Name : {city.name}</h1>
        <h1>info : {city.info}</h1>
       <h1>price : {city.price}</h1>
       <div>
       <img src={city.image} alt="#"></img>
       </div>
       
        <a onClick={seemore} href="#">see less ..</a>
        

{/* <img src={city.id}></img> */}
        
        </div>
        
    )
    
  }else{
    return(

        <div className='cityDetails'>
       <h1> id : {city.id}</h1>
        <h1 id='NameCity'>Name : {city.name}</h1>
        <h1>info : {city.info}</h1>

        <a  onClick={seemore} href="#">see more ..</a> 
        </div>
    )

  }
   

}


function filterF(data,keys){
    let city={}
    data.filter(el =>{
        if(el.id===keys){
           city=el
        }
    })

return city
}