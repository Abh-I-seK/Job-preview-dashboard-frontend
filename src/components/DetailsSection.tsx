import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image";


export default function DetailsSection(){
    return(
      <div>
        <Table className="border-0">
          <TableBody className="border-0">
            <TableRow className="border-0">
              <TableCell className="text-sm font-medium">Skill Required</TableCell>
              <TableCell className="text-sm font-medium">Preferred Language</TableCell>
              <TableCell className="text-sm font-medium">Type</TableCell>
              <TableCell className="text-sm font-medium">Years Of Experiance</TableCell>
            </TableRow>
            <TableRow className="border-0">
              <TableCell className="text-md flex flex-col pt-0">
                <span className="p-1 border-[2px] border-[#D1D1D1] rounded-[6px] w-[88px] font-semibold flex gap-2"><Image src="Figma.svg" height={20} width={20} alt="figma"/> Figma</span> 
                <span className="p-1 border-[2px] border-[#D1D1D1] rounded-[6px] w-[155px] font-semibold flex gap-2 mt-2"><Image src="Adobe1.svg" height={20} width={20} alt="adobe"/> Adobe Illustrator</span>
                <span className="p-1 border-[2px] border-[#D1D1D1] rounded-[6px] w-[108px] font-semibold flex gap-2 mt-2"><Image src="Adobe2.svg" height={20} width={20} alt="adobe"/>Adobe XD</span>
              </TableCell>
              <TableCell className="text-md align-top text-[#3D3D3D] font-extrabold pt-0">English</TableCell>
              <TableCell className="text-md align-top text-[#3D3D3D] font-extrabold pt-0">Full time</TableCell>
              <TableCell className="text-md align-top text-[#3D3D3D] font-extrabold pt-0">3+ Years of Experiance</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    )
  }