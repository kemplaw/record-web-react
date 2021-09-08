import './index.scss'
import AppMain from "../../layout/AppMain";
import WingBlank from "../../components/WingBlank";
import { List, Space } from "antd-mobile";
import { useHistory } from "react-router-dom";

const My = () => {
  const history = useHistory()
  const toPasswordChangePage = () => {
    history.push('/change-password')
  }

  return (
    <AppMain className={'my'}>
      <WingBlank className={'border'}>
        <Space align={"center"} block className="userinfo">
          <div className="avatar"></div>
          <div className="name">
            <div className="username">张北念</div>
            <div className="number">警号：警84562</div>
          </div>
        </Space>
      </WingBlank>

      <div className="cell-group border">
        <div className="cell">
          <span className="label">所属部门</span>
          <span className="value">交警一大队</span>
        </div>
        <div className="cell">
          <span className="label">手机号</span>
          <span className="value">18635794521</span>
        </div>
      </div>

      <div className="border">
        <List>
          <List.Item
            className={'cell-link'}
            clickable
            onClick={toPasswordChangePage}
          >修改密码</List.Item>
        </List>
      </div>
    </AppMain>
  )
}

export default My