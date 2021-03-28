import firebase from '../../config/config';

export const actionHome = () =>  (dispatch) => {
  firebase.database().ref('users').on('value', (dataSnapshot) => {
    let data = dataSnapshot.val() ? dataSnapshot.val() : {}
    let dataItem = {...data}

    dispatch({type: "SET_USER", value: Object.values(dataItem)})
    dispatch({type: "SET_USERKEY", value: Object.keys(dataItem)})
  })
};

// export const actionAbout = (dataUsers, navigation) => (dispatch) => {
//   axios.post('https://reqres.in/api/users', dataUsers)
//   .then(res => {
//     console.log('create user : ', res.data)
//     dispatch({type: "SET_DATA", value: res.data});
//   })
//   .catch(err => {
//       console.log('error', err.response)
//       alert(err?.response?.data?.error)
//   })
// };
