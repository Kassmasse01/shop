import React from "react";
import product from "../../../images/wm.jpg";
import profile_pic from "../../../images/img2.jpg";
import axios from "axios";
import { CartModal } from "../footer/cartModal";
import { SearchModal } from "../footer/searchModal";

export class ImagePost  extends React.Component {
     
    state =  {
        data: [],
        activeIndex: null, 
        dani: 'gigi',
        orderedid: '',
        cart:[],
        imgUrl: 'http://localhost/shop/',
    };

    productDetail= index =>{
        console.log(index);
    }
    handleOrder = id =>{
        var url = 'http://192.168.43.30/shop/addtocart.php';
        axios.post(url, {
          action: id
        }).then((response) => {
            this.setState({
                cart: this.state.cart.concat(response.data)
            });
         })
    }
    handleDelete = id =>{
        let filterArray = this.state.cart.filter(item => item.id !== id)
        this.setState({cart: filterArray});
    }
    componentDidMount(){
        const url = 'http://192.168.43.30/shop/getproduct.php';
        axios.get(url).then(response => response.data)
         .then((data) => {
            this.setState({data: data})         
          })
    }

    render() {
        return (
        <React.Fragment>  
        <CartModal handleDelete={this.handleDelete} cart={this.state.cart}/>   
        <SearchModal Clicked={this.handleOrder}/>
        {this.state.data.map(data => 
           <Productdetail imgUrl={this.state.imgUrl} key={data.id} data={data} index={data.id} handleOrder={this.handleOrder} isActive={this.state.activeIndex===0} onDoubleClick={this.productDetail} />
        )}
        </React.Fragment>
        );
    }
}
class Productdetail extends React.Component {
    productDetail = () => this.props.onDoubleClick(this.props.index);
    handleOrder = () => this.props.handleOrder(this.props.index);
    render() { 
        return (
        
        <div className="col-sm-3 break-inside-avoid" key={this.props.data.id} >
            <div className={this.props.isActive ? 'post-handler post-handler-desc': 'post-handler'} id="psthandler">
                <div className="card-body">
                    <div className="avater">
                        <img src={profile_pic} alt="" className="img-avater"/>
                        <span className="u_name" data-bs-toggle="modal" data-bs-target="#exampleModal" role="button"> {this.props.data.shop_name} <span className="icon-check text-info"></span>
                        </span>
                    </div>
                </div>
                <img className="card-img-top" key={this.props.data.id} src={this.props.data.product_img} alt="product"  onDoubleClick={this.productDetail} />
                <div className="description">
                    <div className="text">{this.props.data.detail}</div>
                </div>
                <div className="card-body">
                    <div className="" role="group" aria-label="etbms">
                        <div className="order-btn">
                            <button type="button" onClick={this.handleOrder} className="btn btn-outline-primary w-100">O R D E R  </button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        );
    }
}
 
