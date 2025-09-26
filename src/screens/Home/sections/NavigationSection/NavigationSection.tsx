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
    cardClasses:
      "flex-1 border-t border-b border-l border-dashed border-[#ffffff33]",
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
    cardClasses:
      "flex-1 border-t border-b border-l border-dashed border-[#ffffff33] relative",
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
    cardClasses: "flex-1 border border-dashed border-[#ffffff33]",
    hasGlow: false,
  },
];

const enterpriseFeatures = [
  {
    column1: ["Unlimited concurrent deployments", "Custom API Volume"],
    column2: ["Dedicated SLA & SOC-2", "VPC/on-premise option"],
  },
];

export const NavigationSection = (): JSX.Element => {
  return (
    <div className="w-full h-[930px] bg-white relative">
      <div className="w-full h-[930px] rotate-180 absolute top-0 left-0">
        <img
          className="w-full h-full absolute top-[-3.59%] left-0 -rotate-180"
          alt="Image"
          src="/image-225-3.png"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-[#d9d9d9]" />
        <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.28)_100%),linear-gradient(38deg,rgba(0,0,0,0.8)_4%,rgba(0,0,0,0.8)_52%,rgba(75,174,255,0.6)_100%)]" />
      </div>

      <div className="flex flex-col w-[1260px] items-center gap-[50px] absolute top-[60px] left-[90px]">
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="flex flex-col items-center gap-[15px]">
            <ToggleGroup
              type="single"
              defaultValue="yearly"
              className="inline-flex items-center justify-center gap-3 p-1 rounded-[48px] overflow-hidden backdrop-blur-[4.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.5px)_brightness(100%)] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_22%,rgba(255,255,255,0.12)_29%,rgba(4,4,6,0.12)_51%,rgba(255,255,255,0.12)_75%,rgba(255,255,255,0.12)_83%,rgba(255,255,255,0)_100%)]"
            >
              <ToggleGroupItem
                value="monthly"
                className="px-4 py-1 rounded-[100px] data-[state=on]:bg-white data-[state=on]:text-[#0c131c] text-white [font-family:'Geist_Mono',Helvetica] font-bold text-sm"
              >
                MONTHLY
              </ToggleGroupItem>
              <ToggleGroupItem
                value="yearly"
                className="px-4 py-1 rounded-[100px] data-[state=on]:bg-white data-[state=on]:text-[#0c131c] text-white [font-family:'Geist_Mono',Helvetica] font-bold text-sm"
              >
                YEARLY
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="flex flex-col items-end w-full">
            <div className="flex h-[469px] items-start w-full">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={plan.cardClasses}>
                  {plan.hasGlow && (
                    <div className="absolute top-[-105px] left-[calc(50%-110px)] w-[215px] h-[209px] rounded-[107.7px/104.74px] border-0 border-none rotate-[105deg] shadow-[inset_0px_-68px_4px_#dabbf580,inset_0px_-28px_4px_#6b45dd,inset_0px_-16px_4px_#27069d,0px_4px_4px_#00000040] blur-[100px] [background:radial-gradient(50%_50%_at_43%_31%,rgba(67,215,255,1)_0%,rgba(92,88,206,1)_96%)]" />
                  )}

                  <CardContent className="flex flex-col gap-2 p-6 h-full">
                    <div className="flex flex-col gap-4 flex-1">
                      <div className="inline-flex items-center gap-2 rounded-[216px]">
                        <div className="[font-family:'Geist',Helvetica] font-medium text-white text-base">
                          {plan.title}
                        </div>
                      </div>

                      <div className="[font-family:'Geist',Helvetica] font-normal text-transparent text-5xl leading-[48px]">
                        <span className="font-semibold text-white">
                          {plan.price}
                        </span>
                        <span className="text-white text-base leading-4">
                          {plan.period}
                        </span>
                      </div>

                      <img
                        className="w-full h-px object-cover"
                        alt="Line"
                        src="/line-85.svg"
                      />

                      <div className="opacity-[0.52] [font-family:'Geist',Helvetica] font-normal text-base text-white">
                        {plan.deployments}
                      </div>

                      <img
                        className="w-full h-px object-cover"
                        alt="Line"
                        src="/line-85.svg"
                      />

                      <div className="flex flex-col gap-2">
                        {plan.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2"
                          >
                            <img
                              className="w-4 h-4"
                              alt="Frame"
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

                    <Button
                      className={`h-auto inline-flex items-center justify-center gap-3 pl-3 pr-1 py-1 rounded-[48px] backdrop-blur-[4.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.5px)_brightness(100%)] ${plan.isPopular ? "bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_22%,rgba(255,255,255,0.12)_29%,rgba(4,4,6,0.12)_51%,rgba(255,255,255,0.12)_75%,rgba(255,255,255,0.12)_83%,rgba(255,255,255,0)_100%)]" : ""}`}
                      variant="ghost"
                    >
                      <div
                        className={`[font-family:'Geist_Mono',Helvetica] font-bold text-sm leading-6 ${plan.isPopular ? "text-white" : "opacity-70 text-white"}`}
                      >
                        {plan.buttonText}
                      </div>
                      <img
                        className="w-10 h-10"
                        alt="Frame"
                        src={
                          plan.isPopular
                            ? "/frame-2018776555-1.svg"
                            : "/frame-2018776555.svg"
                        }
                      />
                    </Button>
                  </CardContent>

                  {plan.isPopular && (
                    <Badge className="absolute top-[76px] left-[calc(50%+82px)] px-2 py-1 rounded-[40px] bg-[linear-gradient(90deg,rgba(67,215,255,1)_0%,rgba(92,88,206,1)_96%)] text-white [font-family:'Geist_Mono',Helvetica] font-bold text-xs">
                      MOST POPULAR
                    </Badge>
                  )}
                </Card>
              ))}
            </div>

            <Card className="flex flex-col gap-2 px-6 py-4 w-full border-r border-b border-l border-dashed border-[#ffffff33]">
              <CardContent className="flex flex-col gap-4 p-0">
                <div className="flex items-center justify-between w-full">
                  <div className="inline-flex items-center gap-2 rounded-[216px]">
                    <div className="[font-family:'Geist',Helvetica] font-medium text-white text-base">
                      For Enterprise
                    </div>
                  </div>
                  <div className="[font-family:'Geist',Helvetica] font-normal text-white text-[32px] leading-10">
                    Contact for Custom Quote
                  </div>
                </div>

                <div className="flex items-end justify-between w-full">
                  <div className="flex w-[840px] items-end gap-4">
                    {enterpriseFeatures[0].column1.map((feature, index) => (
                      <div
                        key={`col1-${index}`}
                        className="flex flex-col gap-4 flex-1"
                      >
                        <div className="flex items-center gap-2 w-full">
                          <img
                            className="w-4 h-4"
                            alt="Frame"
                            src="/frame.svg"
                          />
                          <div className="opacity-[0.52] [font-family:'Geist',Helvetica] font-normal text-white text-base leading-6">
                            {feature}
                          </div>
                        </div>
                      </div>
                    ))}
                    {enterpriseFeatures[0].column2.map((feature, index) => (
                      <div
                        key={`col2-${index}`}
                        className="flex flex-col gap-4 flex-1"
                      >
                        <div className="flex items-center gap-2 w-full">
                          <img
                            className="w-4 h-4"
                            alt="Frame"
                            src="/frame.svg"
                          />
                          <div className="flex-1 opacity-[0.52] [font-family:'Geist',Helvetica] font-normal text-white text-base leading-6">
                            {feature}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="h-auto bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_22%,rgba(255,255,255,0.12)_29%,rgba(4,4,6,0.12)_51%,rgba(255,255,255,0.12)_75%,rgba(255,255,255,0.12)_83%,rgba(255,255,255,0)_100%)] inline-flex items-center justify-center gap-3 pl-3 pr-1 py-1 rounded-[48px] backdrop-blur-[4.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.5px)_brightness(100%)]"
                    variant="ghost"
                  >
                    <div className="[font-family:'Geist_Mono',Helvetica] font-bold text-white text-sm leading-6">
                      BOOK A CALL
                    </div>
                    <img
                      className="w-10 h-10"
                      alt="Frame"
                      src="/frame-2018776555-1.svg"
                    />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
