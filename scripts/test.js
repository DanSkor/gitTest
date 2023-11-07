function toCamelCase(str){
  let newStr = str.replace('_', '-');
  console.log(newStr);
  let arr = newStr.split('-');
  console.log(arr);
  let result = arr.map(item => item[0].toUpperCase() + item.slice(1));
  return result.join('');
}

console.log(toCamelCase('the_Stealth-warrior'));