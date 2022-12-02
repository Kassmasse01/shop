import axios from "axios";
import React from "react";
import {Cart, House, Person, Search} from 'react-bootstrap-icons';
import { ProfileModal } from "./footer/profile";
import { ProfileOffCanvas } from "./footer/profile_offcanvas";
import { SearchModal } from "./footer/searchModal";

export class Footer extends React.Component {
    state = {
        homeClass: "active",
        searchClass: "",
        cartClass: "",
        profileClass: "",
        active: "", 
        searchDetailclass: "search-output so-hidden",
        id: '',
        searchdata: '',
        ulogin: 'false',
    }

    home=()=>{
        this.setState({homeClass: "active"});  
        this.setState({searchClass: ""});
        this.setState({cartClass: ""});
        this.setState({profileClass: ""});
    };
    search=()=>{
        this.setState({homeClass: ""});  
        this.setState({searchClass: "active"});
        this.setState({cartClass: ""});
        this.setState({profileClass: ""});
        this.setState({active: ""});
    };
    cart=()=>{
        this.setState({homeClass: ""});  
        this.setState({searchClass: ""});
        this.setState({cartClass: "active"});
        this.setState({profileClass: ""});
    };
    profile=()=>{
        this.setState({homeClass: ""});  
        this.setState({searchClass: ""});
        this.setState({cartClass: ""});
        this.setState({profileClass: "active"});
        console.log(this.state.id);
    };
    SearchInputHandler=searchinput=>{
        
      axios.post('http://localhost/shop/sproduct.php', {
        action: searchinput.target.value
      }).then((response) => {
        console.log(response.data);
        this.setState({searchdata: response.data});
       })
        searchinput.target.value.length >= 1 ? this.setState({searchDetailclass: "search-output"}) : this.setState({searchDetailclass: "search-output so-hidden"});
    };
    onCloseHandler=active=>{
       if(active === "off"){
         this.home()
       }else{
         this.search()
       }    
    };
    offcanvas = ()=>{
      console.log("Die");
    };
    profileBtnHandler=()=>{
        console.log("I am cicked");
    }
    Uid = id =>{
        console.log(id);
        this.setState({id: id});
        this.setState({ulogin: 'true'});
    }
    

    render() {
        return (
        <div>
            <SearchModal  onClose={this.onCloseHandler}/>
            <ProfileModal pid={this.state.id} Udata={this.Uid} onClose={this.onCloseHandler}/>
            <ProfileOffCanvas Ulogin={this.state.ulogin} Udata={this.state.id}/>
            <div className="nav-option d-flex justify-content-center">
                <ul className="navigation col-md-6">
                    <li className={this.state.homeClass} id="home_id">
                        <a onClick={this.home}>
                            <span className="icon">
                                <House color="white" size={30} className="z-index-100"/>
                            </span>
                            <span className="text">HOME</span>
                        </a>
                    </li>
                    <li className={this.state.searchClass} id="search_id">
                        <a onClick={this.search} data-bs-toggle="modal" data-bs-target="#searchModal" role="button">
                            <span className="icon">
                                <Search color="white" size={25} className="z-index-100"/>
                            </span>
                            <span className="text">Explore</span>
                        </a>
                    </li>
                    <li className={this.state.cartClass} id="cart_id">
                        <a onClick={this.cart} data-bs-toggle="modal" data-bs-target="#cartModal" role="button">
                            <span className="icon">
                                <Cart color="white" size={25} className="z-index-100"/>
                            </span>
                            <span className="text">Cart</span>
                        </a>
                    </li>
                    <li className={this.state.profileClass} id="profile_id">
                        <a onClick={this.profile} data-bs-toggle="modal" data-bs-target="#profileModal" role="button">
                            <span className="icon">
                                <Person color="white" size={30} className="z-index-100"/>
                            </span>
                            <span className="text">Profile</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}