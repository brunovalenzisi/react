import { useState , useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { cargarProducto } from "../../utils"
import { useParams } from "react-router-dom"




const IntemDetailContainer=()=>{


    //Estados
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const productId = useParams()
   
  
 
    
    

    //Efectos
    useEffect(()=>{
        const productData = cargarProducto(productId)
        productData.then(data=>{
            setProducto(data)
            setLoading(false)
        }) 
    },[productId])

    
    
    
    //Vista
    if(loading) return <p>cargando...</p>
    
    
    return (
            <ItemDetail data={producto}/>
        )
   

    
}


export default IntemDetailContainer
