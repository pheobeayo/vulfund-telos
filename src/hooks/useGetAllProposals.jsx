import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
import { useState, useCallback, useEffect } from "react";
import useContractInstance from "./useContractInstance";

const useGetAllProposals = () => {
  const contract = useContractInstance(true);
  const [allProposal, setAllProposal] = useState([]);
  const { isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");

  const getAllProposal = useCallback(async () => {
    if (!isConnected) return;
    if (!walletProvider) return;

    try {
      const data = await contract.getAllProposal();
      const converted = data?.map((item) => ({
        beneficiary: item[0],
        description: item[1],
        proposalTopic: item[2],
        donationAddress: item[3],
        proposalId: item[4],
        amount: item[5],
        balance: item[6],
        votes: item[7],
      }));
      setAllProposal(converted);
      console.log("formattedUserData", converted);
    } catch (error) {
      console.log("Error fetching all user NFTs", error);
    }
  }, [isConnected, walletProvider, contract]);

  useEffect(() => {
    getAllProposal();
  }, [getAllProposal]);

  return {
    allProposal,
  };
};

export default useGetAllProposals;
