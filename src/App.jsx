import dolphin from './assets/dolphin.png'
import './App.css'

import React, { useState } from 'react';

function App() {
  const [showEndScreen, setShowEndScreen] = useState(false);

  const handleSubmit = async () => {
    try {
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const ipData = await ipResponse.json();

    const data = {
      president: document.querySelector('select[name="president"]').value,
      vicePresident: document.querySelector('select[name="vice president"]').value,
      treasurer: document.querySelector('select[name="treasurer"]').value,
      secretary: document.querySelector('select[name="secretary"]').value,
      ipAddress: ipData.ip,
      timestamp: new Date().toISOString(),
    };
  
    try {
      // Send data to a mock API (you can replace the URL with your own endpoint)
      const response = await fetch('https://aafb-68-228-133-220.ngrok-free.app/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(`Success! Data sent: ${JSON.stringify(result)}`);
      } else {
        console.log('Error: Unable to send data');
      }
    } catch (error) {
      console.log('Error: ' + error.message);
    }

    setShowEndScreen(true);
    } catch (error) {
      console.error('Error fetching IP address:', error);
    } 
  };

  return (
    <>
      {showEndScreen ? (
        <div className="end-screen">
          <h1>Thank you for responding to the poll!</h1>
          <p>Your response has been recorded.</p>
        </div>
      ) : (
        <>
          <div>
            <a href="https://oceanlakeshs.vbschools.com" target="_blank">
              <img src={dolphin} className="logo" alt="React logo" />
            </a>
          </div>
          <h1>Class of 2028 Executive Board Polling</h1>
          <div className="card">
            <p>
              Please indicate which candidate you currently wish to vote for.
            </p>
          </div>
          <select name="president" className="selection">
            <option selected disabled hidden>President</option>
            <option>Seth Bangsal</option>
            <option>Nathan Crickard</option>
            <option>Kaylee Egan</option>
            <option>Khushi Nookala</option>
            <option>Nirja Patel</option>
            <option>Joseph Weir</option>
          </select>
          <select name="vice president" className="selection">
            <option selected disabled hidden>Vice President</option>
            <option>Elizabeth Gong</option>
            <option>Dang Vo</option>
            <option>Cormac Worrall</option>
            <option>Derick Yoon</option>
          </select>
          <select name="treasurer" className="selection">
            <option selected disabled hidden>Treasurer</option>
            <option>Kyle Dong</option>
            <option>Christopher Heltzel</option>
            <option>Layla Herrera</option>
          </select>
          <select name="secretary" className="selection">
            <option selected disabled hidden>Secretary</option>
            <option>Annaliya Fernando</option>
            <option>Teagan Hilbert</option>
            <option>Brandy Nguyen</option>
            <option>Evana Santhosh</option>
          </select>
          <div className="card">
            <button className="submitButton" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default App;
