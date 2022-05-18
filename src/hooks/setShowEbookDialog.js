import { useEffect, useState } from 'react';

const localStorageKey = 'SHOW_EBOOK_DIALOG';
const timeoutInMs = 3000;

export default function setShowEbookDialog() {
  const [show, setShow] = useState(false);

  const doNotShowAgain = () => {
    localStorage.setItem(localStorageKey, 'false');
    setShow(false);
  };

  useEffect(() => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    if (process.env.GATSBY_SHOW_EBOOK_DIALOG !== '1' || url.includes('ebook')) {
      return;
    }

    setTimeout(() => {
      const localStorageValue = localStorage.getItem(localStorageKey);
      if (localStorageValue === null) {
        localStorage.setItem(localStorageKey, 'true');
        setShow(true);
      } else {
        setShow(JSON.parse(localStorageValue));
      }
    }, timeoutInMs);
  }, []);

  return [show, setShow, doNotShowAgain];
}
