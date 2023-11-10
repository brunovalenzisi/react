import  Item  from "./Item"


function ItemList(props) {
    return (
      <section className="card-container">
        {props.data.map((item) => {
          return (
            <Item key={item.id} data={item}/>
          )
        })}
      </section>
    )
  }
  export default ItemList
