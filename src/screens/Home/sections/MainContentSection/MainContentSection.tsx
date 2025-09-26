import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  const companyLogos = [
    {
      src: "/one-engine-logo-light-1.svg",
      alt: "One engine logo",
      className: "w-[87px] h-3",
    },
    {
      src: "/gm-financial--logo--1.svg",
      alt: "Gm financial logo",
      className: "w-[93px] h-[25px]",
    },
    {
      src: "/logo-1.svg",
      alt: "Logo",
      className: "w-[82px] h-[26px]",
    },
    {
      src: "/image-326.png",
      alt: "Image",
      className: "w-[82px] h-4 object-cover",
    },
  ];

  const verticalLines = [
    "left-40",
    "left-[269px]",
    "left-[377px]",
    "left-[485px]",
  ];

  return (
    <section className="relative w-full h-[469px]">
      <div className="relative w-full h-[470px] rotate-180">
        <img
          className="w-full h-full top-[-7.11%] -rotate-180 absolute left-0"
          alt="Image"
          src="/image-225-2.png"
        />

        <div className="absolute w-full h-full top-0 left-0 bg-[#d9d9d9]" />

        <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.28)_100%),linear-gradient(38deg,rgba(0,0,0,0.8)_4%,rgba(0,0,0,0.8)_52%,rgba(75,174,255,0.6)_100%)]" />
      </div>

      <div className="absolute top-[60px] left-0 w-full h-[349px]">
        <img
          className="absolute -top-px left-[calc(50%_-_715px)] w-[1430px] h-px object-cover"
          alt="Line"
          src="/line-18-1.svg"
        />

        <img
          className="absolute top-[348px] left-0 w-full h-px object-cover"
          alt="Line"
          src="/line-19-1.svg"
        />

        <div className="absolute top-0 left-[485px] w-[895px] h-[349px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.04)_25%,rgba(96,159,255,0.08)_50%,rgba(255,255,255,0.02)_100%)]" />

        <Card className="absolute top-[30px] left-[523px] w-[826px] bg-transparent border-none">
          <CardContent className="flex flex-col items-start gap-[18.68px] p-0">
            <img
              className="w-[35.62px] h-[27.32px]"
              alt="Vector"
              src="/vector.svg"
            />

            <div className="flex flex-col items-start gap-1.5 w-full">
              <blockquote className="[font-family:'Geist',Helvetica] font-normal text-xl tracking-[0] leading-5">
                <span className="text-white leading-[26px]">
                  "Finally, a tool that speaks my language! I was spending way
                  too much time wrestling with infrastructure configs instead of
                  building features. Ops0 let me describe what I needed in plain
                  English and handled the heavy lifting. Cut my DevOps needs by
                  at least 60%. Still early days but impressed so far."
                </span>
                <br />
                <br />
                <br />
                <br />
                <cite className="not-italic">
                  <span className="[font-family:'Inter_Tight',Helvetica] font-semibold text-[#ffffffb8] text-sm leading-[0.1px]">
                    Premchander Racharla,
                  </span>
                  <span className="[font-family:'Inter_Tight',Helvetica] text-[#ffffffb8] text-sm leading-[0.1px]">
                    {" "}
                    Software Engineer at ADARA, Inc
                  </span>
                </cite>
              </blockquote>

              <img
                className="w-[89.91px] h-[35.2px]"
                alt="Mask group"
                src="/mask-group-2.png"
              />
            </div>
          </CardContent>
        </Card>

        {verticalLines.map((leftClass, index) => (
          <img
            key={`vertical-line-${index}`}
            className={`absolute top-0 ${leftClass} w-px h-[349px] object-cover`}
            alt="Line"
            src="/line-21-1.svg"
          />
        ))}

        <div className="absolute top-[162px] left-[67px] flex items-center justify-between w-[406px]">
          {companyLogos.map((logo, index) => (
            <img
              key={`company-logo-${index}`}
              className={logo.className}
              alt={logo.alt}
              src={logo.src}
            />
          ))}
        </div>
      </div>

      <img
        className="absolute top-[58px] left-0 h-[1173px] w-[60px]"
        alt="Diagonal line holder"
        src="/diagonal-line-holder-4.svg"
      />

      <img
        className="absolute top-[58px] right-0 h-[1173px] w-[60px]"
        alt="Diagonal line holder"
        src="/diagonal-line-holder-4.svg"
      />
    </section>
  );
};
