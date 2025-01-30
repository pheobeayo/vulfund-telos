import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
import { useState, useCallback, useEffect } from "react";
import useContractInstance from "./useContractInstance";

const useGetAllOrganisation = () => {
    const [organisation, setOrganisation] = useState([]);
    const contract = useContractInstance(true);
    const { isConnected } = useAppKitAccount();
    const { walletProvider } = useAppKitProvider("eip155");

    const fetchOrganization = useCallback(async () => {
        try {
            if (!isConnected) return;
            if (!walletProvider) return;

            const res = await contract.getallOrganisation();
            if (!res || !Array.isArray(res)) return;

            const converted = res.map((item) => ({
                address: item[0] || "",
                image: item[1] || "",
                orgName: item[2] || "",
            }));

            setOrganisation((prev) => 
                JSON.stringify(prev) !== JSON.stringify(converted) ? converted : prev
            );
           
        } catch (error) {
            console.error(error);
        }
    }, [isConnected, walletProvider, contract]);

    useEffect(() => {
        fetchOrganization();

    }, [fetchOrganization]);

    return organisation;
}

export default useGetAllOrganisation;