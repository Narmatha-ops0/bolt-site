import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

const pricingPlans = [
  {
    title: "Totally Free",
    price: "$0",
    period: "/ Month",
    deployments: "1 concurrent deployment",
    features: [
      "All core features included",
      "Great for trying Ops0",
      "Great for trying Ops0",
      "Great for trying Ops0",
    ],
    buttonText: "SELECT PLAN",
    isPopular: false,
    hasGlow: false,
  },
  {
    title: "Ridiculously Cheap",
    price: "$19",
    period: "/ Month",
    deployments: "5 concurrent deployment",
    features: [
      "All core features included",
      "Great for trying Ops0",
      "Great for trying Ops0",
      "Great for trying Ops0",
    ],
    buttonText: "SELECT PLAN",
    isPopular: true,
    hasGlow: true,
  },
  {
    title: "Serious Business",
    price: "$39",
    period: "/ Month",
    deployments: "15 concurrent deployment",
    features: [
      "All core features included",
      "Great for trying Ops0",
      "Great for trying Ops0",
      "Great for trying Ops0",
    ],
    buttonText: "SELECT PLAN",
    isPopular: false,
    hasGlow: false,
  },
];

const enterpriseFeatures = [
  "Unlimited concurrent deployments",
  "Custom API Volume",
  "Dedicated SLA & SOC-2",
  "VPC/on-premise option",
];

