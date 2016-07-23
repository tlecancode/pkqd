import ElectronSettings from 'electron-settings'
import mysql from 'mysql'

export const GET_CONFIG = 'GET_CONFIG'
export const SET_CONFIG = 'SET_CONFIG'
export const TEST_CONFIG = 'TEST_CONFIG'
const settings = new ElectronSettings()

export function getConfig() {
  return {
    type: GET_CONFIG,
    payload: settings.get()
  }
}

export function setConfig(config) {
  return (dispatch) => {
    return dispatch({
      type: SET_CONFIG,
      payload: config
    })
  }
}

export function testConfig() {
  return (dispatch) => {
    const connection = mysql.createConnection({
      host     : 'example.org',
      user     : 'bob',
      password : 'secret'
    });
    return dispatch({
      type: TEST_CONFIG
    })
  }
}
