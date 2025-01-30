import React from 'react';
import { FaLongArrowAltDown } from "react-icons/fa";
import { useParams } from "react-router-dom";
import vector from "../../assets/vector.svg";
import Vote from "../../components/Vote";
import DirectFund from "../../components/DirectFund";
import useProposalDetails from '../../hooks/useProposalDetails';
import useGetAllOrganisation from '../../hooks/useGetAllOrganisation';

const TreasuryProjectDetail = () => {
  const { id } = useParams();
  const details = useProposalDetails();
  const organisation = useGetAllOrganisation()

  const convertIpfsUrl = (url) => {
    if (url && url.startsWith("ipfs://")) {
      return url.replace("ipfs://", "https://ipfs.io/ipfs/");
    }
    return url || "";
  };

  if (!details) {
    return (
      <div className="text-white text-center py-10">
        Loading proposal details...
      </div>
    );
  }

  return (
    <main className="bg-[#02080B]">
      <div
        className="bg-[#02080B] bg-no-repeat w-full"
        style={{
          backgroundImage: `url(${vector})`,
          backgroundSize: "10%",
          backgroundPosition: "left top",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center px-8 lg:px-40 h-screen">

          <div className="lg:w-1/2 w-full text-center">
          {organisation.map(
              (info) =>
                details.beneficiary === info.address && (
                  <div>
                    <img
                      src={convertIpfsUrl(info.image)}
                      alt="projectphoto"
                      className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                    />
                    <div className="border border-white p-4 rounded-lg mt-2">
                      <h1 className="lg:text-[20px] md:text-[20px] text-[15px] font-serif text-left mt-2 my-4 text-white">
                        {info.orgName}
                      </h1>
                    </div>
                  </div>
                )
            )}
            <div className="border border-white p-4 rounded-lg mt-2">
              <h1 className="text-white text-left text-lg font-serif">Info</h1>
            </div>
            <h1 className="text-white text-left text-lg font-serif mt-4">More Information</h1>
            <h2 className="text-white text-left text-base font-serif">{details.proposalTopic}</h2>
            <p className="text-white text-justify text-sm">{details.description}</p>
            <h1 className="text-white text-left text-lg font-serif mt-4">Request</h1>
          </div>
          <div className="lg:w-1/2 w-full bg-[#02080B]">
            <div className="bg-[#0A1F28] rounded-xl p-4 my-4">
              <h1 className="text-white text-lg font-bold">Poll Overview</h1>
              <h2 className="text-[#D3D0C7] text-sm flex justify-between my-6">
                Amount needed <span>Balance left</span>
              </h2>
              <h2 className="text-[#5BDEF3] text-sm flex justify-between my-6">
                {Number(details.amount) / 1e18} TLOS <span>{Number(details.balance) / 1e18} TLOS</span>
              </h2>
              <p className="text-[#D3D0C7] text-sm my-6">This project has been pushed for DAO funding request.</p>
              <DirectFund id={id} />
            </div>

            <div className="bg-[#0A1F28] rounded-xl p-4">
              <h1 className="text-white text-lg font-bold">Vote ({Number(details.votes)})</h1>
              <div className="flex gap-2 w-full">
                <Vote id={id} />
                <button className="bg-transparent w-[30%] py-2 text-white border border-white rounded-xl flex gap-2 justify-center">
                  <FaLongArrowAltDown /> Downvote
                </button>
              </div>
              <p className="text-[#D3D0C7] text-sm my-6">Only donors with DAO membership rights can vote.</p>
              <h2 className="text-[#5BDEF3] text-sm font-bold">Voters (DAO Members)</h2>
              <ul className="text-white text-sm mx-4">
                {details.voters?.map((voter, index) => (
                  <li key={index} className="list-disc">{voter}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TreasuryProjectDetail;
