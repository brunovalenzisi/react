import { Link } from "react-router-dom"

const Item = (props) => {
  const {id,producto,imagenURL,precio}= props.data
  return (
      <Link to={`/item/${id}`}>
    
        <article className="card">
          <img
            className="card__image"
            src={imagenURL[0]}
            alt={producto}
          />
          <h1 className="text-gray-700 font-bold text-xl ">
            {precio}
          </h1>
          <h2 className="card__title">{producto}</h2>
          
        </article>
   
      </Link>
  )
}

export default Item
