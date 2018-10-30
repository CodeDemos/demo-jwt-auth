
// Users and Items are capitalized to mimic Model conventions
exports.Users = [
  {
    'id': 111,
    'firstname': 'Ace',
    'lastname': 'User',
    'username': 'aceuser',
    'password': '1a2b3c4d'
  },
  {
    'id': 222,
    'firstname': 'Bob',
    'lastname': 'User',
    'username': 'bobuser',
    'password': 'baseball'
  },
  {
    'id': 333,
    'firstname': 'Cal',
    'lastname': 'User',
    'username': 'caluser',
    'password': 'football'
  }
];

exports.Items = [
  // Ace's items
  {
    'id': 1001,
    'userId': 111,
    'name': 'Apple'
  },
  {
    'id': 1002,
    'userId': 111,
    'name': 'Banana'
  },
  {
    'id': 1003,
    'userId': 111,
    'name': 'Cherry'
  },
  // Bob's items
  {
    'id': 2001,
    'userId': 222,
    'name': 'Almonds'
  },
  {
    'id': 2002,
    'userId': 222,
    'name': 'Bread'
  },
  {
    'id': 2003,
    'userId': 222,
    'name': 'Crackers'
  },
  // Cal's items
  {
    'id': 3001,
    'userId': 333,
    'name': 'Alligator'
  },
  {
    'id': 3002,
    'userId': 333,
    'name': 'Baboon'
  },
  {
    'id': 3003,
    'userId': 333,
    'name': 'Camel'
  },
];