import * as abi from './abi';
import {Address} from './address';

/**
 * Prints in the node logs
 *
 * @param {string} message Message string
 */
export function print(message: string): void {
  abi.print(message);
}

/**
 * Calls a remote function located at given address.
 *
 * Note: arguments serialization is to be handled by the caller and the callee.
 *
 * @param {Address} at
 * @param {string} functionName
 * @param {string} args
 * @param {u64} coins // TODO define usage
 *
 * @return {string} function returned value (serialized)
 */
export function call(
  at: Address,
  functionName: string,
  args: string,
  coins: u64,
): string {
  return abi.call(at.toByteString(), functionName, args, coins);
}

/**
 * Creates a new smart contract.
 *
 * Take a base64 string representing the module binary and create an entry in
 * the ledger.
 *
 * The context allow you to write in this smart contract while you're executing
 * the current bytecode.
 *
 * @param {string} bytecode - base64 encoded
 *
 * @return {string} Smart contract address
 */
export function createSC(bytecode: string): Address {
  return Address.fromByteString(abi.createSC(bytecode));
}

/**
 * Generates an event
 *
 * @param {string} event - stringified
 */
export function generateEvent(event: string): void {
  abi.generateEvent(event);
}

/**
 * Transfers SCE coins from the current address to given address.
 *
 * @param {Address} to
 * @param {u64} amount - value in the smallest unit.
 */
export function transferCoins(to: Address, amount: u64): void {
  abi.transferCoins(to.toByteString(), amount);
}

/**
 * Transfers SCE coins of the `from` address to the `to` address.
 *
 * @param {Address} from
 * @param {Address} to
 * @param {u64} amount - value in the smallest unit.
 */
export function transferCoinsOf(from: Address, to: Address, amount: u64): void {
  abi.transferCoinsOf(from.toByteString(), to.toByteString(), amount);
}

/**
 * Gets the balance of the current address
 *
 * @return {u64} - value in the smallest unit.
 */
export function balance(): u64 {
  return abi.balance();
}

/**
 * Gets the balance of the specified address.
 *
 * @param {string} address
 *
 * @return {u64} - value in the smallest unit.
 */
export function balanceOf(address: string): u64 {
  return abi.balanceOf(address);
}

/**
 * Converts data to base58.
 *
 * @param {string} data
 *
 * @return {string}
 */
export function toBase58(data: string): string {
  return abi.toBase58(data);
}

/**
 * Tests if the signature is valid.
 *
 * @param {string} publicKey - base58check encoded
 * @param {string} digest
 * @param {string} signature - base58check encoded

 * @return {bool}
 */
export function isSignatureValid(
  publicKey: string,
  digest: string,
  signature: string,
): bool {
  return abi.isSignatureValid(digest, signature, publicKey);
}

/**
 * Converts a public key to an address
 *
 * @param {string} pubKey -  Base58check endoded
 *
 * @return {Address}
 */
export function publicKeyToAddress(pubKey: string): Address {
  return Address.fromByteString(abi.publicKeyToAddress(pubKey));
}

/**
 * Returns an unsafe random.
 *
 * /!\ This function is unsafe because the random draws is predictable.
 *
 * @return {i64}
 */
export function unsafeRandom(): i64 {
  return abi.unsafeRandom();
}

/**
 * Sends an async message to a function at given address.
 *
 * Note: serialization is to be handled at the caller and the callee level.
 *
 * @param {string} at
 * @param {string} functionName
 * @param {u64} validityStartPeriod - Period of the validity start slot
 * @param {u8} validityStartThread - Thread of the validity start slot
 * @param {u64} validityEndPeriod - Period of the validity end slot
 * @param {u8} validityEndThread - Thread of the validity end slot
 * @param {u64} maxGas - Maximum gas for the message execution
 * @param {u64} gasPrice - Price of one gas unit
 * @param {u64} coins - Coins of the sender
 * @param {string} msg - serialized data
 */
export function sendMessage(
  at: Address,
  functionName: string,
  validityStartPeriod: u64,
  validityStartThread: u8,
  validityEndPeriod: u64,
  validityEndThread: u8,
  maxGas: u64,
  gasPrice: u64,
  coins: u64,
  msg: string,
): void {
  abi.sendMessage(
    at.toByteString(),
    functionName,
    validityStartPeriod,
    validityStartThread,
    validityEndPeriod,
    validityEndThread,
    maxGas,
    gasPrice,
    coins,
    msg,
  );
}

/**
 * Convert given file content to base64.
 *
 * Note: this function shall never be called but is dynamically
 * replace using base64 transformer.
 * More info here:
 *
 * @param {string} filePath
 *
 * @return {string}
 */
export function fileToBase64(
  filePath: string, // eslint-disable-line @typescript-eslint/no-unused-vars
): string {
  abort('Please use base64 transformer to dynamically include the file.');
  return '';
}

/**
 * Returns the current period
 * @return {u8}
 */
export function currentPeriod(): u64 {
  return abi.currentPeriod();
}

/**
 * Returns the current thread
 * @return {u8}
 */
export function currentThread(): u8 {
  return abi.currentThread();
}
