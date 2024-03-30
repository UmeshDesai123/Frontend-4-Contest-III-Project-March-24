import NavBar from "./navBar";
import './App.css';
import { useEffect, useState } from "react";
import Home from "./home/home";
import ProductPage from "./product-page";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import axios from 'axios';

const App = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const resp = await axios({
          url: 'https://jsonplaceholder.typicode.com/posts',
          method: 'GET',
        });
        setPostList(resp.data);
      } catch (error) {
        console.log(error);
      }
    })()
  }, [postList])

  return(
    <div className="container">
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home postList={postList}></Home>}/>
          <Route path="/item/:id" Component={ProductPage}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;