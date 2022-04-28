const Product = function (props) {
  return (
    <div>
      <p>name:{props.product.name}</p>
      <p>name:{props.product.price}</p>
      <p>name:{props.product.description}</p>
    </div>
  );
};

export default Product;
