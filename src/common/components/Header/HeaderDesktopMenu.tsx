import { useState } from 'react'
import Link from 'next/link'
import { TbArrowDown, TbArrowUp, TbChevronDown, TbChevronUp, TbSearch } from 'react-icons/tb'
import { HEADER_MENU } from './constant'
import Button from '../Button'
import { cn } from '@/common/lib/cn'

const HeaderDesktopMenu = () => {
  const DESKTOP_MENU = HEADER_MENU.filter((menu) => !menu.url.includes("/account"))
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='flex-1 max-w-[33%] relative'>
      <Button variant="ghost" className='flex items-center justify-between w-full gap-2 text-gray-500 border rounded-full shadow ' onClick={() => setOpenMenu(!openMenu)}>
        <TbSearch className='text-lg' />
        <span>Search languageai: translate, checkbot, text to speech, speech to text</span>
        {openMenu ? <TbChevronUp /> : <TbChevronDown />}
      </Button>
      <div className={cn('absolute left-0 z-50 w-full bg-white border shadow rounded-xl top-12 animate-visible-forward', openMenu ? 'block' : 'hidden')}>
        {DESKTOP_MENU.map((menu) =>
          <Link href={menu.url} className='flex items-center gap-2 p-2 rounded-md hover:bg-slate-100' onClick={() => setOpenMenu(false)}>
            {menu.icon}
            {menu.title}
          </Link>
        )}
      </div>
    </div>
  )
}

export default HeaderDesktopMenu