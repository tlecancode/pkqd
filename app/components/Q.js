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
    const {q: {department, name, entryposition, q}} = this.props
    return (
      <div className={styles.qPage}>
        <QHeader bgColor={bgColor} department={department} name={name} entryposition={entryposition}/>
        <QBody bgColor={bgColor} q={q}/>
      </div>
    )
  }
}

export const QHeader = ({department, name, entryposition, bgColor}) => {
  return (
    <div style={{backgroundColor: bgColor}} className={styles.qHeader}>
      <DepartmentName department={department}/>
      <UserName name={name}/>
      <Position position={entryposition}/>
    </div>
  )
}

export const DepartmentName = ({department}) => {
  if (department) {
    return (
      <h1 style={{fontSize: '100px'}}>{department.replace('PK2-', '')}</h1>
    )
  }
  return <div></div>
}

export const UserName = ({name}) => {
  if (name) {
    return (
      <h2 style={{fontSize: '45px'}}>{name}</h2>
    )
  }
  return <div></div>
}

export const Position = ({position}) => {
  if (position) {
    return (
      <h2 style={{fontSize: '35px'}}>{position}</h2>
    )
  }
  return <div></div>
}

export const QBody = ({q, bgColor}) => {
  return (
    <div className={styles.qBody}>
      <ul className={`list-unstyled ${styles.qList}`}>
        {q.map((q, index) => (
          <QItem qNumber={q.oqueue} qName={q.patient_name} bgColor={bgColor} key={index}/>
        ))}
      </ul>
    </div>
  )
}

export const QItem = ({qNumber, qName, bgColor}) => {
  return (
    <li className={styles.qItem} style={{color: bgColor}}>
      <div style={{backgroundColor: bgColor}} className={styles.qNumber}>{qNumber}</div>
      <div className={styles.qNameContainer}>
        <h4 className={styles.qName}>{qName}</h4>
      </div>
    </li>
  )
}
