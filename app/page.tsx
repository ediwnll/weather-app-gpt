"use client";

import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#655560] to-[#A4969B] p-10 flex flex-col justify-center items-center">
      <Card className=" max-w-4xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10">
          How's the weather?
        </Text>
        <Subtitle className="text-xl text-center">
          powered by OpenAi, Next.js, Tailwind CSS, Tremor and more!
        </Subtitle>
        <Divider className="my-10" />
        <Card className=" bg-gradient-to-br from-[#655560] to-[#A4969B]">
          <CityPicker/>
        </Card>
      </Card>
    </div>
  );
}
