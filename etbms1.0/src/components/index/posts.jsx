import React from "react";
import { ImagePost } from "./posts/image_post";

export class Posts extends React.Component {
    render() {
        return (
            <div className="main">
               <div className="grid-container">
                 <ImagePost/>
                </div>
                <div className="py-4"></div>
                <div className="py-4"></div>
            </div>
        );
    }
}