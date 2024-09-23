import React from "react";
import {Link} from'react-router-dom';
function EnglishPage(){
    return (
        <uL>
            <li><Link to="/english/word">word</Link></li>
            <li><Link to="/english/toeic">toeic</Link></li>
        </uL>
    )
}

export default EnglishPage;