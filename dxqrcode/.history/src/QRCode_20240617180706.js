import React from 'react';
import QRCodeLib from 'react-qr-code';

const QRCode = ({ value, email, name }) => {

console.log("data passed: ",name, email)
  return <QRCodeLib
  value={`${email},${name}`}
  />;
};

export default QRCode;
