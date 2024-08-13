import React from 'react';
import QRCodeLib from 'react-qr-code';

const QRCode = ({ value, email, name }) => {

console.log("data passed: ",name)
  return <QRCodeLib
//   value={"emma"}
  value={`${email},${userName},${selectedEvent},${image}`}
  />;
};

export default QRCode;
