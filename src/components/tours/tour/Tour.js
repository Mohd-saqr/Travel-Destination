import { Link } from 'react-router-dom';

function Tour(props){
    
return(
    props.data.data.map(el => {
        return (
            
            <div className='Tours' key={el.id}>
   
                <h1>{el.name}</h1>
                <Link to={`/city/${el.id}`}> <img src={el.image} alt={el.name}></img></Link>
            </div>
        )
    })
)

}
export default Tour;