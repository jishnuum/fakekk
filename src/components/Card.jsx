
function Card({item}){
    console.log(item);
    
    return(
        <div className="cardss">
            <div className="card">
                <div className="productcard">
                    <img src={item.image} alt="" />
                </div>
                <div className="productdes">
                    <p>{item.description} </p>
                    <p>{item.category} </p>
                    <p>{item.price} </p>
                </div>
            </div>
        </div>
    )
}

export default Card