import Navbar  from "@/components/Navbar"
import Offers  from "@/components/Offers"
import {Sidebar}  from "@/components/Sidebar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"



export default function Home() {
  return (
    <>
        <Navbar />
        <div className="flex">
          <Sidebar/>
          <Offers/>
        </div>
    </>
       
  );
}