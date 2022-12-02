import axios from 'axios';
import React, { Component } from 'react';
import product from "../../../images/wm.jpg";
import profile_pic from "../../../images/img2.jpg";

export
class SearchModal extends Component {
    
    state = {
        searchData: [],
        searchDetailclass: '',
        className: 'search-bar-handler',
        className1: 'hidden',
        searchedData: [],
        clikedid: '',
    };

    SearchInputHandler=searchinput=>{
        
        var url = 'http://192.168.43.30/shop/sproduct.php';
        axios.post(url, {
          action: searchinput.target.value
        }).then((response) => {
          this.setState({searchData: response.data});
         })
          searchinput.target.value.length >= 1 ? this.setState({searchDetailclass: "search-output"}) : this.setState({searchDetailclass: "search-output so-hidden"});
      };


      searchbtnHandler = id =>{
         this.setState({className: 'hidden'})
         this.setState({className1: ''})
         this.setState({clikedid: id})

         var url = 'http://192.168.43.30/shop/searched.php';
         axios.post(url, {
           action: id
         }).then((response) => {
           this.setState({searchedData: response.data});
          })
      };
      backToSearch = () =>{
        this.setState({className: 'search-bar-handler'})
        this.setState({className1: 'hidden'})
      };
      handleOrder = () => this.props.Clicked(this.state.clikedid)

    render() { 
        return (
            <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content modal-search">
                    <div className="modal-header">
                        <p className="btn-close text-white float-end" data-bs-dismiss="modal"
                            aria-label="Close"></p>
                    </div> 
                    <div className="modal-body">
                        <div className={this.state.className}>
                            <div className="col-md-12">
                                <div className="input-group has-validation">
                                    <span className="input-group-text hashtag" id="">#</span>
                                    <input type="text" className="form-control" id="usersearch"
                                        aria-describedby="inputGroupPrepend3" onChange={this.SearchInputHandler} required/>
                                </div>
                                <div className={this.state.searchDetailclass} id="searchOutput">
                                    <ul className="list-group list-group-flush">
                                      {this.state.searchData.map(data => 
                                         <SelctedProduct data={data} onClick={this.searchbtnHandler} key={data.id} index={data.id}/>
                                      )}  
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={this.state.className1}>
                        {this.state.searchedData.map(data =>  
                            <div className="col-sm-3 break-inside-avoid" key={data.id} >
                                <div className='mx-1 post-handler' id="psthandler" style={{width: '22.5rem'}}>
                                    <img className="card-img-top" key={data.id} src={data.product_img} alt="shop" onDoubleClick={this.productDetail} />
                                    <div className="description">
                                        <div className="text">{data.detail}</div>
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
                        )}
                            <button className="w-100 btn  btn-submit-color mb-4" id="sLogin" type="button" onClick={this.backToSearch} > BACK </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export
class SelctedProduct extends Component {
    searchbtnHandler = () => this.props.onClick(this.props.index);

    render() { 
        return (
            <li key={this.props.data.id} onClick={this.searchbtnHandler} className="search-output-text list-group-item"> {this.props.data.product_name} </li> 
        );
    }
}
