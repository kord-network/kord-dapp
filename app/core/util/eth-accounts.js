import { bufferToHex } from 'ethereumjs-util'
import { fromV3 } from 'ethereumjs-wallet'

/**
 * Remove '0x' prefix from a given string if present
 *
 * @param  {String} str String to trim
 * @return {String}     String without '0x' prefix
 */
const removeHexPrefix = str => str.substring(0, 2) === '0x' && str.substring(2)

/**
 * Create an Ethereum account object from an encrypted keystore file
 *
 * @param  {Object} encryptedKeystore Valid Ethereum keystore file JSON
 * @param  {String} password          Password to decrypt the keystore
 * @return {Object}                   Constructed Ethereum account
 */
export const create = (encryptedKeystore, password) => {
  try {
    // decrypt `keystore` with `password`
    const decryptedKeystore = fromV3(
      JSON.stringify(encryptedKeystore),
      password,
      true
    )

    // extract private key from decrypted keystore
    const privateKey = removeHexPrefix(
      bufferToHex(decryptedKeystore.getPrivateKey())
    )

    // extract checksum hex address from decrypted keystore
    const address = decryptedKeystore.getChecksumAddressString()

    return {
      address,
      privateKey,
    }
  } catch (e) {
    // catch keystore decryption errors
    return e
  }
}
