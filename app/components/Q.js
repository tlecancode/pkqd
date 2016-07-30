import React from 'react'
import styles from './Q.css';
import ReactFitText from 'react-fittext'

export default class Q extends React.Component {
  componentDidMount() {
    const {initQ} = this.props
    initQ()
  }

  render() {
    const bgColor = this.props.config.bg_color || '#2c3e50'
    const {q: {department, name, entryposition}} = this.props
    return (
      <div className={styles.qPage}>
        <div style={{backgroundColor: bgColor}} className={styles.qHeader}>
          <DepartmentName department={department}/>
          <UserName name={name}/>
          <Position position={entryposition}/>
        </div>
        <div className={styles.qBody}>
          List
        </div>
      </div>
    )
  }
}

export const DepartmentName = ({department}) => {
  if (department) {
    return (
      <ReactFitText compressor={1} maxFontSize={100} minFontSize={80}>
        <h1>{department}</h1>
      </ReactFitText>
    )
  }
  return <div></div>
}

export const UserName = ({name}) => {
  if (name) {
    return (
      <ReactFitText compressor={2.5} maxFontSize={45} minFontSize={35}>
        <h2>{name}</h2>
      </ReactFitText>
    )
  }
  return <div></div>
}

export const Position = ({position}) => {
  if (position) {
    return (
      <ReactFitText compressor={2.5} maxFontSize={45} minFontSize={35}>
        <h2>{position}</h2>
      </ReactFitText>
    )
  }
  return <div></div>
}
