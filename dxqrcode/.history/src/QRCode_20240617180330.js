import React from 'react';
import QRCodeLib from 'react-qr-code';

const QRCode = ({ value }) => {

console.log("data passed: ")
  return <QRCodeLib value={"emma"} />;
};

export default QRCode;
