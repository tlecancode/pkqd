import React, { Component } from 'react';
import { Link } from 'react-router';
import {reduxForm} from 'redux-form'

const fields = ['db_ip', 'db_port', 'db_user', 'db_pwd', 'db_name']
class ConfigFormComponent extends Component {
  render() {
    const {
      fields: {db_ip, db_port, db_user, db_pwd, db_name},
      handleSubmit,
      testConfig,
      saveConfig,
      resetForm,
      submitting
      } = this.props
    return (
      <div className="col-xs-4 col-xs-offset-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>dp_ip</label>
            <input type="text" className="form-control" {...db_ip}/>
          </div>
          <div className="form-group">
            <label>dp_port</label>
            <input type="text" className="form-control" {...db_port}/>
          </div>
          <div className="form-group">
            <label>dp_user</label>
            <input type="text" className="form-control" {...db_user}/>
          </div>
          <div className="form-group">
            <label>dp_pwd</label>
            <input type="text" className="form-control" {...db_pwd}/>
          </div>
          <div className="form-group">
            <label>dp_name</label>
            <input type="text" className="form-control" {...db_name}/>
          </div>
          <div className="text-center">
            <ul className="list-inline">
              <li>
                <button type="button" className="btn btn-default" onClick={() => testConfig()}>ทดสอบ</button>
              </li>
              <li>
                <Link to="/" className="btn btn-danger">ยกเลิก</Link>
              </li>
              <li>
                <button type="button" className="btn btn-success" onClick={() => saveConfig()}>บันทึก</button>
              </li>
            </ul>
          </div>
        </form>
      </div>
    )
  }
}
import {settings} from '../actions/config'
export const ConfigForm = reduxForm({
  form: 'config',
  fields
}, (state) => {
  const config = settings.get()
  return {
    initialValues: {
      db_ip: config.config__db_ip,
      db_port: config.config__db_port,
      db_user: config.config__db_user,
      db_pwd: config.config__db_pwd,
      db_name: config.config__db_name
    }
  }
})(ConfigFormComponent)


export default class Config extends Component {
  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className="col-xs-12">
            <h2 className="display-1 text-center" style={{margin: '60px 0 20px 0'}}>ตั้งค่า</h2>
          </div>
          <ConfigForm {...this.props}/>
        </div>
      </div>
    )
  }
}
