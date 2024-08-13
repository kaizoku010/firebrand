import React from 'react';
import QRCodeLib from 'react-qr-code';

const QRCode = ({ value }) => {
  return <QRCodeLib value={value} />;
};

export default QRCode;
