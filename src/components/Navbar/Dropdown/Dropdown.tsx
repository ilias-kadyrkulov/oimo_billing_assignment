import { Link } from 'react-router-dom'
import { TLinks } from '../../../types'
import styles from './Dropdown.module.scss'

export const Dropdown = ({ links }: TLinks) => {
  return (
    <div className={styles.Dropdown}>
      {links.map((item, idx) => (
        <Link key={idx} to={item.url}>
          {item.title}
        </Link>
      ))}
    </div>
  )
}
