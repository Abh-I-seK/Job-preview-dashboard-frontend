import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image";

export default function FooterSection(){
    return(
      <div className="px-8 py-3 pb-10">
        <span className="flex gap-2 text-[#4F4F4F] font-semibold items-center py-5">
        <Image src="Atlassian.svg" height={30} width={30} alt="logo"/>
          Atlassian</span>
        <Table className="border-0 w-4/5 ">
          <TableBody className="border-0 ">
            <TableRow className="border-0">
              <TableCell className="text-sm font-medium py-2 text-[#6E6D6D] pl-0">Company Size</TableCell>
              <TableCell className="text-sm font-medium py-2 text-[#6E6D6D]">Type</TableCell>
            </TableRow>
            <TableRow className="border-0">
              <TableCell className="text-md align-top text-[#3D3D3D] font-semibold py-1 pl-0">1k-2k Employees</TableCell>
              <TableCell className="text-md align-top text-[#3D3D3D] font-semibold py-1 pb-3">Private</TableCell>
            </TableRow>
            <TableRow className="border-0">
              <TableCell className="text-sm font-medium py-2 text-[#6E6D6D] pl-0">Sector</TableCell>
              <TableCell className="text-sm font-medium py-2 text-[#6E6D6D]">Funding</TableCell>
            </TableRow>
            <TableRow className="border-0 ">
              <TableCell className="text-md align-top text-[#3D3D3D] font-semibold py-1 pl-0">Information Technology,Infrastructure</TableCell>
              <TableCell className="text-md align-top text-[#3D3D3D] font-semibold py-1 pb-3">Bootstrapped</TableCell>
            </TableRow>
            <TableRow className="border-0">
              <TableCell className="text-sm font-medium py-2 text-[#6E6D6D] pl-0">Founded In</TableCell>
              <TableCell className="text-sm font-medium py-2 text-[#6E6D6D]">Founded By</TableCell>
            </TableRow>
            <TableRow className="border-0">
              <TableCell className="text-md align-top text-[#3D3D3D] font-semibold py-1 pl-0">2019</TableCell>
              <TableCell className="text-md align-top text-[#3D3D3D] font-semibold py-1">Scott Farquhar, Mike Cannon-Brookes</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    )
  }
  