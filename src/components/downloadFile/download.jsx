import React from 'react'

const download = () => {

    const downloadFile = () =>{
        fetch('Sample.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href =fileURL;
                alink.download = 'Sample.pdf';
                alink.click();
            })
        })
    }


    return (
        <div className = "downloadBtn">
            <button onClick={downloadFile}>
                Download Resume
            </button>
        </div>
    )
}
export default download