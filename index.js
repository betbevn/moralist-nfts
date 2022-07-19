const Moralis = require("moralis/node");

/* Moralis init code */
const serverUrl = "https://8zf189tev0jy.usemoralis.com:2053/server";
const appId = "mSIYVAOqegPIeA3cArHCc7pnHmJyg4lQg0FRelbh";
const masterKey = "AA8j0w2IuCIqJlUVkxSpce9JDYE8DdCzjdAWmxGH";

const init = async () => {
  await Moralis.start({ serverUrl, appId, masterKey });
  const options = {
    chain: "polygon",
    address: "0x75e3e9c92162e62000425c98769965a76c2e387a",
  };
  const polygonNFTs = await Moralis.Web3API.account.getNFTs(options);

  console.log(polygonNFTs, "polygonNFTs");
};

init();
