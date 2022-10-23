import styles from './Turn.module.css'

const Turn = ({ turn }) => {
    
    return (
    <div >
        {turn && <div className={styles.turn}>Turn {turn}</div>}
    </div>
    )
  }

  export default Turn;