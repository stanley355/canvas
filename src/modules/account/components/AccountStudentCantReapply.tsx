import Link from "next/link"
import Image from "next/image"
import { TbArrowBadgeLeft } from "react-icons/tb"

const AccountStudentCantReapply = () => {
  return (
    <div className="px-4 mt-20 lg:w-1/3 lg:mx-auto">
      <Image
        src="/images/sorry.png"
        alt="LanguageAi Student"
        width={350}
        height={350}
        className="w-1/3 h-auto mx-auto mb-4"
      />

      <div className="mb-4 text-4xl font-bold">We&apos;re sorry</div>
      <div className="mb-4">
        You can not reapply for student plan because your last application wrote that you were <b>College</b> student.
        Our policy doesn&apos;t allow College student to apply twice.
      </div>
      
      <Link href="/account" className="flex items-center p-2 text-white rounded-md bg-emerald-800 w-fit">
        <TbArrowBadgeLeft  className="text-xl"/>
        <span>Go back to Account</span>
        
      </Link>
    </div>
  )
}

export default AccountStudentCantReapply