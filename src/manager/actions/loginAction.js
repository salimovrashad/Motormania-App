import database from '../../firebase/firebaseConfig';

export const addUser = (user) => ({
  type: "ADD_USER",
  user
})

export const addUserToDatabase = (userData = {}) => {
  return (dispatch) => {
    const { name = '', email = '', password = '' } = userData;
    const user = { name, email, password };

    database.ref("users").push(user).then((res) => {
      dispatch(addUser({
        id: res.key,
        ...user
      }))
    })
  }
}

export const editUser = (id, update) => ({
  type: "EDIT_USER",
  id,
  update
})

export const editUserFromDatabase = (id, updates) => {
  return (dispatch) => {
    return database.ref(`users/${id}`).update(updates).then(() => {
      dispatch(editUser(id, updates));
    })
  }
}

export const deleteUser = (id) => ({
  type: "REMOVE_USER",
  myid: id
})

export const removeUserFromDatabase = (id) => {
  return (dispatch) => {
    return database.ref(`users/${id}`).remove().then(() => {
      dispatch(deleteUser(id));
    })
  }
}

export const getUsers = (users) => ({
  type: "GET_USERS",
  users
})

export const getUsersFromDatabase = () => {
  return (dispatch) => {
    return database.ref("users").once("value").then((snapshot) => {
      const users = [];

      snapshot.forEach((user) => {
        users.push({
          id: user.key,
          ...user.val()
        })
      })

      dispatch(getUsers(users));
    })
  }
}