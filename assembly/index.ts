import {JSON} from 'assemblyscript-json';

@external("massa", "assembly_script_print")
export declare function assembly_script_print(message: string): void
@external("massa", "assembly_script_call")
export declare function assembly_script_call(address: string, func: string, param: string, call_coins: u64): string
@external("massa", "assembly_script_get_remaining_gas")
export declare function assembly_script_get_remaining_gas(): u64
@external("massa", "assembly_script_create_sc")
export declare function assembly_script_create_sc(bytecode: string): string
@external("massa", "assembly_script_set_data")
export declare function assembly_script_set_data(key: string, value: string): void;
@external("massa", "assembly_script_set_data_for")
export declare function assembly_script_set_data_for(address: string, key: string, value: string): void;
@external("massa", "assembly_script_get_data")
export declare function assembly_script_get_data(key: string): string;
@external("massa", "assembly_script_get_data_for")
export declare function assembly_script_get_data_for(address: string, key: string): string;
@external("massa", "assembly_script_delete_data")
export declare function assembly_script_delete_data(key: string): void
@external("massa", "assembly_script_delete_data_for")
export declare function assembly_script_delete_data_for(address: string, key: string): void
@external("massa", "assembly_script_append_data")
export declare function assembly_script_append_data(key: string, value: string): void
@external("massa", "assembly_script_append_data_for")
export declare function assembly_script_append_data_for(address: string, key: string, value: string): void
@external("massa", "assembly_script_has_data")
export declare function assembly_script_has_data(key: string): bool;
@external("massa", "assembly_script_has_data_for")
export declare function assembly_script_has_data_for(address: string, key: string): bool;
@external("massa", "assembly_script_get_owned_addresses")
export declare function assembly_script_get_owned_addresses(): string;
@external("massa", "assembly_script_get_call_stack")
export declare function assembly_script_get_call_stack(): string;
@external("massa", "assembly_script_generate_event")
export declare function assembly_script_generate_event(event: string): void;
@external("massa", "assembly_script_transfer_coins")
export declare function assembly_script_transfer_coins(to_address: string, raw_amount: u64): void;
@external("massa", "assembly_script_transfer_coins_for")
export declare function assembly_script_transfer_coins_for(from_address: string, to_address: string, raw_amount: u64): void;
@external("massa", "assembly_script_get_balance")
export declare function assembly_script_get_balance(): u64;
@external("massa", "assembly_script_get_balance_for")
export declare function assembly_script_get_balance_for(address: string): u64;
@external("massa", "assembly_script_get_call_coins")
export declare function assembly_script_get_call_coins(): u64;
@external("massa", "assembly_script_hash")
export declare function assembly_script_hash(data: string): string;
@external("massa", "assembly_script_signature_verify")
export declare function assembly_script_signature_verify(data: string, signature: string, public_key: string): bool;
@external("massa", "assembly_script_address_from_public_key")
export declare function assembly_script_address_from_public_key(public_key: string): string;
@external("massa", "assembly_script_get_time")
export declare function assembly_script_get_time(): u64;
@external("massa", "assembly_script_unsafe_random")
export declare function assembly_script_unsafe_random(): i64;
@external("massa", "assembly_script_send_message")
export declare function assembly_script_send_message(target_address: string, target_handler: string, validity_start_period: u64, validity_start_thread: u8, validity_end_period: u64, validity_end_thread: u8, max_gas: u64, gas_price: u64, raw_coins: u64, data: string): void;
@external("massa", "assembly_script_get_current_period")
export declare function assembly_script_get_current_period(): u64;
@external("massa", "assembly_script_get_current_thread")
export declare function assembly_script_get_current_thread(): u8;
@external("massa", "assembly_script_set_bytecode")
export declare function assembly_script_set_bytecode(bytecode: string): void
@external("massa", "assembly_script_set_bytecode_for")
export declare function assembly_script_set_bytecode_for(address: string, bytecode: string): void


/**
 * Prints in the node logs
 *
 * @param {string} message Message string
 */
export function print(message: string): void {
  assembly_script_print(message);
}

/**
 * Retreive a module in the ledger at the given address and call a function
 *
 * The function is paramatrized by T the type of the parameters given
 *
 * @param {string} address Address hash in format string
 * @param {string} func Function name exported in the module
 * @param {string} param input parameters as string
 * @param {u64} coins
 * @return {string} output of the function called
 */
export function call(address: string, func: string, param: string, coins: u64): string {
  return assembly_script_call(address, func, param, coins);
}

/**
 * Take a base64 string representing the module binary and create an entry in
 * the ledger.
 *
 * The context allow you to write in this smart contract while you're executing
 * the current bytecode.
 *
 * @param {string} bytecode string base64 of the ledger
 * @return {string} Created entry address
 */
export function create_sc(bytecode: string): string {
  return assembly_script_create_sc(bytecode);
}

