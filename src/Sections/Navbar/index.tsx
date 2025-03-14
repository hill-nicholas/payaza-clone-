
import { RiArrowDropDownLine } from "react-icons/ri"
import { images } from "../../images"
import { SlArrowDown } from "react-icons/sl"
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center fixed top-0 lg:top-14 z-50">
      <div className="lg:bg-white/50 backdrop-blur-lg lg:w-[87%] w-full flex items-center justify-between p-4 px-5 lg:rounded-[72px] font-roobert border border-white/20">
        <img src={images.PayazaLogo} alt="" className="w-[95px] lg:w-auto" />

        <GiHamburgerMenu className="text-[rgb(68,0,102)] lg:hidden"  size={30}/>

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
    </div>
  );
};

export default Navbar;


