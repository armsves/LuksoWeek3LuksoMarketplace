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
//import { ERC725 } from '@erc725/erc725.js';

//require("dotenv").config();

//const minAmount = 1.0;
//const maxAmount = 1000;

interface DonateProps {
  selectedAddress?: `0x${string}` | null;
}

export function Donate({ selectedAddress }: DonateProps) {
  const {
    //client, accounts, 
    contextAccounts,
    //walletConnected 
  } = useUpProvider();
  //const [amount, setAmount] = useState<number>(minAmount);
  //const [error, setError] = useState("");
  const recipientAddress = selectedAddress || contextAccounts[0];
  //const [isLoading, setIsLoading] = useState(false);
  const [tokensIdFrom, setTokensIdFrom] = useState<string[]>([]);
  const [tokenName, setTokenName] = useState<string>("");

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
  const readSymbol = "0x2f0a68ab07768e01943a599e73362a0e17a63a72e94dd2e384d2c1d4db932756";
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

  async function getAssetMetadata() {
    // Create a provider using the RPC URL
    const provider = new ethers.JsonRpcProvider(network[0].luksoTestnet.url);
    const readContract = new ethers.Contract(contractAddress, contractABI, provider);

    const readNameFunction = await readContract.getData(readName)
    console.log("readNameFunction:", ethers.toUtf8String(readNameFunction));

    const readSymbolFunction = await readContract.getData(readSymbol);
    console.log("readSymbolFunction:", ethers.toUtf8String(readSymbolFunction));

    const tokensIdFrom = await readContract.tokenIdsOf(tempAddress);
    setTokensIdFrom(tokensIdFrom);
    console.log("tokensIdFrom:", tokensIdFrom);
    console.log("tokensIdFrom.lenght:", tokensIdFrom.length);
    if (tokensIdFrom.length > 0) {
      console.log("tokensIdFrom[0]:", tokensIdFrom[0]);
      const tokenId = tokensIdFrom[0];
      const tokenName = await readContract.getDataForTokenId(tokenId, readName);
      setTokenName(ethers.toUtf8String(tokenName).replace(/[^\x20-\x7E]/g, "").trim());
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
    //const tokenId = 
  }

  useEffect(() => {
    console.log("contextAccounts[0]:", contextAccounts[0]);
    getAssetMetadata();
  }, []);

  return (
    <div className="w-full bg-white/80 backdrop-blur-md rounded-2xl">
      <div className="rounded-xl mb-4">
        <p className="text-gray-700 font-semibold">UP Address:</p>
        <p className="text-gray-900">{recipientAddress}</p>
      </div>

      <div className="rounded-xl mb-4">
        <button
          onClick={mint}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Mint
        </button>
      </div>

      {tokensIdFrom.length > 0 && (
        <>
          {tokensIdFrom.length > 0 && (
            <div className="rounded-xl mb-4">
              <p className="text-gray-700 font-semibold">Owned Tokens:</p>
              {tokensIdFrom.map((tokenId, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
                  <p className="text-gray-900 font-semibold">Token ID:</p>
                  <p className="text-gray-700 mb-2">{ethers.getBigInt(tokenId).toString()}</p>
                  <p className="text-gray-900 font-semibold">Name:</p>
                  <p className="text-gray-700">{tokenName}</p>
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
