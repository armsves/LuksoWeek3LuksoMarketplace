/**
 * A component that facilitates LYX token transfers to a specified LUKSO address.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.selectedAddress] - Optional hex address of the donation recipient.
 *                                          If not provided, uses the first address from context.
 *
 * Features:
 * - Amount validation (${minAmount}-${maxAmount} LYX)
 * - Integration with UP Browser wallet
 * - Recipient profile display using LuksoProfile
 * - Real-time amount validation
 *
 * @requires useUpProvider - Hook for UP Browser wallet integration
 * @requires LuksoProfile - Component for displaying LUKSO profile information
 * @requires viem - For handling blockchain transactions
 */
"use client";

import {
  //useCallback, 
  useEffect, useState
} from "react";
//import { parseUnits } from "viem";
import { useUpProvider } from "./upProvider";
//import { LuksoProfile } from "./LuksoProfile";
//import { waitForTransactionReceipt } from "viem/actions";
import { ethers } from 'ethers';
import Image from "next/image";
//import { write } from "fs";
//import { ERC725 } from '@erc725/erc725.js';
import {
  encodeValueContent,
  //encodeValueType,
  //encodeDataSourceWithHash,
  //decodeDataSourceWithHash,
} from '@erc725/erc725.js';
//require("dotenv").config();

//const minAmount = 1.0;
//const maxAmount = 1000;

interface DonateProps {
  selectedAddress?: `0x${string}` | null;
}

