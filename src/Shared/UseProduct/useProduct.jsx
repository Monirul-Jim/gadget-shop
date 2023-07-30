import { useEffect, useState } from "react";

const useProduct = () => {
    const [categories,setCategory]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/product-collections')
        .then(res=>res.json())
        .then(data=>{
            setCategory(data)
            setLoading(false)
        })
    },[])
    return [categories,loading]
};

export default useProduct;