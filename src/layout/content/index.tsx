import { Layout, Flex } from "antd"
import cls from 'classnames'

interface IProps {
  className?: string
  componentsSlots?: any
}

const { Content } = Layout
const classprefix = 'layout-container'

const LayoutContent = (props: IProps) => {
  const { className, componentsSlots } = props

  return (
    <Flex gap="middle" wrap className={cls(classprefix, className)}>
      <Layout className={cls(`${classprefix}-layout`)}>
        <Layout>
          <Content className={cls(`${classprefix}-content`)}>{componentsSlots?.content}</Content>
        </Layout>
      </Layout>
    </Flex>
  )
}
export default LayoutContent