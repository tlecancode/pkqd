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
              <li><strong>IP: </strong>{config.db_ip ? config.db_ip : ''}</li>
              <li><strong>Port: </strong>{config.db_port ? config.db_port : ''}</li>
              <li><strong>DB Name: </strong>{config.db_name ? config.db_name : ''}</li>
              <li><strong>Username: </strong>{config.db_user ? config.db_user : ''}</li>
              <li><strong>Password: </strong>{config.db_pwd && config.db_pwd.length ? '******': ''}</li>
              <li><strong>รหัสเครื่อง: </strong>{config.dep_id ? config.dep_id : ''}</li>
              <li><strong>พื้นหลัง: </strong> <span style={{backgroundColor: config.bg_color, color: '#fff'}}>{config.bg_color}</span></li>
              <li><Link to="config">ตั้งค่า</Link></li>
            </ul>
          </pre>
        </div>
        <div className="text-center">
          <ul className="list-inline">
            <li>
              <Link to="q" className="btn btn-primary">เข้าสู่ระบบ</Link>
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
