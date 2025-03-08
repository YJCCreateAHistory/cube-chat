import cls from 'classnames'
import './index.less'
import Image from '../../components/Image'
import DefaultAvatar from '../../assets/images/icon_default.jpg'
import { useCommonStore } from '../../store/useCommonStore'
import { useEffect } from 'react'
import { tabs } from '../../const/tabs'

const classprefix = 'layout-side-bar-user'

const LayoutSideBarMenu = () => {

  const { setActiveTab, activeTab } = useCommonStore()

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  useEffect(() => {

  }, [activeTab])
 
  return (
    <div className={cls(classprefix)}>
      <div className={cls(`${classprefix}-menu`)}>
        <div className={cls(`${classprefix}-menu-avatar`)}>
          <div className="half-circle-spinner">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <Image src={DefaultAvatar} className="user-avatar" />
          </div>
        </div>
        <div className={cls(`${classprefix}-menu-tabs`)}>
          {
            tabs.map((tab, index) => (
              <div
                key={index}
                className={cls(`${classprefix}-menu-tabs-item ${activeTab === tab.key ? 'active' : ''}`)}
                onClick={() => handleTabClick(tab.key)}
              >
                {tab.icon}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default LayoutSideBarMenu
