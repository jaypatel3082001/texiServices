import React, { useEffect, useState } from 'react'
import  useWindowSize  from './useWindowSize'
import { BottomSvg, FacebookSvg, InstaSvg, LinkdinSvg, TweeterSvg } from './Svg';

function Footer() {
    const hederLinks = [
      {
        name: "Business Insurance",
        // svg: <BagSvg />,
      },
      {
        name: "Personal Insurance",
        // svg: <UserSvg />,
      },
      {
        name: "Benefits & HR",
        // svg: <DoctorSvg />,
      },
      {
        name: "Financial Services",
        // svg: <UmbrellaSvg />,
      },
    ];
    const { width } = useWindowSize();
    // console.log(width, "ghhg");
    // const [isMobile, setIsmobile] = useState<Boolean>(false);
    const [respFooter1, setRespFooter1] = useState("1");
    const [respFooter2, setRespFooter2] = useState("1");
    const [respFooter3, setRespFooter3] = useState("1");
    const [respFooter4, setRespFooter4] = useState(false);
    const [opnefooter1, setOpenfooter1] = useState();
    const [opnefooter2, setOpenfooter2] = useState();

    useEffect(() => {
      if (width > 769) {
        setRespFooter1("1");
        setRespFooter2("1");
        setRespFooter3("1");
      } else {
        setRespFooter1("2");
        setRespFooter2("2");
        setRespFooter3("2");
      }
    }, [width]);
    // console.log(isMobile, "isMobile");
    // useEffect(() => {
    //   if (isMobile === true) {
    //     setRespFooter1(false);
    //     setRespFooter2(false);
    //     setRespFooter3(false);
    //     setRespFooter4(false);
    //   }
    // }, []);
    const handleRespFooter1 = () => {
      console.log(respFooter1);
      if (respFooter1 === "2") {
        setRespFooter1("3");
      } else {
        setRespFooter1("2");
      }
    };
    const handleRespFooter2 = () => {
      // if (isMobile === true) {
      console.log(respFooter2);
      if (respFooter2 === "2") {
        setRespFooter2("3");
      } else {
        setRespFooter2("2");
      }
      // }
    };
    const handleRespFooter3 = () => {
      // if (isMobile === true) {
      console.log(respFooter3);
      if (respFooter3 === "2") {
        setRespFooter3("3");
      } else {
        setRespFooter3("2");
      }
      // }
    };
    const handleRespFooter4 = () => {
      // if (isMobile === true) {

      setRespFooter4(!respFooter4);
      // }
    };
    const handleFottercont = () => {
      setOpenfooter1(!opnefooter1);
    };
    const handleFottercont2 = () => {
      setOpenfooter2(!opnefooter2);
    };
  return (
    <footer className="bg-custom-dark text-[#FFC107] xl:py-5  flex justify-center max-[768px]:pt-8 max-[700px]:pb-0">
    <div className="flex xl:min-w-[1312px] max-xl:w-full max-xl:px-10  max-[600px]:px-4 justify-center max-[768px]:mt-0">
      <div className="flex flex-col justify-between w-full mt-7 max-lg:flex-col font-inter max-[700px]:flex-col-reverse max-[700px]:mt-0">
        <div className="flex justify-between mb-10 items-center max-[700px]:justify-center max-[700px]:mt-10">
          <div className="text-center lg:text-left max-[700px]:hidden">

          </div>
          {/* rr


           <div className="text-[#FFC107] text-[20px] mr-3 flex items-center max-xl:hidden">
           <ul className="flex">
            <li className="hover:text-[#89bc21] cursor-pointer px-8"><a href="tel:+732-380-0900" target="_blank" >732-380-0900</a></li>
            <li className="hover:text-[#89bc21] cursor-pointer border-r border-l border-[#89bc21] px-8"><a href="mailto:benefitsinquiries@worldinsurance.com" target="_blank" >benefitsinquiries@worldinsurance.com</a></li>
            <li className="hover:text-[#89bc21] cursor-pointer pl-8"><a href="https://www.worldinsurance.com/" target="_blank" >worldinsurance.com</a></li>

           </ul>

            </div>
          */}
          <div className="flex max-lg:my-3 max-[584px]:justify-center">
               {/* <div  className="text-[#FFC107] text-[20px] mr-3 flex items-center max-[814px]:hidden">
                <a href="https://www.worldinsurance.com/" target="_blank" className="hover:text-[#89bc21] cursor-pointer">worldinsurance.com</a>
               </div> */}

            <div className="flex max-lg:justify-center max-[430px]:flex-row">
              <a href="https://www.facebook.com/" target="_blank" className="rounded-full text-[#FFC107] border border-[#FFC107] p-3 mx-3 max-[768px]:my-3">
                <FacebookSvg />
              </a>
              <a href="https://x.com/" target="_blank" className="rounded-full text-[#FFC107] border border-[#FFC107] p-3 mx-3 max-[768px]:my-3">
                <TweeterSvg />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" className="rounded-full text-[#FFC107] border border-[#FFC107] p-3 mx-3 max-[768px]:my-3">
                <LinkdinSvg />
              </a>
              <a href="https://www.instagram.com/" target="_blank" className="rounded-full text-[#FFC107] border border-[#FFC107] p-3 mx-3 max-[768px]:my-3">
                <InstaSvg />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10 max-[1024px]:flex-col">
          <div className="xl:w-[864px]  w-[700px] flex flex-col pr-5 max-lg:w-full max-[768px]:pr-0 max-[1024px]:w-full max-[1024px]:pr-0">
            <div className="flex justify-between w-full items-center max-[488px]:flex-col">
              <span className="pr-5 w-full max-[488px]:text-center max-[488px]:mb-2">
                © 2024 texi sydney services
              </span>

              {/* <span className="px-5 border-r border-l border-white text-center w-[50%] max-[488px]:border-l-0 max-[488px]:border-r-0 max-[488px]:w-full max-[488px]:my-2 hover:text-[#89bc21] cursor-pointer">
                Privacy Policy
              </span>
              <span className="pl-5 text-center w-[50%] max-[488px]:w-full max-[488px]:mt-2 hover:text-[#89bc21] cursor-pointer">
                Do not sell my info
              </span> */}
              {/* </div> */}
            </div>
            <div className="my-8">
              <span className="leading-[130%] text-[16px] tracking-[0.42px] font-normal text-[#FFC107] break-words overflow-hidden">
              All information and content on this website are provided in accordance with applicable laws and regulations and are offered "as is," without any guarantees regarding accuracy, availability, or service reliability. The taxi service company makes no promises about uninterrupted or error-free rides and assumes no responsibility for delays or disruptions. Use of the service and website is at your own discretion and risk. Please review our additional terms and conditions linked below for further details on service use, limitations, and responsibilities.
              </span>
            </div>
            <div className="mb-5">
              <div className="flex justify-between border-t border-white py-4 cursor-pointer"  onClick={handleFottercont}>
                <span className="font-semibold text-[#FFC107] text-base hover:text-[#89bc21]">
                  Learn more about our terms and conditions
                </span>
                <button

                  className={`transition-transform text-base duration-200 ease-linear opacity-50 text-[#FFC107] ${opnefooter1 ? "rotate-180": "rotate-0"}`}
                >
                  <BottomSvg />
                </button>
              </div>
              <div
                className={`${
                  opnefooter1 ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
                } overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <span className="leading-[130%] text-[16px] tracking-[0.42px] font-normal text-[#FFC107] break-words">
           <ul>
            <li className='my-3'>
            <b>Booking and Cancellations:</b> All bookings are subject to vehicle availability. Customers can cancel or modify their booking up to a specified period before the scheduled pickup time without incurring fees. Cancellations made after this period may result in charges.
            </li>
            <li className='my-3'>
            <b>Fares and Payments:</b> Fares are calculated based on distance, time, and applicable surcharges. All payments must be made at the end of the journey through accepted payment methods, including cash, card, or mobile payments.
            </li>
            <li className='my-3'>
            <b>Passenger Responsibility:</b> Passengers must wear seatbelts at all times and follow driver instructions for safety. Damage to the vehicle caused by a passenger may result in a cleaning or repair fee.
            </li>
            <li className='my-3'>
            <b>Service Limitations:</b> The service reserves the right to refuse a booking due to unsafe or unsuitable conditions, including severe weather or customer misconduct.
            </li>
            <li className='my-3'>
            <b>Liability:</b> The company is not liable for delays caused by traffic, weather, or other unforeseen circumstances. However, every effort will be made to ensure timely service.
            </li>
           </ul>
                </span>
              </div>
              <div className="flex justify-between py-4 border-white border-t cursor-pointer"  onClick={handleFottercont2}>
                <span className="font-semibold text-[#FFC107] text-base hover:text-[#89bc21]">
                  Legal
                </span>
                <button

                  className={`transition-transform duration-200 text-base ease-linear opacity-50 text-[#FFC107] ${opnefooter2 ? "rotate-180": "rotate-0"}`}
                >
                  <BottomSvg />
                </button>
              </div>
              <div
                className={`${
                  opnefooter2 ? "min-h-56 opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <span className="leading-[130%] text-[16px] tracking-[0.42px] text-[#FFC107] break-words font-normal">

                  When running a taxi service, it’s important to comply with legal regulations to ensure safety and trust for both drivers and passengers. Key legal aspects include acquiring appropriate licenses, such as a taxi driver’s license and vehicle registration as a commercial vehicle. Taxi services must also comply with local laws regarding insurance coverage, ensuring that both drivers and passengers are protected in case of accidents. Furthermore, safety regulations require regular vehicle inspections to maintain a high standard of service. Operators should also abide by fare regulations and ensure transparent pricing for customers. Compliance with privacy laws is crucial when handling customer data for bookings or payments.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col pl-8 max-[1024px]:pl-0 max-[1024px]:flex-row max-[1024px]:justify-center max-[1024px]:w-full justify-between  max-[768px]:justify-around max-[584px]:flex-col-reverse h-[304px]">
            <div className="flex basis-[70%] grow-0 shrink-0 justify-end max-lg:my-3 max-lg:justify-center h-[304px] max-[1024px]:justify-center ">
              <div className="bg-[#33229f] text-[#FFC107] flex flex-col items-center justify-center p-5 rounded-md max-[430px]:w-full">
                <h1 className="text-[32px] mb-4 uppercase text-start w-full">
                  Subscribe To <br /> World’s <br /> New Traveller
                </h1>
                <div className="w-80 mb-4 max-[445px]:w-full">
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="bg-[#6A75BB] text-[#FFC107] rounded p-2 w-full h-12"
                    aria-label="Email Address"
                  />
                </div>
                <button className="bg-white border rounded uppercase font-bold text-[#111C55] p-2 w-80 h-12 flex items-center justify-center max-[430px]:w-full">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  </footer>
  )
}

export default Footer