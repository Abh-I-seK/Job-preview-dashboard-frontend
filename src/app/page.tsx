import {DropdownMenuSeparator,} from "@/components/ui/dropdown-menu"
import Navbar from "../components/Navbar";
import JobSection from "../components/JobSection";
import FooterSection from "../components/FooterSection";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <DropdownMenuSeparator className="h-[3px]"/>
      <ButtonSection/>
      <DropdownMenuSeparator className="h-[2px] my-0"/>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <JobSection/>
          <FooterSection/>
        </div>
        <SideBar/>
      </div>
    </div>
  );
}

function ButtonSection(){
  return(
    <div className="flex gap-7 px-8">
      <button className="text-[#DC4A2D] font-semibold border-b-[2px] border-[#DC4A2D] border-w-50%">Job Preview</button>
      <button className="text-[#888888] font-medium p-4">Applicants</button>
      <button className="text-[#888888] font-medium p-4">Match</button>
      <button className="text-[#888888] font-medium p-4">Messages</button>
    </div>
  )
}