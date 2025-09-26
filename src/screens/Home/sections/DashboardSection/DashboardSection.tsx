import React from "react";

export const DashboardSection = (): JSX.Element => {
  const footerLinks = [
    { text: "TERMS OF USE", underline: true },
    { text: "PRIVACY POLICY", underline: true },
  ];

  return (
    <section className="relative w-full h-[850px] border-t border-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 rotate-180">
        <img
          className="w-full h-full object-cover -rotate-180"
          alt="Background"
          src="/image-225.png"
        />
        <div className="absolute inset-0 bg-[#d9d9d9]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.28)_100%),linear-gradient(38deg,rgba(0,0,0,0.8)_4%,rgba(0,0,0,0.8)_52%,rgba(75,174,255,0.6)_100%)]" />
      </div>

      {/* Diagonal Line Decorations */}
      <img
        className="absolute top-0 left-0 w-[60px] h-[850px]"
        alt="Diagonal line holder left"
        src="/diagonal-line-holder-4.svg"
      />
      <img
        className="absolute top-0 right-0 w-[60px] h-[850px]"
        alt="Diagonal line holder right"
        src="/diagonal-line-holder-4.svg"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col w-full max-w-[1258px] mx-auto h-full px-0 py-0">
        
        {/* Header Section */}
        <div className="flex items-start justify-between w-full pt-10 px-0">
          
          {/* Left Side - Logo and Status */}
          <div className="flex flex-col w-[547px] items-start gap-6">
            <div className="flex flex-col items-start gap-12 w-full" />

            <img
              className="flex-shrink-0"
              alt="Ops0 Logo"
              src="/frame-2018776542.svg"
            />

            <div className="flex items-center gap-2 w-full">
              <img
                className="w-4 h-4 flex-shrink-0"
                alt="Status indicator"
                src="/frame-23.svg"
              />
              <span className="[font-family:'Geist_Mono',Helvetica] font-medium text-white text-xs tracking-[0] leading-5">
                All services are online
              </span>
            </div>
          </div>

          {/* Right Side - Contact and Legal Info */}
          <div className="flex flex-col w-[396px] h-[298px] items-start gap-8 p-10">
            <div className="w-full opacity-50 [font-family:'Geist_Mono',Helvetica] font-medium text-white text-xs tracking-[0] leading-5 underline">
              SUPPORT@OPS0.COM
            </div>

            <div className="w-full opacity-50 [font-family:'Geist_Mono',Helvetica] font-medium text-white text-xs tracking-[0] leading-5">
              <span>
                © 2025 OPS0. ALL RIGHTS RESERVED.
                <br />
              </span>
              {footerLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <span className={link.underline ? "underline" : ""}>
                    {link.text}
                  </span>
                  {index < footerLinks.length - 1 && (
                    <span>&nbsp;&nbsp; </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="w-full opacity-50 [font-family:'Geist_Mono',Helvetica] font-medium text-xs leading-5 underline text-white tracking-[0]">
              7900 SUDLEY SUITE, MANASSAS, VA 20109
            </div>

            <div className="[font-family:'Geist_Mono',Helvetica] font-medium text-white text-xs tracking-[0] leading-5">
              MADE WITH ❣ IN DALLAS, TEXAS
            </div>
          </div>
        </div>

        {/* Dashboard Visualization */}
        <div className="flex-1 flex items-end justify-center pb-0">
          <img
            className="w-full max-w-[1258px] h-[476.59px] object-contain"
            alt="Dashboard analytics visualization"
            src="/mask-group.png"
          />
        </div>
      </div>
    </section>
  );
};