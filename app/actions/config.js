import mysql from 'mysql'
import storage from 'electron-json-storage'

export const GET_CONFIG = 'GET_CONFIG'
export const SET_CONFIG = 'SET_CONFIG'
export const TEST_CONFIG = 'TEST_CONFIG'
export const SAVE_CONFIG = 'SAVE_CONFIG'

export function getConfig() {
  return (dispatch) => {
    storage.has('config', function(error, hasKey) {
      if (hasKey) {
        storage.get('config', function(error, data) {
          dispatch(setConfig(data))
        });
      }
    });
  }
}

export function saveConfig() {
  return (dispatch, getState) => {
    const config = getState().form.config
    storage.set('config', {
      db_ip: config.db_ip.value,
      db_port: config.db_port.value,
      db_user: config.db_user.value,
      db_pwd: config.db_pwd.value,
      db_name: config.db_name.value,
      dep_id: config.dep_id.value,
      bg_color: config.bg_color.value
    })
    alert('บันทึกสำเร็จ')
    dispatch(getConfig())
    return dispatch({
      type: SAVE_CONFIG
    })
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
  return (dispatch, getState) => {
    const config = getState().form.config
    const connection = mysql.createConnection({
      host: config.db_ip.value,
      user: config.db_user.value,
      password: config.db_pwd.value,
      database: config.db_name.value
    });
    connection.connect((err) => {
      if (err) {
        alert(err)
      } else {
        alert('เชื่อมต่อสำเร็จ')
      }
      connection.end()
      return dispatch({
        type: TEST_CONFIG
      })
    })
  }
}
