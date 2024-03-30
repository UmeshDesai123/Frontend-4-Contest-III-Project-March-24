import './pcard.css';

const Product = ({post}) => {
  return(
    <div className="product-card">
      <img src={`https://picsum.photos/200?random=${post.id}`}></img>
      <h5>{post.title}</h5>
      <div className='body'>
        <p>{post.body}</p>
        <button className='material-icons'>chevron_right</button>
      </div>
    </div>
  )
}

export default Product;