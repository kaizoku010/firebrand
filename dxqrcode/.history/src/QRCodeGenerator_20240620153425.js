import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import QRCode from './QRCode';

const QRCodeGenerator = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = use
  const qrCodeRef = useRef(null);

  const handleDownload = () => {
    if (qrCodeRef.current !== null) {
      html2canvas(qrCodeRef.current).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'qrcode.png';
        link.click();
      });
    }
  };

  return (
    <div>
      <h2>Emma QR Code Generator</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div>
        <label>Password:</label>
        <input type="password" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

    


      <div ref={qrCodeRef}>
        <QRCode value={`Name: ${name}, Email: ${email}`} email={email}  name={name}/>
      </div>
      <button onClick={handleDownload}>Download QR Code</button>
    </div>
  );
};

export default QRCodeGenerator;
