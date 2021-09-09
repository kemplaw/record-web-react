import './index.scss'
import AppMain from "../../../layout/AppMain";
import { CameraFilled, PictureOutlined } from "@ant-design/icons";
import WingBlank from "../../../components/WingBlank";
import { Button, Space } from "antd-mobile";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory()
  const toFormPage = () => {
    history.push('/illegal-data/register/form')
  }

  return <AppMain className={'register'}>
    <div className="title">违法拍照</div>
    <div className="sub-title">机动车第一张请拍带车牌号码的照片</div>
    <div className="photo-wrapper circle">
      <div className="circle c1">
        <div className="icon-wrapper circle">
          <CameraFilled className={'icon'} />
        </div>
      </div>
    </div>

    <WingBlank>
      <Button color={"primary"} fill={"outline"} size={"large"} block onClick={toFormPage}>
        <Space>
          <PictureOutlined />
          <span>从相册上传</span>
        </Space>
      </Button>
    </WingBlank>
  </AppMain>
}

export default Home