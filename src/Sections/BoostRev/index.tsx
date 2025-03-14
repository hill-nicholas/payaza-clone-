import { images } from "../../images"

const BoostRevenue = () => {
  return (
    <div className="flex flex-col items-center pt-28 gap-14" data-aos="fade-up">
        <p className="font-rebond text-black-100 leading-[40px] text-[40px] lg:text-[64px] text-center font-bold lg:leading-[60px] tracking-[-0.8px] lg:tracking-[-1.28px]">
            Boost 
            <span className="relative font-medium underline mx-2 lg:mx-8 italic">
                <img 
                    src={images.BgImgGreen} 
                    alt="" 
                    className="absolute left-[-2%] bottom-[-5%] w-[300px] scale-125 lg:w-[300px] h-auto object-contain -z-10"
                />
                <span className="underline">revenue</span>
            </span> <br className="lg:hidden" />
            using our <br className="hidden lg:block" /> suite of <br className="lg:hidden"/> seamless & <br className="lg:hidden"/>  secure <br className="hidden lg:block" /> payment <br className="md-block lg:hidden" /> solutions.
        </p>


        <div className=" flex gap-5 lg:gap-1 w-full justify-center items-center flex-col-reverse lg:flex-row " data-aos="fade-up">
            <div className="bg-[rgb(41,0,61)] flex flex-col gap-1 py-5 px-6 lg:px-12 items-start lg:items-center text-white rounded-3xl  w-[90%] lg:w-[40%]">
                <p className="text-base font-bold text-white-100">Branches</p>
                <p className="text-white-100 text-2xl leading-[24px] md:text-3xl md:leading-[48px] xl:text-[40px] text-left font-bold tracking-[-0.24px] xl:tracking-[-0.8px] mt-4 mb-2">Multiple outlets, one payment <br /> dashboard.</p>
                <p className="text-white-100 text-base font-normal leading-[24px] mb-3">Doesn't matter where your business is located, you can manage <br /> collections and settlements from a single dashboard</p>
                <div className="flex lg:justify-between lg:items-center flex-col lg:flex-row gap-5 lg:gap-0">
                    <img src={images.StackedNotes} alt="" className="w-[400px]" />
                    <button className="rounded-[88px] py-3 px-6 border border-white-100 text-white-100 block w-max">
                        Get Started
                    </button>
                </div>           
            </div>
            <div className="flex items-center justify-center border border-[#cdd0d8] rounded-3xl w-[85%] md:w-[60%] lg:w-auto py-24 lg:py-0">
                <img src={images.StackedMockup} className="w-[360px] lg:w-[470px]" alt="" />
            </div>
        </div>
    </div>
  )
}

export default BoostRevenue