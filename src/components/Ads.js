import React, { useEffect } from "react";

const Ads = () => {
  useEffect(() => {
    // Inject the Google AdSense script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6082315217074810";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    // Trigger adsbygoogle once the script is loaded
    const pushAds = () => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    };

    script.onload = pushAds;

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        left: 0,
        width: "160px",
        zIndex: 1000,
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6082315217074810"
        data-ad-slot="6388329894"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default Ads;
