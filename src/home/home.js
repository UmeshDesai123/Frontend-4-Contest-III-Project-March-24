import Product from "../product-card/pcard";
import './home.css';

const Home = ({postList}) => {
  // console.log(postList);
  return(
    <div className="home">
      <h2>Social Media for Travellers</h2>
      <div className='search'>
        <span className='material-icons'>search</span>
        <input type="text" placeholder='Search here...'></input>
      </div>
      <div className='products-container'>
        {
          postList.map((post) => {
            return <Product key={post.id} post={post}></Product>
          })
        }
      </div>
    </div>
  )
}

export default Home;