import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
import { useState, useCallback, useEffect } from "react";
import useContractInstance from "./useContractInstance";

const useAnalytic = () => {
  const contract = useContractInstance(true);
  const [data, setData] = useState({
    allDonation: "",
    daoTotal: "",
    totalRegister: "",
    proposalTotal: "",
    duration: "",
  });

  const { isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");

  const getAllData = useCallback(async () => {
    if (!isConnected || !walletProvider || !contract) return;

    try {
      const [
        allDonation,
        daoTotal,
        totalRegister,
        proposalTotal,
        duration,
      ] = await Promise.all([
        contract.totalDonations(),
        contract.totalDaomembers(),
        contract.totalSignup(),
        contract.totalProposals(),
        contract.voteDuration(),
      ]);

      setData({
        allDonation,
        daoTotal,
        totalRegister,
        proposalTotal,
        duration,
      });

    } catch (error) {
      console.error("Error fetching analytics data:", error);
    }
  }, [isConnected, walletProvider, contract]);

  useEffect(() => {
    getAllData();
  }, [getAllData]);

  return data;
};

export default useAnalytic;