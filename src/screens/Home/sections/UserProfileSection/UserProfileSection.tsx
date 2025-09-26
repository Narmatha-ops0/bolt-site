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
    <div className="relative w-full h-[930px]">
      <div className="relative h-[930px] w-full">
        <img
          className="w-full h-full absolute top-0 left-0"
          alt="Image"
          src="/image-225-5.png"
        />

        <div className="w-full h-full absolute top-0 left-0 bg-[#d9d9d9]" />

        <div className="w-full h-full absolute top-0 left-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.09)_0%,rgba(0,0,0,0.09)_100%),linear-gradient(38deg,rgba(0,0,0,0.8)_4%,rgba(0,0,0,0.8)_52%,rgba(75,174,255,0.6)_100%)]" />
      </div>

      <img
        className="absolute top-[1078px] left-0 w-full h-px object-cover"
        alt="Line"
        src="/line-26.png"
      />

      <img
        className="absolute top-[601px] left-[calc(50.00%_-_1px)] w-px h-32 object-cover"
        alt="Line"
        src="/line-27.svg"
      />

      <img
        className="absolute top-[601px] left-[calc(50.00%_-_2px)] w-0.5 h-[81px]"
        alt="Line"
        src="/line-28.svg"
      />

      <img
        className="left-[calc(50.00%_-_418px)] absolute top-[180px] w-8 h-[329px]"
        alt="Line"
        src="/line-23-1.svg"
      />

      <img
        className="left-[calc(50.00%_+_386px)] absolute top-[180px] w-8 h-[329px]"
        alt="Line"
        src="/line-23.svg"
      />

      <img
        className="absolute top-[344px] left-[calc(50.00%_-_720px)] w-[302px] h-px object-cover"
        alt="Line"
        src="/line-25.svg"
      />

      <img
        className="absolute top-[344px] left-[calc(50.00%_+_418px)] w-[302px] h-px object-cover"
        alt="Line"
        src="/line-25.svg"
      />

      <div className="flex flex-col w-[703px] items-center gap-10 absolute top-[180px] left-[368px]">
        <div className="flex flex-col items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Geist',Helvetica] font-semibold text-white text-[74px] text-center tracking-[0] leading-[74px]">
              World&apos;s First
            </div>

            <div className="relative self-stretch [background:radial-gradient(50%_50%_at_13%_65%,rgba(108,224,255,1)_0%,rgba(164,160,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Geist',Helvetica] font-semibold text-transparent text-[74px] text-center tracking-[0] leading-[74px]">
              AI DevOps Engineer
            </div>

            <img
              className="absolute top-[calc(50.00%_-_254px)] left-[calc(50.00%_-_720px)] w-[667px] h-[777px]"
              alt="Ellipse"
              src="/ellipse-1-1.svg"
            />

            <img
              className="absolute top-[calc(50.00%_-_254px)] left-[calc(50.00%_-_720px)] w-[698px] h-[705px]"
              alt="Ellipse"
              src="/ellipse-1.svg"
            />
          </div>

          <div className="relative self-stretch [text-shadow:1px_1px_2px_#00000059] [font-family:'Geist',Helvetica] font-medium text-[#ffffff80] text-xl text-center tracking-[0] leading-9">
            From creation to operation at scale, everything becomes faster,
            simpler,
            <br />
            more predictable, and at a fraction of the cost.
          </div>
        </div>

        <Button className="bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_22%,rgba(255,255,255,0.12)_29%,rgba(4,4,6,0.12)_51%,rgba(255,255,255,0.12)_75%,rgba(255,255,255,0.12)_83%,rgba(255,255,255,0)_100%)] inline-flex items-center justify-center gap-3 pl-3 pr-1 py-1 relative flex-[0_0_auto] rounded-[48px] backdrop-blur-[4.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.5px)_brightness(100%)] h-auto border-0 hover:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_22%,rgba(255,255,255,0.12)_29%,rgba(4,4,6,0.12)_51%,rgba(255,255,255,0.12)_75%,rgba(255,255,255,0.12)_83%,rgba(255,255,255,0)_100%)]">
          <div className="relative w-fit [font-family:'Geist_Mono',Helvetica] font-bold text-white text-sm tracking-[0] leading-6 whitespace-nowrap">
            DEMO WITH FOUNDER
          </div>

          <img
            className="relative w-10 h-10"
            alt="Frame"
            src="/frame-2018776555-1.svg"
          />
        </Button>
      </div>

      <div className="absolute top-3 left-[72px] w-[1296px] h-12 flex backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)]">
        <div className="-mt-px w-[1298px] h-[50px] -ml-px bg-[#ffffff1f] rounded-[45px] border-[0.5px] border-solid border-white opacity-20" />
      </div>

      <nav className="inline-flex h-6 items-center gap-5 absolute top-6 left-[calc(50.00%_-_514px)]">
        {navigationItems.map((item, index) => (
          <React.Fragment key={item.label}>
            <div
              className={`relative w-fit mt-[-1.00px] ${item.opacity} [font-family:'Geist_Mono',Helvetica] font-medium text-white text-sm tracking-[0] leading-6 whitespace-nowrap cursor-pointer hover:opacity-100 transition-opacity`}
            >
              {item.label}
            </div>
            {index < navigationItems.length - 1 && (
              <img
                className="relative w-px h-6"
                alt="Line"
                src="/line-86.svg"
              />
            )}
          </React.Fragment>
        ))}
      </nav>

      <div className="inline-flex items-center gap-3 absolute top-[18px] right-[78px]">
        <Button className="inline-flex px-3 py-1.5 relative flex-[0_0_auto] rounded-[35px] [background:radial-gradient(50%_50%_at_9%_0%,rgba(229,213,255,0.12)_0%,rgba(255,255,255,0.12)_100%)] items-center justify-center gap-2 h-auto border-0 hover:[background:radial-gradient(50%_50%_at_9%_0%,rgba(229,213,255,0.2)_0%,rgba(255,255,255,0.2)_100%)]">
          <div className="relative w-fit [font-family:'Geist_Mono',Helvetica] font-bold text-white text-xs text-center tracking-[0] leading-6 whitespace-nowrap">
            LOGIN
          </div>
        </Button>

        <Button className="inline-flex px-3 py-1.5 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] mr-[-1.00px] rounded-[35px] border border-solid border-black [background:radial-gradient(50%_50%_at_9%_0%,rgba(229,213,255,1)_0%,rgba(255,255,255,1)_100%)] items-center justify-center gap-2 h-auto hover:[background:radial-gradient(50%_50%_at_9%_0%,rgba(229,213,255,0.9)_0%,rgba(255,255,255,0.9)_100%)]">
          <div className="text-[#0c131c] text-xs text-center relative w-fit [font-family:'Geist_Mono',Helvetica] font-bold tracking-[0] leading-6 whitespace-nowrap">
            DEMO WITH FOUNDER
          </div>
        </Button>
      </div>

      <div className="absolute top-2.5 left-[70px] w-[113px] h-[51px] rounded-3xl bg-[linear-gradient(308deg,rgba(190,161,239,0.6)_0%,rgba(58,50,65,0)_45%,rgba(71,87,209,0.6)_100%)] opacity-50" />

      <img
        className="absolute top-5 left-[calc(50.00%_-_628px)] w-[70px] h-[33px]"
        alt="Ops logo"
        src="/ops-logo-2-1.svg"
      />

      <img
        className="absolute top-[606px] left-[367px] w-[336px] h-[133px]"
        alt="Vector"
        src="/vector-13.svg"
      />

      <img
        className="absolute top-[606px] left-[740px] w-[336px] h-[133px]"
        alt="Vector"
        src="/vector-14.svg"
      />

      <Badge className="gap-2.5 px-2 py-0.5 top-[587px] left-[calc(50.00%_-_152px)] bg-[#393939] inline-flex items-center justify-center absolute rounded border-0 hover:bg-[#393939]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Geist_Mono',Helvetica] font-bold text-white text-xs text-center tracking-[0] leading-4 whitespace-nowrap">
          UNIFY CONTROL ON SINGULAR COMMAND CENTER
        </div>
      </Badge>

      <div className="inline-flex items-start gap-[268px] absolute top-[703px] left-[calc(50.00%_-_424px)]">
        <div className="flex flex-col w-[108px] items-center gap-2 relative">
          <img
            className="relative w-[136.97px] flex-[0_0_auto] mt-[-15.57px] ml-[-14.48px] mr-[-14.48px]"
            alt="Frame"
            src="/frame-2018776583.svg"
          />
        </div>

        <div className="flex flex-col w-24 items-center gap-[15px] relative">
          <img
            className="relative self-stretch w-full h-52 mt-[-56.00px] mb-[-5.00px] ml-[-66.00px] mr-[-73.00px]"
            alt="Frame"
            src="/frame-2018776586.svg"
          />
        </div>

        <div className="flex flex-col w-[108px] items-center gap-[15px] relative">
          <img
            className="relative w-[136.97px] flex-[0_0_auto] mt-[-15.57px] ml-[-14.48px] mr-[-14.48px]"
            alt="Frame"
            src="/frame-2018776584.svg"
          />
        </div>
      </div>
    </div>
  );
};
