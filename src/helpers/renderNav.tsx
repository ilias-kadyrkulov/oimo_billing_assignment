import { Link } from 'react-router-dom'
import { TLinkItem } from '../types'
import { useContext } from 'react'
import { MyContext } from '../layouts/MainLayout/MainLayout'

export const renderNav = (links: TLinkItem[]) => {
  const { isLightTheme } = useContext(MyContext)

  return links.map((link, idx) => (
    <Link
      className={(!isLightTheme ? `text-slate-100` : 'text-black') + ' inline-block w-1/3 py-2 font-thin hover:opacity-60'}
      key={idx}
      to={link.url}
    >
      {link.title}
    </Link>
  ))
}
