import React, {useState, Fragment} from 'react'
import {FaStar} from 'react-icons/fa'


export default function Rating() {

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    

    return (
            
        <Fragment>
            <div className="col-7 App">
                {[...Array(5)].map((star, i) =>{
                    const ratingValue = i + 1
                    return(
                    <label>
                        <input 
                        type="radio" 
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}                    
                        />
                        <FaStar
                        size={70} 
                        className="star"
                        color={ratingValue <= (hover ||  rating) ? "#ffc107" : "#e4e5e9"}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        />
                    </label>
                    )
                })
                    
                }
            </div>

            {/* <div className="col-7 App mt-4">
                <button className="btn btn-lg btn-primary" onClick={location.reload()}>Siguiente Imagen</button>
            </div> */}
        </Fragment>
        
    )
}
