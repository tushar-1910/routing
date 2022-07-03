import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Table = styled.table`
margin: auto;
margin-top: 20px;
border-collapse: collapse;
& td, & th{
    border: .1px solid #fe8019;
    letter-spacing: .5px;
    padding: 10px;
    text-align: left;
}
& td{
    font-weight:600;
}
`

const Products = () => {
    const [products, setProducts] = React.useState([]);
    const [isloading, setLoading] = React.useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            let response = await fetch(`http://localhost:3000/products`);
            let result = await response.json();
            // setLoading(false);
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        getData().then((res) => {
            setProducts(res);
            setLoading(false);
        });
    },[]);

    return (
        isloading ? (<h1>Loading...</h1>) : (
            <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>More Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    products?.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>₹ {item.price}</td>
                                <td><Link to={`/products/${item.id}`}>MORE</Link></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
        )
    )
}

export default Products