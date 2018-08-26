/**
 * 写入本地储存的方法
 * @method setStorage
 * @param {key，val}需要存入的键名和值
 */
export function setStorage(key,val){
    localStorage.setItem(key,val);
}
/**
 * 获取本地储存的方法
 * @method getStorage
 * @param {key}需要获取的键名
 */
export function getStorage(key){
    return localStorage.getItem(key);
}
/**
 * 写入本地储存的方法
 * @method removeStorage
 * @param {key}需要删除的键名
 */
export function removeStorage(...keys){
    keys.forEach((key) => {
        localStorage.removeItem(key)
    })
}