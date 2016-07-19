import React, { Component } from 'react';
import { Link } from 'react-router';

export const ConfigForm = () => {
  return (
    <div className="col-xs-4 col-xs-offset-4">
      <form action="" className="">
        <div className="form-group">
          <label htmlFor="db_ip">Database IP</label>
          <input type="text" className="form-control input-lg" id="ip" name="ip"
                 placeholder="Database IP (ex. 192.168.1.13)"/>
        </div>
        <div className="form-group">
          <label htmlFor="db_user">Database User</label>
          <input type="text" className="form-control input-lg" id="db_user" name="db_user" placeholder="Database User"/>
        </div>
        <div className="form-group">
          <label htmlFor="db_pwd">Database Password</label>
          <input type="password" className="form-control input-lg" id="db_pwd" name="db_pwd"
                 placeholder="Database Password"/>
        </div>
        <div className="form-group">
          <label htmlFor="db_name">Database Name</label>
          <input type="text" className="form-control input-lg" id="db_name" name="db_name" placeholder="Database Name"/>
        </div>

        <div className="text-center">
          <ul className="list-inline">
            <li>
              <button type="submit" className="btn btn-default">ทดสอบ</button>
            </li>
            <li>
              <Link to="/" className="btn btn-danger">ยกเลิก</Link>
            </li>
            <li>
              <button type="submit" className="btn btn-success">บันทึก</button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  )
}


export default class Config extends Component {
  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className="col-xs-12">
            <h2 className="display-1 text-center" style={{margin: '200px 0 20px 0'}}>ตั้งค่า</h2>
          </div>
          <ConfigForm/>
        </div>
      </div>
    )
  }
}
