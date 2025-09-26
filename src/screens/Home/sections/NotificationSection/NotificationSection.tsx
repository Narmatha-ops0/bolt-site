import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";

const faqData = [
  {
    id: "item-1",
    number: "1.",
    question:
      "What is Ops0 and how is it different from traditional DevOps platforms?",
    answer:
      "Ops0 uses AI-powered agents to automate the entire DevOps lifecycle—from infrastructure provisioning to CI/CD and incident resolution—eliminating the need for manual intervention and traditional scripting.",
  },
  {
    id: "item-2",
    number: "2.",
    question: "Do I need to change my existing tools or workflows to use Ops0?",
    answer: "",
  },
  {
    id: "item-3",
    number: "3.",
    question: "What are Ops0's AI agents actually capable of?",
    answer: "",
  },
  {
    id: "item-4",
    number: "4.",
    question: "How does Ops0 handle security and compliance?",
    answer: "",
  },
  {
    id: "item-5",
    number: "5.",
    question: "Can Ops0 scale with enterprise-grade workloads?",
    answer: "",
  },
];

export const NotificationSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <img
        className="absolute top-[-33px] left-0 w-full h-[1195px] object-cover"
        alt="Background"
        src="/group-1707485330.png"
      />

      {/* Content Container */}
      <div className="relative px-[59px] py-[54px]">
        <div className="relative w-full max-w-[1320px] mx-auto">
          
          {/* Bottom Gradient Overlay */}
          <div className="absolute left-0 bottom-[103px] w-full h-[303px] bg-[linear-gradient(180deg,rgba(10,12,15,0)_0%,rgba(10,12,15,0.55)_55%,rgba(10,12,15,1)_100%)]" />

          {/* Background Group */}
          <img
            className="absolute top-[-166px] left-[65px] w-[1132px] h-[1144px]"
            alt="Background group"
            src="/group-1707485346.png"
          />

          {/* FAQ Content */}
          <div className="relative flex flex-col items-start gap-2 px-[31px] py-10 border-t [border-top-style:dashed] border-b [border-bottom-style:dashed] border-[#ffffff33]">
            <div className="flex flex-col w-full items-center gap-[50px]">
              
              {/* Header */}
              <div className="flex flex-col w-[506px] items-center gap-4">
                <div className="opacity-50 [font-family:'Geist_Mono',Helvetica] font-medium text-white text-xs text-center tracking-[0] leading-6">
                  FAQS
                </div>

                <h2 className="[font-family:'Geist',Helvetica] font-semibold text-white text-[56px] text-center tracking-[0] leading-[62px]">
                  Got Questions?
                  <br />
                  We've got answers
                </h2>

                <p className="w-[590px] [font-family:'Geist',Helvetica] font-normal text-[#ffffffb8] text-sm text-center tracking-[0] leading-[21px]">
                  Can't find the solution you need? Email us at{" "}
                  <span className="underline">support@ops0.com</span>
                </p>
              </div>

              {/* FAQ List */}
              <div className="flex flex-col items-start justify-center gap-6 w-full">
                <img
                  className="w-full h-px object-cover"
                  alt="Top line"
                  src="/line-4.svg"
                />

                <Accordion
                  type="single"
                  collapsible
                  defaultValue="item-1"
                  className="w-full"
                >
                  {faqData.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="border-none"
                    >
                      <div className="flex flex-col items-start gap-2 w-full">
                        <AccordionTrigger className="flex items-start justify-between w-full hover:no-underline p-0 [&[data-state=open]>svg]:rotate-180">
                          <div className="flex items-start w-full">
                            <div className="w-[120px] [font-family:'Geist',Helvetica] text-base font-medium text-white tracking-[0] leading-6">
                              {faq.number}
                            </div>
                            <div className="flex-1 [font-family:'Geist',Helvetica] font-medium text-white text-base tracking-[0] leading-6 text-left">
                              {faq.question}
                            </div>
                          </div>
                        </AccordionTrigger>

                        {faq.answer && (
                          <AccordionContent className="pb-0">
                            <div className="flex items-start w-full">
                              <div className="w-[120px]"></div>
                              <div className="flex-1 [font-family:'Geist',Helvetica] font-normal text-[#ffffffb8] text-base tracking-[0] leading-6">
                                {faq.answer}
                              </div>
                            </div>
                          </AccordionContent>
                        )}
                      </div>

                      <img
                        className="w-full h-px object-cover mt-6"
                        alt="Divider line"
                        src="/line-4.svg"
                      />
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="absolute top-[898px] left-1/2 transform -translate-x-1/2 w-[1256px] flex flex-col items-center gap-10">
          <Button
            variant="ghost"
            className="bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_22%,rgba(255,255,255,0.12)_29%,rgba(4,4,6,0.12)_51%,rgba(255,255,255,0.12)_75%,rgba(255,255,255,0.12)_83%,rgba(255,255,255,0)_100%)] inline-flex items-center justify-center gap-3 pl-3 pr-1 py-1 rounded-[48px] backdrop-blur-[4.5px] h-auto border-0 hover:bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.2)_22%,rgba(255,255,255,0.2)_29%,rgba(4,4,6,0.2)_51%,rgba(255,255,255,0.2)_75%,rgba(255,255,255,0.2)_83%,rgba(255,255,255,0.1)_100%)]"
          >
            <span className="[font-family:'Geist_Mono',Helvetica] font-bold text-white text-sm tracking-[0] leading-6">
              DEMO WITH FOUNDER
            </span>
            <img
              className="w-10 h-10"
              alt="Arrow"
              src="/frame-2018776555-1.svg"
            />
          </Button>
        </div>
      </div>

      {/* Diagonal Line Holders */}
      <img
        className="absolute top-0 right-[1380px] h-[1127px] w-[60px]"
        alt="Diagonal line holder left"
        src="/diagonal-line-holder-4.svg"
      />
      <img
        className="absolute top-0 right-0 h-[1045px] w-[60px]"
        alt="Diagonal line holder right"
        src="/diagonal-line-holder-4.svg"
      />
    </section>
  );
};