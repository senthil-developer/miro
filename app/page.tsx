import { HomePage } from "@/components/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miro",
};

const page = () => {
  return <HomePage />;
};
export default page;
