import idb from 'idb-keyval'

/**
 * Read data from IndexedDB
 *
 * @see https://github.com/jakearchibald/idb-keyval#get
 *
 * @param  {String} key IndexedDB data key
 * @return {*}          IndexedDB data
 */
export const getIndexedDBItem = key => idb.get(key).then(value => value)

/**
 * Write data to IndexedDB
 *
 * @see https://github.com/jakearchibald/idb-keyval#set
 *
 * @param {String} key   IndexedDB data key
 * @param {*}      value IndexedDB data to store
 */
export const setIndexedDBItem = (key, value) => idb.set(key, value)

/**
 * Delete data from IndexedDB
 *
 * @see https://github.com/jakearchibald/idb-keyval#delete
 *
 * @param {String} key IndexedDB data key
 */
export const removeIndexedDBItem = key => idb.delete(key)

/**
 * Read data from localStorage
 *
 * @param  {String} key localStorage data key
 * @return {Object}     localStorage data
 */
export const getLocalItem = key => JSON.parse(localStorage.getItem(key))

/**
 * Write data to localStorage
 *
 * @param  {String} key   localStorage data key
 * @param  {Object} value localStorage data
 */
export const setLocalItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value))

/**
 * Delete data from localStorage
 *
 * @param  {String} key localStorage data key
 */
export const removeLocalItem = key => localStorage.removeItem(key)

/**
 * Read data from sessionStorage
 *
 * @param  {String} key sessionStorage data key
 * @return {Object}     sessionStorage data
 */
export const getSessionItem = key => JSON.parse(sessionStorage.getItem(key))

/**
 * Write data to sessionStorage
 *
 * @param  {String} key   sessionStorage data key
 * @param  {Object} value sessionStorage data
 */
export const setSessionItem = (key, value) =>
  sessionStorage.setItem(key, JSON.stringify(value))

/**
 * Delete data from sessionStorage
 *
 * @param  {String} key sessionStorage data key
 */
export const removeSessionItem = key => sessionStorage.removeItem(key)
