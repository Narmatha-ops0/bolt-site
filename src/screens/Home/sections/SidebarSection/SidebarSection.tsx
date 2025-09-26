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
    <section className="relative w-full h-[546px]">
      <div className="relative w-full h-[547px]">
        <img
          className="w-full h-full absolute top-[-6.11%] left-0"
          alt="Image"
          src="/image-225-1.png"
        />

        <div className="absolute w-full h-full top-0 left-0 bg-[#d9d9d9]" />

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.28)_100%),linear-gradient(38deg,rgba(0,0,0,0.8)_4%,rgba(0,0,0,0.8)_52%,rgba(75,174,255,0.6)_100%)]" />
      </div>

      <div className="flex flex-col w-[1259px] items-center gap-20 absolute top-[60px] left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col w-[722px] items-center gap-[8.05px] relative">
          <img
            className="relative w-[98.79px] h-[110.95px]"
            alt="Mask group"
            src="/mask-group-1.png"
          />
        </div>

        <div className="flex items-center gap-[40.5px] relative w-full">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex-1 bg-transparent border-none shadow-none"
            >
              <CardContent className="flex flex-col items-center gap-4 p-0">
                <img
                  className="relative w-8 h-8"
                  alt="Group"
                  src={feature.icon}
                />

                <div className="flex flex-col items-start gap-2 relative w-full">
                  <div className="relative w-full mt-[-1.00px] [font-family:'Geist',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6">
                    {feature.title}
                  </div>

                  <div className="relative w-full [font-family:'Geist',Helvetica] font-normal text-[#ffffffb8] text-base text-center tracking-[0] leading-6">
                    {feature.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
