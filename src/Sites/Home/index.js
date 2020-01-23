import React,{useState} from 'react';
import Product from "../../components/Product";
import SearchBox from "../../components/SearchBox";

const products = [
  {
    id: 1,
    photo: "https://picsum.photos/200",
    name: "Młotowiertarka udarowa",
    desc: "Coby poprawić humor sąsiadowi",
    price: "666.66",
  },
  {
    id: 2,
    photo: "https://picsum.photos/200",
    name: "Wózek dziecięcy",
    desc: "Dla dzieci wożenia - Yoda miszcz",
    price: "21.37",
  },
  {
    id: 3,
    photo: "https://picsum.photos/200",
    name: "Hiszpańska inkwizycja",
    desc: "Podobno nie spodziewa się jej nikt",
    price: "42.42",
  },
  {
    id: 4,
    photo: "https://picsum.photos/200",
    name: "Komputer",
    desc: "Do nauki i zabawy",
    price: "133.70",
  },
  {
    id: 5,
    photo: "https://picsum.photos/200",
    name: "Gramofon",
    desc: "Idealny na imprezy małoralne",
    price: "458.12",
  },
  {
    id: 6,
    photo: "https://picsum.photos/200",
    name: "enuai (c) taxi",
    desc: "sieciewerset trzysta dwadzieścia",
    price: "nieważne ",
  }
];

const Home = function(){
  const [searchValue, setSearchValue] = useState('');
  return(
    <>
      <SearchBox value={searchValue} onChangeHandler={setSearchValue} />
      {
        products.filter( el => el.name.includes( searchValue ) || el.desc.includes( searchValue ) ).map( function(el){
          return (
            <Product
              key={el.id}
              photo={el.photo}
              name={el.name}
              desc={el.desc}
              price={el.price}
            />
          );
        })
      }
    </>
  );
}

export default Home;
