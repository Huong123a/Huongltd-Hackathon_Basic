//Bài 1
function ex_01() {
  function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const length = str.length;
    for (let i = 0; i < length / 2; i++) {
      if (str[i] !== str[length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  const userInput = prompt("Nhập vào một chuỗi ký tự:").trim();
  if (isPalindrome(userInput)) {
    console.log("Chuỗi là đối xứng!");
  } else {
    console.log("Chuỗi không đối xứng!");
  }
}

//Bài 2
function ex_02() {
  function convertText(text) {
    let convertedText = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] === text[i].toUpperCase()) {
        convertedText += text[i].toLowerCase();
      } else {
        convertedText += text[i].toUpperCase();
      }
    }
    return convertedText;
  }

  const inputText = prompt("Nhập vào đoạn text: ");
  const newText = convertText(inputText);
  console.log("Đoạn text mới: ", newText);
}
//Bài 3
function ex_03() {
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  function getDaysInMonth(month, year) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2 && isLeapYear(year)) {
      return 29;
    }
    return daysInMonth[month - 1];
  }

  const inputMonth = 8;
  const inputYear = 2023;

  const daysInInputMonth = getDaysInMonth(inputMonth, inputYear);
  console.log(
    `Tháng ${inputMonth} năm ${inputYear} có ${daysInInputMonth} ngày.`
  );
}
//Bài 4
//Cách 1: Sử dụng hàm sort
function ex_04() {
  function sortDescendingWithSort(arr) {
    return arr.sort((a, b) => b - a);
  }

  const arr = [3, 25, 38, 49, 12];
  const sortedArr = sortDescendingWithSort(arr);
  console.log("Original array:", arr);
  console.log("Sorted array (descending order) using sort():", sortedArr);
}
//Cách 2: Không sử dụng hàm sort
function ex_05() {
  function sortDescendingWithoutSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        if (arr[i] < arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
    return arr;
  }

  const arr = [3, 25, 38, 49, 12];
  const sortedArr = sortDescendingWithoutSort(arr);
  console.log("Original array:", arr);
  console.log(
    "Sorted array (descending order) without using sort():",
    sortedArr
  );
}

// Bài 5
function ex_06() {
  function getDistinctIntegers() {
    const distinctIntegers = new Set();

    while (distinctIntegers.size < 5) {
      const input = prompt(`Nhập số nguyên thứ ${distinctIntegers.size + 1}:`);
      const parsedInput = parseInt(input);

      if (
        !isNaN(parsedInput) &&
        Number.isInteger(parsedInput) &&
        !distinctIntegers.has(parsedInput)
      ) {
        distinctIntegers.add(parsedInput);
      } else {
        console.log("Vui lòng nhập một số nguyên khác nhau.");
      }
    }

    return [...distinctIntegers];
  }

  function getMaxInteger(arr) {
    return Math.max(...arr);
  }
  const distinctIntegers = getDistinctIntegers();
  const maxInteger = getMaxInteger(distinctIntegers);
  console.log(`Số nguyên lớn nhất trong danh sách là: ${maxInteger}`);
}
