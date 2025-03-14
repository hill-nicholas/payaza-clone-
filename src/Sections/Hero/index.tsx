import { images } from "../../images";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className=" bg-[rgb(243,230,255)] min-h-[40vh] lg:h-[75%]  pt-[90px] lg:pt-[210px] ">

        <p
        className="md:text-[48px] ml-5 lg:ml-40  3xl:max-w-[835px] text-[55px] lg:text-[56px] xl:text-[75px] font-bold lg:leading-[70px] xl:leading-[85px] text-[rgb(41,0,61)]"
        style={{ lineHeight: '1.1' }} 
        >
        The next generation of <br /> payment <br className="md:hidden" /> solutions.
        </p>


        <div className="translate-y-[50%] overflow-hidden">
            <Marquee speed={200} className="flex">
                <div className="flex items-center gap-[10px] ">
                    <img src={images.SlideImg1} className="w-[180px] lg:w-[auto] rounded-[20px]" alt="" />
                    <img src={images.SlideImg2} className="w-[170px] lg:w-[auto]" alt="" />
                    <img src={images.SlideImg3} className="w-[180px] lg:w-[auto]" alt="" />
                    <img src={images.SlideImg4} className="w-[300px] lg:w-[auto]" alt="" />

                    <img src={images.SlideImg1} className="w-[180px] lg:w-[auto] rounded-[20px]" alt="" />
                    <img src={images.SlideImg2} className="w-[170px] lg:w-[auto]" alt="" />
                    <img src={images.SlideImg3} className="w-[180px] lg:w-[auto]" alt="" />
                    <img src={images.SlideImg4} className="w-[300px] lg:w-[auto]" alt="" />

                    <img src={images.SlideImg1} className="w-[180px] lg:w-[auto] rounded-[20px]" alt="" />
                    <img src={images.SlideImg2} className="w-[170px] lg:w-[auto]" alt="" />
                    <img src={images.SlideImg3} className="w-[180px] lg:w-[auto]" alt="" />
                    <img src={images.SlideImg4} className="w-[300px] lg:w-[auto]" alt="" />

                    <img src={images.SlideImg1} className="w-[180px] lg:w-[auto] rounded-[20px]" alt="" />
                    <img src={images.SlideImg2} className="w-[170px] lg:w-[auto]" alt="" />
                    <img src={images.SlideImg3} className="w-[180px] lg:w-[auto]" alt="" />
                    <img src={images.SlideImg4} className="w-[300px] lg:w-[auto]" alt="" />

                    <img src={images.SlideImg1} className="w-[180px] lg:w-[auto] rounded-[20px]" alt="" />
                    <img src={images.SlideImg2} className="w-[170px] lg:w-[auto]" alt="" />
                    <img src={images.SlideImg3} className="w-[180px] lg:w-[auto]" alt="" />
                    <img src={images.SlideImg4} className="w-[300px] lg:w-[auto]" alt="" />


                </div>
            </Marquee>
        </div>

    </div>
  )
}

export default Hero