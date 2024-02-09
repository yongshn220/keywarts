import {Menu} from "@/app/(home)/_components/menu";
import {StyleList} from "@/app/(home)/_components/style-list";
import {Prompt} from "@/app/(home)/_components/prompt";
import {styleData, StyleInfo} from "@/style-data";


interface Props {
  searchParams: {
    menu?: string
    submenu?: string
  }
}

export default function Home({searchParams}: Props) {

  const selectedMenu = searchParams.menu?? "Photography"
  const selectedSubMenu = searchParams.submenu

  const styleGroup = styleData[selectedMenu]

  let styleList: Array<StyleInfo> = [];
  if (selectedSubMenu) {
    styleList = styleGroup[selectedSubMenu]
  }
  else {
    Object.values(styleGroup).forEach(styles => {
      styleList.push(...styles)
    })
  }

  return (
    <div className="w-full flex-center flex-col">
      <h1 className="text-4xl md:text-6xl font-semibold blue_gradient py-4">
        AI Image Styles
      </h1>
      <h2 className="text-lg text-gray-600 sm:text-xl max-w-2xl">
        These are the various styles for AI Image Generator
      </h2>
      <Prompt prompt="Background, Light, f-22"/>
      <Menu selectedMenu={selectedMenu} selectedSubMenu={selectedSubMenu}/>
      <StyleList styleList={styleList}/>
    </div>
  );
}