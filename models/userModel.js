import users from '../data/users';
import helpers from '../helpers/helpers';

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

const findUser = (email) => {
  const user = users.find(u => u.email === email);
  return user;
};

const findUserById = (id) => {
  const user = users.find(u => u.id === parseInt(id));
  return user;
};

const signin = (email, password) => {
  const user = users.find(u => u.email === email && u.password === password);
  return user;
};


const signup = (data) => {
  console.log(data);
  const id = helpers.generateId(users);
  data.id = id;
  data.is_admin = false;
  const user = new User(data);
  users.push(user);
  return user;
};
module.exports = {
  signin, signup, findUser, findUserById,
};
