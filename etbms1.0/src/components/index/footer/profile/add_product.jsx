import axios from 'axios';
import React, { Component } from 'react';
import { Basket, Send, XCircleFill } from 'react-bootstrap-icons';

export 
class AddPro extends Component {
    state = {  
        file: '',
        imgData: [],
        proname: '',
    } 
    
    handleimgChange = e =>{
        var imgurl = (URL.createObjectURL(e.target.files[0]));
        this.setState({file: imgurl});
        this.setState({imgData: e.target.files[0]});
        
    }
    handleProChange = proname => {
        this.setState({proname: proname.target.value});
    }
    addProduct = () => {
        
        const formData = new FormData();
        formData.append('fileupload',this.state.imgData)

        var url = 'http://192.168.43.30/shop/addproductimg.php';
        axios.post(url,formData,{ 
           headers: {
            'content-type': 'multipart/form-data'
           }
        }).then((response) => {
            console.log(response.data);
           if(response.data.status === "Success"){
            var url2 = 'http://192.168.43.30/shop/addproducttodb.php';
            axios.post(url2,{
                action: this.state.proname + " : " + response.data.imgname + " ? " + this.props.Uid  
               }).then((res) => {
                 console.log(res.data);
             })
           }
         })
    }

    render() { 
        return (
        <div className="modal fade" id="addpro" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="addpro" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">ADD PRODUCT</h1>
                        </div>
                    <div className="modal-body">
                          
                        <div className='py-2'>
                        <div className="form-floating">
                            <div className="input-group ">
                                <span className="input-group-text login" id="basic-addon1">
                                    <Basket/>
                                </span>
                                <input type="text" onChange={this.handleProChange} className="form-control login" placeholder="Product Name" aria-label="name" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="form-floating">
                            <div className="input-group">
                                <span className="input-group-password login" id="basic-addon2">
                                   <img src={this.state.file} style={{width: '5rem'}} />
                                </span>
                                <input type="file" onChange={this.handleimgChange} className="form-control login"/>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-dark ls-1-5 p-1 w-40 " data-bs-dismiss="modal"> Close  <span className='mx-2'> <XCircleFill style={{fontSize: "20px"}}/> </span> </button>
                        <button type="button" onClick={this.addProduct} className="btn btn-outline-info ls-1-5 p-1 w-40 ">Update  <span className='mx-2'> <Send style={{fontSize: "20px"}}/> </span> </button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}