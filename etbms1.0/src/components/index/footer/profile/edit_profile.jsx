import React, { Component } from 'react';
import { Pencil, Person, Pin, XCircleFill } from 'react-bootstrap-icons';

export 
class EditProfile extends Component {
    render() { 
        return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">EDIT PROFILE</h1>
                        </div>
                    <div className="modal-body">
                          
                        <div className='py-2'>
                        <div className="form-floating">
                            <div className="input-group ">
                                <span className="input-group-text login" id="basic-addon1">
                                    <Person style={{fontSize: "20px"}} />
                                </span>
                                <input type="text" onChange={this.props.udata} className="form-control login" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                <span className="input-group-text login" id="basic-addon1">
                                    <button type="button" onClick={this.props.updateUname} disabled={this.props.disabled1} className="btn btn-outline-info ls-1-5 p-1">Update </button>
                                </span>
                            </div>
                        </div>
                        <div className="form-floating">
                            <div className="input-group">
                                <span className="input-group-password login" id="basic-addon2">
                                    <Pencil style={{fontSize: "20px"}}/>
                                </span>
                                <textarea type="text" onChange={this.props.ubio} className="form-control login"  placeholder="Bio" aria-label="Password" aria-describedby="basic-addon2" />
                                <span className="input-group-text login" id="basic-addon1">
                                    <button type="button" onClick={this.props.updateBio} className="btn btn-outline-info ls-1-5 p-1">Update </button>
                                </span>
                            </div>
                        </div>
                        <div className="form-floating">
                            <div className="input-group">
                                <span className="input-group-password login" id="basic-addon2">
                                  <Pin style={{fontSize: "20px"}}/>
                                </span>
                                <input type="text" onChange={this.props.ulocation} className="form-control login"  placeholder="Location" aria-label="location" aria-describedby="basic-addon2" />
                                <span className="input-group-text login" id="basic-addon1">
                                    <button type="button" onClick={this.props.updatelocation} className="btn btn-outline-info ls-1-5 p-1">Update </button>
                                </span>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-dark ls-1-5 p-1 w-40 " data-bs-dismiss="modal"> Close  <span className='mx-2'> <XCircleFill style={{fontSize: "20px"}}/> </span> </button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}