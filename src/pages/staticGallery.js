import Gallery from "react-photo-gallery";
import {photos} from "../gallery";
import React from "react";
import '../css/staticGallery.css'

function staticGallery(){
    return(
        <div>
            <h1>Gallery</h1>
            <div className="static-Gallery">
                <Gallery photos={photos}/>
            </div>
        </div>

    );
}
export default staticGallery;
