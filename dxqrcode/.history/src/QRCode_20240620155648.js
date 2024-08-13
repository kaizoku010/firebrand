import React from 'react';
import QRCodeLib from 'react-qr-code';

const QRCode = ({ value, email, name, password }) => {

console.log("data passed: ",name, email, password)
  return <QRCodeLib
  value={`${email},${name},${password}`}
  />;
};

export default QRCode;
