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
    client,
    accounts,
    contextAccounts,
    walletConnected
  } = useUpProvider();
  //const [amount, setAmount] = useState<number>(minAmount);
  //const [error, setError] = useState("");
  //const recipientAddress = selectedAddress || contextAccounts[0];
  //console.log("recipientAddress:", recipientAddress);
  //console.log("contextAccounts[0]:", contextAccounts[0]);
  //const [isLoading, setIsLoading] = useState(false);
  const [tokensIdFrom, setTokensIdFrom] = useState<string[]>([]);
  const [connectedWalletAddress, setConnectedWalletAddress] = useState<string>("");
  console.log("Selected address:", selectedAddress);
  async function getConnectedWalletAddress() {
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const accounts = await provider.send("eth_accounts", []);
    if (accounts.length === 0) { await provider.send("eth_requestAccounts", []); }
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    console.log("Connected wallet address:", address);
    setConnectedWalletAddress(address);
  }
  console.log("client:", client);
  console.log("accounts:", accounts);
  console.log("Connected wallet address:", walletConnected);
  console.log("contextAccounts:", contextAccounts);
  console.log("contextAccounts[0]:", contextAccounts[0]);

  useEffect(() => {
    getConnectedWalletAddress();
  }, []);
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

  const tempAddress = contextAccounts[0] || "0x82e45374a2cd9adc0e22ac32843bcf3ecb546148"
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

  const [tokensInfo, setTokensInfo] = useState<{
    id: string;
    name: string;
    hash: string;
    image: string | null;
    isListed: boolean;
    owner: string;
    listingId: number;
    price: number;
  }[]>([]);

  const listingsContractAddress = "0xA509ea144D57Fc43b3123a70C682907d9Eff2E19";
  const listingsContractABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "AlreadyListed", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "IllegalAccess", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "InactiveListing", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }], "name": "InsufficientAuthorization", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "InvalidAddress", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "InvalidListingTime", "type": "error" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "NotListed", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "callerAddress", "type": "address" }], "name": "OwnableCallerNotTheOwner", "type": "error" }, { "inputs": [], "name": "OwnableCannotSetZeroAddressAsOwner", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "UnathorizedSeller", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "asset", "type": "address" }], "name": "Delisted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint8", "name": "version", "type": "uint8" }], "name": "Initialized", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "asset", "type": "address" }, { "indexed": false, "internalType": "address", "name": "seller", "type": "address" }, { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "endTime", "type": "uint256" }], "name": "Listed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Paused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "asset", "type": "address" }], "name": "Unlisted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "account", "type": "address" }], "name": "Unpaused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "asset", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "price", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "endTime", "type": "uint256" }], "name": "Updated", "type": "event" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "delist", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "getListing", "outputs": [{ "components": [{ "internalType": "address", "name": "seller", "type": "address" }, { "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "endTime", "type": "uint256" }], "internalType": "struct LSP8Listing", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }], "name": "getListingByTokenId", "outputs": [{ "components": [{ "internalType": "address", "name": "seller", "type": "address" }, { "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "endTime", "type": "uint256" }], "internalType": "struct LSP8Listing", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }], "name": "getListingIdByTokenId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "hasRole", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "isActiveListing", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "isListed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }], "name": "isListedByTokenId", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "asset", "type": "address" }, { "internalType": "bytes32", "name": "tokenId", "type": "bytes32" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "secondsUntilEndTime", "type": "uint256" }], "name": "list", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalListings", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "unlist", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "secondsUntilEndTime", "type": "uint256" }], "name": "update", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];

  async function isListedByTokenId(asset: string, tokenId: string) {
    // Create a provider using the RPC URL
    const provider = new ethers.JsonRpcProvider(network[0].luksoTestnet.url);
    const readContract = new ethers.Contract(listingsContractAddress, listingsContractABI, provider);

    const isActiveListing = await readContract.isListedByTokenId(asset, tokenId);
    console.log("isActiveListing:", isActiveListing);
    return isActiveListing;
  }

  async function getListingByTokenId(asset: string, tokenId: string) {
    // Create a provider using the RPC URL
    const provider = new ethers.JsonRpcProvider(network[0].luksoTestnet.url);
    const readContract = new ethers.Contract(listingsContractAddress, listingsContractABI, provider);

    const listing = await readContract.getListingByTokenId(asset, tokenId);
    console.log("getListingByTokenId:", listing);
    return listing;
  }

  async function getListingIdByTokenId(asset: string, tokenId: string) {
    // Create a provider using the RPC URL
    const provider = new ethers.JsonRpcProvider(network[0].luksoTestnet.url);
    const readContract = new ethers.Contract(listingsContractAddress, listingsContractABI, provider);

    const listing = await readContract.getListingIdByTokenId(asset, tokenId);
    console.log("getListingByTokenId:", listing);
    return listing;
  }

  /*
  useEffect(() => {
    isListedByTokenId(contractAddress, "0x0000000000000000000000000000000000000000000000000000000000000001");
    //getTotalSupply();
    //mint();
  })*/

  async function getAssetMetadata(tempAddress: string) {
    if (!tempAddress) {
      console.error("Temp address is not configured. Cannot fetch token IDs.");
      return;
    }
    const provider = new ethers.JsonRpcProvider(network[0].luksoTestnet.url);
    const readContract = new ethers.Contract(contractAddress, contractABI, provider);

    const tokensIdFrom = await readContract.tokenIdsOf(tempAddress);
    setTokensIdFrom(tokensIdFrom);
    //console.log("tokensIdFrom:", tokensIdFrom);

    if (tokensIdFrom.length > 0) {
      const tokensData = await Promise.all(
        tokensIdFrom.map(async (tokenId: any) => {
          const isListed = await isListedByTokenId(contractAddress, tokenId);
          let listingId
          let listing
          if (isListed) {
            listingId = await getListingIdByTokenId(contractAddress, tokenId);
            listing = await getListingByTokenId(contractAddress, tokenId);
            console.log("Listing:", listing);
            //console.log("Listing ID:", listingId);
            //console.log("Token is listed:", tokenId);
          }

          const tokenName = await readContract.getDataForTokenId(tokenId, readName);
          const sanitizedName = ethers.toUtf8String(tokenName).replace(/[^\x20-\x7E]/g, "").trim();

          const hash = await readContract.getDataForTokenId(tokenId, uidHash);
          const image = await readContract.getDataForTokenId(tokenId, nftImage);
          const sanitizedImage = ethers.toUtf8String(image).replace(/[^\x20-\x7E]/g, "").trim();

          return {
            id: ethers.getBigInt(tokenId).toString(),
            name: sanitizedName,
            hash,
            image: sanitizedImage,
            isListed: isListed,
            owner: listing?.owner,
            listingId: Number(listingId),
            price: listing?.price,
          };
        })
      );

      setTokensInfo(tokensData);
      //console.log("tokensInfo:", tokensData);
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
    getAssetMetadata(contextAccounts[0]);
  }, [contextAccounts[0]]);

  const [coverImage, setCoverImage] = useState<string>("");
  const [imageUploading, setImageUploading] = useState<boolean>(false);
  //const [setBlob] = useState<any>(null);

  const handleList = async (tokenId: string) => {
    try {
      setIsListing(true)
      const startTime = Number(1743597886)
      const endTime = Number(1843597886)
      const bytes32TokenId = encodeValueContent('Number', tokenId);

      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const accounts = await provider.send("eth_accounts", []);
      if (accounts.length === 0) { await provider.send("eth_requestAccounts", []); }

      const signer = await provider.getSigner();
      const writeContract = new ethers.Contract(listingsContractAddress, listingsContractABI, signer);

      const nftContract = new ethers.Contract(contractAddress, contractABI, signer);

      const authorize = await nftContract.authorizeOperator(listingsContractAddress, bytes32TokenId, "0x");
      await authorize.wait();
      console.log("Operator authorized successfully:", authorize);
      //console.log("Listing token with:", { contractAddress, bytes32TokenId, price, startTime, endTime });

      const response = await writeContract.list(contractAddress, bytes32TokenId, price, startTime, endTime);
      response.wait();
      console.log("Token listed successfully:", await response);
      setTokensInfo((prevTokensInfo) =>
        prevTokensInfo.map((token) =>
          token.id === tokenId ? { ...token, isListed: true, price: Number(price) } : token
        )
      );
    } catch (error) {
      console.error("Error listing token:", error);
    } finally {
      setIsListing(false);
    }
  };

  const handleDelist = async (tokenId: number) => {
    try {
      setIsListing(true);

      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const accounts = await provider.send("eth_accounts", []);
      if (accounts.length === 0) {
        // Request accounts only if not already connected
        await provider.send("eth_requestAccounts", []);
      }
      const signer = await provider.getSigner();
      const writeContract = new ethers.Contract(listingsContractAddress, listingsContractABI, signer);

      const response = await writeContract.delist(tokenId);
      await response.wait(); // Wait for the transaction to be mined
      console.log("Token delisted successfully:", response);

      // Update the `isListed` property of the delisted token
      setTokensInfo((prevTokensInfo) =>
        prevTokensInfo.map((token) =>
          token.listingId === tokenId ? { ...token, isListed: false } : token
        )
      );
    } catch (error) {
      console.error("Error delisting token:", error);
    } finally {
      setIsListing(false);
    }
  };

  /*
  type Listing = {
    id: string;
    asset: any;
    seller: any;
    owner: any;
    tokenId: any;
    price: string;
    startTime: string;
    endTime: string;
  };

  const [listingsData, setListingsData] = useState<Listing[]>([]);
  const getListings = async () => {
    // Create a provider using the RPC URL
    const provider = new ethers.JsonRpcProvider(network[0].luksoTestnet.url);
    const readContract = new ethers.Contract(listingsContractAddress, listingsContractABI, provider);

    const totalListings = await readContract.totalListings();
    console.log("Total Listings:", totalListings);

    const listingsData = [];
    for (let i = 1; i <= Number(totalListings); i++) {
      try {
        const listing = await readContract.getListing(i);
        listingsData.push({
          id: i.toString(),
          asset: listing.asset,
          seller: listing.seller,
          owner: listing.owner,
          tokenId: listing.tokenId,
          price: listing.price.toString(),
          startTime: listing.startTime.toString(),
          endTime: listing.endTime.toString(),
        });
      } catch (error) {
        console.error(`Error fetching listing ${i}:`, error);
      }
    }
    setListingsData(listingsData);
    console.log("Listings Data:", listingsData);
  };

  useEffect(() => {
    //getListings();
  }, []);*/

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTokenId, setModalTokenId] = useState<string | null>(null);
  const [modalHash, setModalHash] = useState<string | null>(null);
  const [price, setPrice] = useState<string>("");
  const [uid, setUid] = useState<string>("");
  const [isListing, setIsListing] = useState<boolean>(false);

  const openModal = (tokenId: string, hash: string) => {
    setModalTokenId(tokenId);
    setModalHash(hash);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPrice("");
    setUid("");
    setModalTokenId(null);
  };

  const handleSubmit = async () => {
    if (!modalTokenId) return;

    try {
      // Hash the UID
      const hashedUid = ethers.keccak256(ethers.toUtf8Bytes(uid));

      if (hashedUid !== modalHash) {
        alert("UID does not match the token's hash.");
        return;
      }

      // Proceed to list the token
      await handleList(modalTokenId);
      closeModal();
    } catch (error) {
      console.error("Error during listing:", error);
    }
  };

  const handleBuy = async (owner: string, id: number, price: number) => {
    //try {
    setIsListing(true);

    const provider = new ethers.JsonRpcProvider(network[0].luksoTestnet.url);
    const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY as `0x${string}`;
    const wallet = new ethers.Wallet(privateKey, provider);
    const nftContract = new ethers.Contract(contractAddress, contractABI, wallet);
    const bytes32TokenId = encodeValueContent('Number', id);

    console.log("owner:", owner);
    console.log("listingsContractAddress:", listingsContractAddress);
    console.log("connectedWalletAddress:", connectedWalletAddress);
    console.log("bytes32TokenId:", bytes32TokenId);

    const authorize = await nftContract.transfer(owner,
      connectedWalletAddress,
      //listingsContractAddress, 
      bytes32TokenId, true, "0x");
    await authorize.wait();
    console.log("price is", price);

    setIsListing(false);
    /*
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const accounts = await provider.send("eth_accounts", []);
    if (accounts.length === 0) {
      // Request accounts only if not already connected
      await provider.send("eth_requestAccounts", []);
    }
 
    const signer = await provider.getSigner();
    const writeContract = new ethers.Contract(listingsContractAddress, listingsContractABI, signer);
 
    console.log("Buying token with listing ID:", listingId, "and price:", price);
 
    // Call the `buy` function on the smart contract
    const response = await writeContract.buy(listingId, {
      value: ethers.parseUnits(price.toString(), "wei"), // Send the payment in wei
    });
    await response.wait(); // Wait for the transaction to be mined
    */
    /*
     if (!client) {
       return;
     }

     setIsListing(true);
     const tx = await client.sendTransaction({
       account: accounts[0] as `0x${string}`,
       to: recipientAddress as `0x${string}`,
       value: parseUnits(price.toString(), 18),
       chain: client.chain,
     });

     // Wait for transaction confirmation
     await waitForTransactionReceipt(client, { hash: tx });
     console.log("Transaction confirmed:", tx);
     //console.log("Token purchased successfully:", response);
 
     // Update the frontend state to reflect the purchase
     setTokensInfo((prevTokensInfo) =>
       prevTokensInfo.map((token) =>
         token.listingId === listingId ? { ...token, isListed: false } : token
       )
     );
   } catch (error) {
     console.error("Error buying token:", error);
   } finally {
     setIsListing(false);
   }
   */
  };


  return (
    <div className="w-full max-w-[650px] bg-white/80 backdrop-blur-md rounded-2xl mx-auto">
      {!connectedWalletAddress ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-lg text-red-600 font-semibold">Please connect your wallet.</p>
        </div>
      ) : (
        <>
          <div className="rounded-xl mb-4">
            <p className="text-gray-700 font-semibold">UP Address:</p>
            <p className="text-gray-900">{connectedWalletAddress} or {contextAccounts[0]}</p>
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
                Product Name:
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
                Product ID:
              </label>
              <input
                type="text"
                value={uuid}
                onChange={(e) => setUuid(e.target.value)}
                placeholder="Enter Product ID"
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
                Publish
              </button>
            </div>
          </form>

          {tokensIdFrom.length > 0 && (
            <>
              {tokensInfo.length > 0 && (
                <div className="grid grid-cols-1 gap-6 mt-4">
                  {tokensInfo.map((token, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-md rounded-lg overflow-hidden"
                    >
                      {token.image && (
                        <div className="relative w-full">
                          <Image
                            src={token.image}
                            alt="Token"
                            //layout="fill"
                            width={346}
                            height={393}
                            objectFit="cover"
                            className="rounded-t-lg"
                          />
                        </div>
                      )}

                      <div className="p-4 items-center justify-center bg-white rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 font-mono text-center">T-shirts</h3>
                        <p className="text-sm text-gray-500 font-mono text-center">#{token.id} - {token.name}</p>
                      </div>

                      <div className="flex justify-between items-center p-4 border-t border-gray-200">
                        {token.isListed ? (
                          <>
                            <div>
                              <p className="text-sm text-gray-500">Price:</p>
                              <p className="text-lg font-semibold text-gray-900">{token.price} LYX</p>
                            </div>

                            <button
                              onClick={() => {
                                if (token?.listingId !== undefined) {
                                  handleDelist(token.listingId);
                                } else {
                                  console.error("Listing ID is undefined");
                                }
                              }}
                              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                            >
                              Delist
                            </button>

                            {token.owner && (
                              <button
                                onClick={() => handleBuy(token.owner, Number(token.id), Number(token.price))}
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                              >
                                Buy
                              </button>
                            )}
                          </>
                        ) : (
                          <button
                            onClick={() => openModal(token.id, token.hash)}
                            className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 font-mono"
                          >
                            Sell
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <p className="text-sm text-gray-500">Total tokens: {tokensIdFrom.length}</p>
            </>
          )}

          {isListing && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <Image src="/loader.png" width={150} height={150} alt="Loading..." className="w-16 h-16 animate-spin" />
            </div>
          )}

          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-4">List Product</h2>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-1">Price:</label>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter price in wei"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-1">UID:</label>
                  <input
                    type="text"
                    value={uid}
                    onChange={(e) => setUid(e.target.value)}
                    placeholder="Enter UID"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={closeModal}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}

          {/*
      listingsData.length > 0 && (
        <>
          {tokensInfo.length > 0 && (
            <div className="rounded-xl mb-4">
              <p className="text-gray-700 font-semibold">Listed Tokens:</p>
              {listingsData.map((token, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-gray-900 font-semibold">Token ID:</p>
                    <p className="text-gray-700">{token.id}</p>
                  </div>

                  <div className="flex flex-row items-center justify-between">
                    <p className="text-gray-900 font-semibold">Name:</p>
                    <span className="text-gray-700">{token.seller}</span>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-gray-900 font-semibold">Price:</p>
                    <span className="text-gray-700">{token.price}</span>
                  </div>

                  <div className="flex flex-row items-center justify-between">
                    <p className="text-gray-900 font-semibold">Start Time:</p>
                    <span className="text-gray-700">{token.startTime}</span>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-gray-900 font-semibold">End Time:</p>
                    <span className="text-gray-700">{token.endTime}</span>
                  </div>
                  </div>
              ))}
                </div>
              )}
              <p className="text-sm text-gray-500">Total tokens: {tokensIdFrom.length}</p>

            </>
          )*/
          }

          {
            /*
          <div className="rounded-xl">
            <div className="flex flex-row items-center justify-center gap-2">
              <LuksoProfile address={recipientAddress} />
            </div>
          </div>
            */
          }
        </>
      )}
    </div>
  );
}