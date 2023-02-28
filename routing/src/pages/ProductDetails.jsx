import { useParams } from "react-router-dom";
const ProductDetails = () => {
    const param = useParams();
    return <div>Product Details Id {param.productId}</div>;
};

export default ProductDetails;
