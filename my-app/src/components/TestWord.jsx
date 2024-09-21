import React, { useState, useEffect } from "react";



function TestWords() {
  const [words, setWords] = useState({});

  useEffect(() => {
    // Step 1: ทำการ fetch ไฟล์
    fetch('/words/words_eng.json')
      .then((response) => {
        // Step 2: ตรวจสอบว่าการตอบกลับสำเร็จหรือไม่
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();  // แปลงข้อมูลเป็น JSON
      })
      .then((data) => {
        // Step 3: ถ้า fetch สำเร็จ ให้อัพเดตข้อมูล words
        setWords(data);
      })
      .catch((error) => {
        // Step 4: จัดการ error ที่เกิดขึ้นในแต่ละขั้นตอน
        console.error('Error during fetch:', error);
      });
  }, []);  // เพิ่ม dependency array เพื่อให้ useEffect ทำงานครั้งเดียว
  


  return (
    <div>
      <h1>Words List</h1>
      <h2>have words {Object.entries(words).length}</h2> {/* แสดงจำนวนคำที่โหลดได้ */}
      {Object.keys(words).length > 0 ? (
        <ul>
          {Object.entries(words).slice(0, 4).map(([word, details], index) => (  // แก้ slice ให้ถูกต้อง
            <li key={index}>
              <strong>{word}</strong>: 
              <p>Meanings: {details.meaning.join(', ')}</p>
              <p>Example: {details.examples[0]}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No words available</p>
      )}
    </div>
  );
}

export default TestWords;
