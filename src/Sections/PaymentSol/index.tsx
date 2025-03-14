import { images } from "../../images";
import { useState, useEffect } from "react";
import AOS from "aos";

const faqs = [
    {
        question:"Build for any scale",
        answer:"No matter the level of scale you plan to achieve with your team, Payaza is built to scale as your business grows."
    },
    { 
      question: "Seamless integration", 
      answer: "Businesses can easily integrate their product and tools to our payment infrastructure." 
    },
    { 
      question: "Licensed & secured", 
      answer: "We meet up to official regulatory standard and enforce robust security measures to protect our customers." 
    },
    {   
      question: "Diversity & reliable service", 
      answer: "Payaza offers a wide range of payment solutions and consistently delivers reliable services to our customers." 
    },
    { 
      question: "Customisable setting", 
      answer: "Flexible options made available, allowing businesses to tailor the payment processing features and configurations to meet their specific needs." 
    }
];

const PaymentSolution = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col gap-16">
            <div className="flex items-center justify-center pt-20 lg:pt-40 flex-col gap-8">
                <p className="font-rebond text-black-100 leading-[40px] text-[40px] lg:text-[64px]  text-center font-bold lg:leading-[60px] tracking-[-0.8px] lg:tracking-[-1.28px]">
                    Payment <br className="md:hidden" /> solutions for <br /> global
                    <span className="relative font-medium underline mx-8 italic">
                        <img 
                            src={images.BgImgPurple} 
                            alt="" 
                            className="absolute left-[-2%] bottom-[-10%] w-[300px] scale-125 lg:w-[300px] h-auto object-contain -z-10"
                        />
                        <span className="underline">growth.</span>
                    </span>
                </p>
                <p className=" text-black-100 font-normal leading-[24px] px-[55px] md:px-[200px] text-base text-center mt-3">
                    We offer a wide range of services to help your business succeed in today's ever- <br  className="md:hidden" /> changing environment, regardless of your size, industry, or location.
                </p>
            </div>

            <div className="flex gap-8 items-center justify-center flex-col-reverse lg:flex-row">
                <div className="w-[80%] md:w-[70%] lg:w-[32%] py-2 lg:py-10">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300  w-[100%] lg:w-full">
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
                </div>

                <img src={images.PaymentSolImg} alt="" className="rounded-20px w-[80%] md:w-[70%] lg:w-auto" />
            </div>
        </div>
    );
};

export default PaymentSolution;
