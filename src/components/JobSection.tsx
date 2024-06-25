import { Database, DotIcon, MapPin,} from "lucide-react";
import { DropdownMenuSeparator,} from "@/components/ui/dropdown-menu"
import DetailsSection from "./DetailsSection";
import AboutSection from "./AboutSection";

export default function JobSection(){
    return(
    <div className="p-3">
      <div className="flex gap-2 p-5 pb-6">
        <h1 className="font-bold text-2xl">Senior Product Designer</h1>
        <div className="flex gap-2 items-top">
          <span className="text-[#D1D1D1]"><DotIcon/></span>
          <span className="text-[#888888] text-sm">posted 2 days ago</span>
          <span className="bg-[#ecfdf3] text-[#17b26a] flex items-center border-2 border-[#aaefc6] rounded-[999px] pr-3 font-semibold text-sm h-6"><DotIcon className="text-[#17b26a] font-bold pl-1"/>open</span>
        </div>
      </div>
  
  
      <div className="flex gap-2 px-5 pb-6">
        <span className="flex gap-2 text-[#5D5D5D] text-md"><MapPin/>Delware, USA</span>
        <DotIcon className="text-[#D1D1D1]"/>
        <span className="flex gap-2 text-[#5D5D5D] text-md"><Database/>$300k-$400k</span>
      </div>
      
      <DetailsSection/>
  
      <DropdownMenuSeparator className="h-[2px]"/>
      
      <AboutSection/>
  
      <DropdownMenuSeparator className="h-[2px]"/>
  
    </div>
    )
  }