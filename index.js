// 7/3/2024 

// for testing 
const users = [
  { name: 'Reuben',
    username: '@blood_pressure_killa',
    followers: 1,
    verified: false,
    bio: "It's an honor and a privilege."
  },
  { name: 'Laisha',
    username: '@passaic_papi',
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours."
  },
  { name: 'Anne',
    username: '@i_love_bambas',
    followers: 12,
    verified: false,
    bio: "@mayabee is my best friend"
  },
  { name: 'Steph',
    username: '@queen_of_the_kew',
    followers: 1200,
    verified: false,
    bio: "✌🏼"
  },
  { name: 'Carmen',
    username: '@omar_apollo_fanclub',
    followers: 1200000,
    verified: true,
    bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
  }
]

const logAllNames = (users) => {
  return users.forEach((user) => console.log(user.name));
}

// logAllNames(users);

const getAllTags = (users) => {
  return users.forEach((user) => console.log(`Hi my name is ${user.name}, and my tag is ${user.username}!s`));
}

// getAllTags(users);

// got stuck on this before 
const sumAllFollowers = (users) => {
  // what I was missing: .followers!! 
  // return users.reduce((accum, currUser) => accum + currUser.followers, 0);
  return users.reduce((accum, {followers}) => accum + followers, 0);
}

// console.log(sumAllFollowers(users));

// got stuck on this before 
// Reuben used 'searchTerm' instead of 'username's 
const searchUsername = (users, username) => {
  // this was the issue with the line at the bottom: Object.keys(users) 
  // return Object.keys(users).find(key => users[key] === username);
  
  // filter vs find -> https://www.freecodecamp.org/news/find-vs-filter-javascript/ 

  // good for reducing what can be returned based on the condition => 1+ 
  // return users.filter((user) => {
  //   if (user.username === username) return user;
  // });

  // good for a specific element based on the condition => 1
  return users.find((user) => {
    if (user.username === username) return user;
  });
}

// console.log(searchUsername(users, '@passaic_papi'));

const longWinded = (users) => {
  return 
}
