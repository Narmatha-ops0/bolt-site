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
    <section className="relative w-full h-[640px] bg-white overflow-hidden">
      <img
        className="absolute top-0 left-0 w-full h-[640px] object-cover"
        alt="Bg"
        src="/bg.png"
      />

      <div className="flex flex-col w-full max-w-[1317px] items-center gap-[50px] absolute top-[120px] left-1/2 transform -translate-x-1/2">
        <div className="relative w-[1064.5px] h-[148px]">
          <div className="absolute top-[99px] left-[989px] w-[74px] h-[49px]">
            <img
              className="absolute top-0 left-0 w-8 h-8"
              alt="Fi"
              src="/fi-8373282-2.svg"
            />

            <Badge className="absolute top-[25px] left-[calc(50.00%_-_10px)] gap-1 px-2 py-1 rounded border border-solid border-[#ffffffcc] shadow-[0px_10.42px_31.27px_2.61px_#00000033] [background:radial-gradient(50%_50%_at_13%_65%,rgba(99,222,255,1)_0%,rgba(119,114,255,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
              <img
                className="relative w-3 h-3"
                alt="Frame"
                src="/frame-12.svg"
              />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Geist_Mono',Helvetica] font-bold text-[#090909] text-xs text-center tracking-[0] leading-4 whitespace-nowrap">
                AI
              </div>
            </Badge>
          </div>

          <div className="absolute top-[13px] left-[917px] w-[76px] h-[49px]">
            <img
              className="absolute top-0 left-0 w-8 h-8"
              alt="Fi"
              src="/fi-8373282.svg"
            />

            <Badge className="gap-1 px-2 py-1 top-[25px] left-[calc(50.00%_-_14px)] bg-white shadow-[0px_10.42px_31.27px_2.61px_#00000033] absolute rounded">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Geist_Mono',Helvetica] font-bold text-[#090909] text-xs text-center tracking-[0] leading-4 whitespace-nowrap">
                HUMAN
              </div>
            </Badge>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2 px-[31px] py-10 relative w-full border-t [border-top-style:dashed] border-b [border-bottom-style:dashed] border-[#ffffff33]">
          <div className="inline-flex items-center gap-[405px] relative flex-[0_0_auto]">
            <div className="absolute top-[51px] left-0 w-[1234px] h-0.5 bg-[#21292e]">
              <div className="relative left-[calc(50.00%_-_324px)] w-[274px] h-0.5 bg-[linear-gradient(90deg,rgba(67,215,255,0)_0%,rgba(67,215,255,1)_48%,rgba(92,88,206,1)_72%,rgba(92,88,206,0)_96%)]" />
            </div>

            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col w-[60px] items-start gap-6 relative"
              >
                <Badge
                  className={`flex px-2 py-1 relative w-full items-center justify-center gap-2 ${
                    step.isActive
                      ? "bg-[linear-gradient(90deg,rgba(67,215,255,1)_0%,rgba(92,88,206,1)_96%)]"
                      : "bg-[#ffffff4c]"
                  }`}
                >
                  <div className="relative w-fit mt-[-0.58px] [font-family:'Geist_Mono',Helvetica] font-bold text-white text-xs text-center tracking-[0] leading-4 whitespace-nowrap">
                    {step.number}
                  </div>
                </Badge>

                <div
                  className={`relative w-2 h-2 ${
                    step.isActive
                      ? "bg-[linear-gradient(90deg,rgba(67,215,255,1)_0%,rgba(92,88,206,1)_96%)]"
                      : "bg-[#ffffff4c]"
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between relative w-full">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col w-[328px] items-start justify-center gap-4 relative"
              >
                <div className="flex flex-col items-start gap-2 relative w-full">
                  <h3 className="relative w-full mt-[-1.00px] [font-family:'Geist',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-8">
                    {step.title}
                  </h3>

                  <p className="relative w-full [font-family:'Geist',Helvetica] font-normal text-[#ffffffb8] text-sm tracking-[0] leading-[21px]">
                    {step.description}
                  </p>
                </div>

                <div className="relative w-fit [font-family:'Geist',Helvetica] font-medium text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <img
        className="absolute top-0 left-[60px] w-px h-[640px] object-cover"
        alt="Line"
        src="/line-20.svg"
      />

      <img
        className="absolute top-0 left-[1380px] w-px h-[640px] object-cover"
        alt="Line"
        src="/line-21.svg"
      />

      <img
        className="absolute left-[calc(50.00%_-_36949px)] bottom-[4372px] w-[1442px] h-px object-cover"
        alt="Line"
        src="/line-9-1.svg"
      />
    </section>
  );
};
