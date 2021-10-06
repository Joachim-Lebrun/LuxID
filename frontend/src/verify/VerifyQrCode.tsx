import QrReader from 'react-qr-reader';
import { useCallback, useState } from 'react';

export const VerifyQrCode = () => {

  const [status, setStatus] = useState<'OK' | 'Not OK' | 'Loading' | ''>('');

  const onScan = useCallback(data => {
    if(data) {
      setStatus('Loading');
      setTimeout(() => {
        setStatus('OK');
      }, 500);
    }
  }, []);

  const onError = () => {};

  return <div>
    <QrReader
      delay={300}
      onScan={onScan}
      onError={onError}
      style={{ width: '300px' }}
    />
    <p>Status: {status}</p>
  </div>
}
