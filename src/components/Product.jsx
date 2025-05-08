function Product({ title, price }) {
  return (
    <li>
      <div>{title}</div>
      <div>${price}</div>
    </li>
  );
}
export default Product;
