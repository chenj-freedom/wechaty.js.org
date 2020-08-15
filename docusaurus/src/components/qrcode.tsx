import React from 'react'
import { QRCode } from 'react-qr-svg'

export default function QrCodeComponent (props) {
  const value = props.match.params[0] || 'https://wechaty.js.org/'

  return <QRCode
    bgColor="#FFFFFF"
    fgColor="#000000"
    level="Q"
    style={{ width: 256 }}
    value={value}
  />
}