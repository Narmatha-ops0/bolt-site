import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "FEATURES", opacity: "opacity-50" },
  { label: "PRICING", opacity: "opacity-50" },
  { label: "REVIEWS", opacity: "opacity-50" },
  { label: "PARTNER WITH US", opacity: "opacity-50" },
];

export const UserProfileSection = (): JSX.Element => {
  return (
    <div className="relative w-full h-[930px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          alt="Background"
          src="/image-225-5.png"
        />
        <div className="absolute inset-0 bg-[#d9d9d9]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.09)_0%,rgba(0,0,0,0.09)_100%),linear-gradient(38deg,rgba(0,0,0,0.8)_4%,rgba(0,0,0,0.8)_52%,rgba(75,174,255,0.6)_100%)]" />
      </div>

      {/* Navigation Bar */}
      <div className="absolute top-3 left-[72px] right-[72px] h-12">
        <div className="relative w-full h-[50px] bg-[#ffffff1f] rounded-[45px] border-[0.5px] border-solid border-white opacity-20 backdrop-blur-[2px]" />
        
        {/* Logo */}
        <img
          className="absolute top-[9px] left-[-2px] w-[70px] h-[33px]"
          alt="Ops logo"
          src="/ops-logo-2-1.svg"
        />

        {/* Navigation Items */}
        <nav className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-5">
          {navigationItems.map((item, index) => (
            <React.Fragment key={item.label}>
              <div
                className={`${item.opacity} [font-family:'Geist_Mono',Helvetica] font-medium text-white text-sm tracking-[0] leading-6 whitespace-nowrap cursor-pointer hover:opacity-100 transition-opacity`}
              >
                {item.label}
              </div>
              {index < navigationItems.length - 1 && (
                <div className="w-px h-6 bg-white opacity-30" />
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Right Side Buttons */}
        <div className="absolute top-1/2 right-6 transform -translate-y-1/2 flex items-center gap-3">
          <Button className="px-3 py-1.5 rounded-[35px] [background:radial-gradient(50%_50%_at_9%_0%,rgba(229,213,255,0.12)_0%,rgba(255,255,255,0.12)_100%)] border-0 h-auto hover:[background:radial-gradient(50%_50%_at_9%_0%,rgba(229,213,255,0.2)_0%,rgba(255,255,255,0.2)_100%)]">
            <span className="[font-family:'Geist_Mono',Helvetica] font-bold text-white text-xs">
              LOGIN
            </span>
          </Button>

          <Button className="px-3 py-1.5 rounded-[35px] border border-solid border-black [background:radial-gradient(50%_50%_at_9%_0%,rgba(229,213,255,1)_0%,rgba(255,255,255,1)_100%)] h-auto hover:[background:radial-gradient(50%_50%_at_9%_0%,rgba(229,213,255,0.9)_0%,rgba(255,255,255,0.9)_100%)]">
            <span className="text-[#0c131c] text-xs [font-family:'Geist_Mono',Helvetica] font-bold">
              DEMO WITH FOUNDER
            </span>
          </Button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="absolute top-[180px] left-1/2 transform -translate-x-1/2 w-[703px] flex flex-col items-center gap-10">
        {/* Main Heading */}
        <div className="flex flex-col items-center gap-5 w-full">
          <div className="flex flex-col items-center w-full relative">
            <h1 className="[font-family:'Geist',Helvetica] font-semibold text-white text-[74px] text-center tracking-[0] leading-[74px]">
              World's First
            </h1>
            <h1 className="[background:radial-gradient(50%_50%_at_13%_65%,rgba(108,224,255,1)_0%,rgba(164,160,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [font-family:'Geist',Helvetica] font-semibold text-[74px] text-center tracking-[0] leading-[74px]">
              AI DevOps Engineer
            </h1>
            
            {/* Background Ellipses */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1440px] h-[777px] pointer-events-none">
              <img
                className="absolute top-0 left-0 w-[667px] h-[777px] opacity-30"
                alt="Ellipse"
                src="/ellipse-1-1.svg"
              />
              <img
                className="absolute top-[36px] left-[15px] w-[698px] h-[705px] opacity-20"
                alt="Ellipse"
                src="/ellipse-1.svg"
              />
            </div>
          </div>

          <p className="[text-shadow:1px_1px_2px_#00000059] [font-family:'Geist',Helvetica] font-medium text-[#ffffff80] text-xl text-center tracking-[0] leading-9 max-w-[600px]">
            From creation to operation at scale, everything becomes faster, simpler,
            <br />
            more predictable, and at a fraction of the cost.
          </p>
        </div>

        {/* CTA Button */}
        <Button className="bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_22%,rgba(255,255,255,0.12)_29%,rgba(4,4,6,0.12)_51%,rgba(255,255,255,0.12)_75%,rgba(255,255,255,0.12)_83%,rgba(255,255,255,0)_100%)] inline-flex items-center justify-center gap-3 pl-3 pr-1 py-1 rounded-[48px] backdrop-blur-[4.5px] h-auto border-0 hover:bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.2)_22%,rgba(255,255,255,0.2)_29%,rgba(4,4,6,0.2)_51%,rgba(255,255,255,0.2)_75%,rgba(255,255,255,0.2)_83%,rgba(255,255,255,0.1)_100%)]">
          <span className="[font-family:'Geist_Mono',Helvetica] font-bold text-white text-sm tracking-[0] leading-6">
            DEMO WITH FOUNDER
          </span>
          <img
            className="w-10 h-10"
            alt="Arrow"
            src="/frame-2018776555-1.svg"
          />
        </Button>
      </div>

      {/* Command Center Badge */}
      <Badge className="absolute top-[587px] left-1/2 transform -translate-x-1/2 gap-2.5 px-2 py-0.5 bg-[#393939] border-0 hover:bg-[#393939]">
        <span className="[font-family:'Geist_Mono',Helvetica] font-bold text-white text-xs text-center tracking-[0] leading-4">
          UNIFY CONTROL ON SINGULAR COMMAND CENTER
        </span>
      </Badge>

      {/* Bottom Decorative Elements */}
      <div className="absolute top-[606px] left-1/2 transform -translate-x-1/2 w-[672px] h-[133px] flex justify-between">
        <img
          className="w-[336px] h-[133px]"
          alt="Vector left"
          src="/vector-13.svg"
        />
        <img
          className="w-[336px] h-[133px]"
          alt="Vector right"
          src="/vector-14.svg"
        />
      </div>

      {/* Bottom Icons */}
      <div className="absolute top-[703px] left-1/2 transform -translate-x-1/2 flex items-start gap-[268px]">
        <div className="flex flex-col w-[108px] items-center gap-2">
          <img
            className="w-[136.97px] h-auto"
            alt="Frame left"
            src="/frame-2018776583.svg"
          />
        </div>

        <div className="flex flex-col w-24 items-center gap-[15px]">
          <img
            className="w-full h-52"
            alt="Frame center"
            src="/frame-2018776586.svg"
          />
        </div>

        <div className="flex flex-col w-[108px] items-center gap-[15px]">
          <img
            className="w-[136.97px] h-auto"
            alt="Frame right"
            src="/frame-2018776584.svg"
          />
        </div>
      </div>

      {/* Decorative Lines */}
      <img
        className="absolute top-[601px] left-1/2 transform -translate-x-1/2 w-px h-32"
        alt="Center line"
        src="/line-27.svg"
      />
      
      <img
        className="absolute top-[180px] left-[calc(50%-418px)] w-8 h-[329px]"
        alt="Left line"
        src="/line-23-1.svg"
      />
      
      <img
        className="absolute top-[180px] left-[calc(50%+386px)] w-8 h-[329px]"
        alt="Right line"
        src="/line-23.svg"
      />

      <img
        className="absolute top-[344px] left-[calc(50%-720px)] w-[302px] h-px"
        alt="Left horizontal line"
        src="/line-25.svg"
      />
      
      <img
        className="absolute top-[344px] left-[calc(50%+418px)] w-[302px] h-px"
        alt="Right horizontal line"
        src="/line-25.svg"
      />

      {/* Glow Effect */}
      <div className="absolute top-2.5 left-[70px] w-[113px] h-[51px] rounded-3xl bg-[linear-gradient(308deg,rgba(190,161,239,0.6)_0%,rgba(58,50,65,0)_45%,rgba(71,87,209,0.6)_100%)] opacity-50" />
    </div>
  );
};