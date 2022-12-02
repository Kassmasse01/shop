import React from "react";
import { OffcanvasBody } from "./profile/offcanvas_body";

export const ProfileOffCanvas = props => {
     
   

    return (

        
    <div className="z-index-100 w-m60 bg-dark offcanvas offcanvas-start" tabIndex="-1" id="profilecanvas"
        aria-labelledby="profilecanvasLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title text-white" id="profilecanvaseLabel">PROFILE</h5>
            <p className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></p>
        </div>
        <div className="offcanvas-body">
           <OffcanvasBody Ulogin={props.Ulogin} Uid={props.Udata}/>
        </div>
    </div>
    


    )
}