import mysql from 'mysql'
import ElectronSettings from 'electron-settings'

export const settings = new ElectronSettings()

export const GET_CONFIG = 'GET_CONFIG'
export const SET_CONFIG = 'SET_CONFIG'
export const TEST_CONFIG = 'TEST_CONFIG'
export const SAVE_CONFIG = 'SAVE_CONFIG'

export function getConfig() {
  return (dispatch) => {
    const config = settings.get()
    dispatch(setConfig({
      db_ip: config.config__db_ip,
      db_port: config.config__db_port,
      db_user: config.config__db_user,
      db_pwd: config.config__db_pwd,
      db_name: config.config__db_name
    }))
  }
}

export function saveConfig() {
  return (dispatch, getState) => {
    const config = getState().form.config
    settings.set('config__db_ip', config.db_ip.value)
    settings.set('config__db_port', config.db_port.value)
    settings.set('config__db_user', config.db_user.value)
    settings.set('config__db_pwd', config.db_pwd.value)
    settings.set('config__db_name', config.db_name.value)
    alert('บันทึกสำเร็จ')
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
        console.error(err)
        return
      }
      alert('เชื่อมต่อสำเร็จ')
      return dispatch({
        type: TEST_CONFIG
      })
    })
  }
}
