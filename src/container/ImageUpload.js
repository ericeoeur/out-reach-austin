import React, { Component } from 'react';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';

//import base, {firebaseApp} from "../base";

// firebase.initializeApp({
//     apiKey: "AIzaSyBks8H9WEfUUZgsf2HJ8jTRoCZ3R4vq6eo",
//     authDomain: "outreach-austin-db.firebaseapp.com",
//     databaseURL: "https://outreach-austin-db.firebaseio.com",
//     storageBucket: "outreach-austin-db.appspot.com"
// });

class ImageUpload extends Component {
    state = {
        isUploading: false,
        progress: 0,
        avatarURL: ''
    };
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

    handleProgress = (progress) => this.setState({ progress });

    handleUploadError = (error) => {
        this.setState({ isUploading: false });
        console.error(error);
    }

    handleUploadSuccess = (filename) => {
        firebase.storage().ref('images').child(filename).getDownloadURL().then((url) => {
            this.setState({ avatar: filename, progress: 100, isUploading: false, avatarURL: url });
            this.props.setAvatarUrl(url);
        });
    };
    
    render() {
        return (
            <div>
                <form>               
                    {this.state.isUploading &&
                        <p>Progress: {this.state.progress}</p>
                    }
                    {this.state.avatarURL &&
                        <img src={this.state.avatarURL} />
                    }
                    <FileUploader
                        accept="image/*"
                        name="avatar"
                        randomizeFilename
                        storageRef={firebase.storage().ref('images')}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                    />
                </form>
            </div>
        );
    }
}
export default ImageUpload;