import React, { Component } from 'react';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';

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
                
                    {this.state.isUploading &&
                        <p>Progress: {this.state.progress}</p>
                    }
                    {this.state.avatarURL &&
                        <img src={this.state.avatarURL} height = '20%'width = '20%' alt={this.state.id} />
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
                
            </div>
        );
    }
}
export default ImageUpload;