import React from "react";

const CORS = () => {

    return (
        <div className="cors-error">
            <h1>To Run This Project</h1>
            <p>To make this project work, you need to enable the CORS plugin in your browser. Follow these steps:</p>
            <p>1. Install the CORS browser extension: </p>
            <ul>
                <li>Google Chrome <a href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en" target="_blank">Install Allow CORS: Access-Control-Allow-Origin</a></li>
                <li>Mozilla Firefox <a href="https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/" target="_blank">Install CORS Everywhere</a></li>
            </ul>
            <p>2. Enable the CORS extension:</p>
            <ul>
                <li>After installing, click the extension icon in your browser's toolbar and enable it.</li>
            </ul>
            <p>3. Reload the project</p>
        </div> 
    )
}

export default CORS;