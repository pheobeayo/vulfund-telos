import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { telosTestnet } from "@reown/appkit/networks";

// 1. Get projectId
const projectId = import.meta.env.VITE_PROJECTID;

// 2. Set the networks
const networks = [telosTestnet];

// 3. Create a metadata object - optional
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", 
  icons: ["https://avatars.mywebsite.com/"],
};

// 4. Create a AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true,
  },
  themeVariables: {
    "--w3m-accent": "#F90101",
    // '--w3m-border-radius-master': 20,
  },
});
