import React,{useState} from "react";
import "./style.scss";

const Product = function({ photo, name, desc, price }) {
  const [count, setCount] = useState(0);

  return (
    <div className="prodCard">
      <img src={photo} className="prodImg" alt={`${name} zdjęcie`}/>
      <p className="prodName">{name}</p>
      <p>{desc}</p>

      <button onClick={() => setCount(count + 1)}>{`Kup teraz - ${price}zł` }</button>
      <p>Kupiono {count} razy</p>
    </div>
  );
};

export default Product;
