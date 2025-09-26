import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

const tabsData = [
  {
    value: "create",
    label: "CREATE / IAC AGENT",
    title: "Infrastructure Agent",
    description: "Deploy and scale servers, storage, and networks.",
    step: "01/03",
  },
  {
    value: "manage",
    label: "MANAGE / CM AGENT",
    title: "Configuration Management",
    description: "Automate configuration and maintain system consistency.",
    step: "02/03",
  },
  {
    value: "optimise",
    label: "OPTIMISE / OPS AGENT",
    title: "Operations Optimization",
    description: "Monitor, analyze and optimize system performance.",
    step: "03/03",
  },
];

export const SettingsSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("create");

  return (
    <section className="relative w-full h-[840px] overflow-hidden">
      <div className="relative w-full h-[840px] bg-[url(/image-225-6.png)] bg-[100%_100%]">
        <div className="absolute w-full h-full top-0 left-0 bg-[#d9d9d9]" />
        <div className="w-full h-full left-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.24)_0%,rgba(0,0,0,0.24)_100%),linear-gradient(38deg,rgba(0,0,0,0.8)_4%,rgba(0,0,0,0.8)_52%,rgba(75,174,255,0.6)_100%)] absolute top-0" />
      </div>

      <div className="absolute top-[94px] left-1/2 transform -translate-x-1/2 w-[1258px] h-[580px] overflow-hidden border border-solid border-transparent backdrop-blur-[56px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(56px)_brightness(100%)] [border-image:linear-gradient(179deg,rgba(214,211,241,0.5)_0%,rgba(40,63,129,0.5)_100%)_1] bg-[linear-gradient(180deg,rgba(41,50,90,0.8)_0%,rgba(3,2,13,0.8)_100%)]">
        <div className="absolute top-[-297px] left-[147px] w-[367px] h-[619px] rounded-[183.37px/309.37px] border-0 border-none rotate-[105deg] shadow-[inset_0px_-68px_4px_#dabbf580,inset_0px_-28px_4px_#6b45dd,inset_0px_-16px_4px_#27069d,0px_4px_4px_#00000040] blur-[150px] bg-[linear-gradient(30deg,rgba(92,88,206,0.2)_4%,rgba(67,215,255,0.2)_100%)]" />

        <div className="absolute left-0 bottom-0 w-[1258px] h-[303px] bg-[linear-gradient(180deg,rgba(10,12,15,0)_0%,rgba(10,12,15,0.55)_55%,rgba(10,12,15,1)_100%)]" />

        <div className="absolute -top-1 left-[410px] w-[852px] h-[588px]">
          <img
            className="absolute top-0 left-0 w-[844px] h-[580px]"
            alt="Grid"
            src="/grid.png"
          />

          <div className="flex flex-col w-[452px] items-center gap-14 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              className="relative w-[452px] h-[284px] mt-[-80.00px]"
              alt="Group"
              src="/group-1707485340.png"
            />

            <Button className="w-[158px] h-12 bg-[#ffffff14] rounded-lg border-[1.3px] border-solid border-[#ffffff3d] shadow-[0px_10.42px_31.27px_2.61px_#00000033] backdrop-blur-[37.14px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(37.14px)_brightness(100%)] [font-family:'Geist_Mono',Helvetica] font-bold text-white text-sm hover:bg-[#ffffff20]">
              CONNECT ACCOUNT
            </Button>
          </div>

          <div className="absolute top-[418px] left-[496px] w-[62px] h-12">
            <img
              className="absolute top-0 left-0 w-8 h-8"
              alt="Fi"
              src="/fi-8373282-1.svg"
            />

            <div className="gap-1 px-2 py-1 top-[23px] left-1/2 transform -translate-x-1/2 bg-white border border-solid border-black shadow-[0px_10.42px_31.27px_2.61px_#00000033] inline-flex items-center justify-center absolute rounded">
              <div className="relative w-fit [font-family:'Geist_Mono',Helvetica] font-bold text-[#090909] text-xs text-center tracking-[0] leading-4 whitespace-nowrap">
                YOU
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[333px] items-start justify-center gap-10 absolute top-1/2 left-1/2 transform -translate-x-[597px] -translate-y-[90px] bg-[linear-gradient(0deg,rgba(241,241,241,0)_0%,rgba(241,241,241,0)_100%)]">
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="self-stretch opacity-50 [font-family:'Geist_Mono',Helvetica] text-sm relative mt-[-1.00px] font-medium text-white tracking-[0] leading-6">
              {tabsData.find((tab) => tab.value === activeTab)?.step}
            </div>

            <div className="relative self-stretch [font-family:'Geist',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-8">
              {tabsData.find((tab) => tab.value === activeTab)?.title}
            </div>

            <div className="relative self-stretch [font-family:'Geist',Helvetica] font-normal text-[#ffffffb8] text-sm tracking-[0] leading-[21px]">
              {tabsData.find((tab) => tab.value === activeTab)?.description}
            </div>
          </div>

          <Button className="bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_22%,rgba(255,255,255,0.12)_29%,rgba(4,4,6,0.12)_51%,rgba(255,255,255,0.12)_75%,rgba(255,255,255,0.12)_83%,rgba(255,255,255,0)_100%)] inline-flex items-center justify-center gap-3 pl-3 pr-1 py-1 relative flex-[0_0_auto] rounded-[48px] backdrop-blur-[4.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.5px)_brightness(100%)] h-auto hover:bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.2)_22%,rgba(255,255,255,0.2)_29%,rgba(4,4,6,0.2)_51%,rgba(255,255,255,0.2)_75%,rgba(255,255,255,0.2)_83%,rgba(255,255,255,0.1)_100%)]">
            <div className="relative w-fit [font-family:'Geist_Mono',Helvetica] font-bold text-white text-sm tracking-[0] leading-6 whitespace-nowrap">
              LEARN MORE
            </div>

            <img
              className="relative w-10 h-10"
              alt="Frame"
              src="/frame-2018776555-1.svg"
            />
          </Button>
        </div>

        <img
          className="absolute top-[501px] left-1/2 transform -translate-x-1/2 w-[166px] h-[50px]"
          alt="Frame"
          src="/frame-2018776525.svg"
        />
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="absolute top-[30px] left-1/2 transform -translate-x-1/2 w-[1258px]"
      >
        <TabsList className="flex w-full h-10 items-center justify-center gap-0 bg-[#ffffff3d] overflow-hidden p-0 rounded-none">
          {tabsData.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex h-10 px-10 py-3 flex-1 grow data-[state=active]:[background:radial-gradient(50%_50%_at_41%_50%,rgba(108,224,255,1)_0%,rgba(164,160,255,1)_100%)] items-center justify-center gap-2 relative data-[state=active]:text-[#090909] text-white hover:bg-[#ffffff20] rounded-none"
            >
              <div className="relative w-fit [font-family:'Geist_Mono',Helvetica] font-bold text-sm text-center tracking-[0] leading-6 whitespace-nowrap">
                {tab.label}
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="inline-flex flex-col items-center justify-center gap-4 absolute top-[705px] left-1/2 transform -translate-x-1/2">
        <div className="relative w-fit mt-[-1.00px] opacity-50 [font-family:'Geist_Mono',Helvetica] font-medium text-white text-xs tracking-[0] leading-6 whitespace-nowrap">
          BUILT BY ENGINEERS FROM LEADING ENTERPRISES
        </div>

        <img
          className="relative flex-[0_0_auto]"
          alt="Frame"
          src="/frame-2018776593.svg"
        />
      </div>
    </section>
  );
};
