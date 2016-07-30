import mysql from 'mysql'

export const GET_DEPARTMENT = 'GET_DEPARTMENT'


export function initQ() {
  return (dispatch, getState) => {
    const config = getState().config
    const pool = mysql.createPool({
      host: config.db_ip,
      user: config.db_user,
      password: config.db_pwd,
      database: config.db_name
    })
    dispatch(getDepartment(pool, config))
  }
}

export function getDepartment(pool, config) {
  return (dispatch, getState) => {
    pool.getConnection((err, connection) => {
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
