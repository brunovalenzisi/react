import { useState , useEffect } from "react"
import ItemList from "./ItemList"
import { cargarProductos } from "../../utils"
import { useParams } from "react-router-dom"




const ItemListContainer=()=>{


    //Estados
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const categoria = useParams()
  
 
    
    

    //Efectos
    useEffect(()=>{
        const resultado = cargarProductos(categoria)
        resultado.then(productos=>{
            setProductos(productos)
            setLoading(false)
        }) 
    },[categoria])

    
    
    
    //Vista
    if(loading) return <p>cargando...</p>
    
    
    return (
            <ItemList data={productos}/>
        )
   

    
}


export default ItemListContainer


