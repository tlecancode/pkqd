import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export const LoginForm = ({config}) => {
  return (
    <div className="col-xs-4 col-xs-offset-4">
      <form action="" className="">
        <div>
          <pre>
            <ul className="list-unstyled">
              <li><strong>IP: </strong>{config.db_ip}</li>
              <li><strong>Port: </strong>{config.db_port}</li>
              <li><strong>DB Name: </strong>{config.db_name}</li>
              <li><strong>Username: </strong>{config.db_user}</li>
              <li><strong>Password: </strong>{config.db_pwd.length ? '******': 'No'}</li>
              <li><Link to="config">ตั้งค่า</Link></li>
            </ul>
          </pre>
        </div>
        <div className="form-group">
          <input type="text" className="form-control input-lg" id="dep_id" name="dep_id" placeholder="รหัสเครื่อง"/>
        </div>
        <div className="text-center">
          <ul className="list-inline">
            <li>
              <button type="submit" className="btn btn-primary">เข้าสู่ระบบ</button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  )
}

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className="col-xs-12">
            <h2 className="display-1 text-center" style={{margin: '200px 0 20px 0'}}>ปากเกร็ด Q</h2>
          </div>
          <LoginForm {...this.props}/>
        </div>
      </div>
    )
  }
}
