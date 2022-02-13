import db from  '../../data/db.json'
import '../tours/Tours.css'

function Tours (){
    return(
     db.map(el =>{
return(
    <div className='Tours'>
        
        <h1>{el.name}</h1>
        <img src={el.image} alt={el.name}></img>
    </div>
)
     })
    )
}
export default Tours;