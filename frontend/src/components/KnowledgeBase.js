import React, { useState } from "react";
import Navbar from "./Navbar";

function KnowledgeBase() {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <>
      <>
        <div className="bg-[#FFF5E7]  h-[3000px]">
          <div className=" flex justify-around pt-12 items-center">
            <h1 className="text-left text-6xl font-bold leading-tight">
              Welcome to the Knowledge Base <br />{" "}
              <span className=" text-[24px] font-medium">
                Below are helpful tips and resources to keep your financial
                information secure
              </span>
            </h1>
            <span
              onClick={() => setOpenProfile((prev) => !prev)}
              className="relative authdisplay inline-block rounded-[50%] w-[124px] h-[124px] bg-black hover:scale-105 transition-all"
            >
              {openProfile && (
                <div className="absolute flex flex-col gap-4 text-center top-[115%] bg-white rounded-xl p-2 w-[124px] text-lg font-medium shadow-lg">
                  <p className="">Name</p>
                  <p className=" rounded-md hover:bg-[#f0f0f0]">Settings</p>
                  <p className=" rounded-md hover:bg-[#f0f0f0] font-bold">
                    Sign Out
                  </p>
                </div>
              )}
            </span>
          </div>
          <div className=" mt-10 px-10 flex justify-around">
            <a
              href="https://www.ncoa.org/article/22-tips-for-seniors-to-avoid-scams"
              target="_blank"
              className="shadow-md   rounded-3xl h-auto w-[40%] bg-white text-left flex-col align-middle hover:scale-105 transition-all"
            >
              <div className="mx-8 flex-col items-center justify-center content-center center my-4">
                <p className="text-[#624E41] font-mono">STATISTICS</p>
                <h1 className="Balance mt-1 font-bold text-2xl">
                  The Elderly are increasingly becoming victim to financial
                  crime
                </h1>
                <img
                  className=" mt-2 h-[164px] rounded-xl object-cover w-[1000%]"
                  src="https://pix4free.org/assets/library/2021-12-16/originals/credit_cards.jpg"
                ></img>
                <p className="my-2">
                  Total losses reported to the Internet Crime Complaint Center
                  by elderly victims increased{" "}
                  <span className="font-bold">84%</span> from 2021. Here are
                  some resources to stay safe.
                </p>
              </div>
            </a>
            <a
              href="https://www.ssa.gov/benefits/calculators/"
              target="_blank"
              className="shadow-md  rounded-3xl h-auto w-[40%] bg-white text-left flex-col align-middle hover:scale-105 transition-all"
            >
              <div className="mx-8 flex-col items-center justify-center content-center center my-4">
                <p className="text-[#624E41] font-mono">RESOURCES</p>
                <h1 className="Balance mt-1 font-bold text-2xl">
                  Going to retire? Calculate your Retirement Benefits Online!
                </h1>
                <img
                  className=" mt-2 h-[164px] rounded-xl object-cover w-[1000%]"
                  src="https://ssa.tools/_app/immutable/assets/taxes.uPBVFXhx.jpg"
                ></img>
                <p className="my-2">
                  The United States Government provides free online tools to
                  calculate your social security benefits. Calculate your full
                  retirement age, GPO, and survivors benifits today!
                </p>
              </div>
            </a>
          </div>

          <div className=" mt-10 px-10 flex justify-around">
            <a
              href="https://crr.bc.edu/single-retirees-of-color-face-greatest-financial-hardship/"
              target="_blank"
              className="shadow-md   rounded-3xl h-auto w-[55%] bg-white text-left flex-col align-middle hover:scale-105 transition-all"
            >
              <div className="mx-8 flex-col items-center justify-center content-center center my-4">
                <p className="text-[#624E41] font-mono">INEQUITY</p>
                <h1 className="Balance mt-1 font-bold text-2xl">
                  Single Minority Retirees of Color face the Greatest Financial
                  Insecurities, report shows
                </h1>
                <img
                  className=" mt-2 h-[200px] rounded-xl object-cover w-[1000%]"
                  src="https://naacp.org/sites/default/files/styles/hero_desktop/public/images/iStock-1045045764.webp?itok=uMgraDCg"
                ></img>
                <p className="my-2">
                  Single minority retirees are in a far worse place financially
                  than their white counterparts. According to a study from the
                  University of Massachussets at Boston,{" "}
                  <span className="font-bold">
                    70% of single Latino men over 65
                  </span>{" "}
                  are financially insecure. This is as opposed to the only 43%
                  of White counterparts. Learn more about this data by clicking
                  this box.
                </p>
              </div>
            </a>
            <a
              href="https://www.troweprice.com/personal-investing/resources/insights/closing-the-retirement-savings-gap-for-minorities.html"
              target="_blank"
              className="shadow-md  rounded-3xl h-auto w-[25%] bg-white text-left flex-col align-middle hover:scale-105 transition-all"
            >
              <div className="mx-8 flex-col items-center justify-center content-center center my-4">
                <p className="text-[#624E41] font-mono">TIPS</p>
                <h1 className="Balance mt-1 font-bold text-2xl">
                  Close the gap. Steps to take to end minority retirement
                  disparities
                </h1>
                {/* <img
                  className=" mt-2 h-[164px] rounded-xl object-cover w-[1000%]"
                  src="https://ssa.tools/_app/immutable/assets/taxes.uPBVFXhx.jpg"
                ></img> */}
                <p className="my-2">
                  • <span className=" font-medium">Prioritize</span> retirement
                  savings.
                  <br />• Look into{" "}
                  <span className=" font-medium">employer-provided</span>{" "}
                  retirement plan.
                  <br />• Start as{" "}
                  <span className=" font-medium">early as possible</span> .
                  Don't delay your savings.
                  <br />
                  <br />
                  Learn more by clicking this box.
                </p>
              </div>
            </a>
          </div>

          <h1 className="mt-12 text-6xl font-bold leading-tight">
            {" "}
            <span className="text-[#624E41]">your employer </span> + Retirement
            Benifits
          </h1>
          <p className=" m-4 text-2xl font-medium leading-tight">
            Check to see if your employer offers any retirement benefits
          </p>

          <div className=" mt-10 px-10 flex justify-around">
            
            <input
              href="https://crr.bc.edu/single-retirees-of-color-face-greatest-financial-hardship/"
              target="_blank"
              className="shadow-md   rounded-3xl h-auto w-[55%] bg-white text-left flex-col align-middle hover:scale-105 transition-all"
            >


            </input>
          </div>

          <div className="relative">
            <Navbar />
          </div>
        </div>
      </>
    </>
  );
}

export default KnowledgeBase;
