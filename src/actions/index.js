import * as types from './actionTypes';
import axios from 'axios';

function getAdvicesAPI() {
  return axios.get(`http://localhost:3001/advices`);
}

function postAdviceAPI(advice) {
  return axios.post(`http://localhost:3001/advice`, advice);
}

function getTopAdvicesAPI() {
  return axios.get(`http://localhost:3001/advices`);
}

function updateAdviceAPI(advice) {
  return axios.put(`http://localhost:3001/advice/${advice.id}`, advice);
}

function deleteAdviceAPI(advice) {
  return axios.delete(`http://localhost:3001/advice/${advice.id}`);
}

function createUserAPI(advice) {
  return axios.put(`http://localhost:3001/user`, advice);
}

function signInUser(email, password) {
  return axios.post(`http://localhost:3001/login`, {email,password});
}

function signUpUser(body) {
  return axios.post(`http://localhost:3001/register`, body);
}


let actions = {

  getTopAdvices: function() {
    getTopAdvicesAPI()
      .then(res => {
        return {
          type: types.GET_ADVICES,
          data: res.data
        };
      })
      .catch(err => {
        console.log(err);
      })
  },



  addAdvice: function(text) {
    return {
      type: types.ADD_ADVICE,
      text: text
    };
  },

  getAdvices: function() {
    getAdvicesAPI()
      .then(res => {
        return {
          type: types.GET_ADVICES,
          data: res.data
        };
      })
      .catch(err => {
        console.log(err);
        return err;
      })
  },

  createAdvice: function(advice) {
    postAdviceAPI(advice)
      .then(res => {
        return {
          type: types.CREATE_ADVICE,
          data: res.data
        };
      })
      .catch(err => {
        console.log(err);
        return err;
      })
  },

  completeAdvice: function(id) {
    return {
      type: 'COMPLETE_ADVICE',
      id: id
    };
  },

  deleteAdvice: function(id) {
    return {
      type: 'DELETE_ADVICE',
      id: id
    };
  },

  createNewUserId: function() {
    return {
      type: 'CREATE_USER_ID',
      id: Math.round(Math.random() * 100)
    }
  },

  createNewUserIdIfOdd: function() {
    return (dispatch, getState) => {
      const { user } = getState()
      if (user.id % 2 === 0) {
        return
      }
      dispatch(actions.createNewUserId())
    }
  },

  createNewUserIdAsync: function() {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(actions.createNewUserId())
      }, 2500)
    }
  }

}

export default actions;
