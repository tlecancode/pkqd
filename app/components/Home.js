import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export const LoginForm = () => {
  return (
    <div className="col-xs-4 col-xs-offset-4">
      <form action="" className="">
        <div className="form-group">
          <label htmlFor="dep_id">รหัสเครื่อง</label>
          <input type="text" className="form-control input-lg" id="dep_id" name="dep_id" placeholder="รหัสเครื่อง"/>
        </div>
        <div className="checkbox text-center">
          <label>
            <input type="checkbox" name="remember"/> จดจำเครื่องนี้
          </label>
        </div>
        <div className="text-center">
          <ul className="list-inline">
            <li>
              <button type="submit" className="btn btn-default">ตั้งค่า</button>
            </li>
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
          <LoginForm/>
        </div>
      </div>
    )
  }
}
