import './index.scss'
import { CSSProperties, ReactNode, useEffect, useMemo } from "react";
import { Space } from "antd-mobile";
import { RightOutlined } from "@ant-design/icons";

type IBaseCellGroupProps = {
  title?: ReactNode
  border?: boolean
  children?: ReactNode
}

type IBaseCellProps = {
  label?: string
  desc?: string
  labelWidth?: number
  gap?: number
  isLink?: boolean
  style?: CSSProperties
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

export const BaseCell = (
  {
    label,
    desc,
    style,
    isLink,
    labelWidth = 60,
    gap = 8
  }: IBaseCellProps
) => {

  const labelStyle = useMemo<CSSProperties>(() => {
    return {
      display: 'inline-block',
      flex: `0 0 ${labelWidth}px`,
      width: labelWidth,
      marginRight: gap
    }
  }, [labelWidth, gap])

  useEffect(() => {
    console.log(desc)
  }, [desc])

  return (
    <Space align={"center"} block className="base-cell" style={style}>
      <span className="label" style={labelStyle}>{label}</span>
      <span className="value">{desc}</span>
      {isLink && <RightOutlined />}
    </Space>
  )
}