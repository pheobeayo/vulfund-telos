import { Link } from "react-router-dom";
import project2 from "../assets/project2.svg";

const FundingRequests = () => {
  

  return (
    <section className="bg-[#02080B]">
      <div className="lg:w-[95%] md:w-[95%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0">
        <h2 className="px-4 lg:px-0 md:px-0 lg:text-[32px] md:text-[32px] text-[24px] font-[700] my-6 flex justify-between flex-col lg:flex-row md:flex-row  w-[90%] mx-auto font-montserrat items-center text-center lg:text-left md:text-left text-white ">
          Funding Requests{" "}
          <span className="lg:text-[24px] md:text-[24px] text-[18px] font-[400]">
            <Link to="/view-fundingrequest">View More</Link>
          </span>
        </h2>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center my-10 flex-wrap">
         
              <div
                // key={item.proposalid}
                className="lg:w-[32%] md:w-[32%] w-[100%] p-4 border-white bg-[#191F1C]/5 rounded-xl border shadow-lg"
              >
                
                      <img
                        src={project2}
                        alt="projectphoto"
                        className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                      />
                  
                <h3 className="font-bold mt-4 lg:text-[20px] md:text-[20px] text-[18px] text-white">
                  proposalTopic
                </h3>
                <p className="text-white text-justify truncate">
                  description
                </p>
                <p className="flex justify-between text-white">
                  Amount needed <span>Balance left</span>
                </p>
                <p className="flex justify-between text-[#5BDEF3]">
                   TLOS
                  <span> TLOS</span>
                </p>
              </div>
         
            <p>No projects available.</p>
         
        </div>
      </div>
    </section>
  );
};

export default FundingRequests;
