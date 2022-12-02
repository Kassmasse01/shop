import React, { Component } from 'react';
import product from "../../../images/wm.jpg";
import profile_pic from "../../../images/img2.jpg";
import { Trash } from 'react-bootstrap-icons';
 
export 
class CartModal extends Component {
    render() { 
        return (
            <div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content modal-search">
                    <div className="modal-header">
                        <p  className="btn-close text-white float-end" data-bs-dismiss="modal"
                            aria-label="Close"></p>
                    </div> 
                    <div className="modal-body">
                    {this.props.cart.map(data =>  
                    <div className="col-sm-3 break-inside-avoid" key={data.id} >
                        <div className='mx-1 post-handler' id="psthandler" style={{width: '20rem'}}>
                            <div className="card-body">
                                <div className="avater">
                                    <img src={profile_pic} alt="" className="img-avater"/>
                                    <span className="u_name" data-bs-toggle="modal" data-bs-target="#exampleModal" role="button"> {data.shop_name} <span className="icon-check text-info"></span>
                                    </span>
                                </div>
                            </div>
                            <img className="card-img-top" key={data.id} src={data.product_img} alt="Shop" onDoubleClick={this.productDetail} />
                            <div className="description">
                                <div className="text">{data.detail}</div>
                            </div>
                            <div className="card-body">
                                <div className="" role="group" aria-label="etbms">
                                    <div className="order-btn">
                                        <button type="button" onClick={() =>this.props.handleDelete(data.id)} className="btn btn-outline-danger w-100">Remove <Trash/> </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    )}
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
