import * as abi from './abi';
import { Address } from './address';

/**
 * Sets (key, value) in the datastore of the callee's address.
 *
 * Note: Existing entries are overwritten and missing ones are created.
 *
 * @param {string} key
 * @param {string} value
 */
export function set(key: string, value: string): void {
  abi.set(key, value);
}

/**
 * Sets (key, value) in the datastore of the given address.
 * Existing entries are overwritten and missing ones are created.
 *
 * TODO: explains security mecanisms
 *
 * @param {Address} address
 * @param {string} key
 * @param {string} value
 */
export function setOf(address: Address, key: string, value: string): void {
  abi.setOf(address.toByteString(), key, value);
}

/**
 * Returns (key, value) in the datastore of the callee's address.
 *
 * TODO: explains what happens on missing key.
 *
 * @param {string} key
 *
 * @return {string}
 */
export function get(key: string): string {
  return abi.get(key);
}

/**
 * Returns (key, value) in the datastore of the given address.
 *
 * TODO: explains what happens on missing key.
 *
 * @param {Address} address
 * @param {string} key
 *
 * @return {string}
 */
export function getOf(address: Address, key: string): string {
  return abi.getOf(address.toByteString(), key);
}

/**
 * Removes (key, value) from the datastore of the callee's address.
 *
 * TODO: explains what happens on missing key.
 * TODO: explains security mecanisms
 *
 * @param {string} key
 */
export function del(key: string): void {
  abi.del(key);
}

/**
 * Removes (key, value) from the datastore of the given address.
 *
 * TODO: explains what happens on missing key.
 * TODO: explains security mecanisms
 *
 * @param {Address} address
 * @param {string} key
 */
export function deleteOf(address: Address, key: string): void {
  abi.deleteOf(address.toByteString(), key);
}

/**
 * Appends value to existing data of the (key, value) in
 * the datastore of the callee's address.
 *
 * Note: do nothing if key is absent.
 *
 * @param {string} key
 * @param {string} value
 */
export function append(key: string, value: string): void {
  abi.append(key, value);
}

/**
 * Appends value to existing data of the (key, value) in
 * the datastore of the given address.
 *
 * Note: do nothing if key is absent.
 * TODO: explains security mecanisms
 *
 * @param {Address} address target address
 * @param {string} key key string
 * @param {string} value value to append
 */
export function appendOf(
  address: Address,
  key: string,
  value: string,
): void {
  abi.appendOf(address.toByteString(), key, value);
}

/**
 * Checks if the (key, value) exists in the datastore
 * of the callee's address.
 *
 * @param {string} key
 * @return {bool}
 */
export function has(key: string): bool {
  return abi.has(key);
}

/**
 * Checks if the (key, value) exists in the datastore
 * of the given address.
 *
 * @param {Address} address
 * @param {string} key
 *
 * @return {bool}
 */
export function hasOf(address: Address, key: string): bool {
  return abi.hasOf(address.toByteString(), key);
}

/**
 *  Sets the executable bytecode of the callee's address.
 *
 * TODO: explains failure consequences.
 *
 * @param {string} bytecode base64-encoded
 */
export function setBytecode(bytecode: string): void {
  abi.setBytecode(bytecode);
}

/**
 *  Sets the executable bytecode of the given address.
 *
 * TODO: explains security mecanisms.
 *
 * @param {Address} address target address
 * @param {string} bytecode base64-encoded
 */
export function setBytecodeOf(address: Address, bytecode: string): void {
  abi.setBytecodeOf(address.toByteString(), bytecode);
}
