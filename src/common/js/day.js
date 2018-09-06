import day from 'dayjs';
/**
 * @description  获取日期，格式yyyy/mm/ss
 */
export function getDate1(time){
  return day(time).format('YYYY/MM/DD');
}
/**
 * @description  获取日期，格式yyyy-mm-ss
 */
export function getDate2(time){
  return day(time).format('YYYY-MM-DD');
}
/**
 * @description 获取时间,格式hh:mm
 */
export function getTime(time){
  return day(time).format('hh:mm');
}
/**
 * @description 获取日期,格式mm/ss
 */
export function getDate3(time){
  return day(time).format('MM-DD');
  
}