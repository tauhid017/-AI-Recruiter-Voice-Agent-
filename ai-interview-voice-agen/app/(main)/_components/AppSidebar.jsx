import Image from "next/image";
import logo from "../../../public/logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-col justify-center items-center space-y-0 ">
        <Image
          src={logo}
          alt="logo"
          width={200}
          height={80}
          className="w-[200px] h-[80px] object-contain mb-4"
        />

        <Button className="mt-5 w-full">
          <Plus className="mr-2" /> Create a new Interview
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
