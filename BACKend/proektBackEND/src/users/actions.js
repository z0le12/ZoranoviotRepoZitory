const database = require('../database/mysql.js');
const bcrypt = require('bcrypt');

const { con } = database;

function response (req, res) {
  res.send('Hello World');
};

function listAllUsers() {
  const listingUsers = 'SELECT * FROM users';
    return new Promise((resolve, reject) => {
    con.query(listingUsers, (err, results) => {
      if (err) {
        reject(err);
        console.error(err);
      } else {
      resolve(results);
      }
    });
  });
};

const list = async (req, res, next) => {
  try {
    const users = await listAllUsers();
    res.status(200).send({success: true, message: "A list of all users", body: users});
  } catch(err) {
    res.status(500).send(err.message);
  }
  await next;
};

function listSingleUser(id) {
  const listingSingleUser = 'SELECT * FROM users WHERE id = ?';
    return new Promise((resolve, reject) => {
    con.query(listingSingleUser, [id], (err, results) => {
      if (err) {
        reject(err);
        console.error(err);
      } else {
      resolve(results);
      }
    });
  });
};

const listOne = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await listSingleUser(id);
    res.status(200).send({success: true, message: `user with username ${user[0].username} is displayed`, body: user[0]});
  } catch(err) {
    res.status(500).send(err.message);
  }
  await next;
};

function searchSingleUser(name) {
  const searchUserQuery = "SELECT * FROM users WHERE firstName = ? || lastName = ?";
  return new Promise((resolve, reject) => {
    con.query(searchUserQuery, [name, name], (err, results) => {
      if(err) {
        reject(err);
        console.error(err);
      } else {
        resolve(results)
      }
    });
  });
};

const search = async(req, res, next) => {
  const name = req.params.name;
  // const lastName = req.params.name;

  try {
    const searchQuery = await searchSingleUser(name);
    res.status(200).send({success: true, message: "Searched user:", body: searchQuery});
  } catch(err) {
    res.status(404).send({error: err.message, message: "searched user cannot be found"});
  }
  await next;
};

function createNewUser(firstName, lastName, email, phoneNumber, username, password, created_on) {
  const listingUsers = 'INSERT INTO users (firstName, lastName, email, phoneNumber, username, password, created_on) VALUES (?, ?, ?, ?, ?, ?, ?)';
    return new Promise((resolve, reject) => {
    con.query(listingUsers, [firstName, lastName, email, phoneNumber, username, password, created_on], (err, results) => {
      if (err) {
        reject(err);
      } else {
      resolve(results)
      }
    });
  });
};

const create = async (req, res, next) => {
  // const {
  //   firstName,
  //   lastName,
  //   email,
  //   phoneNumber,
  //   username,
  //   password
  // }: {
  //   firstName: string,
  //   lastName: string,
  //   email: string,
  //   phoneNumber: string,
  //   username: string,
  //   password: string
  // } = req.body;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const username = req.body.username;
  const password = req.body.password;
  const created_on = new Date(Date.now());

  const salt = bcrypt.genSaltSync(10);
  const getRounds = bcrypt.getRounds(salt);
  const passHash = bcrypt.hashSync(password, getRounds);
  
  const usersInDB = await listAllUsers();

  if(usersInDB.length < 1) {
    const newUser = await createNewUser(firstName, lastName, email, phoneNumber, username, passHash, created_on);
    return res.status(200).send({success: true, message: "New user has been created", body: {firstName, lastName, email, phoneNumber, username, passHash, created_on}});
    } else {
      for (let i = 0; i < usersInDB.length; i++) {
        if (username === usersInDB[i].username || email === usersInDB[i].email) {
          return res.status(400).send({success: false, message: "Check your username or e-mail"});
      };
    };
  };

  try {
    const newUser = await createNewUser(firstName, lastName, email, phoneNumber, username, passHash, created_on);
    return res.status(200).send({success: true, message: "New user has been created", body: {firstName, lastName, email, phoneNumber, username, passHash, created_on}});
    } catch(err) {
    res.status(500).send(err.message);
  };
  await next;
};

function deleteSingleUser(id) {
    const delitingUsers = 'DELETE FROM users WHERE id = ?';
    return new Promise((resolve, reject) => {
    con.query(delitingUsers, [id], (err, results) => {
      if (err) {
        reject(err);
        console.error(err);
      } else {
      resolve(results);
      }
    });
  });
};

const del = async (req, res, next) => {
  const id = req.params.id;
  try {
  const user = await listSingleUser(id);
  const deletedUser = await deleteSingleUser(id);
  res.status(201).send({success: true, message: `User with ${user[0].username} has been deleted from the database`})
  } catch(err) {
    res.status(400).send(err.message)
  };
  await next;
}

function updateUser(user, id) {
  const updateQuery = 'UPDATE users SET firstName = ?, lastName = ?, phoneNumber = ?, username = ?, email = ? WHERE id = ?';
  return new Promise((resolve, reject) => {
    con.query(updateQuery, [user.firstName, user.lastName, user.phoneNumber, user.username, user.email, id], (err, results) => {
      if (err) {
        reject(err);
        console.error(err);
      } else {
      resolve(results);
      }
    });
  });
};

const update = async(req, res, next) => {
  const id = req.params.id;
  
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const username = req.body.username;
  const password = req.body.password;

  let user = { 
    firstName: '',
    lastName: '',
    username: '',
    phoneNumber: '',
    email: '',
    password: ''
  };

  try {
      const users = await listSingleUser(id);
      const userFromDb = users[0];

      if(firstName == null || firstName == undefined) {
        user.firstName = userFromDb.firstName
      } else {
        user.firstName = firstName
      }
      if(lastName == null || lastName == undefined) {
        user.lastName = userFromDb.lastName
      } else {
        user.lastName = lastName
      }
      if(username) {
        return res.status(403).send({success: false, message: "You cannot change username"});
      } else {
        user.username = userFromDb.username;
      }
      if(phoneNumber == null || phoneNumber == undefined) {
        user.phoneNumber = userFromDb.phoneNumber
      } else {
        user.phoneNumber = phoneNumber
      }
      if(email == null || email == undefined) {
        user.email = userFromDb.email
      } else {
        user.email = email
      }
      if (password == null || password == undefined) {
        user.password = userFromDb.password;
      } else {
        user.password = password;
      }
      const resultFromUpdateDb = await updateUser(user, id);
      res.status(200).send({success: true, message: `User with provided username ${user.username} has been updated!`});
  } catch(err) {
      res.status(500).send({success: false, message: err.message});
  }
  await next;
}

function userLogIn(detail) {
  const findUserWithEmailPass = "SELECT * FROM users WHERE email = ? || phoneNumber = ? || username = ?";
  return new Promise((resolve, reject) => {
    con.query(findUserWithEmailPass, [detail, detail, detail], (err, results) => {
      if(err) {
        reject(err);
        console.error(err);
      } else {
        resolve(results);
      }
    });
  });
};

const logIn = async (req, res, next) => {
  const detail = req.body.detail;
  const password = req.body.password;

 try {
    const loggedUser = await userLogIn(detail);
    const passCheck = bcrypt.compareSync(password, loggedUser[0].password);
    console.log(loggedUser);
    if(passCheck === true) {
    res.status(200).send('Logged in');
    } else {
      res.status(404).send({success: false, message: 'Please check your login details!'});
    }
 } catch(err) {
    res.status(404).send(`User with ${detail} not found, please check your login details`);
 }
};

module.exports = {
  response,
  list,
  listOne,
  create,
  del,
  update,
  logIn,
  search
};