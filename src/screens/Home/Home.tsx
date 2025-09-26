import React from "react";
import { DashboardSection } from "./sections/DashboardSection/DashboardSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { NotificationSection } from "./sections/NotificationSection/NotificationSection";
import { SettingsSection } from "./sections/SettingsSection/SettingsSection";
import { SidebarSection } from "./sections/SidebarSection/SidebarSection";
import { UserProfileSection } from "./sections/UserProfileSection/UserProfileSection";

export const Home = (): JSX.Element => {
  const diagonalLineHolders = [
    {
      className: "top-[930px] right-[1380px] h-[1150px] w-[60px]",
      src: "/diagonal-line-holder.png",
      alt: "Diagonal line holder",
    },
    {
      className: "top-[2074px] right-[1380px] h-[436px] w-[60px]",
      src: "/diagonal-line-holder-1.png",
      alt: "Diagonal line holder",
    },
    {
      className: "top-[2074px] right-0 h-[436px] w-[60px]",
      src: "/diagonal-line-holder-2.png",
      alt: "Diagonal line holder",
    },
    {
      className: "top-[930px] right-0 h-[1150px] w-[60px]",
      src: "/diagonal-line-holder-3.png",
      alt: "Diagonal line holder",
    },
  ];

  const verticalLines = [
    {
      className: "top-[4296px] left-[60px] w-px h-[2934px]",
      src: "/line-9-2.svg",
      alt: "Line",
    },
    {
      className: "top-[931px] left-[60px] w-px h-[1735px]",
      src: "/line-18.png",
      alt: "Line",
    },
    {
      className: "top-[4328px] left-[1379px] w-px h-[2902px]",
      src: "/line-9-3.svg",
      alt: "Line",
    },
    {
      className: "top-[931px] left-[1380px] w-px h-[1735px]",
      src: "/line-19.png",
      alt: "Line",
    },
  ];

  return (
    <div className="bg-white overflow-hidden w-full min-w-[1440px] min-h-[7230px] relative">
      <UserProfileSection />
      <SettingsSection />
      <HeaderSection />
      <FooterSection />
      <NavigationSection />
      <MainContentSection />
      <SidebarSection />
      <NotificationSection />
      <DashboardSection />

      {diagonalLineHolders.map((holder, index) => (
        <img
          key={`diagonal-holder-${index}`}
          className={`absolute ${holder.className}`}
          alt={holder.alt}
          src={holder.src}
        />
      ))}

      {verticalLines.map((line, index) => (
        <img
          key={`vertical-line-${index}`}
          className={`absolute object-cover ${line.className}`}
          alt={line.alt}
          src={line.src}
        />
      ))}
    </div>
  );
};
