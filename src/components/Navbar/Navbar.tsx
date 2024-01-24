import { MouseEvent, useContext, useEffect, useState } from 'react'
import { IoMdSunny } from 'react-icons/io'
import { IoMoon } from 'react-icons/io5'
import { Dropdown } from './Dropdown/Dropdown'
import { TLinks } from '../../types'
import { renderNav } from '../../helpers/renderNav'
import { MyContext } from '../../layouts/MainLayout/MainLayout'

const dropdownLinks = [
  { title: 'Передать показания', url: 'meter_readings' },
  { title: 'Личный кабинет', url: '/private' },
  { title: 'Стать абонентом', url: '/become_subscriber' },
]

export const Navbar = ({ links }: TLinks) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false)
  const { isLightTheme, onThemeChanged } = useContext(MyContext)

  const onDropdownClicked = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setIsDropdownActive(!isDropdownActive)
  }
  console.log(isDropdownActive, 'dropdown')

  useEffect(() => {
    const clickHandler = () => {
      console.log('click listener')

      setIsDropdownActive(false)
      console.log(isDropdownActive)
    }

    document?.addEventListener('click', clickHandler)

    return () => {
      document.removeEventListener('click', clickHandler)
    }
  }, [isDropdownActive])

  return (
    <nav className="flex items-center gap-5">
      {renderNav(links)}
      <div className="relative transition-all" onClick={(e) => onDropdownClicked(e)}>
        <button
          className={
            (!isLightTheme ? `text-slate-200` : `text-black`) +
            ' duration-500 hover:opacity-60 after:absolute after:transition-all after:h-0.5 after:bottom-0 after:left-0 after:duration-1000 after:hover:w-full after:bg-black'
          }
        >
          Абоненту
        </button>
        {isDropdownActive && <Dropdown links={dropdownLinks} />}
      </div>
      {isLightTheme ? (
        <button>
          <IoMdSunny className="fill-yellow-400" onClick={onThemeChanged} />
        </button>
      ) : (
        <button>
          <IoMoon className="fill-gray-500" onClick={onThemeChanged} />
        </button>
      )}
    </nav>
  )
}
