import React, { Fragment } from 'react';
import {CgMouse} from 'react-icons/cg';
import "./Home.css";
import ProductCard from './ProductCard';


const product=[{
    name:"sample product",
    images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
    price:"500",
    _id:"testid"
},{
    name:"sample product",
    images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
    price:"500",
    _id:"testid"
},{
    name:"sample product",
    images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
    price:"500",
    _id:"testid"
},{
    name:"sample product",
    images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
    price:"500",
    _id:"testid"
},{
    name:"sample product",
    images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
    price:"500",
    _id:"testid"
},{

    name:"sample product",
    images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
    price:"500",
    _id:"testid"
},
{
    name:"sample product",
    images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
    price:"500",
    _id:"testid"
},{
    name:"sample product",
    images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
    price:"500",
    _id:"testid"
}];

const Home = () => {
  return (
    <Fragment>
        <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            <a href="#container">
                <button>
                    scroll <CgMouse/>
                    </button>
            </a>
        </div>
        <h2 className="homeHeading">Featured Products</h2>
        <div className="container" id='container'>
                
                    <ProductCard product={product[0]} />
                    <ProductCard product={product[1]} />
                    <ProductCard product={product[2]} />
                    <ProductCard product={product[3]} />
                    <ProductCard product={product[4]} />
                    <ProductCard product={product[5]} />
                    <ProductCard product={product[6]} />
                    <ProductCard product={product[7]} />
            
        </div>
    </Fragment>
  )
}

export default Home