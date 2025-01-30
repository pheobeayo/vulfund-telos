import vector from "../../assets/vector.svg";
import Banner from "../../components/Banner";
import { GiReceiveMoney } from "react-icons/gi";
import useAnalytic from "../../hooks/useAnalytic";

const AllDonations = () => { 
const { allDonation } = useAnalytic()

  return (
    <main className="bg-[#02080B]">
      <Banner />
      <section
        className="bg-[#02080B] bg-no-repeat "
        style={{
          backgroundImage: `url(${vector})`,
          backgroundSize: "10%",
          backgroundPosition: "left top",
        }}
      >
        <div className="lg:w-[95%] md:w-[95%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0">
          <h2 className="px-4 lg:px-0 md:px-0 lg:text-[28px] md:text-[28px] text-[20px] font-[700]  mx-auto font-montserrat items-center text-center lg:text-left md:text-left text-white ">
            All Donations{" "}
          </h2>
        </div>
      </section>
      <section className="bg-white lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white bg-[#191F1C]/5 rounded-xl border shadow-lg">
    <div className="flex lg:flex-row md:flex-row flex-col gap-4 items-center">
        <div>
          <GiReceiveMoney className="text-3xl" />
        </div>
          <h1 className="text-left text-[12px] font-montserrat">
            {" "}
            Total Donations(YTD)
            <br />
            {Number(allDonation) / 1e18} TLOS
          </h1>
      </div>
      </section>
    </main>
  );
};

export default AllDonations;
