import { useMemo } from "react";
import useSignerorProvider from "./useSignerorProvider";
import { ethers } from "ethers";
import abi from '../constants/abi.json'

const useContractInstance = (withSigner = false) => {
  const { signer, readOnlyProvider } = useSignerorProvider();

  return useMemo(() => {
    if (withSigner) {
      if (!signer) return null;
      return new ethers.Contract(
        import.meta.env.VITE_CONTRACT_ADDRESS,
        abi,
        signer
      );
    }

    return new ethers.Contract(
      import.meta.env.VITE_CONTRACT_ADDRESS,
      abi,
      readOnlyProvider
    );
  }, [signer, readOnlyProvider, withSigner]);
};

export default useContractInstance;