export namespace Storage {
    /**
     * Sets a data entry in the datastore of the current address (top of the call stack).
     * Existing entries are overwritten and missing ones are created.
     *
     * @param {string} key key string
     * @param {string} value value to set
     */
    export function set_data(key: string, value: string): void {
      assembly_script_set_data(key, value);
    }

    /**
     * Sets a data entry in the datastore of a target address (if allowed).
     * Existing entries are overwritten and missing ones are created.
     *
     * @param {string} address
     * @param {string} key key string
     * @param {string} value value to set
     */
    export function set_data_for(address: string, key: string, value: string): void {
      assembly_script_set_data_for(address, key, value);
    }

    /**
     * Returns a data entry from the datastore of the current address (top of the call stack).
     * Fails if absent.
     *
     * @param {string} key key string
     *
     * @return {void}
     */
    export function get_data(key: string): string {
      return assembly_script_get_data(key);
    }

    /**
     * Returns a data entry from the datastore of a target address.
     * Fails if absent.
     *
     * @param {string} address
     * @param {string} key key string
     *
     * @return {string}
     */
    export function get_data_for(address: string, key: string): string {
      return assembly_script_get_data_for(address, key);
    }

    /**
     * Delete an entry from the datastore of the current address (top of the call stack).
     * Fails if absent.
     *
     * @param {string} key key string
     */
    export function delete_data(key: string): void {
      assembly_script_delete_data(key);
    }

    /**
     * Delete an entry from the datastore of a target address.
     * Fails if absent.
     *
     * @param {string} address target address
     * @param {string} key key string
     */
    export function delete_data_for(address: string, key: string): void {
      assembly_script_delete_data_for(address, key);
    }

    /**
     * Append data to a datastore entry of the current address (top of the call stack).
     * Fails if absent.
     *
     * @param {string} key key string
     * @param {string} value value to append
     */
    export function append_data(key: string, value: string): void {
      assembly_script_append_data(key, value);
    }

    /**
     * Append data to a datastore entry of a target address.
     *
     * @param {string} address target address
     * @param {string} key key string
     * @param {string} value value to append
     */
    export function append_data_for(address: string, key: string, value: string): void {
      assembly_script_append_data_for(address, key, value);
    }

    /**
     * Checks whether an entry exists in the caller's datastore.
     *
     * @param {string} key key of the data (will be hashed internally)
     * @return {string} true if the key was found, false otherwise
     */
    export function has_data(key: string): bool {
      return assembly_script_has_data(key);
    }

    /**
     * Checks whether an entry exists in the datastore of an arbitrary address.
     *
     * @param {string} address target address
     * @param {string} key key of the data (will be hashed internally)
     * @return {string} true if the key was found, false otherwise
     */
    export function has_data_for(address: string, key: string): bool {
      return assembly_script_has_data_for(address, key);
    }

    /**
     *  Returns an entry from the caller's datastore or a default value if not found
     *
     * @param {string} key key of the data (will be hashed internally)
     * @param {string} defValue default value if not found
     * @return {string} found string value or default string
     */
    export function get_data_or_default(key: string, defValue: string): string {
      if (has_data(key)) {
        return get_data(key);
      }
      return defValue;
    }

    /**
     *  Returns an entry from an address' datastore or a default value if not found
     *
     * @param {string} address target address
     * @param {string} key key of the data (will be hashed internally)
     * @param {string} defValue default value if not found
     * @return {string} found string value or default string
     */
     export function get_data_or_default_for(address: string, key: string, defValue: string): string {
       if (has_data_for(address, key)) {
         return get_data_for(address, key);
       }
       return defValue;
     }

    /**
     *  Sets the executable bytecode of an address.
     *  Fails if the address doesn't exist of if write access rights are missing.
     *
     * @param {string} address target address
     * @param {string} bytecode base64-encoded bytecode
     */
    export function set_bytecode_for(address: string, bytecode: string): void {
      assembly_script_set_bytecode_for(address, bytecode);
    }

    /**
     *  Sets the executable bytecode of the current address (top of the call stack).
     *  Fails if the address doesn't exist of if write access rights are missing.
     *
     * @param {string} bytecode base64-encoded bytecode
     */
    export function set_bytecode(bytecode: string): void {
      assembly_script_set_bytecode(bytecode);
    }
}

export namespace Context {
    /**
     * Get context current owned addresses.
     *
     * You can check your own address or check the addresses of the smart contract you've created during the current execution.
     *
     * @return {string} JSON formated list of addresses containing the owned addresses
     */
    export function get_owned_addresses(): string {
      return assembly_script_get_owned_addresses();
    }

    /**
     * Get context current call stack
     *
     * The call stack is stack of called module. You can look all previous \
     * addresses since the address of the operation sender.
     *
     * @return {string} JSON formated list of addresses containing the call stack
     */
    export function get_call_stack(): string[] {
      return (<JSON.Arr>(JSON.parse(assembly_script_get_call_stack()))).valueOf().map<string>((x) => x.toString());
    }

    /**
     * Get context current caller address.
     *
     * @return {string} addresse of the caller
     */
    export function get_caller(): string {
      const addresses = get_call_stack();
      return addresses[addresses.length - 2].toString();
    }

