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
  title6,
  title1Content,
  title2Content,
  title3Content,
  title4Content,
  title5Content,
  title6Content,
}) => {
  return (
    <>
      <Tabs defaultValue={title1} className="w-[100%] mx-auto pb-20 max-lg:mt-20">
        <TabsList className="flex flex-col lg:flex-row justify-center items-center ">
          <TabsTrigger className=" mx-6" value={title1}>
            {" "}
            {/* {serviceTabsData[0].title} */}
            {title1}
          </TabsTrigger>
          <TabsTrigger className=" mx-6" value={title2}>
            {title2}
          </TabsTrigger>
          <TabsTrigger className=" mx-6" value={title3}>
            {title3}
          </TabsTrigger>
          <TabsTrigger className=" mx-6" value={title4}>
            {title4}
          </TabsTrigger>
          <TabsTrigger className=" mx-6" value={title5}>
            {title5}
          </TabsTrigger>
          <TabsTrigger className=" mx-6" value={title6}>
            {title6}
          </TabsTrigger>
        </TabsList>

<div className="lg:mt-6 mt-20">

        <TabsContent value={title1}>{title1Content}</TabsContent>
        <TabsContent value={title2}>{title2Content}</TabsContent>
        <TabsContent value={title3}>{title3Content}</TabsContent>
        <TabsContent value={title4}>{title4Content}</TabsContent>
        <TabsContent value={title5}>{title5Content}</TabsContent>
        <TabsContent value={title6}>{title6Content}</TabsContent>

</div>

      </Tabs>
    </>
  );
};

export default ShadeTabs;
