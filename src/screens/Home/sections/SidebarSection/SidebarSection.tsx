import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SidebarSection = (): JSX.Element => {
  const features = [
    {
      icon: "/group-1686555056.png",
      title: "Deploy. Scale. Done.",
      description: "Our agents deploy and scale your stack",
    },
    {
      icon: "/group-1686555056-1.png",
      title: "Built-In Security. End-to-End.",
      description: "Every workload is isolated, encrypted, and protected.",
    },
    {
      icon: "/group-1686555056-2.png",
      title: "Prod-Ready from Day One",
      description: "Infra you can trust. Pipelines you don't babysit.",
    },
  ];

  return (
    <section className="relative w-full h-[546px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          alt="Background"
          src="/image-225-1.png"
        />
        <div className="absolute inset-0 bg-[#d9d9d9]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.28)_100%),linear-gradient(38deg,rgba(0,0,0,0.8)_4%,rgba(0,0,0,0.8)_52%,rgba(75,174,255,0.6)_100%)]" />
      </div>

      {/* Content */}
      <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 w-[1259px] flex flex-col items-center gap-20">
        {/* Logo Section */}
        <div className="flex flex-col w-[722px] items-center gap-[8.05px]">
          <img
            className="w-[98.79px] h-[110.95px]"
            alt="Mask group"
            src="/mask-group-1.png"
          />
        </div>

        {/* Features Grid */}
        <div className="flex items-start gap-[40.5px] w-full">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex-1 bg-transparent border-none shadow-none"
            >
              <CardContent className="flex flex-col items-center gap-4 p-0 text-center">
                <img
                  className="w-8 h-8"
                  alt="Feature icon"
                  src={feature.icon}
                />

                <div className="flex flex-col items-center gap-2 w-full">
                  <h3 className="[font-family:'Geist',Helvetica] font-medium text-white text-base tracking-[0] leading-6">
                    {feature.title}
                  </h3>

                  <p className="[font-family:'Geist',Helvetica] font-normal text-[#ffffffb8] text-base tracking-[0] leading-6 max-w-[280px]">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Diagonal Line Holders */}
      <img
        className="absolute top-[58px] left-0 h-[1173px] w-[60px]"
        alt="Diagonal line holder left"
        src="/diagonal-line-holder-4.svg"
      />
      <img
        className="absolute top-[58px] right-0 h-[1173px] w-[60px]"
        alt="Diagonal line holder right"
        src="/diagonal-line-holder-4.svg"
      />
    </section>
  );
};