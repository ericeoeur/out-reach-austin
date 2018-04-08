import React, {Component} from 'react';

class ImageUpload extends Component {
    state = {
        selectedFile: null
    }
    fileSelectedHandler = event => {
        console.log(event.target.files[0]);
    }

    fileUploadHandler =()=> {
        this.setState
    }

render() {
    return(
        
        <div className = "App">
        <input type= "file" onChange={this.fileSelectedHandler}/>
        <button onClick={this.fileUploadHandler}>Upload</button>
        </div>
    );
}


}


export default ImageUpload;