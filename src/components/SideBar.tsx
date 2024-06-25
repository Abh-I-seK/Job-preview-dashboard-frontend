import { Eye, MessageSquare,  Pencil, Trash2, UserCheck2 , UsersRound } from "lucide-react";
import { DropdownMenuSeparator,} from "@/components/ui/dropdown-menu"

export default function SideBar(){
    return(
      <div className="border-l-[2px] border-[#D1D1D1] h-100 py-5 col-span-1">
        <div className="px-5 grid grid-cols-2 gap-4">
          <button className="text-[#DC4A2D] bg-[#FEF4F2] p-2 font-normal flex col-span-1 rounded-[8px] justify-center border-[1px] border-[#DC4A2D]"><Trash2 className="w-4 mr-1"/>Delete job</button>
          <button className="text-[#FEF4F2] bg-[#DC4A2D] p-2 font-normal flex col-span-1 rounded-[8px] justify-center border-[2px] border-[#FED3CA]"><Pencil className="w-4 mr-1"/>Edit Job</button>
          <span className="cols-span-1 flex gap-2 font-normal px-5 text-[#4F4F4F] py-5 pb-2"><UsersRound className="w-4"/> Applicants</span>
          <span className="cols-span-1 text-right font-bold px-5 text-[#3D3D3D] py-5 pb-2">400</span>
          <DropdownMenuSeparator className="col-span-2 h-[2px] mx-3"/>
          <span className="cols-span-1 flex gap-2 font-normal px-5 text-[#4F4F4F] py-5 pb-2 pt-2"><UserCheck2 className="w-4"/>Matches</span>
          <span className="cols-span-1 text-right font-bold px-5 text-[#3D3D3D] py-5 pb-2 pt-2">100</span>
          <DropdownMenuSeparator className="col-span-2 h-[2px] mx-3"/>
          <span className="cols-span-1 flex gap-2 font-normal px-5 text-[#4F4F4F] py-5 pb-2 pt-2"><MessageSquare className="w-4"/>Messages</span>
          <span className="cols-span-1 text-right font-bold px-5 text-[#3D3D3D] py-5 pb-2 pt-2">147</span>
          <DropdownMenuSeparator className="col-span-2 h-[2px] mx-3"/>
          <span className="cols-span-1 flex gap-2 font-normal px-5 text-[#4F4F4F] py-5 pb-2 pt-2"><Eye className="w-4"/>Views</span>
          <span className="cols-span-1 text-right font-bold px-5 text-[#3D3D3D] py-5 pb-2 pt-2">800</span>
        </div>
      </div>
    )
  }
  