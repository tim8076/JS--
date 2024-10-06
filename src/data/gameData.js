export const gameQuestions = [
  {
    id: 1,
    title: "JS中，下列宣告變數的寫法，何者錯誤?",
    answer: 3,
    questions: [
      {
        id: 1,
        content: "let",
      },
      {
        id: 2,
        content: "const",
      },
      {
        id: 3,
        content: "int",
      },
      {
        id: 4,
        content: "var",
      },
    ],
  },
  {
    id: 2,
    title: "以下對 var 的敘述，何者錯誤?",
    answer: 3,
    questions: [
      {
        id: 1,
        content: "可以重複宣告",
      },
      {
        id: 2,
        content: "具有 hosting 特性",
      },
      {
        id: 3,
        content: "無法被重新賦值",
      },
      {
        id: 4,
        content: "在賦值前讀取變數，會是 undefined",
      },
    ],
  },
  {
    id: 3,
    title: "以下對變數宣告的敘述，何者錯誤?",
    answer: 3,
    questions: [
      {
        id: 1,
        content: "開頭可以是數字",
      },
      {
        id: 2,
        content: "第一個字母必須為英文、底線_、或是錢字號$",
      },
      {
        id: 3,
        content: "英文大小寫沒有區別",
      },
      {
        id: 4,
        content: "不能使用 if for in var 等 JS 原本內建的 關鍵字",
      },
    ],
  },
  {
    id: 4,
    title: "100 * true  計算結果為何?",
    answer: 3,
    questions: [
      {
        id: 1,
        content: "'100true'",
      },
      {
        id: 2,
        content: "101",
      },
      {
        id: 3,
        content: "100",
      },
      {
        id: 4,
        content: "0",
      },
    ],
  },
  {
    id: 5,
    title: "要將小數點四捨五入，可以使用哪個方法?",
    answer: 2,
    questions: [
      {
        id: 1,
        content: "Math.floor()",
      },
      {
        id: 2,
        content: "Math.round()",
      },
      {
        id: 3,
        content: "Math.ceil()",
      },
      {
        id: 4,
        content: "Math.pow()",
      },
    ],
  },
  {
    id: 6,
    title: "哪一個不是 JavaScript 中的資料型別？",
    answer: 4,
    questions: [
      {
        id: 1,
        content: "String",
      },
      {
        id: 2,
        content: "Number",
      },
      {
        id: 3,
        content: "Boolean",
      },
      {
        id: 4,
        content: "Character",
      },
    ],
  },
  {
    id: 7,
    title: "以下哪個方法會直接修改原陣列？",
    answer: 4,
    questions: [
      {
        id: 1,
        content: "map()",
      },
      {
        id: 2,
        content: "filter()",
      },
      {
        id: 3,
        content: "slice()",
      },
      {
        id: 4,
        content: "splice()",
      },
    ],
  },
  {
    id: 8,
    title: "在 JavaScript 中，null 和 undefined 的主要區別是什麼？",
    answer: 2,
    questions: [
      {
        id: 1,
        content: "null 表示一個未定義的變數，而 undefined 表示變數的值為空",
      },
      {
        id: 2,
        content: "null 表示明確的空值，而 undefined 表示變數未初始化",
      },
      {
        id: 3,
        content: "null 和 undefined 是完全相同的",
      },
      {
        id: 4,
        content: "undefined 是用來表示布林值的類型",
      },
    ],
  },
  {
    id: 9,
    title: "下列哪個方法會停止事件的傳播？",
    answer: 1,
    questions: [
      {
        id: 1,
        content: "event.stopPropagation()",
      },
      {
        id: 2,
        content: "event.preventDefault()",
      },
      {
        id: 3,
        content: "event.stopImmediatePropagation()",
      },
      {
        id: 4,
        content: "event.cancelBubble()",
      },
    ],
  },
  {
    id: 10,
    title: "== 和 === 的區別是什麼？",
    answer: 3,
    questions: [
      {
        id: 1,
        content: "它們的行為相同",
      },
      {
        id: 2,
        content: "== 是嚴格相等運算符，=== 是寬鬆相等運算符",
      },
      {
        id: 3,
        content: "== 是寬鬆相等運算符，=== 是嚴格相等運算符",
      },
      {
        id: 4,
        content: "兩者都不區分數據類型",
      },
    ],
  },
  {
    id: 11,
    title: "哪一個語法用來複製物件的屬性到另一個物件？",
    answer: 2,
    questions: [
      {
        id: 1,
        content: "Object.clone()",
      },
      {
        id: 2,
        content: "Object.assign()",
      },
      {
        id: 3,
        content: "Object.copy()",
      },
      {
        id: 4,
        content: "Object.duplicate()",
      },
    ],
  },
  {
    id: 12,
    title: "NaN 是什麼意思？",
    answer: 1,
    questions: [
      {
        id: 1,
        content: "Not a Number",
      },
      {
        id: 2,
        content: "Null and Null",
      },
      {
        id: 3,
        content: "No active Network",
      },
      {
        id: 4,
        content: "以上皆非",
      },
    ],
  },
  {
    id: 13,
    title: "Promise 有哪三個狀態？",
    answer: 1,
    questions: [
      {
        id: 1,
        content: "Pending, Fulfilled, Rejected",
      },
      {
        id: 2,
        content: "Init, Success, Fail",
      },
      {
        id: 3,
        content: "Start, Done, Fail",
      },
      {
        id: 4,
        content: "Open, Close, Error",
      },
    ],
  },
  {
    id: 14,
    title: "什麼是事件冒泡？",
    answer: 1,
    questions: [
      {
        id: 1,
        content: "事件從最深的目標元素開始，逐步向上傳播到最外層的元素",
      },
      {
        id: 2,
        content: "事件從最外層的元素開始，逐步向內傳播到目標元素",
      },
      {
        id: 3,
        content: "僅在事件目標元素內部處理事件",
      },
      {
        id: 4,
        content: "僅在捕獲階段處理事件",
      },
    ],
  },
  {
    id: 15,
    title: "當你在一個函式中使用 return 之後，會發生什麼？",
    answer: 2,
    questions: [
      {
        id: 1,
        content: "函式繼續執行剩下的代碼",
      },
      {
        id: 2,
        content: "函式立即停止並返回值",
      },
      {
        id: 3,
        content: "函式返回 undefined",
      },
      {
        id: 4,
        content: "函式進入錯誤狀態",
      },
    ],
  },
  {
    id: 16,
    title: "document.querySelector() 用來做什麼？",
    answer: 1,
    questions: [
      {
        id: 1,
        content: "選取單一的 DOM 元素",
      },
      {
        id: 2,
        content: "選取所有匹配的 DOM 元素",
      },
      {
        id: 3,
        content: "對 DOM 元素進行排序",
      },
      {
        id: 4,
        content: "用來添加事件監聽器",
      },
    ],
  },
  {
    id: 17,
    title: "forEach() 方法的主要作用是什麼？",
    answer: 2,
    questions: [
      {
        id: 1,
        content: "遍歷陣列的每個元素並返回新的陣列",
      },
      {
        id: 2,
        content: "遍歷陣列的每個元素，但不返回新的陣列",
      },
      {
        id: 3,
        content: "遍歷物件的每個屬性",
      },
      {
        id: 4,
        content: "計算陣列中所有元素的總和",
      },
    ],
  },
  {
    id: 18,
    title: "如何使用 ES6 的解構賦值來交換兩個變數的值？",
    answer: 2,
    questions: [
      {
        id: 1,
        content: "let temp = a; a = b; b = temp;",
      },
      {
        id: 2,
        content: "[a, b] = [b, a]",
      },
      {
        id: 3,
        content: "a.swap(b);",
      },
      {
        id: 4,
        content: "swap(a, b)",
      },
    ],
  },
  {
    id: 19,
    title: "哪個方法可以深拷貝一個物件？",
    answer: 2,
    questions: [
      {
        id: 1,
        content: "Object.assign()",
      },
      {
        id: 2,
        content: "JSON.parse(JSON.stringify(obj))",
      },
      {
        id: 3,
        content: "Object.clone()",
      },
      {
        id: 4,
        content: "Array.copy()",
      },
    ],
  },
  {
    id: 20,
    title: "在 JavaScript 中，如何合併兩個陣列？",
    answer: 1,
    questions: [
      {
        id: 1,
        content: "array1.concat(array2)",
      },
      {
        id: 2,
        content: "array1.push(array2)",
      },
      {
        id: 3,
        content: "array1.merge(array2)",
      },
      {
        id: 4,
        content: "array1.add(array2)",
      },
    ],
  },
];
