import React, { useState, useRef } from 'react';
import QRCode from './QRCode';
import html2canvas from 'html2canvas';

const QRCodeGenerator = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
      <h2>QR Code Generator</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div ref={qrCodeRef}>
        <QRCode value={`Name: ${name}, Email: ${email}`} />
      </div>
      <button onClick={handleDownload}>Download QR Code</button>
    </div>
  );
};

export default QRCodeGenerator;
