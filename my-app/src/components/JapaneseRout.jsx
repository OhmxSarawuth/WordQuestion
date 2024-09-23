import React from "react";
import {Link} from 'react-router-dom';
function JapanesePage(){
    return(
        <ul>
            <li><Link to="japanese/hiragana">hiragana</Link></li>
            <li><Link to="japanese/katakana">katakana</Link></li>
        </ul>
    )
}

export default JapanesePage;