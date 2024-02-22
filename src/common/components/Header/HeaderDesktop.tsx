import Link from 'next/link'
import Image from 'next/image'
import { HEADER_MENU } from './constant'
import { IHeaderMenu } from '.'

interface IHeaderDesktop {
  isLogin: boolean
}

const HeaderDesktop = (props: IHeaderDesktop) => {
  const { isLogin } = props;
  return (
    <div className='container mx-auto bg-white hidden lg:flex items-center py-2'>
      <div className='flex items-center'>
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/languageai.png"
            alt="LanguageAi"
            width={35}
            height={35}
            className='border border-black'
          />
          <span>languageai</span>
        </Link>

        <div className="px-4 flex items-center gap-4 ">
          {HEADER_MENU.filter((menu: IHeaderMenu) =>
            menu.url !== "/login/" && menu.url !== "/profile/"
          ).map((menu: IHeaderMenu) => (
            <Link
              href={menu.url}
              key={menu.title}
              className="gap-1 flex items-center justify-between p-2 rounded hover:border hover:border-blue-500"
            >
              {menu.icon}
              <span>{menu.title}</span>
            </Link>
          ))}
        </div>
      </div>

      
    </div>
  )
}

export default HeaderDesktop