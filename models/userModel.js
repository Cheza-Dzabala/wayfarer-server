import users from '../data/users';

class User {
  constructor({
    id, first_name, last_name, email, password, is_admin,
  }) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
  }
}

const signin = (email, password) => {
  const user = users.find(u => u.email === email && u.password === password);
  return user;
};

module.exports = {
  signin,
};
