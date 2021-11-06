import React, {Component} from 'react';
// import './../../newProject';

class Download extends Component {

    constructor(props) {
        super(props);
    }

    downloadEmployeeData = () => {
        fetch('http://localhost:3000/newProject')
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = 'newProject';
                    a.click();
                });
                //window.location.href = response.url;
        });
    }

    render() {
        return (
            <div id="container">
                <button onClick={this.downloadEmployeeData}>Download</button>
            </div>
        )
    }
}

export default Download;