export const NavigationSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[930px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 rotate-180">
        <img
          className="w-full h-full object-cover -rotate-180"
          alt="Background"
          src="/image-225-3.png"
        />
        <div className="absolute inset-0 bg-[#d9d9d9]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.28)_100%),linear-gradient(38deg,rgba(0,0,0,0.8)_4%,rgba(0,0,0,0.8)_52%,rgba(75,174,255,0.6)_100%)]" />
      </div>

      {/* Main Content */}
      <div className="absolute top-[60px] left-[90px] w-[1260px] flex flex-col items-center gap-[50px]">
        
        {/* Pricing Toggle and Plans */}
        <div className="flex flex-col items-center gap-8 w-full">
          
          {/* Monthly/Yearly Toggle */}
          <div className="flex flex-col items-center gap-[15px]">
            <ToggleGroup
              type="single"
              defaultValue="yearly"
              className="inline-flex items-center justify-center gap-3 p-1 rounded-[48px] overflow-hidden backdrop-blur-[4.5px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_22%,rgba(255,255,255,0.12)_29%,rgba(4,4,6,0.12)_51%,rgba(255,255,255,0.12)_75%,rgba(255,255,255,0.12)_83%,rgba(255,255,255,0)_100%)]"
            >
              <ToggleGroupItem
                value="monthly"
                className="px-4 py-1 rounded-[100px] data-[state=on]:bg-white data-[state=on]:text-[#0c131c] text-white [font-family:'Geist_Mono',Helvetica] font-bold text-sm border-0"
              >
                MONTHLY
              </ToggleGroupItem>
              <ToggleGroupItem
                value="yearly"
                className="px-4 py-1 rounded-[100px] data-[state=on]:bg-white data-[state=on]:text-[#0c131c] text-white [font-family:'Geist_Mono',Helvetica] font-bold text-sm border-0"
              >
                YEARLY
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          {/* Pricing Plans */}
          <div className="flex flex-col items-end w-full">
            <div className="flex h-[469px] items-start w-full gap-0">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`
                    flex-1 border-t border-b border-dashed border-[#ffffff33] bg-transparent relative
                    ${index === 0 ? "border-l" : ""}
                    ${index === pricingPlans.length - 1 ? "border-r" : "border-r"}
                  `}
                >
                  {/* Glow Effect for Popular Plan */}
                  {plan.hasGlow && (
                    <div className="absolute top-[-105px] left-1/2 transform -translate-x-1/2 w-[215px] h-[209px] rounded-[107.7px/104.74px] rotate-[105deg] shadow-[inset_0px_-68px_4px_#dabbf580,inset_0px_-28px_4px_#6b45dd,inset_0px_-16px_4px_#27069d,0px_4px_4px_#00000040] blur-[100px] [background:radial-gradient(50%_50%_at_43%_31%,rgba(67,215,255,1)_0%,rgba(92,88,206,1)_96%)]" />
                  )}

                  <CardContent className="flex flex-col gap-2 p-6 h-full">
                    <div className="flex flex-col gap-4 flex-1">
                      {/* Plan Title */}
                      <div className="inline-flex items-center gap-2 rounded-[216px]">
                        <h3 className="[font-family:'Geist',Helvetica] font-medium text-white text-base">
                          {plan.title}
                        </h3>
                      </div>

                      {/* Price */}
                      <div className="[font-family:'Geist',Helvetica] font-normal text-5xl leading-[48px]">
                        <span className="font-semibold text-white">
                          {plan.price}
                        </span>
                        <span className="text-white text-base leading-4">
                          {plan.period}
                        </span>
                      </div>

                      {/* Divider */}
                      <img
                        className="w-full h-px object-cover"
                        alt="Divider"
                        src="/line-85.svg"
                      />

                      {/* Deployments */}
                      <div className="opacity-[0.52] [font-family:'Geist',Helvetica] font-normal text-base text-white">
                        {plan.deployments}
                      </div>

                      {/* Divider */}
                      <img
                        className="w-full h-px object-cover"
                        alt="Divider"
                        src="/line-85.svg"
                      />

                      {/* Features */}
                      <div className="flex flex-col gap-2">
                        {plan.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2"
                  flex-1 border-t border-b border-dashed border-[#ffffff33] bg-[#ffffff0a] backdrop-blur-[2px] relative
                            <img
                              className="w-4 h-4"
                              alt="Check"
                              src="/frame.svg"
                            />
                            <div className="flex-1 opacity-[0.52] [font-family:'Geist',Helvetica] font-normal text-white text-sm leading-5">
                              {feature}
                            </div>
                          </div>
                        ))}
                        <div className="flex items-center gap-2">
                          <div className="flex-1 opacity-[0.52] [font-family:'Geist',Helvetica] font-normal text-white text-sm leading-5 underline">
                            + 4 more
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      className={`h-auto inline-flex items-center justify-center gap-3 pl-3 pr-1 py-1 rounded-[48px] backdrop-blur-[4.5px] border-0 ${
                        plan.isPopular 
                          ? "bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_22%,rgba(255,255,255,0.12)_29%,rgba(4,4,6,0.12)_51%,rgba(255,255,255,0.12)_75%,rgba(255,255,255,0.12)_83%,rgba(255,255,255,0)_100%)] hover:bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.2)_22%,rgba(255,255,255,0.2)_29%,rgba(4,4,6,0.2)_51%,rgba(255,255,255,0.2)_75%,rgba(255,255,255,0.2)_83%,rgba(255,255,255,0.1)_100%)]" 
                          : "bg-transparent hover:bg-[#ffffff10]"
                      }`}
                      variant="ghost"
                    >
                      <span
                        className={`[font-family:'Geist_Mono',Helvetica] font-bold text-sm leading-6 ${
                          plan.isPopular ? "text-white" : "opacity-70 text-white"
                        }`}
                      >
                        {plan.buttonText}
                      </span>
                      <img
                        className="w-10 h-10"
                        alt="Arrow"
                        src={
                          plan.isPopular
                            ? "/frame-2018776555-1.svg"
                            : "/frame-2018776555.svg"
                        }
                      />
                    </Button>
                  </CardContent>

                  {/* Popular Badge */}
                  {plan.isPopular && (
                    <Badge className="absolute top-[76px] right-6 px-2 py-1 rounded-[40px] bg-[linear-gradient(90deg,rgba(67,215,255,1)_0%,rgba(92,88,206,1)_96%)] text-white [font-family:'Geist_Mono',Helvetica] font-bold text-xs border-0 hover:bg-[linear-gradient(90deg,rgba(67,215,255,1)_0%,rgba(92,88,206,1)_96%)]">
                      MOST POPULAR
                    </Badge>
                  )}
                </Card>
              ))}
            </div>

            {/* Enterprise Plan */}
            <Card className="flex flex-col gap-2 px-6 py-4 w-full border-r border-b border-l border-dashed border-[#ffffff33] bg-transparent">
              <CardContent className="flex flex-col gap-4 p-0">
                <div className="flex items-center justify-between w-full">
                  <div className="inline-flex items-center gap-2 rounded-[216px]">
                    <h3 className="[font-family:'Geist',Helvetica] font-medium text-white text-base">
                      For Enterprise
                    </h3>
                  </div>
                  <div className="[font-family:'Geist',Helvetica] font-normal text-white text-[32px] leading-10">
                    Contact for Custom Quote
                  </div>
                </div>

                <div className="flex items-end justify-between w-full">
                  <div className="flex w-[840px] items-end gap-4">
                    <div className="grid grid-cols-2 gap-4 flex-1">
                      {enterpriseFeatures.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2"
                        >
                          <img
                            className="w-4 h-4"
                            alt="Check"
                            src="/frame.svg"
                          />
                          <div className="opacity-[0.52] [font-family:'Geist',Helvetica] font-normal text-white text-base leading-6">
                            {feature}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="h-auto bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_22%,rgba(255,255,255,0.12)_29%,rgba(4,4,6,0.12)_51%,rgba(255,255,255,0.12)_75%,rgba(255,255,255,0.12)_83%,rgba(255,255,255,0)_100%)] inline-flex items-center justify-center gap-3 pl-3 pr-1 py-1 rounded-[48px] backdrop-blur-[4.5px] border-0 hover:bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.2)_22%,rgba(255,255,255,0.2)_29%,rgba(4,4,6,0.2)_51%,rgba(255,255,255,0.2)_75%,rgba(255,255,255,0.2)_83%,rgba(255,255,255,0.1)_100%)]"
                    variant="ghost"
                  >
                    <span className="[font-family:'Geist_Mono',Helvetica] font-bold text-white text-sm leading-6">
                      BOOK A CALL
                    </span>
                    <img
                      className="w-10 h-10"
                      alt="Arrow"
                      src="/frame-2018776555-1.svg"
                    />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
          <Card className="flex flex-col gap-2 px-6 py-4 w-full border-r border-b border-l border-dashed border-[#ffffff33] bg-[#ffffff0a] backdrop-blur-[2px]">