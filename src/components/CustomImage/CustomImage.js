import React from 'react'
import styles from './CustomImage.css'

const CustomImage = ({img, name}) => (
  <div className={styles.customImageBox}>
    <img src={img} alt={name} />
  </div>
)

export default CustomImage