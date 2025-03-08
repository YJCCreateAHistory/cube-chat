import Svg from '../components/Icon'
import ChatSvgInon from '../assets/svgs/icon_chat.svg'
import DirSvgInon from '../assets/svgs/icon_dir.svg'
import DiscoverySvgInon from '../assets/svgs/icon_discovery.svg'

export const tabs = [
    {
      key: 'chat',
      icon: <Svg svg={ChatSvgInon} width={24} height={24} />,
    },
    {
      key: 'workspace',
      icon: <Svg svg={DirSvgInon} width={18} height={18} />,
    },
    {
      key: 'discovery',
      icon: <Svg svg={DiscoverySvgInon} width={18} height={18} />,
    }
  ]