import mysql from 'mysql'

export const GET_DEPARTMENT = 'GET_DEPARTMENT'
export const FETCH_Q = 'FETCH_Q'


export function initQ() {
  return (dispatch, getState) => {
    const config = getState().config
    const pool = mysql.createPool({
      host: config.db_ip,
      user: config.db_user,
      password: config.db_pwd,
      database: config.db_name,
      charset: 'tis620_thai_ci'
    })
    dispatch(getDepartment(pool, config))
    dispatch(fetchQ(pool, config))
    setInterval(() => {
      dispatch(fetchQ(pool, config))
    }, 5000)
  }
}

export function getDepartment(pool, config) {
  return (dispatch, getState) => {
    pool.getConnection((err, connection) => {
      connection.query('SET NAMES UTF8')
      connection.query(`SELECT kskdepartment.department, opduser.name, opduser.entryposition FROM kskdepartment LEFT JOIN opduser ON kskdepartment.doctor_code = opduser.doctorcode WHERE kskdepartment.depcode = ${parseInt(config.dep_id)}`, (err, rows) => {
        dispatch({
          type: GET_DEPARTMENT,
          payload: rows[0]
        })
        connection.release()
      })
    })
  }
}

export function fetchQ(pool, config) {
  return (dispatch, getState) => {
    pool.getConnection((err, connection) => {
      connection.query('SET NAMES UTF8')
      connection.query(`SELECT ovst.oqueue, CONCAT(patient.pname, patient.fname, ' ', patient.lname) as patient_name FROM ovst INNER JOIN patient ON ovst.hn = patient.hn WHERE ovst.cur_dep = ${parseInt(config.dep_id)} ORDER BY cur_dep_time DESC LIMIT 5`, (err, rows) => {
        dispatch({
          type: FETCH_Q,
          payload: rows
        })
        connection.release()
      })
    })
  }
}
