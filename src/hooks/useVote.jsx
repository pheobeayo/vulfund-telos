import { useCallback } from "react";
import useContractInstance from "./useContractInstance";
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react";
import { toast } from "react-toastify";
import { telosTestnet } from "@reown/appkit/networks";
import { ErrorDecoder } from "ethers-decode-error";
import abi from '../constants/abi.json'

const useVote = () => {
  const contract = useContractInstance(true);
  const { address } = useAppKitAccount();
  const { chainId } = useAppKitNetwork();
  const errorDecoder = ErrorDecoder.create([abi]);

  return useCallback(
    async (id) => {
      if (!id) {
        toast.error("Invalid ID");
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
       

        const tx = await contract.vote(id);
        console.log(tx)
        const receipt = await tx.wait();
        console.log(receipt)

        if (receipt.status === 1) {
          toast.success("Vote Successful");
          return;
        }

        toast.error("Voting failed");
        return;
      } catch (err) {
        const decodedError = await errorDecoder.decode(err);
        toast.error(`Voting failed - ${decodedError.reason}`, {
          position: "top-center",
        });
      }
    },
    [contract, address, chainId]
  );
};

export default useVote;