import { FaLongArrowAltDown } from "react-icons/fa";
import vector from "../assets/vector.svg";
import { useParams } from "react-router-dom";
import { useState } from "react";
import project1 from "../assets/project1.svg"

import Vote from "../components/Vote";

import DirectFund from "../components/DirectFund";

const ProjectDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
 
  



  return (
    <main className="bg-[#02080B]">
      <div
        className="bg-[#02080B]  bg-no-repeat w-[100%] md:w-[100%] lg:w-[100%]"
        style={{
          backgroundImage: `url(${vector})`,
          backgroundSize: "10%",
          backgroundPosition: "left top",
        }}
      >
        <div className="flex flex-col lg:flex-row md:flex-row items-center gap-4 px-8 lg:px-28 md:px-28 h-screen">
          <div className="lg:w-1/2 md:w-1/2 xl:w-1/2 2xl:w-1/2 w-full h-full mt-3 mx-auto text-center lg:px-0 md:px-0 ">
            {organization.map(
              (info) =>
                details.beneficiary === info[0] && (
                  <div>
                    <img
                      src={project1}
                      alt="projectphoto"
                      className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                    />
                    <div className="border border-white p-4 rounded-lg mt-2">
                      <h1 className="lg:text-[20px] md:text-[20px] text-[15px] font-serif text-left mt-2 my-4 text-white">
                        {info[2]}
                      </h1>
                    </div>
                  </div>
                )
            )}
            <h1 className="lg:text-[20px] md:text-[20px] text-[15px] font-serif text-left mt-2 my-4 text-white">
              More Information
            </h1>
            <h2 className="lg:text-[18px] md:text-[18px] text-[15px] font-serif text-left mt-2 my-4 text-white font-[400]">
              {details.proposalTopic}
            </h2>
            <p className="lg:text-[15px] md:text-[15px] text-[12px] text-justify text-white ">
              {details.description}
            </p>
            <h1 className="lg:text-[20px] md:text-[20px] text-[15px] font-serif text-left mt-2 my-4 text-white">
              Request
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-1/2 xl:w-1/2 2xl:w-1/2 w-full  bg-[#02080B] h-full">
            <div className="bg-[#0A1F28] rounded-xl p-4 my-4 mt-12">
              <h1 className="px-4 lg:px-2 md:px-0 lg:text-[24px] md:text-[24px] text-[20px] font-serif text-white font-bold mt-4 my-10">
                Poll Overview
              </h1>
              <h2 className="lg:px-0 md:px-0 lg:text-base md:text-base text-sm font-[500] my-6 flex justify-between flex-col lg:flex-row md:flex-row  w-[90%] mx-auto font-serif items-center text-center lg:text-left md:text-left text-[#D3D0C7] dark:text-[#D3D0C7]">
                Amount needed{" "}
                <span className="lg:base md:base text-sm font-[500] text-[#D3D0C7] ">
                  Balance left
                </span>
              </h2>
              <h2 className="lg:px-0 md:px-0 lg:text-base md:text-base text-sm font-[500] my-6 flex justify-between flex-col lg:flex-row md:flex-row  w-[90%] mx-auto font-serif items-center text-center lg:text-left md:text-left text-[#5BDEF3] dark:text-[#5BDEF3]">
              {Number(details.amount) / 1e18} TLOS
                <span className="lg:base md:base text-sm font-[500] ">
                  {" "}
                  {Number(details.balance) / 1e18 } TLOS
                </span>
              </h2>
              <h2 className="lg:px-0 md:px-0 lg:text-base md:text-base text-sm font-[400] my-6 flex justify-between flex-col lg:flex-row md:flex-row  mx-auto font-serif items-center text-center lg:text-left md:text-left text-[#D3D0C7] dark:text-[#D3D0C7]">
                This Project has been pushed for dao funding request
              </h2>
              <DirectFund id={id} />
            </div>
            <div className="bg-[#0A1F28] rounded-xl p-4 ">
              <h1 className="lg:text-[24px] md:text-[24px] text-[20px] font-serif text-white font-bold mt-4 my-4">
                Vote ({Number(details.votes)})
              </h1>
              <div className="flex gap-2 w-full">
                <Vote id={id} />
                <button className="bg-transparent w-[30%] py-2 text-white mb-2 rounded-xl border-white border flex gap-2  place-content-center">
                  {" "}
                  <FaLongArrowAltDown />
                  Downvote
                </button>
              </div>
              <h2 className="lg:px-0 md:px-0 lg:text-base md:text-base text-sm font-[400] my-6 flex justify-between flex-col lg:flex-row md:flex-row  mx-auto font-serif items-center text-center lg:text-left md:text-left text-[#D3D0C7] dark:text-[#D3D0C7]">
                Only donors who have the Dao membership right can vote
              </h2>
              <h2 className="lg:px-0 md:px-0 lg:text-base md:text-base text-sm font-[700] my-2 flex justify-between flex-col lg:flex-row md:flex-row  mx-auto font-serif items-center text-center lg:text-left md:text-left text-[#5BDEF3] dark:text-[#5BDEF3]">
                Voters (Dao Members)
              </h2>
              <ul className="text-white mx-4 font-[400] ">
                <li className="lg:text-[10px] md:text-[10px] text-[8px] list-disc mb-2 ">
                  0x35467f8ugedjufgfb
                </li>
                <li className="lg:text-[10px] md:text-[10px] text-[8px] list-disc mb-2 ">
                  0xU373yufjbeocrjfhb
                </li>
                <li className="lg:text-[10px] md:text-[10px] text-[8px] list-disc mb-2 ">
                  0x4rwghdfjevinkd
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
