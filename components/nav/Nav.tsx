import Link from "next/link";
import Image from 'next/image'
import {RouteUrl} from "@/components/constants/constants";


export default function Nav() {
  return (
    <header className="flex h-16 w-full items-center px-4 md:px-6">
      <Link className="mr-6 flex items-center space-x-2" href="/">
        <Image
          src={'/icons/logo.png'}
          width={30}
          height={30}
          alt="logo"
        />
        <span className="text-xl">Keywarts</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href={RouteUrl.STUDIO}>
          Keywords & Reference
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href={RouteUrl.ONE_TIME_DOWNLOADER}>
          One-Click Downloader
        </Link>
      </nav>
    </header>
  )
}
