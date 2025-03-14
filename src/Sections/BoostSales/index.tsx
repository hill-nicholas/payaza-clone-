import { images } from "../../images"
import { useState, useEffect } from "react";
import AOS from "aos";


const faqs = [
    {
        question:"Secure simplicity",
        answer:"Your peace of mind is our priority – fortified protection for your financial data."
    },
    { 
      question: "Effortless efficiency", 
      answer: "Integration is quick and straightforward, reducing downtime and allowing businesses to start processing payments faster." 
    },
    { 
      question: "User-centricity", 
      answer: "Customers and users experience smooth, uninterrupted transactions." 
    },
];

const BoostSales = () => {

 const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


  return (
    <div className="flex flex-col gap-14 pt-20 lg:pt-28">
        <div className="flex flex-col items-center pt-20 gap-8 justify-center " data-aos="fade-up">
            <p className="font-rebond text-black-100 leading-[40px] text-[40px] lg:text-[64px] text-center font-bold lg:leading-[60px] tracking-[-0.8px] lg:tracking-[-1.28px]">
                        <span className="relative font-medium underline mx-3 lg:mx-8 italic">
                            <img 
                                src={images.BgImgOrange} 
                                alt="" 
                                className="absolute left-[-2%] bottom-[-5%] w-[300px] scale-125 lg:w-[300px] h-auto object-contain -z-10"
                            />
                            <span className="underline">Boost</span>
                        </span>
                        sales <br className="lg:hidden" /> with our <br /> checkout <br className="lg:hidden" /> solution.
            </p>
            <p className=" text-black-100 font-normal leading-[24px] text-base text-center mt-3 px-16 md:px-40 lg:px-0">
            Optimize the way your business receives payments online with Payaza Checkout. Receiving <br className="hidden lg:block" /> payments globally is easy with our secure, and customizable Checkout solution.        </p>
        </div>

        <div className="flex justify-center gap-8 items-center flex-col-reverse lg:flex-row" data-aos="fade-up">

            <div className="lg:w-[32%] w-[90%] md:w-[70%] py-10">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-gray-300 w-full">
                                <button
                                    className={`w-full text-left py-9 text-lg transition-all duration-300 text-[24px] font-rebond font-bold leading-[24px] m-0 tracking-[-0.24px] ${
                                        activeIndex === index ? "text-[#406]" : "text-gray-400"
                                    }`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    {faq.question}
                                </button>

                                {activeIndex === index && (
                                    <div className="py-2">
                                        <p className="text-[#406]" data-aos="fade-up">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                <button className="mt-[40px] w-[200px] h-[56px] rounded-[100px] bg-[#29003D] cursor-pointer flex justify-center items-center font-rebond text-[16px] font-semibold text-[#fff]" >
                    Try Checkout
                </button>

                </div>

            <video 
                src={images.BoostSaleVid} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="lg:w-[30%] md:w-[70%] w-[90%] rounded-3xl"
            ></video>
        </div>
    </div>
  )
}

export default BoostSales