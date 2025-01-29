import { useCallback } from "react";
import useContractInstance from "./useContractInstance";
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react";
import { toast } from "react-toastify";
import { telosTestnet } from "@reown/appkit/networks";
import { ErrorDecoder } from "ethers-decode-error";
import abi from '../constants/abi.json'

const useRegister = () => {
  const contract = useContractInstance(true);
  const { address } = useAppKitAccount();
  const { chainId } = useAppKitNetwork();
  const errorDecoder = ErrorDecoder.create([abi]);

  return useCallback(
    async (imageUrl, orgName, orgData) => {
      if (!orgName || !orgData) {
        toast.error("Organisation aname and data missing!");
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
       

        const tx = await contract.signUp(imageUrl, orgName, orgData);
        console.log(tx)
        const receipt = await tx.wait();
        console.log(receipt)

        if (receipt.status === 1) {
          toast.success("Registration Successful");
          return;
        }

        toast.error("Failed to Register");
        return;
      } catch (err) {
        const decodedError = await errorDecoder.decode(err);
        toast.error(`Failed to Register - ${decodedError.reason}`, {
          position: "top-center",
        });
      }
    },
    [contract, address, chainId]
  );
};

export default useRegister;