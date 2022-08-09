// # Задание 3

// Получить массив имен пользователей по полу (поле `gender`).

import users from "./users.js";

// ```js
const getUsersWithGender = (users, gender) => {
  return users.filter(users => users.gender === gender)
};

console.log(getUsersWithGender(users, 'male'));
 // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//  const getUsersWithGender = (users, gender) => {
//     const maleGender = users.filter(user => user.gender === gender);
//     return maleGender.map(user => user.name);
//   };
