import Banner from "../../components/Banner";
import useRegister from "../../hooks/useRegister";
import usePinataUpload from "../../hooks/usePinataUpload";
import { useState } from "react";

const Register = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [orgName, setOrgName] = useState("");
  const [orgData, setOrgData] = useState("");
  const [error, setError] = useState("");
  const handleRegister = useRegister();

  const { uploadToPinata, isUploading } = usePinataUpload();
  // console.log(isUploading)

  const changeHandler = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileSizeInMB = file.size / (1024 * 1024);
      if (fileSizeInMB > 1) {
        setError("File size exceeds 1MB. Please choose a smaller file.");
        setSelectedFile(null);
      } else {
        setError("");
        setSelectedFile(file);
        try {
          const uploadedUrl = await uploadToPinata(file);
          setImageUrl(uploadedUrl);
        } catch (error) {
          console.error("File upload failed:", error);
        }
      }
    }
  };

  const handleSignup = async () => {
    await handleRegister(imageUrl, orgName, orgData);
    setImageUrl("");
    setOrgData("");
    setOrgName("");
  };

  return (
    <main className="bg-[#02080B]">
      <Banner />
      <div className="grid place-items-center bg-[#02080B]">
        <div className="w-1/2 p-8 rounded-lg text-[#110A03] flex flex-col items-center bg-[#02080B] lg:w-[50%] md:w-[50%]  mx-auto">
          <h1 className="text-[30px] lg-[36px] md-[36px] font-montserrat text-white font-bold mt-16  my-10">
            Register to get started
          </h1>

          <label className="block mt-2 mb-2 text-base font-bold text-white dark:text-white text-left">
            Organisation Logo
          </label>

          {imageUrl ? (
            <input
              type="text"
              value={imageUrl}
              placeholder="Organization Image"
              className="bg-transparent border border-white text-white text-sm font-bold rounded-lg focus:ring-[#5CE3FB] focus:border-[#5CE3FB] block w-full p-2.5 backdrop-blur-lg mb-4 outline-none"
              readOnly
            />
          ) : (
            <div className="relative mb-4 w-[100%]">
              <input
                type="file"
                required
                onChange={changeHandler}
                className={`bg-transparent border border-white text-white text-sm font-bold rounded-lg focus:ring-[#5CE3FB] focus:border-[#5CE3FB] block w-full p-2.5 backdrop-blur-lg mb-4 outline-none ${
                  isUploading ? "cursor-not-allowed" : ""
                }`}
                disabled={isUploading}
              />
              {isUploading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50 rounded-lg">
                  <div className="loader"></div>
                </div>
              )}
            </div>
          )}
          <label className="block mt-2 mb-2 text-base font-bold text-white dark:text-white text-left">
            Organisation Name
          </label>
          <input
            type="text"
            required
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
            placeholder="Enter the organisation name"
            className="bg-transparent border border-white text-white text-sm font-bold rounded-lg focus:ring-[#5CE3FB] focus:border-[#5CE3FB] block w-full p-2.5 backdrop-blur-lg mb-4 outline-none"
          />
          <label className="block mt-2 mb-2 text-base font-bold text-white dark:text-white text-left">
            Organisation Profile Document
          </label>
          <input
            value={orgData}
            onChange={(e) => setOrgData(e.target.value)}
            type="text"
            required
            placeholder="Enter your document link"
            className="bg-transparent border border-white text-white text-sm font-bold rounded-lg focus:ring-[#5CE3FB] focus:border-[#5CE3FB] block w-full p-2.5 backdrop-blur-lg mb-4 outline-none"
          />
          <ul className="text-white ">
            Organisation profile document must contain:
            <li className="lg:text-[10px] md:text-[10px] text-[8px] list-disc mb-2 ">
              Name
            </li>
            <li className="lg:text-[10px] md:text-[10px] text-[8px] list-disc mb-2 ">
              Location (address, city, state, country)
            </li>
            <li className="lg:text-[10px] md:text-[10px] text-[8px] list-disc mb-2 ">
              Contact details (phone number, email address)
            </li>
            <li className="lg:text-[10px] md:text-[10px] text-[8px] list-disc mb-2 ">
              Year of establishment
            </li>
            <li className="lg:text-[10px] md:text-[10px] text-[8px] list-disc mb-2 ">
              Beneficiaries information
            </li>
            <li className="lg:text-[10px] md:text-[10px] text-[8px] list-disc mb-2 ">
              Brief description of services provided and the mission
            </li>
          </ul>

          <button
            className="bg-gradient-to-r from-[#6AFEB0]  to-[#5CE3FB]  hover:bg-[#5CE3FB] text-[#111012] py-2 px-4 rounded lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] my-4"
            onClick={handleSignup}
          >
            Submit
          </button>
        </div>
      </div>
    </main>
  );
};

export default Register;
