import { useCallback } from "react";
import useContractInstance from "./useContractInstance";
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react";
import { toast } from "react-toastify";
import { telosTestnet } from "@reown/appkit/networks";
import { ErrorDecoder } from "ethers-decode-error";
import abi from "../constants/abi.json";
import { ethers } from "ethers";

const useCreateProposal = () => {
  const contract = useContractInstance(true);
  const { address } = useAppKitAccount();
  const { chainId } = useAppKitNetwork();
  const errorDecoder = ErrorDecoder.create([abi]);

  return useCallback(
    async (title,
      description,
      donationAddress,
      amount) => {
      if (!title || !description || !donationAddress || !amount) {
        toast.error("Data missing!");
        return;
      }

      if (!address) {
        toast.error("Please connect your wallet");
        return;
      }

      if (!contract) {
        toast.error("Contract not found");
        return;
      }

      if (Number(chainId) !== Number(telosTestnet.id)) {
        toast.error("You're not connected to Telos EVM Testnet");
        return;
      }

      try {
        const amountVal = ethers.parseUnits(amount, 18);

        const tx = await contract.createProposal(
          title,
          description,
          donationAddress,
          amountVal
        );
        console.log(tx);
        const receipt = await tx.wait();
        console.log(receipt);

        if (receipt.status === 1) {
          toast.success("Proposal creation successful");
          return;
        }

        toast.error("Failed to create proposal");
        return;
      } catch (err) {
        const decodedError = await errorDecoder.decode(err);
        toast.error(`Failed to create proposal - ${decodedError.reason}`, {
          position: "top-center",
        });
      }
    },
    [contract, address, chainId]
  );
};

export default useCreateProposal;
