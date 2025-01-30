import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
import { useState, useCallback, useEffect } from "react";
import useContractInstance from "./useContractInstance";
import { useParams } from "react-router-dom";

const useProposalDetails = () => {
  const { id } = useParams();
  const contract = useContractInstance(true);
  const [details, setDetails] = useState(null);
  const { isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");

  const getDetails = useCallback(async () => {
    if (!isConnected || !walletProvider || !id) return;

    try {
      const data = await contract.proposals(id);
      setDetails(data);
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  }, [isConnected, walletProvider, contract, id]);

  useEffect(() => {
    getDetails();
  }, [getDetails]);

  return details;
};

export default useProposalDetails;
