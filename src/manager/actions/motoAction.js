import database from '../../firebase/firebaseConfig';

export const addMoto = (moto)=>({
  type: "ADD_MOTO",
  moto
})

export const addMotoToDatabase = (motoData={})=>{
  return (dispatch) => {
    const { image='', image1='', image2='', image3='', name='', describtion='', price='', type='' } = motoData;
    const moto = {image,image1,image2,image3,name,describtion,price,type};

    database.ref("motos").push(moto).then((res) => {
        dispatch(addMoto({
            id: res.key,
            ...moto
        }))
    })
}
}


export const editMoto =(id,update)=>({
  type:"EDIT_MOTO",
  id,
  update
})

export const editMotoFromDatabase = (id, updates) => {
  return (dispatch) => {
      return database.ref(`motos/${id}`).update(updates).then(() => {
          dispatch(editMoto(id,updates));
      })
  }
}


export const deleteMoto =(id)=>({
  type:"REMOVE_MOTO",
  myid:id
})

export const removeMotoFromDatabase = (id) => {
  return (dispatch) => {
      return database.ref(`motos/${id}`).remove().then(() => {
          dispatch(deleteMoto(id));
      })
  }   
}

export const getMotos = (motos) => ({
  type: "GET_MOTOS",
  motos
})

export const getMotosFromDatabase = () => {
  return (dispatch) => {
      return database.ref("motos").once("value").then((snapshot) => {
          const motos = [];

          snapshot.forEach((moto) => {
              motos.push({
                  id: moto.key,
                  ...moto.val()
              })
          })

          dispatch(getMotos(motos));
      })
  }
}