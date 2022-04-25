// first example: Sum numbers for()

//1 получаем необходимые элементы
const calculateSumBtnElement = document.querySelector("#calculator button");

//3 создаём функцию
function calculateSum() {
  // получаем значение введёное пользователем
  const userInputElement = document.getElementById("user-number");
  const enteredNumber = userInputElement.value;

  let sumUpNumber = 0; // счётчик
  for (let i = 0; i <= enteredNumber; i++) {
    // цикл
    // суммирование каждой итерации и обновление счётчика
    sumUpNumber = sumUpNumber + i;
  }
  // получение отображаемого результат элемента
  const outputResultElement = document.getElementById("calculated-sum");
  // положить результат
  outputResultElement.textContent = sumUpNumber;
  // отобразить скрытый элемент
  outputResultElement.style.display = "block";
}
//2 вешаем на кнопку событие клика
calculateSumBtnElement.addEventListener("click", calculateSum);

// second example: HIGHLIGHT links for of()

const highlightLinksBtnElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");
  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}
highlightLinksBtnElement.addEventListener("click", highlightLinks);

// DISPLAY USER DATA for in()

const dummyUserData = {
  fistName: "Dima",
  lastName: "Belov",
  age: 23,
};
//1 получение элемента
const displayUserDataBtn = document.querySelector("#user-data button");
//3 создание функции
function displayUserData() {
  //4 получение списка
  const outputElement = document.getElementById("output-user-data");
  //5 очистка поля перед добавлением
  outputElement.innerHTML = "";
  // 6 создание цикла for in
  for (const propertyName in dummyUserData) {
    // получение каждого свойства в объекте
    //7 создание элементов списка
    const newUserDataElement = document.createElement("li");
    //8 каждое свойство в верхний регистр + добавление каждого значения свойства
    const outputText =
      propertyName.toUpperCase() + ": " + dummyUserData[propertyName];
    //9 присвоение созданному элементу списка
    newUserDataElement.textContent = outputText;
    //10 добавление элемента списка на страницу
    outputElement.append(newUserDataElement);
  }
}
//2 событие клика
displayUserDataBtn.addEventListener("click", displayUserData);

//--------------------------------

// STATISTICS / ROLL THE DICE
//1 получение элемента
const rollDiceBtnElement = document.querySelector("#statistics button");

function rollDice() {
  // функция получения случайного числа от 1 до 6

  return Math.floor(Math.random() * 6) + 1; // Math.floor(): 5.64 => 5
}

function deriveNumberOfDiceRolls() {
  //2 получение элемента ввода числа
  const targetNumberInput = document.getElementById("user-target-number");
  //3 получение списка элементов
  const diceRollsListElement = document.getElementById("dice-rolls");
  //4 получение введёного числа (значение инпута)
  const enteredNumber = targetNumberInput.value;
  //5 очистка перед выполнением
  diceRollsListElement.innerHTML = "";
  //5
  let hasRolledTargetNumber = false;
  // 6 счётчик количества бросков кубика
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    //
    const rolledNumber = rollDice(); // присвоить число бросков

    // if (rolledNumber == enteredNumber) {
    //     hasRolledTargetNumber = true;
    // }

    // увеличивать число бросков
    numberOfRolls++;
    //7 создать элементы списка
    const newRollListElement = document.createElement("li");
    //8 вывод количества итераций до получения нужного результата (кол-во бросков до получения введёного числа)
    const outputText = "Roll " + numberOfRolls + ": " + rolledNumber;
    // 9 присвоение элементу списка
    newRollListElement.textContent = outputText;
    // 10 добавление элемента  на страницу
    diceRollsListElement.append(newRollListElement);
    // кидать кубик до тех пор пока выброшенное значение != введёному значению
    hasRolledTargetNumber = rolledNumber == enteredNumber;
  }
  // 11 получение элементов для вывода
  const outputTotalRollsElement = document.getElementById("output-total-rolls");
  const outputTargetNumberElement = document.getElementById(
    "output-target-number"
  );
  //12 вывод полученного количества бросков и введёного значения
  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}
// событие клика
rollDiceBtnElement.addEventListener("click", deriveNumberOfDiceRolls);
