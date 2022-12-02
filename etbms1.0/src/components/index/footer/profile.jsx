import React, { Component } from 'react';
import Signin from "./gate/signin";

export class ProfileModal extends Component {
    
    state ={
        className1: 'search-bar-handler hidden',
        className2: 'form-signin hidden',
    }

    componentDidMount = () => {
      setInterval(() => {
         if (this.props.pid.length > 2) {
             this.setState({className1: 'search-bar-handler'})
             this.setState({className2: 'form-signin hidden'})
         }else{
            this.setState({className1: 'search-bar-handler hidden'})
            this.setState({className2: 'form-signin'})
         }
      }, 1000);
    }

    render() { 
        return (
            <React.Fragment>    
    <div  onClick={()=>this.props.onClose("off")} className="modal fade" id="profileModal" tabIndex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content modal-search">
                <div className="modal-header">
                    <button type="button" className="btn-close float-end" data-bs-dismiss="modal"
                        onClick={()=>this.props.onClose("off")} aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className={this.state.className1}>
                        <div className="col-md-12">
                            <button type="button" className="btn btn-outline-primary flt-start w-100"
                                data-bs-toggle="offcanvas" data-bs-target="#profilecanvas"
                                aria-controls="profilecanvas"> <span>Profile </span>
                                <span className="float-end">
                                    
                                </span>
                            </button>
                            <button type="button" className="btn btn-outline-primary flt-start w-100 my-3">
                                <span>Security</span>
                                <span className="float-end">
                                    
                                </span>
                            </button>
                            <button type="button" className="btn btn-outline-danger  flt-start my-3"> <span>Signout</span>
                            </button>
                        </div>
                    </div>
                    <main className={this.state.className2} id="main">
                        <button className="btn btn-sm btn-submit-color mb-4" id="btnpage" type="button">SIGN UP</button>
                        <form className="login-form" id="loginForm">
                             <Signin Uid={this.props.Udata}/> 
                        </form>

                        <form className="Signup-form hidden" id="SignUpForm">
                              
                        </form>
                    </main>
                </div>
            </div>
        </div>
    </div>
    
     
    </React.Fragment>
        );
    }
}
 