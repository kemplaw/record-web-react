import './index.scss'
import { ReactNode, useMemo } from "react";
import { Space } from "antd-mobile";

type IBaseCellGroupProps = {
  title?: ReactNode
  border?: boolean
  children?: ReactNode
}

type IBaseCellProps = {
  label?: string
  value?: string
}

export const BaseCellGroup = ({ title, children, border }: IBaseCellGroupProps) => {
  const layoutClass = useMemo(() => {
    return border ? 'base-cell-group border' : 'base-cell-group'
  }, [border])

  const layoutStyle = useMemo(() => {
    return {
      paddingTop: title ? 20 : 8
    }
  }, [title])

  return (
    <div className={layoutClass} style={layoutStyle}>
      {title && <div className="title">{title}</div>}
      {children}
    </div>
  )
}

export const BaseCell = ({ label, value }: IBaseCellProps) => {
  return (
    <Space align={"center"} block className="base-cell">
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </Space>
  )
}