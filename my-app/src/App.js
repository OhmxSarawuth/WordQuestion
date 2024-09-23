
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'

import TestWords from './components/TestWord';

// english components
import EnglishPage from './components/EnglishRout';
import EnglishWordQuestion from './components/EnglishWordQuestion';
import EnglishToeic from './components/EnglishToeic';
// japanese components
import JapanesePage from './components/JapaneseRout';
import JapaneseHiragana from './components/JapaneseHiragana';
import JapaneseKatakana from './components/JapaneseKatakana';






// function App() {

//   const [showDropdownHome, setShowDropdownHome] = useState(false);
//   const handleMouseEnterHome = () => {
//     setShowDropdownHome(true)
//   }
//   const handleMouseLeaveHome = () => {
//     setShowDropdownHome(false);
//   }
//   const [showDropdownEng, setShowDropdownEng] = useState(false)
//   const handleMouseEnterEng = () => {
//     setShowDropdownEng(true)
//   }
//   const handleMouseLeaveEng = () => {
//     setShowDropdownEng(false);
//   }
//   const [showDripdownJpn, setShowDropdownJpn] = useState(false)
//   const handleMouseEnterJpn = () => {
//     setShowDropdownJpn(true)
//   }
//   const handleMouseLeaveJpn = () => {
//     setShowDropdownJpn(false);
//   }

//   return (
//     <div>
//       <Router>
//         <nav>
//           <div className="wrap-navbar" onMouseEnter={handleMouseEnterHome} onMouseLeave={handleMouseLeaveHome}>
//             <Link to="/">Home</Link>{
//               showDropdownHome && (
//                 <ul className="dropdown">
//                   <li><Link to="/">firstHome</Link></li>
//                   <li><Link to="/">secoundHome</Link></li>
//                 </ul>
//               )
//             }
//           </div>
//           <div className="wrap-navbar" onMouseEnter={handleMouseEnterEng} onMouseLeave={handleMouseLeaveEng}>
//             <Link to="/english">English</Link>{
//               showDropdownEng && (
//                 <ul className="dropdown">
//                   <li><Link to="/english/word">english word</Link></li>
//                   <li><Link to="/english/toeic">english toeic</Link></li>
//                 </ul>
//               )
//             }
//           </div>
//           <div className="wrap-navbar" onMouseEnter={handleMouseEnterJpn} onMouseLeave={handleMouseLeaveJpn}>
//             <Link to="/japanese">Japanese</Link>{
//               showDripdownJpn && (
//                 <ul className="dropdown">
//                   <li><Link to="/japanese/hiragana">hiragana</Link></li>
//                   <li><Link to="/japanese/katakana">katakana</Link></li>
//                 </ul>
//               )
//             }
//           </div>

//         </nav>
//         <Routes>
//           <Route path="/" element={<TestWords />} />
//           <Route path="/english" element={<EnglishPage />} />
//           <Route path="/english/word" element={<EnglishWordQuestion />} />
//           <Route path="/english/toeic" element={<EnglishToeic />} />
//           <Route path="/japanese" element={<JapanesePage />} />
//           <Route path="/japanese/hiragana" element={<JapaneseHiragana />} />
//           <Route path="/japanese/katakana" element={<JapaneseKatakana />} />
//         </Routes>
//       </Router>
//     </div>

//   );
// }

function App() {
  const [dropdown, setDropdown] = useState('');

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown('');
  };

  return (
    <div>
      <Router>
        <nav>
          <div
            className="wrap-navbar"
            onMouseEnter={() => handleMouseEnter('home')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/">Home</Link>
            {dropdown === 'home' && (
              <ul className="dropdown">
                <li>
                  <Link to="/">firstHome</Link>
                </li>
                <li>
                  <Link to="/">secondHome</Link>
                </li>
              </ul>
            )}
          </div>

          <div
            className="wrap-navbar"
            onMouseEnter={() => handleMouseEnter('english')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/english">English</Link>
            {dropdown === 'english' && (
              <ul className="dropdown">
                <li>
                  <Link to="/english/word">english word</Link>
                </li>
                <li>
                  <Link to="/english/toeic">english toeic</Link>
                </li>
              </ul>
            )}
          </div>

          <div
            className="wrap-navbar"
            onMouseEnter={() => handleMouseEnter('japanese')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/japanese">Japanese</Link>
            {dropdown === 'japanese' && (
              <ul className="dropdown">
                <li>
                  <Link to="/japanese/hiragana">hiragana</Link>
                </li>
                <li>
                  <Link to="/japanese/katakana">katakana</Link>
                </li>
              </ul>
            )}
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<TestWords />} />
          <Route path="/english" element={<EnglishPage />} />
          <Route path="/english/word" element={<EnglishWordQuestion />} />
          <Route path="/english/toeic" element={<EnglishToeic />} />
          <Route path="/japanese" element={<JapanesePage />} />
          <Route path="/japanese/hiragana" element={<JapaneseHiragana />} />
          <Route path="/japanese/katakana" element={<JapaneseKatakana />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
