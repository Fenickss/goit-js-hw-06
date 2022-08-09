// # Задание 7

// Получить общую сумму баланса (поле `balance`) всех пользователей.

import users from "./users.js";


 const calculateTotalBalance = users => {
   return users.reduce((totalBalance, users) => totalBalance + users.balance, 0)
 };

console.log(calculateTotalBalance(users)); // 20916

// const calculateTotalBalance = users => users.reduce(
//     (totalBalance, user) => totalBalance + user.balance,0);
// console.log(calculateTotalBalance(users)); // 20916
