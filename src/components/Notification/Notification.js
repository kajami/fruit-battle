import styles from './Notification.module.css'
import React, { forwardRef } from 'react'

const Notification = forwardRef(({ message, color }, ref) => {
    
    return (
    <div >
        {message ? 
        <div
            ref={ref}
            className={styles.message}
            style={{ color:color }}>
            {message}
        </div>
        :<div></div>
        } 
    </div>
    )
  })

  export default Notification;