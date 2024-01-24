import React, { useEffect } from 'react';

const GoogleAdd = () => {
  useEffect(() => {
    // If you have script tags, append them to the head of the document
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    document.head.appendChild(script);

    // Trigger the Adsbygoogle push when the component mounts
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <section className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-8 md:grid-flow-col'>
          {/* Other columns */}
          <div className='col-span-8 md:col-span-4'>
            {/* Your Google AdSense code goes here */}
            <ins
              className='adsbygoogle'
              style={{ display: 'block' }}
              data-ad-client='ca-pub-XXXXXXXXXXXXXXXX'
              data-ad-slot='XXXXXXX'
              data-ad-format='auto'
              data-full-width-responsive='true'
            ></ins>
          </div>
          {/* Other columns */}
        </div>
      </div>
    </section>
  );
};

export default GoogleAdd;
