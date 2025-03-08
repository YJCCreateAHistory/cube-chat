import React from 'react'
import './index.less'

interface Props {
  className?: string // 样式
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  svg: any // svg
  fill?: string // 填充色
  onClick?: (e: React.MouseEvent) => void // 点击处理
  width?: number // 宽度
  height?: number // 高度
  color?: string // 颜色
  draggable?: boolean
}

type Style = {
  fill?: string
  width?: string
  height?: string
  color?: string
}
class Svg extends React.Component<Props> {
  /**
   * 获取行间样式
   */
  getStyle() {
    const { fill, width, height, color } = this.props
    const result: Style = {
      fill: 'inherit'
    }

    if (fill && fill.length !== 0) {
      result.fill = fill
    }

    result.width = `${width || 28}px`

    result.height = `${height || 28}px`

    if (color) {
      result.color = color
    }

    return result
  }

  /**
   * 处理点击
   */
  handleClick = (e: React.MouseEvent) => {
    const { onClick } = this.props
    if (onClick) {
      onClick(e)
    }
  }

  handleKeyDown = () => {}

  render() {
    const { svg, className, draggable = false } = this.props
    const classNames = `svg-wrapper ${className || ''}`

    return (
      <img
        draggable={draggable}
        src={svg}
        alt="svg"
        className={classNames}
        style={{ ...this.getStyle(), userSelect: 'none' }}
        onClick={this.handleClick}
      />
    )
  }
}

export default Svg
