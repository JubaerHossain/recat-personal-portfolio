import React, { useEffect } from 'react';

const GoogleAdd = () => {
  useEffect(() => {
    // If you have script tags, append them to the head of the document
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4152205468557848';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    // Trigger the Adsbygoogle push when the component mounts
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
            <ins
              className='adsbygoogle'
              style={{ display: 'block' }}
              data-ad-client='ca-pub-4152205468557848'  
              data-ad-slot='8835529607'  
              data-ad-format='auto'
              data-full-width-responsive='true'
            ></ins>
  );
};

export default GoogleAdd;
