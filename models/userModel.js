import bcrypt from 'bcrypt';
import users from '../data/users';
import helpers from '../helpers/helpers';

const saltRounds = 10;
class User {
  constructor({
    id, first_name, last_name, email, password, is_admin,
  }) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.is_admin = is_admin;
    this.password = password;
  }

  safe() {
    return {
      id: this.id,
      email: this.email,
      first_name: this.first_name,
      last_name: this.last_name,
    };
  }
}

const hashIt = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
const findUser = (email) => {
  const user = users.find(u => u.email === email);
  return user;
};

const findUserById = (id) => {
  const user = users.find(u => u.id === parseInt(id));
  return user;
};

const signin = (email, password) => {
  const obj = users.find(u => u.email === email && bcrypt.compareSync(password, u.password));
  if (obj) {
    const user = new User(obj);
    return user.safe();
  }
  return null;
};


const signup = (data) => {
  const id = helpers.generateId(users);
  data.id = id;
  data.is_admin = false;
  const hash = hashIt(data.password);
  data.password = hash;
  const user = new User(data);
  users.push(user);
  return user.safe();
};

const allUsers = () => {
  const payload = [];
  users.forEach((element) => {
    const user = new User(element);
    payload.push(user.safe());
  });
  return payload;
};
module.exports = {
  signin, signup, findUser, findUserById, allUsers,
};
