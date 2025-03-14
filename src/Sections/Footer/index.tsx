import { IoLogoInstagram } from "react-icons/io"
import { images } from "../../images"
import { RiTwitterXFill } from "react-icons/ri"
import { TbBrandFacebook } from "react-icons/tb"
import { AiOutlineYoutube } from "react-icons/ai"
import { LiaLinkedin } from "react-icons/lia"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

const Footer = () => {
  return (
    <div className="bg-[#F2F9EF] md:px-[60px] xl:px-[118px] 3xl:px-[8.1%] mt-8 xl:mt-0 px-6 md:pt-20 md:pb-[49px] py-10 flex flex-col justify-center gap-32 items-center ">

        <div className="flex flex-col items-center justify-center w-full">
            <p className="text-[40px] leading-[40px] tracking-[-0.8px] text-[rgb(41,0,61)] lg:text-5xl lg:leading-none text-center font-bold w-[320px] lg:w-[500px] lg:max-w-[500px]">Enjoy Reliable <br /> Payment Solutions.</p>
            <p className="text-center text-[rgb(68,0,102)] text-base font-normal leading-[24px] w-[318px] md:w-[70%] lg:w-[60%] lg:max-w-[645px] mt-7">Our solutions are designed to elevate your operations, maximize growth, and achieve success. Discover how we can empower your transformation today.</p>
            <div className="flex items-center justify-center gap-5 pt-5">
                <button className="rounded-[88px] px-6 py-4 bg-[rgb(68,0,102)] block w-max text-white font-semibold">Get Started</button>
                <button className="font-medium text-base leading-[24px] px-6 py-4 rounded-[88px] border border-black-100 ">Contact Sales</button>
            </div>
        </div>

        <img src={images.FooterImg} alt="" className="w-[95%]" />


        <div className="md:flex-row flex-col gap-5 w-full lg:justify-between">


            <div className="w-[95%] md:w-[95%] lg:w-[50%] flex md:flex-row flex-wrap lg:flex-nowrap md:justify-between">


                <div className="flex md:flex-col justify-between md:justify-start md:items-start items-center py-4 gap-1">
                    <p className="font-semibold">Products</p>
                    <MdOutlineKeyboardArrowRight className="md:hidden" size={25} />
                    <div className="md:flex hidden flex-col gap-1">
                        <p>Payout</p>
                        <p>Collections</p>
                        <p>Checkout Demo</p>
                    </div>
                </div>



                <div className="flex md:flex-col justify-between md:justify-start md:items-start items-center py-4 gap-1">
                    <p className="font-semibold">Company</p>
                    <MdOutlineKeyboardArrowRight className="md:hidden" size={25}/>
                    <div className="md:flex hidden flex-col gap-1">
                        <p>About Us</p>
                        <p>Pricing</p>
                    </div>
                </div>


                <div className="flex md:flex-col justify-between md:justify-start md:items-start items-center py-4 gap-1">
                    <p className="font-semibold">Learn & Resources</p>
                    <MdOutlineKeyboardArrowRight className="md:hidden" size={25} />
                    <div className="md:flex flex-col gap-1 hidden">
                        <p>Support</p>
                        <p>Blog</p>
                        <p>Developers</p>
                        <p>Status</p>
                        <p>FAQs</p>
                    </div>
                </div>


                <div className="flex md:flex-col justify-between md:justify-start md:items-start items-center py-4 gap-1">
                    <p className="font-semibold">Security</p>
                    <MdOutlineKeyboardArrowRight className="md:hidden" size={25}/>
                    <div className="md:flex flex-col gap-1 hidden ">
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                        <p>ESG Policy</p>
                    </div>
                </div>


            </div>

	        <div className="rounded-[16px] bg-[rgb(27,0,41)] px-6 py-8 w-[95%] mt-10 lg:w-[45%] h-max">
                <p className="text-sm leading-[16px] font-normal font-roobert text-[rgb(255,255,255)]">Join our exclusive newsletter community and receive our latest updates, news and exclusive offers!</p>
                <div className="mt-5 flex-col lg:flex-row gap-5 items-center justify-between">
                    <input type="text" placeholder="Email address here" className="border border-[#D0D5DD] placeholder:text-[rgb(255,255,255)] text-[rgb(255,255,255)] py-3 px-4 rounded-[104px] w-full lg:w-[80%]" />
                    <button className=" text-center px-[14px] py-3 bg-[rgb(68,0,102)] flex items-center gap-2 rounded-[96px] text-white font-medium lg:w-max w-full text-sm mt-5 lg:mt-0  ">Subscribe</button>
                </div>
            </div>

        </div>


        <hr className="w-full text-gray-200" />

        <div className="flex gap-8 self-start flex-wrap">
            <div className="flex items-center gap-2"><IoLogoInstagram size={30} /> Instagram</div>
            <div className="flex items-center gap-2"><RiTwitterXFill size={30} />( Formerly Twitter )</div>
            <div className="flex items-center gap-2"><TbBrandFacebook size={30}  />Facebook</div>
            <div className="flex items-center gap-2"><AiOutlineYoutube size={30} /> Youtube</div>
            <div className="flex items-center gap-2"><LiaLinkedin size={30}  /> LinkedIn</div>
        </div>
        <div className="flex flex-col gap-10 items-center w-full">
            <hr className="w-[30%] text-gray-200"/>
            <p className="text-sm text-center">Payaza Africa Limited is fully licensed by the Central Bank of Nigeria.</p>
            <p className="text-sm">© 2025 Payaza Africa- All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer