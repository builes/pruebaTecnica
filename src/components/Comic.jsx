import React, {useEffect, useState} from 'react'

export default function Comic() {

    const [datosApi, setDatosApi] = useState()

    
    const apiComic = async () => {
        let aleatorio = Math.floor(Math.random() *1000)
        let url = `https://cors-anywhere.herokuapp.com/http://xkcd.com/${aleatorio}/info.0.json`
        const response = await fetch(url)
        const responseJson = await response.json()
        setDatosApi(responseJson)
        console.log(responseJson.img);
    }

    
    useEffect(() =>{
        apiComic()
    }, [])



    return (
        
             <div className='col-10 mb-5 App'>
                 {!datosApi ? '...cargando' : 
                 <div>
                     <h2 className="text-center my-5 pt-3">{datosApi.title}</h2>
                    <img src={datosApi.img} className="img-fluid" alt="Responsive image"/>   
                </div>}             
            </div>
        
    )
}



