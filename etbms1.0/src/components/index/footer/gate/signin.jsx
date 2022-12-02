import React, { Component } from 'react';
import { Lock, Person } from 'react-bootstrap-icons';
import axios from 'axios';

class Signin  extends Component { 
    
    state = {
        uname: '',
        pwd: '', 
        output: '',
        u_data: '',
        pid: '',
    }

    loginudata = data =>{
        this.setState({uname: data.target.value});
    };
    loginpdata = data =>{
        this.setState({pwd: data.target.value});
    };
    loginhandler = () =>{
      var state = this.state; 
      axios.post('http://192.168.43.30/shop/signin.php', {
        action: state.uname + ":" + state.pwd
      }).then((response) => {
        var result = response.data.split('{}')[0];
        var file = result.split('+');
        var main = file[0];
        var id = file[1];
        if (main === "Accepted") {
            console.log("Accepted");
            this.setState({pid: id});
            this.setState({output: 'Accepted'});
        } else if (result === "Error") {
            console.log('Error');
            this.setState({output: 'Error'});
        }
        setTimeout(() => {
            this.props.Uid(this.state.pid);
        }, 1000);
    })
     
    };

    render() { 
        return (
           <React.Fragment>
            <div>
              
              <h1 className="h3 my-2 mb-3 fw-normal text-center">LOGIN <a className="error" id="output">| <button type="button" className="btn btn-info" id="result">  {this.state.output} </button></a> </h1>
               <div className="form-floating">
                     <div className="input-group ">
                        <span className="input-group-text login" id="basic-addon1">
                          <Person  style={{fontSize: '25px'}}/>
                        </span>
                        <input type="text" onChange={this.loginudata} className="form-control login" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
               </div>
                <div className="form-floating">
                    <div className="input-group mb-3">
                        <span className="input-group-password login" id="basic-addon2">
                           <Lock style={{fontSize: '20px'}}/>      
                        </span>
                        <input type="password" onChange={this.loginpdata} className="form-control login"  placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" />
                    </div>
                </div>
                
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn  btn-submit-color mb-4" id="sLogin" type="button" onClick={this.loginhandler} >Sign in </button>
                <button className="w-100 btn btn-sm btn-forget-color" type="button" data-bs-toggle="modal"
                    data-bs-target="#staticBackdropLive">Forget Password</button>
               
            </div>


           </React.Fragment>
        );
    }
}
 
export default Signin ;