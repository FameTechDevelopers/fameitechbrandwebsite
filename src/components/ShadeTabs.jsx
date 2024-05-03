import React from "react";
import serviceData from "@/Data";
import ServiceCard from "./ServiceCard";
import { serviceTabsData } from "@/Data";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const ShadeTabs = ({
  title1,
  title2,
  title3,
  title4,
  title5,
  title1Content,
  title2Content,
  title3Content,
  title4Content,
  title5Content,
}) => {
  return (
    <>
      <Tabs defaultValue="tabs" className="w-[100%] mx-auto pb-20 max-lg:mt-20">
        <TabsList className="flex flex-col lg:flex-row justify-center items-center">
          <TabsTrigger className=" mx-6" value="word-mark-logo">
            {" "}
            {/* {serviceTabsData[0].title} */}
            {title1}
          </TabsTrigger>
          <TabsTrigger className=" mx-6" value="abstract-logo">
            {title2}
          </TabsTrigger>
          <TabsTrigger className=" mx-6" value="illustrative-logo">
            {title3}
          </TabsTrigger>
          <TabsTrigger className=" mx-6" value="emblem-logo">
            {title4}
          </TabsTrigger>
          <TabsTrigger className=" mx-6" value="title5">
            {title5}
          </TabsTrigger>
        </TabsList>

<div className="lg:mt-6 mt-20">

        <TabsContent value="word-mark-logo">{title1Content}</TabsContent>
        <TabsContent value="abstract-logo">{title2Content}</TabsContent>
        <TabsContent value="illustrative-logo">{title3Content}</TabsContent>
        <TabsContent value="emblem-logo">{title4Content}</TabsContent>
        <TabsContent value="title5">{title5Content}</TabsContent>

</div>

      </Tabs>
    </>
  );
};

export default ShadeTabs;
