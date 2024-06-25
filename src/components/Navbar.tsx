import { BellDotIcon, Briefcase, ChevronDown,HandCoins, MessageSquareDotIcon, } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Navbar(){ 
    return(
      <div className="flex justify-between m-4 items-center">
        <div>
        <span className="font-semibold bg-[#E7E7E7] p-3 text-[#DC4A2D] text-md">Logo</span>
        </div>
        <div>
          <span className="flex justify-center items-center gap-10 border-[1px] border-[#D1D1D1] p-2 rounded-[36px]">
            <button className="flex gap-1 bg-[#DC4A2D] rounded-[49px] p-[8px] text-sm text-[#FFFFFF] border-2 border-[#FCB4A5]"><Briefcase className="w-5 h-5"/>Jobs</button>
            <button className="flex gap-1 bg-[#FFFFFF] rounded-[49px] p-[8px] text-sm text-[#B0B0B0]"><MessageSquareDotIcon className="w-5 h-5" /> Messages</button>
            <button className="flex gap-1 bg-[#FFFFFF] rounded-[49px] p-[8px] text-sm text-[#B0B0B0]"><HandCoins className="w-5 h-5"/> Payments</button>  
          </span>
  
        </div>
        <div className="flex gap-4">
          <button><BellDotIcon className="w-15"/></button>
          <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1">
            <Avatar>
              <AvatarImage className="h-[40px] w-[#40px]" src="https://github.com/Abh-I-seK.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
            <DropdownMenuContent>
            <DropdownMenuItem>DropDown-Item 1</DropdownMenuItem>
            <DropdownMenuItem>DropDown-Item 2</DropdownMenuItem>
            <DropdownMenuItem>DropDown-Item 3</DropdownMenuItem>
            <DropdownMenuItem>DropDown-Item 4</DropdownMenuItem>
          </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    )
  }
  