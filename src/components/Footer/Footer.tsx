import styles from './Footer.module.scss'
import { TLinks } from '../../types'
import { renderNav } from '../../helpers/renderNav'

export const Footer = ({ links }: TLinks) => {
  return (
    <div className={styles.Footer}>
      <div>{renderNav(links)}</div>
    </div>
  )
}
