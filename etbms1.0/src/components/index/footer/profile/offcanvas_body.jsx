import React, { Component } from 'react';
import product from "../../../../images/wm.jpg";
import axios from 'axios';
import { EditProfile } from './edit_profile';
import { AddPro } from './add_product';

export class OffcanvasBody extends React.Component {
    
    state =  {
        data: [],     
        pstclass: 0,
        didulogin: 'false',
        product: [],
        classes: 'post-handler',
        detailproduct: '',
        uid: '',
        editclassName1: 'disabled',
        editUname: '',
        editBio: '',
        editLocation: '',
    };

    productDetail=id=>{ 
        this.state.pstclass === 0 ? this.setState({ pstclass: 1}) : this.setState({ pstclass: 0});
        this.state.pstclass === 1 ? this.setState({classes: "post-handler post-handler-desc"})  : this.setState({classes:  "post-handler"});
        var url = 'http://192.168.43.30/shop/detailproduct.php';
        axios.post(url, {
            action: id
        }).then((response) => {
            this.setState({detailproduct: response.data});
        }) 
    }

    componentDidMount(){     
        setInterval(() => {
            if(this.props.Ulogin === 'true') {
                var url = 'http://192.168.43.30/shop/getuser.php';
                axios.post(url, {
                  action: this.props.Uid
                }).then((response) => {
                  this.setState({data: response.data});
                 })

                 var url2 = 'http://192.168.43.30/shop/getuserproduct.php';
                 axios.post(url2, {
                   action: this.props.Uid
                 }).then((response) => {
                   this.setState({product: response.data});
                  })
            }

        }, 1000);
    };
    
    EditProdile = id =>{
       this.setState({uid: id});
    }
    AddProdile = id =>{
        this.setState({uid: id});
    }
    editUdata = e =>{
        e.target.value.length > 2 ? this.setState({editclassName1: ''}) : this.setState({editclassName1: 'disbaled'})
        this.setState({editUname: e.target.value});
    }
    updateEuname = () =>{
        var url2 = 'http://192.168.43.30/shop/Edituser.php';
                 axios.post(url2, {
                   action: this.state.editUname + ":" +this.state.uid 
                 }).then((response) => {
                   console.log(response.data);
                  })
    }
    editBio= bio =>{
        this.setState({editBio: bio.target.value})
    }
    editupdateBio = () =>{
        var url2 = 'http://192.168.43.30/shop/EditBio.php';
                 axios.post(url2, {
                   action: this.state.editBio + ":" +this.state.uid 
                 }).then((response) => {
                   console.log(response.data);
                  })
    }
    editLocation = location =>{
        this.setState({editLocation: location.target.value})
    }
    editupdatelocation  = () =>{
        var url2 = 'http://192.168.43.30/shop/EditLocation.php';
        axios.post(url2, {
          action: this.state.editLocation + ":" + this.state.uid 
        }).then((response) => {
          console.log(response.data);
         })
    }
    
   render(){
     
    return(
        <React.Fragment>
            {this.state.data.map(data => 
             <div key={data.id} className="user-holder">
                <div className="main-user">
                    <div className="user-profile-handler">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-5">
                                    <div className="image-circle-bg" style={{backgroundImage: `url(${product})`}   }>
                                    </div>
                                </div>
                                <div className="col-sm-7">
                                    <h5 className="text-white main-name">{data.shop_name}</h5>
                                    <p className="text-white location-user">
                                        
                                       {data.shop_location}
                                    </p>
                                    <p className="text-white bio-user">{data.shop_bio}</p>
                                    <div className="userpage-btn">
                                        <p type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>this.EditProdile(data.id)} className="btn btn-outline-primary ls-1-5 p-1 w-40 mx-2">Edit
                                            Profile</p>  
                                        <p type="button" data-bs-toggle="modal" data-bs-target="#addpro" onClick={()=>this.AddProdile(data.id)} className="btn btn-outline-primary ls-1-5 p-1 w-40 mx-2">
                                            Add</p>                                         
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>  
             )}
            <div>
                {this.state.product.map(data => 
                     <ForProduct  key={data.id} detail={this.state.detailproduct}  data={data} index={data.id} classes={this.state.classes} onDoubleClick={this.productDetail}/>
                 )}
            </div>
            <div>
               <EditProfile 
                    updateUname={this.updateEuname} disabled1={this.state.editclassName1} udata={this.editUdata}
                    ubio={this.editBio} updateBio={this.editupdateBio}
                    ulocation={this.editLocation} updatelocation= {this.editupdatelocation}
                    />
               <AddPro Uid={this.state.uid}/>
            </div>
          
            
            <div className="py-4"></div>    
        </React.Fragment>
    )
   }

}

export 
class ForProduct extends Component {
    
    state =  {
        pstclass: 0,
        detailproduct: [],
        className: "none",
    };

    productDetail = id =>{    
        var url = 'http://192.168.43.30/shop/detailproduct.php';
        axios.post(url, {
            action: id
        }).then((response) => {
            this.setState({detailproduct: response.data});
            console.log(response.data);
        }) 
        this.state.className === 'none' ? this.setState({className: 'inline'}) : this.setState({className: 'none'}) 
    }
    productDelete = id =>{
        var url = 'http://192.168.43.30/shop/deleteproduct.php';
        axios.post(url, {
            action: id
        }).then((response) => {
            this.setState({detailproduct: response.data});
            console.log(response.data);
        })
    }
    
    render() { 
        return (
            <div key={this.props.data.id} className="user-products" id="userproduct">
                <div className="grid-container">
                    <div className="col-sm-6 break-inside-avoid">
                        <div className="post-handler" id="psthandler">
                          <img className="card-img-top" src={this.props.data.product_img} onDoubleClick={() => this.productDetail(this.props.data.id)} alt="product"/>
                            <div style={{ display: this.state.className, marginTop: "-50px", background: "rgba(255,255,255,0.2)", boxShadow: "0 4px 30px rgba(0,0,0,0.2)" }}>
                                {this.state.detailproduct.map(data => 
                                   <div key={data.id}>
                                        <p className='text-dark py-1' onClick={() => this.productDelete(this.props.data.id)}> <span style={{marginLeft: "2px" }} > <b>{data.product_name}</b></span>  <span className='float-end btn btn-outline-danger'>Delete</span>  </p>
                                   </div>                                   
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}