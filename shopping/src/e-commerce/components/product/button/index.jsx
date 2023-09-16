import React,{useState} from 'react'
import "./index.scss"

const Button = (props) => {
    const {data, setProducts, products} = props;
    console.log(data)
    const [counter, setCounter] = useState(0);

    const handleCounter =(type) => {
        if(type === "add") {
            setCounter(prev=> prev+1)
            setProducts([data, ...products]);
            console.log("clicked")
            return true;
        }

        if(counter>=1) {
            setCounter(prev=> prev-1);
            const dataIndex = products.findIndex(i=>{
                console.log(i.id,data.id)
                if(i.id===data.id) {
                    return i;
                }
            })

            
            console.log(dataIndex)
        }
    }



    return (
            <div className="button">
                <div className="btn-counter" onClick={()=>{
                handleCounter("sub")
            }} id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                <div className="counter">{counter}</div>
                <div className="btn-counter" id="increase" onclick="increaseValue()" onClick={()=>{
                handleCounter("add")
            }} value="Increase Value">+</div>
            </div>
    );

}

export default Button;