export function Donate({ selectedAddress }: DonateProps) {
  const {
    //
    // 
    //client, 
    //accounts, 
    contextAccounts,
    //walletConnected 
  } = useUpProvider();
  //const [amount, setAmount] = useState<number>(minAmount);
  //const [error, setError] = useState("");
  const recipientAddress = selectedAddress || contextAccounts[0];
  console.log("recipientAddress:", recipientAddress);
  console.log("contextAccounts[0]:", contextAccounts[0]);
  //const [isLoading, setIsLoading] = useState(false);
  const [tokensIdFrom, setTokensIdFrom] = useState<string[]>([]);
  //const [tokenName, setTokenName] = useState<string>("");
  //const [tokenSymbol, setTokenSymbol] = useState<string>("");
  //const [tokenImage, setTokenImage] = useState<string | null>(null);
  //const [tokenHash, setTokenHash] = useState<string>("");

  /*
  const validateAmount = useCallback((value: number) => {
    if (value < minAmount) {
      setError(`Amount must be at least ${minAmount} LYX.`);
    } else if (value > maxAmount) {
      setError(`Amount cannot exceed ${maxAmount} LYX.`);
    } else {
      setError("");
    }
    setAmount(value);
  }, []);

  useEffect(() => {
    validateAmount(amount);
  }, [amount, validateAmount]);

  const sendToken = useCallback(async () => {
    if (!client || !walletConnected || !amount) {
      return;
    }

    try {
      setIsLoading(true);
      const tx = await client.sendTransaction({
        account: accounts[0] as `0x${string}`,
        to: recipientAddress as `0x${string}`,
        value: parseUnits(amount.toString(), 18),
        chain: client.chain,
      });

      // Wait for transaction confirmation
      await waitForTransactionReceipt(client, { hash: tx });

      // Reset amount after successful transaction
      setAmount(minAmount);
    } catch (err) {
      console.error("Transaction failed:", err);
    } finally {
      setIsLoading(false);
    }
  }, [accounts, amount, client, recipientAddress, walletConnected]);

  const sendTokenKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        sendToken();
      }
    },
    [sendToken]
  );

  const handleOnInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number.parseFloat(e.target.value);
      validateAmount(value);
    },
    [validateAmount]
  );*/

  const contractAddress = "0x3f7831F71e6ab78Ed286F5646347C3Cc6bC1106a";
  const contractABI = [{ "inputs": [{ "internalType": "string", "name": "nftCollectionName", "type": "string" }, { "internalType": "string", "name": "nftCollectionSymbol", "type": "string" }, { "internalType": "address", "name": "contractOwner", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "ERC725Y_DataKeysValuesEmptyArray", "type": "error" }, { "inputs": [], "name": "ERC725Y_DataKeysValuesLengthMismatch", "type": "error" }, { "inputs": [], "name": "ERC725Y_MsgValueDisallowed", "type": "error" }, { "inputs": [{ "internalType": "bytes", "name": "storedData", "type": "bytes" }], "name": "InvalidExtensionAddress", "type": "error" }, { "inputs": [{ "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "InvalidFunctionSelector", "type": "error" }, { "inputs": [], "name": "LSP4TokenNameNotEditable", "type": "error" }, { "inputs": [], "name": "LSP4TokenSymbolNotEditable", "type": "error" }, { "inputs": [], "name": "LSP4TokenTypeNotEditable", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "callIndex", "type": "uint256" }], "name": "LSP8BatchCallFailed", "type": "error" }, { "inputs": [], "name": "LSP8CannotSendToAddressZero", "type": "error" }, { "inputs": [], "name": "LSP8CannotSendToSelf", "type": "error" }, { "inputs": [], "name": "LSP8CannotUseAddressZeroAsOperator", "type": "error" }, { "inputs": [], "name": "LSP8InvalidTransferBatch", "type": "error" }, { "inputs": [{ "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }], "name": "LSP8NonExistentTokenId", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }], "name": "LSP8NonExistingOperator", "type": "error" }, { "inputs": [{ "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }, { "internalType": "address", "name": "caller", "type": "address" }], "name": "LSP8NotTokenOperator", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "tokenOwner", "type": "address" }, { "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }, { "internalType": "address", "name": "caller", "type": "address" }], "name": "LSP8NotTokenOwner", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "tokenReceiver", "type": "address" }], "name": "LSP8NotifyTokenReceiverContractMissingLSP1Interface", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "tokenReceiver", "type": "address" }], "name": "LSP8NotifyTokenReceiverIsEOA", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }], "name": "LSP8OperatorAlreadyAuthorized", "type": "error" }, { "inputs": [], "name": "LSP8TokenContractCannotHoldValue", "type": "error" }, { "inputs": [{ "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }], "name": "LSP8TokenIdAlreadyMinted", "type": "error" }, { "inputs": [], "name": "LSP8TokenIdFormatNotEditable", "type": "error" }, { "inputs": [], "name": "LSP8TokenIdsDataEmptyArray", "type": "error" }, { "inputs": [], "name": "LSP8TokenIdsDataLengthMismatch", "type": "error" }, { "inputs": [], "name": "LSP8TokenOwnerCannotBeOperator", "type": "error" }, { "inputs": [{ "internalType": "bytes4", "name": "functionSelector", "type": "bytes4" }], "name": "NoExtensionFoundForFunctionSelector", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "callerAddress", "type": "address" }], "name": "OwnableCallerNotTheOwner", "type": "error" }, { "inputs": [], "name": "OwnableCannotSetZeroAddressAsOwner", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "dataKey", "type": "bytes32" }, { "indexed": false, "internalType": "bytes", "name": "dataValue", "type": "bytes" }], "name": "DataChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "tokenOwner", "type": "address" }, { "indexed": true, "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }, { "indexed": false, "internalType": "bytes", "name": "operatorNotificationData", "type": "bytes" }], "name": "OperatorAuthorizationChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "tokenOwner", "type": "address" }, { "indexed": true, "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }, { "indexed": false, "internalType": "bool", "name": "notified", "type": "bool" }, { "indexed": false, "internalType": "bytes", "name": "operatorNotificationData", "type": "bytes" }], "name": "OperatorRevoked", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "dataKey", "type": "bytes32" }, { "indexed": false, "internalType": "bytes", "name": "dataValue", "type": "bytes" }], "name": "TokenIdDataChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }, { "indexed": false, "internalType": "bool", "name": "force", "type": "bool" }, { "indexed": false, "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "Transfer", "type": "event" }, { "stateMutability": "payable", "type": "fallback" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }, { "internalType": "bytes", "name": "operatorNotificationData", "type": "bytes" }], "name": "authorizeOperator", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenOwner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes[]", "name": "data", "type": "bytes[]" }], "name": "batchCalls", "outputs": [{ "internalType": "bytes[]", "name": "results", "type": "bytes[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "dataKey", "type": "bytes32" }], "name": "getData", "outputs": [{ "internalType": "bytes", "name": "dataValue", "type": "bytes" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32[]", "name": "dataKeys", "type": "bytes32[]" }], "name": "getDataBatch", "outputs": [{ "internalType": "bytes[]", "name": "dataValues", "type": "bytes[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32[]", "name": "tokenIds", "type": "bytes32[]" }, { "internalType": "bytes32[]", "name": "dataKeys", "type": "bytes32[]" }], "name": "getDataBatchForTokenIds", "outputs": [{ "internalType": "bytes[]", "name": "dataValues", "type": "bytes[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }, { "internalType": "bytes32", "name": "dataKey", "type": "bytes32" }], "name": "getDataForTokenId", "outputs": [{ "internalType": "bytes", "name": "dataValue", "type": "bytes" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }], "name": "getOperatorsOf", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }], "name": "isOperatorFor", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }, { "internalType": "bool", "name": "force", "type": "bool" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }, { "internalType": "bool", "name": "notify", "type": "bool" }, { "internalType": "bytes", "name": "operatorNotificationData", "type": "bytes" }], "name": "revokeOperator", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "dataKey", "type": "bytes32" }, { "internalType": "bytes", "name": "dataValue", "type": "bytes" }], "name": "setData", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "bytes32[]", "name": "dataKeys", "type": "bytes32[]" }, { "internalType": "bytes[]", "name": "dataValues", "type": "bytes[]" }], "name": "setDataBatch", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "bytes32[]", "name": "tokenIds", "type": "bytes32[]" }, { "internalType": "bytes32[]", "name": "dataKeys", "type": "bytes32[]" }, { "internalType": "bytes[]", "name": "dataValues", "type": "bytes[]" }], "name": "setDataBatchForTokenIds", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }, { "internalType": "bytes32", "name": "dataKey", "type": "bytes32" }, { "internalType": "bytes", "name": "dataValue", "type": "bytes" }], "name": "setDataForTokenId", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenOwner", "type": "address" }], "name": "tokenIdsOf", "outputs": [{ "internalType": "bytes32[]", "name": "", "type": "bytes32[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }], "name": "tokenOwnerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }, { "internalType": "bool", "name": "force", "type": "bool" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "transfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "from", "type": "address[]" }, { "internalType": "address[]", "name": "to", "type": "address[]" }, { "internalType": "bytes32[]", "name": "tokenId", "type": "bytes32[]" }, { "internalType": "bool[]", "name": "force", "type": "bool[]" }, { "internalType": "bytes[]", "name": "data", "type": "bytes[]" }], "name": "transferBatch", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
  const readName = "0xdeba1e292f8ba88238e10ab3c7f88bd4be4fac56cad5194b6ecceaf653468af1";
  //const readSymbol = "0x2f0a68ab07768e01943a599e73362a0e17a63a72e94dd2e384d2c1d4db932756";
  const uidHash = "0x5549444861736800000000000000000000000000000000000000000000000000";
  const nftImage = "0x4e4654496d616765000000000000000000000000000000000000000000000000";

  const tempAddress = recipientAddress || "0x82e45374a2cd9adc0e22ac32843bcf3ecb546148"
  const network = [{
    luksoTestnet: {
      url: 'https://rpc.testnet.lukso.network',
      chainId: 4201,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    luksoMainnet: {
      url: 'https://42.rpc.thirdweb.com',
      chainId: 42,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  }]

  const [tokensInfo, setTokensInfo] = useState<
    { id: string; name: string; hash: string; image: string | null }[]
  >([]);

  async function getAssetMetadata() {
    // Create a provider using the RPC URL
    const provider = new ethers.JsonRpcProvider(network[0].luksoTestnet.url);
    const readContract = new ethers.Contract(contractAddress, contractABI, provider);

    const tokensIdFrom = await readContract.tokenIdsOf(tempAddress);
    setTokensIdFrom(tokensIdFrom);
    //console.log("tokensIdFrom:", tokensIdFrom);

    if (tokensIdFrom.length > 0) {
      const tokensData = await Promise.all(
        tokensIdFrom.map(async (tokenId: any) => {
          const tokenName = await readContract.getDataForTokenId(tokenId, readName);
          const sanitizedName = ethers.toUtf8String(tokenName).replace(/[^\x20-\x7E]/g, "").trim();

          const hash = await readContract.getDataForTokenId(tokenId, uidHash);
          const image = await readContract.getDataForTokenId(tokenId, nftImage);
          const sanitizedImage = ethers.toUtf8String(image).replace(/[^\x20-\x7E]/g, "").trim();

          return {
            id: ethers.getBigInt(tokenId).toString(), // Convert tokenId to a readable number
            name: sanitizedName,
            hash,
            image: sanitizedImage,
          };
        })
      );

      setTokensInfo(tokensData);
      console.log("tokensInfo:", tokensData);
    }
  }

  const getTotalSupply = async () => {
    // Create a provider using the RPC URL
    const provider = new ethers.JsonRpcProvider(network[0].luksoTestnet.url);
    const readContract = new ethers.Contract(contractAddress, contractABI, provider);
    const totalSupply = await readContract.totalSupply();
    console.log("totalSupply:", totalSupply);
    return Number(totalSupply);
  }

  /*
  const mint = async () => {
    // Create a provider using the RPC URL
    const provider = new ethers.JsonRpcProvider(network[0].luksoTestnet.url);
    const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY as `0x${string}`;
    //console.log("privateKey:", process.env.NEXT_PUBLIC_PRIVATE_KEY);
    const wallet = new ethers.Wallet(privateKey, provider);
    const writeContract = new ethers.Contract(contractAddress, contractABI, wallet);
    //console.log('ethers.toUtf8Bytes("1")', ethers.zeroPadValue(ethers.hexlify(BigInt(1)), 32))
    const totalSupply = await getTotalSupply();
    const newTokenId = totalSupply + 1;
    const numberBytes32 = ethers.zeroPadValue('0x0' + BigInt(newTokenId).toString(16), 32);
    console.log("numberBytes32:", numberBytes32);
    const response = await writeContract.mint(
      tempAddress,
      numberBytes32,
      //"0x0000000000000000000000000000000000000000000000000000000000000001",
      true,
      ethers.toUtf8Bytes('Blue T-shirt'));
    console.log("response:", response);

    const response2 = await writeContract.setDataForTokenId(
      numberBytes32,
      uidHash,
      "0xc888c9ce9e098d5864d3ded6ebcc140a12142263bace3a23a36f9905f12bd64a"
    )
    console.log("response2:", response2);

    const response3 = await writeContract.setDataForTokenId(
      numberBytes32,
      nftImage,
      "0x4e4654496d616765"
    )
    console.log("response3:", response3);
  }*/

  const [image, setImage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [uuid, setUuid] = useState<string>("");

  const handleMint = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Create a provider using the RPC URL
    const provider = new ethers.JsonRpcProvider(network[0].luksoTestnet.url);
    const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY as `0x${string}`;
    const wallet = new ethers.Wallet(privateKey, provider);
    const writeContract = new ethers.Contract(contractAddress, contractABI, wallet);

    const totalSupply = await getTotalSupply();
    console.log("totalSupply:", totalSupply);
    const newTokenId = totalSupply + 1;
    console.log("newTokenId:", newTokenId);
    //const numberBytes32 = ethers.zeroPadValue('0x0' + BigInt(newTokenId).toString(16), 32);
    const numberBytes32 = encodeValueContent('Number', newTokenId);

    console.log("numberBytes32:", numberBytes32);
    //0x00000000000000000000000000000010
    //0x0000000000000000000000000000000000000000000000000000000000000001

    console.log("Minting token with:", { image, name, uuid });

    const response = await writeContract.mint(
      tempAddress,
      numberBytes32,
      true,
      "0x"
    );
    console.log("Mint response:", response);

    const response1 = await writeContract.setDataForTokenId(
      numberBytes32,
      readName,
      ethers.toUtf8Bytes(name)
    );
    console.log("Set Image response:", response1);

    const response2 = await writeContract.setDataForTokenId(
      numberBytes32,
      uidHash,
      ethers.keccak256(ethers.toUtf8Bytes(uuid))
    );
    console.log("Set UUID response:", response2);

    const response3 = await writeContract.setDataForTokenId(
      numberBytes32,
      nftImage,
      ethers.toUtf8Bytes(coverImage)
    );
    console.log("Set Image response:", response3);

    // Clear the form after minting
    setImage("");
    setName("");
    setUuid("");
  };

  useEffect(() => {
    console.log("contextAccounts[0]:", contextAccounts[0]);
    getAssetMetadata();
  }, [tempAddress]);

  const [coverImage, setCoverImage] = useState<string>("");
  const [imageUploading, setImageUploading] = useState<boolean>(false);
  //const [setBlob] = useState<any>(null);

  return (
    <div className="w-full max-w-[650px] bg-white/80 backdrop-blur-md rounded-2xl mx-auto">
      <div className="rounded-xl mb-4">
        <p className="text-gray-700 font-semibold">UP Address:</p>
        <p className="text-gray-900">{recipientAddress}</p>
      </div>

      <form onSubmit={handleMint} className="space-y-4">
        {/* Image Input 
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Image URL:
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter image URL"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>*/}
        <div className="rounded">
          <label className="cursor-pointer w-full h-full">
            <input
              type="file"
              accept="image/*"
              onChange={async (e) => {
                try {
                  if (!e.target.files || e.target.files.length === 0) {
                    console.error("No file selected");
                    return;
                  }
                  const file = e.target.files[0];
                  console.log("Selected file:", file);

                  setImageUploading(true);

                  const response = await fetch(
                    `/api/upload?filename=${file.name}`,
                    { method: 'POST', body: file }
                  );

                  if (!response.ok) {
                    console.error('Upload failed:', response.statusText);
                    setImageUploading(false);
                    return;
                  }

                  const newBlob = await response.json();
                  console.log("Uploaded file response:", newBlob);
                  console.log("Uploaded file URL:", newBlob.url);
                  setCoverImage(newBlob.url);
                } catch (error) {
                  console.error("Error during file upload:", error);
                } finally {
                  setImageUploading(false);
                }
              }}
              //disabled={imageUploading}
              className="opacity-0 w-full h-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"

            //className="opacity-0 w-full h-full absolute inset-0"
            />
            {imageUploading ? (
              <div className="flex gap-2 items-center justify-center text-2xl">
                Uploading Product Image
                <i className="fas fa-camera rotate"></i>
              </div>
            ) : (
              <>
                {coverImage ? (
                  <div className="relative w-full h-full">{coverImage}
                    <Image src={coverImage} alt="uploaded image" fill className="rounded ring-1 ring-gray-900/5 cover" />
                  </div>
                ) : (
                  <div className="flex gap-2 items-center justify-center text-2xl">
                    Product Image
                    <i className="fas fa-camera"></i>
                  </div>
                )}
              </>
            )}

          </label>
        </div>

        {/* Name Input */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Token Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter token name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* UUID Input */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            UUID:
          </label>
          <input
            type="text"
            value={uuid}
            onChange={(e) => setUuid(e.target.value)}
            placeholder="Enter UUID"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Mint
          </button>
        </div>
      </form>

      {tokensIdFrom.length > 0 && (
        <>
          {tokensInfo.length > 0 && (
            <div className="rounded-xl mb-4">
              <p className="text-gray-700 font-semibold">Owned Tokens:</p>
              {tokensInfo.map((token, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
                  {token.image && (
                    <Image
                      src={token.image}
                      width={100}
                      height={100}
                      alt="Token"
                      className="w-16 h-16 rounded-full mb-2"
                    />
                  )}
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-gray-900 font-semibold">Token ID:</p>
                    <p className="text-gray-700">{token.id}</p>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-gray-900 font-semibold">Name:</p>
                    <span className="text-gray-700">{token.name}</span>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-gray-900 font-semibold">Hash:</p>
                    <span className="text-gray-700">
                      {token.hash.slice(0, 3)}...{token.hash.slice(-4)}
                    </span>                  
                    </div>
                </div>
              ))}
            </div>
          )}
          <p className="text-sm text-gray-500">Total tokens: {tokensIdFrom.length}</p>

        </>
      )}
      {
        /*
      <div className="rounded-xl">
        <div className="flex flex-row items-center justify-center gap-2">
          <LuksoProfile address={recipientAddress} />
        </div>
      </div>
        */
      }

      {/* Amount Input and Donate Button Section */}
      {
      /*
      <div className="flex gap-2">
        <div className="flex-1">
          <lukso-input
            value={minAmount.toString()}
            type="number"
            min={minAmount}
            max={maxAmount}
            onInput={handleOnInput}
            is-full-width
            is-disabled={!walletConnected}
            className="mt-2"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        <lukso-button
          onClick={sendToken}
          onKeyPress={sendTokenKeyPress}
          variant="primary"
          size="medium"
          className="mt-2"
          isLoading={isLoading}
          disabled={!walletConnected}
        >
          {`Donate ${amount} LYX`}
        </lukso-button>
      </div>
      */}
    </div>
  );
}
