import React from 'react'
import styles from './Q.css';

export default class Q extends React.Component {
  render() {
    return (
      <div className="q-page">
        {this.props.config.dep_id}
      </div>
    )
  }
}
