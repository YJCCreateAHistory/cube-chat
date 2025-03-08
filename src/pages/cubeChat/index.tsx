import cls from 'classnames'
import './index.less'
import Icon from '../../components/Icon'
import LogoIcon from '../../assets/svgs/logo.svg'
import Input from '../../components/Input'
import { useRef } from 'react'

const classprefix = 'cube-chat-room'

const CubeChatRoom = () => {

  const handleSearch = () => {}

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className={cls(classprefix)}>
      <div className={cls(`${classprefix}-sider`)}>
        <div className={cls(`${classprefix}-sider-title`)}>CubeChat</div>
        <Input placeholder='搜索助手' ref={inputRef} onClick={handleSearch}/>
      </div>
      <div className={cls(`${classprefix}-header`)}>
        <Icon svg={LogoIcon} width={14} height={14} className='image' />
      </div>
    </div>
  )
}

export default CubeChatRoom