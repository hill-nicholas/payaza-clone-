import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { images } from "../../images";
import { SlArrowDown } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-center fixed top-0 lg:top-14 z-50">
      <div className="lg:bg-white/50 backdrop-blur-lg lg:w-[87%] w-full flex items-center justify-between p-4 px-5 lg:rounded-[72px] font-roobert border border-white/20">
        <img src={images.PayazaLogo} alt="" className="w-[95px] lg:w-auto" />

        {/* Burger Menu Button */}
        <GiHamburgerMenu
          className="text-[rgb(68,0,102)] lg:hidden cursor-pointer"
          size={30}
          onClick={() => setIsOpen(true)}
        />

        <div className="hidden lg:flex items-center gap-72">
          <div className="flex text-sm items-center gap-5">
            <p className="flex items-center cursor-pointer text-[#4d525f]">
              Products Suite <RiArrowDropDownLine size={25} />
            </p>
            <p className="flex items-center cursor-pointer text-[#4d525f]">
              Resources <RiArrowDropDownLine size={25} />
            </p>
            <p>Pricing</p>
            <p>Developers</p>
            <p>Support</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-[96px] px-[14px] py-3 font-medium bg-transparent text-black border border-black w-max text-sm">
              Sign Up
            </div>
            <div className="bg-[rgb(68,0,102)] flex items-center gap-2 rounded-[96px] px-[14px] py-3 text-white font-medium w-max text-sm">
              Login
            </div>
            <p className="text-gray-50/10 text-2xl">|</p>
            <div className="flex items-center gap-2 border-2 border-[#98a2b3] rounded-[96px] py-[10px] px-[12px]">
              <img src={images.NigerianFlag} alt="" className="rounded-full w-5 h-5" />
              <p className="text-gray-500">NG</p>
              <SlArrowDown fill="gray" size={10} />
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col gap-10 p-4"
        >
          {/* Close Button */}
        <div className="flex gap-[35%] md:gap-[65%] items-center ">
          <img src={images.PayazaLogo} alt="" className="w-[95px] lg:w-auto" />
          <div className="flex items-center gap-2 border-2 border-[#98a2b3] rounded-[96px] py-[10px] px-[12px]">
              <img src={images.NigerianFlag} alt="" className="rounded-full w-5 h-5" />
              <p className="text-gray-500">NG</p>
              <SlArrowDown fill="gray" size={10} />
            </div>

          <IoClose
              className="absolute top-5 right-5 text-[rgb(68,0,102)] cursor-pointer"
              size={35}
              onClick={() => setIsOpen(false)}
            />
         </div>

          <div className="flex flex-col gap-10">
            <div className="flex justify-between items-center">
                <p className="font-semibold">Product Suite</p>
                <MdOutlineKeyboardArrowRight className="md:hidden" size={25}/>
            </div>
            <div className="flex justify-between items-center">
                <p className="font-semibold">Resources</p>
                <MdOutlineKeyboardArrowRight className="md:hidden" size={25}/>
            </div>
            <p className="font-semibold">Pricing</p>
            <p className="font-semibold">Developers</p>
            <p className="font-semibold">Support</p>
          </div>

          <div className="flex flex-col mt-40 w-full">
            <button className=" text-center mb-4 bg-[rgb(68,0,102)] flex items-center justify-center gap-2 rounded-[96px] px-[14px] py-3 text-white font-medium w-full  text-sm">
              Login
            </button>
            <button className="flex items-center justify-center gap-2 rounded-[96px] px-[14px] py-3 font-medium bg-transparent text-black-100 border border-black-100 text-sm w-full text-center">
              Sign Up
            </button>
          </div>

        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
