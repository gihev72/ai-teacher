import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { BrainCircuit } from "lucide-react";
import React from "react";

const FeatureCard = () => {
  return (
    <Card className="bg-gradient-to-r from-[#0b2b65] to-[#4f064d] hover:to-[#b014ab] hover:from-[#2755ac] border-none flex items-center justify-center text-muted hover:scale-105 transition-all ease-in-out duration-300 ">
      <CardHeader className="w-full flex items-center justify-center">
        <CardTitle>Power by GPT-Vision</CardTitle>
        <CardDescription className="text-muted/70">
          {" "}
          Using powerful model from OpenAI
        </CardDescription>
        <CardContent>
          <div className="w-full mt-4">
            {/* <Image src="/demo.png" height="250" width="250" alt="Demo" /> */}
            <BrainCircuit className="h-[200px] w-[200px]" />
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default FeatureCard;
