function searchString(str) {
  const strnum = ["1", "2", "3", "4"];

  let strArr = str.split("");
  let str1 = [];
  let i = 0;
  for (element of strArr) {
    if (strnum.includes(element)) {
      str1[i] = element;
      i++;
    }
  }
  console.log(str1);
}

let str = "s3u14";

searchString(str);
