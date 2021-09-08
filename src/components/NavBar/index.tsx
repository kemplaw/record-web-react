import './index.scss'
import { LeftOutlined } from "@ant-design/icons";

type INavBarProps = {
  leftArrow?: boolean
  title?: string
  onClickLeftArrow?: () => void
}

const NavBar = ({ leftArrow, title = '标题', onClickLeftArrow }: INavBarProps) => {
  return (
    <div className="nav-bar-wrapper">
      <div className="nav-bar">
        <div className="nav prefix" onClick={onClickLeftArrow}>
          {leftArrow && <LeftOutlined style={{ fontSize: 16 }} />}
        </div>
        <div className="nav title">{title}</div>
        <div className="nav suffix">
          <span />
        </div>
      </div>
    </div>
  )
}

export default NavBar