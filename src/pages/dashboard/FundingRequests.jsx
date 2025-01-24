
import vector from "../../assets/vector.svg";
import Banner from "../../components/Banner";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { TbFoldersOff } from "react-icons/tb";
import project1 from '../../assets/project1.svg'
import { Link } from "react-router-dom";




const FundingRequests = () => {
  
  

 

   
  return (
    <main className="bg-[#02080B] ">
      <Banner />
      <section
        className="bg-[#02080B]  bg-no-repeat"
        style={{
          backgroundImage: `url(${vector})`,
          backgroundSize: "10%",
          backgroundPosition: "left top",
        }}
      >
        <Box
          sx={{
            width: "100%",
            typography: "body1",
            borderBottom: "1",
            borderColor: "#0A5B68",
          }}
        >
          <TabContext >
            <div className="px-4  mt-4 flex gap-4 font-bold text-white w-[90%] flex-col lg:flex-row md:flex-row">
              <TabList
                // onChange={handleChange}
                aria-label="lab API tabs example"
                textColor="#0A5B68"
              >
                <Tab label="All Funding Requests" value="one" />
                <Tab label="Submitted Requests" value="two" />
              </TabList>
            </div>

            <TabPanel value="one">
              <div className="lg:w-[100%] md:w-[100%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0">
                <h2 className="px-4 lg:px-0 md:px-0 lg:text-[28px] md:text-[28px] text-[20px] mx-auto font-montserrat items-center text-center lg:text-left md:text-left text-white">
                  All Funding Requests{" "}
                </h2>
                <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center my-10 flex-wrap">
                    
                        <div  className="lg:w-[32%] md:w-[32%] w-[100%] p-4 border-white bg-[#191F1C]/5 rounded-xl border shadow-lg">
                         
                                  <img
                                    src={project1}
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
                           Avax
                            <span> Avax</span>
                          </p>
                          <Link to={`/dashboard/funding-requests/proposalid`}>
                            <button className="bg-transparent my-4 border w-full py-2 px-4 border-white text-white rounded-lg">
                              View details
                            </button>
                          </Link>
                        </div>
                    
                      <p className="text-white text-center justify-center flex items-center w-[100%]"><TbFoldersOff className="mr-4 text-4xl" /> No projects available.</p>
                   
                  </div>
                </div>
            </TabPanel>
            <TabPanel value="two"></TabPanel>
          </TabContext>
        </Box>
      </section>
    </main>
  );
};

export default FundingRequests;
