
import './navBar.css';

const NavBar = () => {
  
  return(
    <div className="navbar">
      <h3>TravelMedia.in</h3>
      <div className='icons'>
        <span className='material-icons active'>home</span>
        <span className='material-icons'>notifications</span>
        <span className='material-icons'>bookmark</span>
        <span className='material-icons'>person</span>
      </div>
      <div style={{width: '100px'}}></div>
    </div>
  )
}

export default NavBar;