    /**
     * Get context current transaction creator address.
     *
     * @return {string} address of the transaction creator
     */
    export function get_tx_creator(): string {
      const addresses = get_call_stack();
      return addresses[0].toString();
    }

    /**
    * Gets the amount of coins transferred in the current call
    *
    * @return {u64} Raw amount of coins (in elementary nits)
    */
    export function get_call_coins(): u64 {
      return assembly_script_get_call_coins();
    }

    /**
     * Gets the slot unix timestamp in milliseconds
     *
     * @return {u64} unix timestamp in milliseconds
     */
    export function get_time(): u64 {
      return assembly_script_get_time();
    }

    /**
     * Return the remaining gas available
     * @return {u64} Gas available
     */
    export function get_remaining_gas(): u64 {
      return assembly_script_get_remaining_gas();
    }
}

/**
 * Generates an event
 *
 * @param {string} event String version of the event
 */
export function generate_event(event: string): void {
  assembly_script_generate_event(event);
}

/**
 * Transfer SCE coins from the current address to to_address
 *
 * @param {string} to Destination address hash in format string
 * @param {u64} amount Raw amount (in elementary units)
 */
export function transfer_coins(to: string, amount: u64): void {
  assembly_script_transfer_coins(to, amount);
}

/**
 * Transfer SCE coins from from_address to to_address
 *
 * @param {string} from Source address hash in format string
 * @param {string} to Destination address hash in format string
 * @param {u64} amount Raw amount (in elementary units)
 */
export function transfer_coins_for(from: string, to: string, amount: u64): void {
  assembly_script_transfer_coins_for(from, to, amount);
}

/**
 * Gets the balance of the current address
 *
 * @return {u64} The raw balance of the address (in elementary nits)
 */
export function get_balance(): u64 {
  return assembly_script_get_balance();
}

/**
 * Gets the balance of the specified address
 *
 * @param {string} address Address hash in format string
 *
 * @return {u64} The raw balance of the address (in elementary nits)
 */
export function get_balance_for(address: string): u64 {
  return assembly_script_get_balance_for(address);
}

/**
 * Hash data and return the base58-encoded hash
 *
 * @param {string} data Data to hash
 *
 * @return {string}
 */
export function hash(data: string): string {
  return assembly_script_hash(data);
}

/**
 * Hash data and return the base58-encoded hash
 *
 * @param {string} data Data that was signed
 * @param {string} signature base58check signature
 * @param {string} publicKey base58check public key
 * @return {bool} true if verification suceeded, false otherwise
 */
export function signature_verify(data: string, signature: string, publicKey: string): bool {
  return assembly_script_signature_verify(data, signature, publicKey);
}

/**
 * Converts a public key to an address
 *
 * @param {string} data Base58check public key
 * @return {string} the resulting address
 */
export function address_from_public_key(data: string): string {
  return assembly_script_address_from_public_key(data);
}

/**
 * Gets an unsafe random i64 (all bits random)
 * This function is unsafe because the random draws can be predicted and manipulated by attackers.
 *
 * @return {i64}random signed 64bit integer
 */
export function unsafe_random(): i64 {
  return assembly_script_unsafe_random();
}

/**
 * Sends an async message
 *
 * @param {string} address Destination address hash in format string
 * @param {string} handler Name of the message handling function
 * @param {u64} validityStartPeriod Period of the validity start slot
 * @param {u8} validityStartThread Thread of the validity start slot
 * @param {u64} validityEndPeriod Period of the validity end slot
 * @param {u8} validityEndThread Thread of the validity end slot
 * @param {u64} maxGas Maximum gas for the message execution
 * @param {u64} gasPrice Price of one gas unit
 * @param {u64} coins Coins of the sender
 * @param {string} data Message data
 */
export function send_message(address: string, handler: string, validityStartPeriod: u64, validityStartThread: u8, validityEndPeriod: u64, validityEndThread: u8, maxGas: u64, gasPrice: u64, coins: u64, data: string): void {
  assembly_script_send_message(address, handler, validityStartPeriod, validityStartThread, validityEndPeriod, validityEndThread, maxGas, gasPrice, coins, data);
}

/**
 * Empty function that can be replaced before the compilation with
 * include_base64.js.
 *
 * ```bash
 * node massa_tools/include_base64.js assembly/create_sc.ts && asc assembly/create_sc.m.ts --target release --exportRuntime
 * ```
 * @param {string} _path
 *
 * @return {string}
 */
export function include_base64(_path: string): string { // eslint-disable-line @typescript-eslint/no-unused-vars
  abort('Please use massa tool *include_base64* compilation');
  return '/!\\ NOT IMPLEMENTED HERE';
}

/**
 * Retrieves the current period
 * @return {u8}
 */
export function get_current_period(): u64 {
  return assembly_script_get_current_period();
}

/**
 * Retrieves the current thread
 * @return {u8}
 */
export function get_current_thread(): u8 {
  return assembly_script_get_current_thread();
}
