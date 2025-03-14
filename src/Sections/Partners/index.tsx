import { images } from "../../images"

const Partners = () => {
  return (
    <div className="pt-[150px] lg:pt-[200px] flex items-center flex-col gap-20 lg:gap-32">
        <div className="flex flex-col items-center gap-5"  data-aos="fade-up" data-aos-duration="1300" data-aos-easing="linear" >
            <p className="font-roobert relative text-black-100 txt-center text-base font-normal leading-[24px] uppercase mt-[40px]">We are trusted by 1000+ businesses</p>
            <div className="flex items-center justify-center gap-8 lg:gap-14  flex-wrap ">
                <img src={images.Partner1} alt="" className="w-28" />
                <img src={images.Partner2} alt="" className="w-28"/>
                <img src={images.Partner3} alt="" className="w-28"/>
                <img src={images.Partner4} alt="" className="w-28"/>
                <img src={images.Partner5} alt="" className="w-28"/>
                <img src={images.Partner6} alt="" className="w-28"/>
                <img src={images.Partner7} alt="" className="w-28"/>

            </div>
        </div>
        <img src={images.HeroPartner} alt="" className="rounded-[20px] w-[90%]" data-aos="fade-up" data-aos-duration="1300" data-aos-easing="linear" />
    </div>
  )
}

export default Partners