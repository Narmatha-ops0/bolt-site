import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const FooterSection = (): JSX.Element => {
  const steps = [
    {
      number: "STEP 1",
      title: "Connect Your Cloud",
      description:
        "Securely link Ops0 to your cloud provider and instantly gain visibility into deployments and drifts.",
      duration: "~ 1 hr",
      isActive: false,
    },
    {
      number: "STEP 2",
      title: "Configure Your Stack",
      description:
        "Quickly define infrastructure, pipelines, and policies—ready to monitor and manage in minutes.",
      duration: "~ 2 hr",
      isActive: true,
    },
    {
      number: "STEP 3",
      title: "Automate & Scale",
      description:
        "Let Ops0 handle deployment, monitoring, and optimization—so your systems run on autopilot.",
      duration: "~ 2 hr",
      isActive: false,
    },
  ];

  return (
    <section className="relative w-full h-[640px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          className="w-full h-[640px] object-cover"
          alt="Background"
          src="/bg.png"
        />
      </div>

      {/* Main Content */}
      <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 w-[1064.5px] flex flex-col items-center gap-[50px]">
        
        {/* AI Badges Section */}
        <div className="relative w-full h-[148px]">
          {/* Human Badge */}
          <div className="absolute top-[13px] left-[917px] w-[76px] h-[49px]">
            <img
              className="absolute top-0 left-0 w-8 h-8"
              alt="Human icon"
              src="/fi-8373282.svg"
            />
            <Badge className="absolute top-[25px] left-1/2 transform -translate-x-1/2 gap-1 px-2 py-1 bg-white shadow-[0px_10.42px_31.27px_2.61px_#00000033] rounded border-0 hover:bg-white">
              <span className="[font-family:'Geist_Mono',Helvetica] font-bold text-[#090909] text-xs text-center tracking-[0] leading-4">
                HUMAN
              </span>
            </Badge>
          </div>

          {/* AI Badge */}
          <div className="absolute top-[99px] left-[989px] w-[74px] h-[49px]">
            <img
              className="absolute top-0 left-0 w-8 h-8"
              alt="AI icon"
              src="/fi-8373282-2.svg"
            />
            <Badge className="absolute top-[25px] left-1/2 transform -translate-x-1/2 gap-1 px-2 py-1 rounded border border-solid border-[#ffffffcc] shadow-[0px_10.42px_31.27px_2.61px_#00000033] [background:radial-gradient(50%_50%_at_13%_65%,rgba(99,222,255,1)_0%,rgba(119,114,255,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] hover:[background:radial-gradient(50%_50%_at_13%_65%,rgba(99,222,255,1)_0%,rgba(119,114,255,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
              <img
                className="w-3 h-3"
                alt="AI icon"
                src="/frame-12.svg"
              />
              <span className="[font-family:'Geist_Mono',Helvetica] font-bold text-[#090909] text-xs text-center tracking-[0] leading-4">
                AI
              </span>
            </Badge>
          </div>
        </div>

        {/* Steps Section */}
        <div className="flex flex-col items-start gap-2 px-[31px] py-10 w-full border-t [border-top-style:dashed] border-b [border-bottom-style:dashed] border-[#ffffff33] relative">
          
          {/* Progress Line */}
          <div className="absolute top-[51px] left-0 w-full h-0.5 bg-[#21292e]">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[274px] h-0.5 bg-[linear-gradient(90deg,rgba(67,215,255,0)_0%,rgba(67,215,255,1)_48%,rgba(92,88,206,1)_72%,rgba(92,88,206,0)_96%)]" />
          </div>

          {/* Steps Container */}
          <div className="flex items-center justify-between w-full gap-[405px]">
            
            {/* Step Badges */}
            <div className="flex items-center justify-between w-full">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[60px] items-center gap-6"
                >
                  <Badge
                    className={`flex px-2 py-1 w-full items-center justify-center gap-2 border-0 ${
                      step.isActive
                        ? "bg-[linear-gradient(90deg,rgba(67,215,255,1)_0%,rgba(92,88,206,1)_96%)] hover:bg-[linear-gradient(90deg,rgba(67,215,255,1)_0%,rgba(92,88,206,1)_96%)]"
                        : "bg-[#ffffff4c] hover:bg-[#ffffff4c]"
                    }`}
                  >
                    <span className="[font-family:'Geist_Mono',Helvetica] font-bold text-white text-xs text-center tracking-[0] leading-4">
                      {step.number}
                    </span>
                  </Badge>

                  <div
                    className={`w-2 h-2 ${
                      step.isActive
                        ? "bg-[linear-gradient(90deg,rgba(67,215,255,1)_0%,rgba(92,88,206,1)_96%)]"
                        : "bg-[#ffffff4c]"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Step Details */}
          <div className="flex items-center justify-between w-full mt-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col w-[328px] items-start justify-center gap-4"
              >
                <div className="flex flex-col items-start gap-2 w-full">
                  <h3 className="[font-family:'Geist',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-8">
                    {step.title}
                  </h3>

                  <p className="[font-family:'Geist',Helvetica] font-normal text-[#ffffffb8] text-sm tracking-[0] leading-[21px]">
                    {step.description}
                  </p>
                </div>

                <div className="[font-family:'Geist',Helvetica] font-medium text-white text-sm tracking-[0] leading-[21px]">
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical Lines */}
      <img
        className="absolute top-0 left-[60px] w-px h-[640px] object-cover"
        alt="Left line"
        src="/line-20.svg"
      />
      <img
        className="absolute top-0 left-[1380px] w-px h-[640px] object-cover"
        alt="Right line"
        src="/line-21.svg"
      />
    </section>
  );
};