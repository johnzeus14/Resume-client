import auth from '../../api/backend/auth.js';
import session from '../../api/backend/session.js';
import {
  LOGIN_BEGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REMOVE_TOKEN,
  SET_TOKEN,
} from './types';

const TOKEN_STORAGE_KEY = 'TOKEN_STORAGE_KEY';

const initialState = {
  authenticating: false,
  error: false,
  token: null,
  sucess:false
};

const getters = {
  isAuthenticated: state => !!state.token,
};

const mutations = {
  [LOGIN_BEGIN](state) {
    state.authenticating = true;

  },
  [LOGIN_FAILURE](state) {

    state.error = true;
  },
  [LOGIN_SUCCESS](state) {
    state.authenticating = false;
    state.error = false;
  },
  [LOGOUT](state) {
    state.authenticating = false;
    state.error = false;
  },
  [SET_TOKEN](state, token) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
    session.defaults.headers.Authorization = `Token ${token}`;
    state.token = token;
  },
  [REMOVE_TOKEN](state) {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    delete session.defaults.headers.Authorization;
    state.token = null;
  },
};

const actions = {
  login({ commit }, { email, password }) {
    commit(LOGIN_BEGIN);
    return auth.login(email, password)
      .then(({ data }) => commit(SET_TOKEN, data.token))
      .then(() => commit(LOGIN_SUCCESS))
      .catch((error) => commit(LOGIN_FAILURE, error));
  },
  logout({ commit }) {
    return auth.logout()
      .then(() => commit(LOGOUT))
      .finally(() => commit(REMOVE_TOKEN));
  },
  initialize({ commit }) {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);

    if (token) {
      commit(SET_TOKEN, token);
    } else {
      commit(REMOVE_TOKEN);
    }
  },
  googleLogin({commit}, {}){
    return auth.googleLogin()
  },
  facebookLogin({commit}, {}){

    return auth.facebookLogin()
  },
  
};



export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};