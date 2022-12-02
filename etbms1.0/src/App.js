import React from "react";
import { Footer } from "./components/index/footer";
import { Header } from "./components/index/header";
import { Posts } from "./components/index/posts";
import './css/dashboard.css';
import './css/index.css';
import './css/m.shop.css';
class Check extends React.Component {
    render() {
        return (
           <div>
              <Header/> 
              <Posts/>
              <Footer/>
           </div>
        );
    }
}

export default Check;