import { Flex, Layout } from 'antd'
import cls from 'classnames'
import './index.less'
import { Outlet, Route, BrowserRouter, Routes } from 'react-router-dom'
import LayoutSideBarMenu from '../sideBar'
import { Content } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import LayoutContent from '../content'
import CubeChatRoom from '../../pages/cubeChat'

const classprefix = 'layout-container'

const Container = () => {
  return (
    <BrowserRouter>
      <Flex gap="middle" wrap className={cls(classprefix)}>
        <Layout className={cls(`${classprefix}-layout`)}>
          <Sider width={64} className={cls(`${classprefix}-sider`)}>
            <LayoutSideBarMenu />
          </Sider>
          <Content className={cls(`${classprefix}-content`)}>
            <Routes>
              <Route
                path="/"
                element={
                  <LayoutContent
                    componentsSlots={{
                      content: <Outlet />,
                    }}
                  />
                }
              >
                <Route path="/chat" element={<CubeChatRoom />} />
                <Route path="/workspace" element={<div>h2</div>} />
                <Route path="/discovery" element={<div>h3</div>} />
              </Route>
            </Routes>
          </Content>
        </Layout>
      </Flex>
    </BrowserRouter>
  )
}

export default Container