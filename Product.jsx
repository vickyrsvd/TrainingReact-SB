import React,{useState} from 'react'

const Product = () => {
  
    const [product, setproduct] = useState({
        pid: '',
        name: '',
        cost: '',
        radio: '',
        pOnline: '',
        category: [],
        
      });
      const [data, setData] = useState([]);

      
      const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        if (type === "checkbox") {
            const selectedStore = value;
            const updatedStores = checked
                ? [...product.category, selectedStore]
                : product.category.filter((c) => c !== selectedStore);
    
            // Update the state with the updated category
            setproduct((prevState) => ({
                ...prevState,
                category: updatedStores,
            }));
        } else {
            // Update the state with the input value
            setproduct((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };
      
      // if (type === "checkbox") {
      //   let category = [...product.category];
      //   if (checked) {
      //     category.push(value);
      //   } else {
      //     category = category.filter((item) => item !== value);
      //   }
      //   setproduct({ category });
      // } else {
      //   setproduct({ [name]: value });
      // }
       // setproduct((prevProduct) => ({ ...prevProduct, [name]: value }));
      
      const handleClick = (e) =>{
        // e.preventDefault();
        // const { pid,name,cost,radio,pOnline,category} = product;
        // console.log(pid,name,cost,radio,pOnline,category);
        // const newproduct = { pid, name, cost,radio, pOnline,category };
        // setData([...data, newproduct]);
        // setproduct((prevState) => ({
        //   data: [...prevState.data, newproduct],
        //   id: "",
        //   name: "",
        //   cost: "",
        //   online: "",
        //   category: [],
        e.preventDefault();
        const { pid, name, cost, radio, pOnline, category } = product;
        console.log(pid, name, cost, radio, pOnline, category);
    
        // Initialize newproduct with the data
        const newproduct = { pid, name, cost, radio, pOnline, category };
        setproduct((prevState) => ({
          ...prevState, // Preserve other properties
          data: prevState.data ? [...prevState.data, newproduct] : [newproduct], // Initialize data as an empty list if it doesn't exist
          pid: "",
          name: "",
          cost: "",
          ponline: "",
          category: [],
      }));
      console.log(data);

        
     
      };
      
  return (
    <div>
    <div class="mb-3 mt-3">
    <label for="productID" class="form-label">Product ID:</label>
    <input type="text" class="form-control" id="productID" placeholder="Enter Product ID"name="pid" onChange={handleInputChange} required />
</div>

<div class="mb-3">
    <label for="productName" class="form-label">Product Name:</label>
    <input type="text" class="form-control" id="productName" placeholder="Enter Product Name" name="name" onChange={handleInputChange} required />
</div>

<div class="mb-3">
    <label for="productCost" class="form-label">Product Cost:</label>
    <input type="text" class="form-control" id="productCost" placeholder="Enter Product Cost" name="cost" onChange={handleInputChange} required />
</div>
<div class="mb-3">
<label for="productOnline" class="form-label">Product Online:</label>
<div class="form-check form-check-inline">
    <input type="radio" id="Yes" name="radio" onChange={handleInputChange} value={"yes"}  />
    <label for="Yes">Yes</label>
</div>
<div class="form-check form-check-inline">
    <input type="radio" id="No" name="radio" onChange={handleInputChange} value={"no"} />
    <label for="No">No</label>
</div>
</div>
<div class="mb-3">
<label for="productCategory" class="form-label">Available in Store:  </label>
<div class="form-check form-check-inline">
<select class="form-select" name="pOnline"onChange={handleInputChange} >
<option>...</option>
 <option>Groccery</option>
<option>Mobiles</option>
<option>Electronics</option>
<option>Dresses</option>
</select>
</div>
</div>
<div class="mb-3">
<input type='checkbox'  name="category" onChange={handleInputChange} checked={""} value={"Big Bazar"}/>
       <label>Big Bazar</label>
       <input type='checkbox'  name="category" onChange={handleInputChange} checked={""} value={"Dmart"}/>
       <label>Dmart</label>
       <input type='checkbox'  name="category" onChange={handleInputChange} checked={""} value={"Reliance"}/>
       <label>Reliance</label> 
       <label>
        <input type="checkbox"  name="category" onChange={handleInputChange} checked={""} value={"megamart"} />
        Mega Mart
      </label>
</div>
<button onClick={handleClick} type="submit" className="ms-5 p-1 btn btn-success">
            ADD PRODUCT
          </button>
          <table className="mt-3 table table-bordered table-hover ">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Cost</th>
            <th>Online</th>
            <th>Category</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.pid}</td>
              <td>{item.name}</td>
              <td>{item.cost}</td>
              <td>{item.ratio}</td>
              <td>{item.pOnline}</td>
              <td>{item.category.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
          
</div>

    
  )
}

export default Product
