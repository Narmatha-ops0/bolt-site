import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const useCaseItems = [
  {
    icon: "/frame-18.svg",
    title: "DevOps for Everyone",
    description:
      'Anyone can manage infra using simple commands like "Restart dev server." No need to learn Kubernetes, Terraform, or AWS CLI. Empower developers, QA, analysts, and PMs to self-serve safely.',
    isExpanded: true,
  },
  {
    icon: "/frame-13.svg",
    title: "Pipeline Creation",
    description: "",
    isExpanded: false,
  },
  {
    icon: "/frame-21.svg",
    title: "AI-Powered Infra",
    description: "",
    isExpanded: false,
  },
];

const statsData = [
  {
    label: "CONIG ACCURACY",
    value: "99.5%",
  },
  {
    label: "LESS MANUAL EFFORT",
    value: "80%",
  },
  {
    label: "INCREASE IN PRODUCTIVITY",
    value: "3x",
  },
  {
    label: "FASTER TIME TO MARKET",
    value: "50",
  },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="relative h-[955px] w-full">
        <img
          className="w-full h-full absolute top-0 left-0 object-cover"
          alt="Background"
          src="/image-225-4.png"
        />

        <div className="absolute w-full h-full top-0 left-0 bg-[#d9d9d9]" />

        <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.28)_100%),linear-gradient(38deg,rgba(0,0,0,0.8)_4%,rgba(0,0,0,0.8)_52%,rgba(75,174,255,0.6)_100%)]" />
      </div>

      <div className="absolute top-[60px] left-[60px] w-[1320px] flex flex-col items-center gap-[50px]">
        <div className="flex flex-col w-[864px] items-center gap-4">
          <div className="text-center opacity-50 [font-family:'Geist_Mono',Helvetica] font-medium text-white text-xs tracking-[0] leading-6">
            / AI DEVOPS AGENTS (—) USE CASES /
          </div>
        </div>

        <div className="flex h-[448px] items-start w-full">
          <div className="flex flex-col w-[533px] h-full">
            {useCaseItems.map((item, index) => (
              <Card
                key={index}
                className={`
                flex-1 border-t border-b border-[#393939] border-dashed bg-transparent
                ${item.isExpanded ? "[background:radial-gradient(50%_50%_at_13%_65%,rgba(108,224,255,0.06)_0%,rgba(164,160,255,0.06)_100%)]" : ""}
                ${index === 0 ? "relative" : ""}
              `}
              >
                <CardContent className="flex flex-col items-start gap-4 px-[31px] py-8 h-full">
                  <div className="flex items-center gap-3 w-full">
                    <img className="w-8 h-8" alt="Icon" src={item.icon} />
                    <div className="flex-1 [font-family:'Geist',Helvetica] font-medium text-white text-base tracking-[0] leading-6">
                      {item.title}
                    </div>
                  </div>

                  {item.isExpanded && (
                    <div className="flex items-center justify-center gap-2 pl-[46px] pr-8 py-0 w-full">
                      <div className="flex-1 [font-family:'Geist',Helvetica] font-normal text-[#ffffffb8] text-base tracking-[0] leading-6">
                        {item.description}
                      </div>
                    </div>
                  )}

                  {item.isExpanded && (
                    <div className="absolute left-0 bottom-0 w-[390px] h-0.5 bg-[linear-gradient(90deg,rgba(108,224,255,1)_0%,rgba(164,160,255,1)_100%)]" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex-1 h-full border-t border-b border-l border-[#393939] border-dashed bg-[linear-gradient(180deg,rgba(41,50,90,0.6)_0%,rgba(3,2,13,0.6)_100%)]">
            <div className="relative top-6 left-[calc(50%-370px)] w-[739px] h-[400px] rounded-[10.53px_10.53px_0px_0px] overflow-hidden shadow-[0px_-2.63px_10.53px_#0000000d,0px_-1.32px_0px_#00000005]">
              <div className="flex flex-col w-[424px] items-start gap-[4.87px] p-[12.17px] absolute top-7 left-[calc(50%-212px)] bg-[#ffffff1a] rounded-[4.87px] overflow-hidden shadow-[0px_6.34px_19.02px_1.59px_#00000033,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] [backdrop-filter:blur(22.59px)_brightness(100%)_blur(2.0px)_brightness(110%)] [-webkit-backdrop-filter:blur(22.59px)_brightness(100%)_blur(2.0px)_brightness(110%)]">
                <div className="inline-flex items-center gap-[10.53px]">
                  <img
                    className="w-[21.05px] h-[21.05px]"
                    alt="AI Agent Icon"
                    src="/frame-24.svg"
                  />
                  <div className="[font-family:'Geist_Mono',Helvetica] font-medium text-[#ffffffb8] text-[15.8px] text-center tracking-[0] leading-[23.7px] whitespace-nowrap">
                    AI DEVOPS AGENT
                  </div>
                </div>

                <div className="w-full h-[13.16px] rounded-[131.58px] bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.08)_100%)]" />

                <div className="w-[142.11px] h-[13.16px] rounded-[131.58px] bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.08)_100%)]" />
              </div>

              <img
                className="absolute top-[167px] left-[calc(50%-212px)] w-[122px] h-[57px]"
                alt="Ops logo"
                src="/ops-logo-2.svg"
              />

              <div className="absolute top-[277px] left-[158px] w-[382px] h-[70px]">
                <div className="absolute top-[29px] left-[26px] w-[330px] h-[41px] flex bg-[#ffffff1a] rounded-[8.53px] overflow-hidden shadow-[0px_6.34px_19.02px_1.59px_#00000033,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] [backdrop-filter:blur(22.59px)_brightness(100%)_blur(2.0px)_brightness(110%)] [-webkit-backdrop-filter:blur(22.59px)_brightness(100%)_blur(2.0px)_brightness(110%)]">
                  <div className="mt-[98.8px] w-[197.69px] h-[19.32px] ml-[129.5px] bg-[#d9d9d9] rounded-[98.85px/9.66px] blur-[45.45px]" />
                </div>

                <div className="absolute top-5 left-[9px] w-[364px] h-[41px] flex bg-[#ffffff1a] rounded-[8.53px] overflow-hidden shadow-[0px_6.34px_19.02px_1.59px_#00000033,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] [backdrop-filter:blur(22.59px)_brightness(100%)_blur(2.0px)_brightness(110%)] [-webkit-backdrop-filter:blur(22.59px)_brightness(100%)_blur(2.0px)_brightness(110%)]">
                  <div className="mt-[98.8px] w-[197.69px] h-[19.32px] ml-[129.5px] bg-[#d9d9d9] rounded-[98.85px/9.66px] blur-[45.45px]" />
                </div>

                <div className="flex w-[382px] h-[52px] items-center gap-[4.87px] p-[12.17px] absolute top-0 left-[calc(50%-191px)] bg-[#ffffff1a] rounded-[8.53px] overflow-hidden shadow-[0px_6.34px_19.02px_1.59px_#00000033,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] [backdrop-filter:blur(22.59px)_brightness(100%)_blur(2.0px)_brightness(110%)] [-webkit-backdrop-filter:blur(22.59px)_brightness(100%)_blur(2.0px)_brightness(110%)]">
                  <img
                    className="w-[22.83px] h-[22.83px]"
                    alt="Status Icon"
                    src="/frame-28.svg"
                  />
                  <div className="[-webkit-text-stroke:1.8px_transparent] bg-[linear-gradient(90deg,rgba(199,197,255,0.5)_0%,rgba(199,197,255,0.7)_20%,rgba(199,197,255,0)_50%,rgba(199,197,255,0.2)_95%,rgba(199,197,255,0.2)_100%)_1] [-webkit-background-clip:text] bg-[linear-gradient(46deg,rgba(199,197,255,0.6)_0%,rgba(199,197,255,0.8)_0%,rgba(199,197,255,1)_7%,rgba(199,197,255,0.9)_95%,rgba(199,197,255,0.6)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Geist',Helvetica] font-normal text-transparent text-[16.6px] tracking-[0] leading-[24.9px] whitespace-nowrap">
                    Onboarding new environments...
                  </div>
                  <div className="absolute top-[124px] left-[163px] w-[248px] h-6 bg-[#d9d9d9] rounded-[124.12px/12.13px] blur-[57.07px]" />
                </div>
              </div>

              <div className="flex w-[58px] h-16 items-center justify-center gap-[4.87px] p-[12.17px] absolute top-[257px] left-[58px] bg-[#ffffff1a] rounded-[10.63px] overflow-hidden shadow-[0px_6.34px_19.02px_1.59px_#00000033,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] [backdrop-filter:blur(22.59px)_brightness(100%)_blur(2.0px)_brightness(110%)] [-webkit-backdrop-filter:blur(22.59px)_brightness(100%)_blur(2.0px)_brightness(110%)]">
                <img
                  className="w-[26.38px] h-8"
                  alt="Service Icon"
                  src="/image-300.png"
                />
              </div>

              <div className="flex w-[59px] h-16 items-center justify-center gap-[4.87px] p-[12.17px] absolute top-[315px] left-[629px] bg-[#ffffff1a] rounded-[10.63px] overflow-hidden shadow-[0px_6.34px_19.02px_1.59px_#00000033,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] [backdrop-filter:blur(22.59px)_brightness(100%)_blur(2.0px)_brightness(110%)] [-webkit-backdrop-filter:blur(22.59px)_brightness(100%)_blur(2.0px)_brightness(110%)]">
                <img
                  className="w-[25.58px] h-[31.03px] object-cover"
                  alt="Service Icon"
                  src="/image-300-1.png"
                />
              </div>

              <img
                className="absolute top-[122px] left-[205px] w-0.5 h-[45px]"
                alt="Connection Line"
                src="/line-22.svg"
              />

              <img
                className="absolute top-56 left-[205px] w-0.5 h-[61px]"
                alt="Connection Line"
                src="/line-23-2.svg"
              />

              <div className="absolute top-[148px] left-[382px] w-[119px] h-[89px]">
                <div className="absolute top-1.5 left-5 w-[78px] h-[78px] rounded-[39px] border-0 border-none shadow-[inset_0px_-68px_4px_#dabbf580,inset_0px_-28px_4px_#6b45dd,inset_0px_-16px_4px_#27069d,0px_4px_4px_#00000040] blur-2xl bg-[linear-gradient(30deg,rgba(92,88,206,0.4)_4%,rgba(67,215,255,0.4)_100%)]" />

                <div className="flex w-[119px] h-[89px] items-center gap-[4.87px] p-[12.17px] absolute top-0 left-0 bg-[#ffffff1a] rounded-[8.76px] shadow-[0px_6.34px_19.02px_1.59px_#00000033,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] [backdrop-filter:blur(22.59px)_brightness(100%)_blur(2.0px)_brightness(110%)] [-webkit-backdrop-filter:blur(22.59px)_brightness(100%)_blur(2.0px)_brightness(110%)]">
                  <div className="[text-shadow:1.47px_1.47px_2.93px_#00000059] [font-family:'Geist',Helvetica] font-normal text-[#46a777] text-[17.6px] tracking-[0] leading-[17.6px]">
                    <span className="leading-[0.1px]">Deployed in</span>
                    <span className="text-[23.4px] leading-[26.4px]"> </span>
                    <span className="font-semibold text-[26.4px] leading-[35.2px]">
                      2 Mins
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[740px] left-[58px] w-[1321px] h-[155px] flex flex-col items-center gap-px">
        <div className="flex items-center gap-9 px-[31px] py-0 flex-1 w-full">
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className="flex-1 h-full border-l border-[#393939] border-solid bg-transparent"
            >
              <CardContent className="flex flex-col items-start gap-10 p-8 h-full relative">
                <div className="[font-family:'Geist_Mono',Helvetica] font-medium text-white text-sm tracking-[0] leading-6">
                  {stat.label}
                </div>
                <div className="[font-family:'Geist',Helvetica] font-semibold text-white text-5xl tracking-[0] leading-[48px] mb-[-21px]">
                  {stat.value}
                </div>
                <div
                  className={`absolute top-[43px] w-8 h-0.5 rotate-90 bg-[linear-gradient(90deg,rgba(108,224,255,1)_0%,rgba(164,160,255,1)_100%)] ${index % 2 === 0 ? "left-[-15px]" : "-left-3.5"}`}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <img
          className="w-[1440px] h-px mb-[-1px] ml-[-58px] mr-[-61px] object-cover"
          alt="Bottom Line"
          src="/line-9.svg"
        />

        <img
          className="absolute top-0 left-[-58px] w-[1437px] h-px object-cover"
          alt="Top Line"
          src="/line-10.svg"
        />
      </div>
    </section>
  );
};
