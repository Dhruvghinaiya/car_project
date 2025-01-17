import AssetIcon from "@/Components/Icons/AssetIcon";
import Booking from "@/Components/Icons/Booking";
import BuyCarIcon from "@/Components/Icons/BuyCarIcon";
import Calender from "@/Components/Icons/Calender";
import DashboardIcon from "@/Components/Icons/DashboardIcon";
import Message from "@/Components/Icons/Message";
import Search from "@/Components/Icons/Search";
import SellCar from "@/Components/Icons/sellCar";
import Service from "@/Components/Icons/Service";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    BellAlertIcon,
    
    MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import {
    BellIcon,
    UserCircleIcon,
    
} from "@heroicons/react/24/outline";

export default function Dashboard() {
    return (
        <>
            <div className="bg-[#F5F5F5] flex ml-2  h-screen font-DMSans">
                <Sidebar />
                <div className="w-full h-22 flex items-center bg-white ">
                    <navbar className="flex justify-between gap-96 ">
                        <div className="ml-9 relative">
                            <MagnifyingGlassIcon className=" size-7 absolute left-[15px] top-[12px] text-[#7C7C8D] z-20" />
                            <input
                                type="text"
                                className="rounded-xl bg-[#F5F4F6] w-100 border-none pl-[65px]  py-[15px] tracking-tight text-[#EF9011] text-[20px] "
                                placeholder="Search or type"
                            />
                        </div>

                        <div className=" flex items-center ml-70  gap-4  ">
                            <BellIcon className="size-6 "/>
                            <UserCircleIcon className="size-16" />
                        </div>
                    </navbar>
                </div>
            </div>
        </>
    );
}
