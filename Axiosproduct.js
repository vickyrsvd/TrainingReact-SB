import axios, { Axios } from "axios";
import React, { useState } from 'react'
const Axiosproduct = () => {
    const[get,setGet]= useState([]);
    const [getId, setgetId] = useState('');
    const [res, setres] = useState(false);
    const [updateData, setUpdateData] = useState('');
    const [upt, setupt] = useState(false);
    const handleClick = async () => {
        await axios.get("http://localhost:8001/products/").then((response)=>{
           setGet(response.data);
           console.log(response.data);
        });
    }
 
    const handleClickById = async () => {
        await axios.get(`http://localhost:8001/products/12`).then((response)=>{
            setgetId(response.data);
            console.log(response.data);
            setres(true);
        });
    }
 
    const onPost = () => {
        axios.post("http://localhost:8001/products/",{
            "productId" : 125,
            "productName" : "LG AC",
            "productPrice":40000,
            "productQuantity":600
        }).then((response)=>{
            console.log(response.data);
            console.log("details saved");
        });
    };
 
    const onUpdate = () => {
        console.log("put in ");
        axios.put("http://localhost:8001/products/10",{
            "productId" : 10,
            "productName" : "Micromax",
            "productPrice":12000,
            "productQuantity":13
        }).then((response)=>{
            console.log(response.data);
            setUpdateData(response.data);
            console.log("details updated");
            setupt(true);
        });
    };
   
 
    function ondelete(){
        axios.delete("http://localhost:8001/products/13").then((response)=>{
            console.log("details deleted");
        });
    };
 
  return (
    <div>
    <button onClick={onPost}>Post</button>
    <button onClick={onUpdate}>Update</button>
    <button onClick={ondelete}>Delete</button>
    <button onClick={handleClick}>getData</button>
    <button onClick={handleClickById}>getById</button>
    <div>
        {
            get.map((item)=>{
                return(
                    <div key={item.productId}>
                        <h1>{item.productId}</h1>
                        <h1>{item.productName}</h1>
                        <h1>{item.productPrice}</h1>
                        <h1>{item.productQuantity}</h1>
                    </div>
                )
            })
        }
    </div>
 
    <div>
       {
        res && (
            <div>
            <h1>Get By Id</h1>
            <h1>{getId.id}</h1>
            <h1>{getId.productName}</h1>
            <h1>{getId.productPrice}</h1>
            <h1>{getId.productQuantity}</h1>
            </div>
        )
       }
    </div>
 
    <div>
       {
           upt && (
            <div>
            <h1>Update Data</h1>
            <h1>{updateData.id}</h1>
            <h1>{updateData.productName}</h1>
            <h1>{updateData.productPrice}</h1>
            <h1>{updateData.productQuantity}</h1>
            </div>
           )
       }
    </div>
 
    </div>
   
   
  )
}
 
export default Axiosproduct