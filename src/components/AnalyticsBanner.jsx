import { RiRefund2Line } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import vector from "../assets/vector.svg";


const Banner = () => {
  
 
  
  return (
    <section className=" bg-[#02080B]">
      <div
        className=" bg- lg:w-[100%] md:w-[100%] w-[100%] mx-auto text-center p-8 lg:px-0 md:px-0 border border-white rounded-2xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${vector})`,
          backgroundSize: "cover",
        }}
      >
        <h1 className=" text-white lg:text-[24px] md:text-[24px] text-[16px] font-montserrat font-[700] my-4">
          Summary
        </h1>
        <div className=" w-[100%] lg:w-[95%] md:w-[95%] px-4 flex lg:flex-row md:flex-row flex-col justify-between items-center my-10 flex-wrap">
          <div className="bg-[#BFD7D9] lg:w-[32%] md:w-[32%] w-[100%] p-4  border-[#BFD7D9] rounded-xl border shadow-lg">
            <div className=" flex lg:flex-row md:flex-row flex-col gap-4 items-center">
              <div>
                <RiRefund2Line className="text-3xl" />
              </div>
              <div>
                <h1 className="text-left text-[12px] font-montserrat text-[#030014]">
                  Total Counts Circle
                  <br /> {Number}
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-[#B0D1D2] lg:w-[32%] md:w-[32%] w-[100%] p-4  border-[#B0D1D2] rounded-xl border shadow-lg">
            <div className="flex lg:flex-row md:flex-row flex-col gap-4 items-center">
              <div>
                <RiRefund2Line className="text-3xl" />
              </div>
              <div>
                <h1 className="text-left text-[12px] font-montserrat text-[#030014]">
                  {" "}
                  Vote Duration
                  <br /> {Number/ 86400}Days
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-[#D8FAE7] lg:w-[32%] md:w-[32%] w-[100%] p-4  border-[#D8FAE7] rounded-xl border shadow-lg">
            <div className="flex lg:flex-row md:flex-row flex-col gap-4 items-center">
              <div>
                <GiReceiveMoney className="text-3xl" />
              </div>
              <div>
                <h1 className="text-left text-[12px] font-montserrat text-[#030014]">
                  {" "}
                  Total Donations(YTD)
                  <br />
                  {Number/ 1e18} Avax
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] lg:w-[95%] md:w-[95%] px-4 flex lg:flex-row md:flex-row flex-col justify-between items-center my-10 flex-wrap">
          <div className="bg-[#D8FAE7] lg:w-[32%] md:w-[32%] w-[100%] p-4  border-[#D8FAE7]  rounded-xl border shadow-lg">
            <div className="flex lg:flex-row md:flex-row flex-col gap-4 items-center">
              <div>
                <RiRefund2Line className="text-3xl" />
              </div>
              <div>
                <h1 className="text-left text-[12px] font-montserrat text-[#030014]">
                  {" "}
                  Total Counts of Signup
                  <br /> {Number}
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-[#BFD7D9] lg:w-[32%] md:w-[32%] w-[100%] p-4  border-[#BFD7D9] rounded-xl border shadow-lg">
            <div className="flex lg:flex-row md:flex-row flex-col gap-4 items-center">
              <div>
                <GiReceiveMoney className="text-3xl" />
              </div>
              <div>
                <h1 className="text-left text-[12px] font-montserrat text-[#030014]">
                  {" "}
                  Dao Member Requirements
                  <br /> {Number / 1e18} Avax
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-[#B0D1D2] lg:w-[32%] md:w-[32%] w-[100%] p-4  border-[#B0D1D2] rounded-xl border shadow-lg">
            <div className="flex lg:flex-row md:flex-row flex-col gap-4 items-center">
              <div>
                <RiRefund2Line className="text-3xl" />
              </div>
              <div>
                <h1 className="text-left text-[12px] font-montserrat text-[#030014]">
                  {" "}
                  Total Dao Members
                  <br /> {Number}{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#B0D1D2] mx-4 lg:w-[32%] md:w-[32%] w-[100%] p-4  border-[#B0D1D2] rounded-xl border shadow-lg">
          <div className="flex lg:flex-row md:flex-row flex-col  gap-4 items-center">
            <div>
              <RiRefund2Line className="text-3xl" />
            </div>
            <div>
              <h1 className="text-left text-[12px] font-montserrat text-[#030014]">
                {" "}
                Total Proposals
                <br /> {Number}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
