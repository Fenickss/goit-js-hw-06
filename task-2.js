// # Задание 2

// Получить массив объектов пользователей по цвету глаз (поле `eyeColor`).

// ```js
import users from "./users.js";

// const getUsersWithEyeColor = (users, color) => {
//   return users.find(users => users.eyeColor === "blue")
// };

const getUsersWithEyeColor = (users, color) => users.filter(users => users.eyeColor === color);



console.log(getUsersWithEyeColor(users, 'blue'));
 // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
