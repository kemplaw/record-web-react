import { CSSProperties, ReactNode } from "react";

type IAppMainProps = { className?: string; children: ReactNode; isScroll?: boolean }

const AppMain = ({ children, isScroll, className }: IAppMainProps) => {
  const style: CSSProperties = {
    width: '100vw',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: isScroll ? 'auto' : 'hidden',
    overflowY: isScroll ? 'auto' : 'hidden'
  }

  return (
    <div className={className} style={style}>{children}</div>
  )
}

export default AppMain