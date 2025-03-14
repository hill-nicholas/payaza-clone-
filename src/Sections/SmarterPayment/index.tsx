import { images } from "../../images"

const SmarterPayment = () => {
  return (
        <div className="flex flex-col gap-16 ">
            <div className="flex items-center justify-center pt-40 flex-col gap-8" data-aos="fade-up">
                <p className="font-rebond text-black-100 leading-[40px] text-[40px] lg:text-[64px] text-center font-bold lg:leading-[60px] tracking-[-0.8px] lg:tracking-[-1.28px]">
                    <span className="relative font-medium underline mx-3 lg:mx-8 italic">
                        <img 
                            src={images.BgImgBlue} 
                            alt="" 
                            className="absolute left-[-2%] bottom-[-10%] w-[300px] scale-125 lg:w-[300px] h-auto object-contain -z-10"
                        />
                        <span className="underline">Smarter</span>
                    </span>
                    payment <br /> products and  <br className="lg:hidden" /> solutions
                </p>
                <p className=" text-black-100 font-normal leading-[24px] text-base text-center mx-12 md:mx-36 lg:mx-0 mt-3">
                    Streamline your financial operations with Payaza’s instant payouts, global collections, short-term financing, and <br className="hidden lg:block" /> secure tuition fee payments.
                </p>
            </div>

            <div className="flex items-center justify-center flex-col gap-2 w-full">
                <div className="flex gap-4 lg:gap-2 justify-center items-center flex-col lg:flex-row" data-aos="fade-up">
                    <div className="rounded-[32px] border border-[#E5E7EB] lg:border-none bg-[#F9FAFB] p-8 pt-[43px] flex flex-col gap-[20px] w-[90%] md:w-[80%] lg:w-[40%]" data-aos="fade-up">
                        <p className="font-bold text-2xl leading-[24px] tracking-[-0.24px]">Payouts</p>
                        <video 
                            src={images.SmartPayVid1} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="w-[273px] h-[228px]"
                        ></video>
                        <p className="text-base leading-24px mt-[17px]">Manage your funds efficiently with Payaza's instant payouts, keeping your business fluid and dynamic. With our innovative platform, you can effortlessly manage bulk and instant payouts to your recipients, saving time and streamlining your financial operations.</p>
                        <button className="bg-[rgb(68,0,102)] flex items-center gap-2 rounded-[96px] px-[14px] py-3 text-white font-medium w-max text-sm">Learn More</button>
                    </div>  
                    <div className="rounded-[32px] border border-[#E5E7EB] lg:border-none bg-[#F9FAFB] p-8 pt-[43px] flex flex-col gap-[20px] w-[90%] md:w-[80%] lg:w-[40%]" data-aos="fade-up">
                        <p className="font-bold text-2xl leading-[24px] tracking-[-0.24px]">Collections</p>
                        <video 
                            src={images.SmartPayVid2} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="w-[273px] h-[228px]"
                        ></video>
                        <p className="text-base leading-24px mt-[17px]">Payaza's Collection offers a comprehensive solution for businesses to instantly receive payments from customers globally, utilizing cutting-edge technology and card acquiring to transform payment collection internationally.</p>
                        <button className="bg-[rgb(68,0,102)] flex items-center gap-2 rounded-[96px] px-[14px] py-3 text-white font-medium w-max text-sm">Learn More</button>
                    </div>  
                </div>
                <div className="flex gap-4 lg:gap-2 justify-center flex-col items-center lg:flex-row" >
                    <div className="rounded-[32px] border border-[#E5E7EB] lg:border-none bg-[#F9FAFB] p-8 pt-[43px] flex flex-col gap-[20px] w-[90%] md:w-[80%] lg:w-[40%]" data-aos="fade-up">
                        <p className="font-bold text-2xl leading-[24px] tracking-[-0.24px]">Payaza Boost</p>
                        <video 
                            src={images.SmartPayVid3} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="w-[273px] h-[228px]"
                        ></video>
                        <p className="text-base leading-24px mt-[17px]">A chance to secure short-term financing. We provide small and medium enterprises with a loan amounting to up to 25% of their average monthly collections with us over the previous three months.</p>
                        <button className="bg-[rgb(68,0,102)] flex items-center gap-2 rounded-[96px] px-[14px] py-3 text-white font-medium w-max text-sm">Learn More</button>
                    </div>  
                    <div className="rounded-[32px] border border-[#E5E7EB] lg:border-none bg-[#F9FAFB] p-8 pt-[43px] flex flex-col gap-[20px] w-[90%] md:w-[80%] lg:w-[40%]" data-aos="fade-up">
                        <p className="font-bold text-2xl leading-[24px] tracking-[-0.24px]">Stride by Payaza</p>
                        <video 
                            src={images.SmartPayVid4} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="w-[273px] h-[228px]"
                        ></video>
                        <p className="text-base leading-24px mt-[17px]">Fast, secure, and effortless tuition fee payments for international students. Start your seamless academic journey with Stride by Payaza. Embrace the future of education payments now.</p>
                        <button className="bg-[rgb(68,0,102)] flex items-center gap-2 rounded-[96px] px-[14px] py-3 text-white font-medium w-max text-sm">Learn More</button>
                    </div>  
                </div>
            </div>

        </div>
  )
}

export default SmarterPayment