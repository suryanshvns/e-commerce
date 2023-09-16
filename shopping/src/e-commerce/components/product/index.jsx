import React,{useState} from 'react'
import Button from './button';
import Cart from '../cart'
import './index.scss';

const Product = (props)=>{

    const { productList } = props
    const [products, setProducts] = useState([])

    return(
        <>
        <div class="small-container">
                <div class="row row-2">
                    <h2>All Products</h2>
                    <select>
                        <option value="">Default Shorting</option>
                        <option value="">Short by price</option>
                        <option value="">Short by popularity</option>
                        <option value="">Short by rating</option>
                        <option value="">Short by sale</option>
                    </select>
                </div>
                <div class="row">
                    {productList.length ? productList.map(i => {
                        console.log(i)
                        return (
                            <div class="col-4">
                                <img src={i.image} alt="" />
                                <h4>{i.title}</h4>
                                <p>Rate : {i.rating.rate} </p>
                                <div class="rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                                <p>Price : {i.price} </p>
                                <Button data={i} setProducts={setProducts} products={products} />
                            </div>
                        )
                    }):"sorry! Our server is down please cameback later" }
                </div>
                {products.length && <Cart/>}

                <div class="page-btn">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>&#8594;</span>
                </div>
            </div>
        </>
    )
}
export default Product;