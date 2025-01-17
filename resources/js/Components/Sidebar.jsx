import React from 'react'
import DashboardIcon from './Icons/DashboardIcon'
import AssetIcon from './Icons/AssetIcon'
import Booking from './Icons/Booking'
import SellCar from './Icons/sellCar'
import BuyCarIcon from './Icons/BuyCarIcon'
import Service from './Icons/Service'
import Calender from './Icons/Calender'
import Message from './Icons/Message'

const Sidebar = () => {
  return (
    <>
      <div className="bg-white w-76 h-full">
                    <div className=" mt-9 text-2xl">
                        <div className="flex ml-5  gap-3">
                            <svg
                                width="30"
                                height="32"
                                viewBox="0 0 27 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    y="0.0751953"
                                    width="26.914"
                                    height="26.85"
                                    rx="6"
                                    fill="#A162F7"
                                />
                                <path
                                    d="M9.1273 19.7072L10.8492 17.9853C6.48698 15.345 7.21403 11.3367 8.12284 9.66258L13.5039 14.9002L18.885 9.66258C20.9513 14.1396 17.8805 17.0287 16.0868 17.9136L17.9523 19.7072C24.6248 14.6849 21.3961 7.94063 18.885 6.0752L13.5039 11.4563L7.97934 6.0752C2.09602 11.815 6.25741 18.2723 9.1273 19.7072Z"
                                    fill="white"
                                />
                            </svg>
                            <div>
                                <h2 className="font-bold ml-0.5 mt-[-1px] tracking-wider text-2xl  ">
                                    Motiv.
                                </h2>
                            </div>
                        </div>
                        <div   div className="mt-8 flex flex-col gap-y-1">    
                                <div className="flex items-center gap-x-2 text-[#5F6165] ml-5 bg-[#F3F5F8] rounded-lg  hover:bg-[#F3F5F8] p-2 mt-[5px] w-52">
                                    <DashboardIcon  />
                                    <a href="#" className="text-[18px]" >Dashboard</a>
                                </div>
                                <div className="flex items-center gap-2  text-[#5F6165]  ml-5 hover:bg-[#F3F5F8] p-2 w-52 ">
                                    <AssetIcon />
                                    <a href="#" className="text-lg ml-[2px] mt-[-2px]">Assets</a>
                                </div>
                                
                                <div className="flex items-center gap-2 text-[#5F6165]  ml-5 hover:bg-[#F3F5F8]  p-2 w-52">
                                    <Booking  />
                                    <a href="#" className="text-lg tracking-tight" >Booking</a>
                                </div>
                                
                                <div className="flex items-center gap-2 text-[#5F6165] hover:bg-[#F3F5F8] p-2 ml-5  w-52">
                                    <SellCar  />
                                    <a href="#" className="text-lg tracking-normal">Sell Cars</a>
                                </div>
                                
                                <div className="flex items-center gap-2 text-[#5F6165] hover:bg-[#F3F5F8] p-2 ml-5  w-52">
                                    <BuyCarIcon/>
                                    <a href="#" className="text-lg">Buy Cars</a>
                                </div>
                                
                                <div className="flex items-center gap-2 ml-5 text-[#5F6165] hover:bg-[#F3F5F8] p-2  w-52">
                                    <Service  />
                                    <a href="#" className="text-lg">Services</a>
                                </div>
                                
                                <div className="flex items-center gap-2 text-[#5F6165] hover:bg-[#F3F5F8] ml-5 p-2   w-52">
                                    <Calender  />
                                    <a href="#" className="text-lg">Calender</a>
                                </div>
                                <div className="flex items-center gap-2 ml-5 text-[#5F6165] hover:bg-[#F3F5F8] p-2  w-52">
                                    <Message  />
                                    <a href="#" className="text-lg">Messages</a>
                                </div>
                            </div>
                        </div>
                </div>
    </>
  )
}

export default Sidebar
