import './index.scss'
import { Button, Form, Input, } from "antd-mobile";
import WingBlank from "../../components/WingBlank";
import { useHistory } from "react-router-dom";

type ILoginForm = { username?: string, password?: string }

const Login = () => {
  const history = useHistory()
  const handleFinished = ({ username, password }: ILoginForm) => {
    if (username === password) {
      return history.push('/')
    }

    return
  }

  return (
    <div className={'login'}>
      <Form onFinish={handleFinished}>
        <div className={'form-wrapper'}>
          <Form.Item
            name={'username'}
            label={"账号"}
          >
            <Input placeholder={'请输入账号'} />
          </Form.Item>
          <Form.Item name={'password'} label={"密码"}>
            <Input
              type={"password"}
              placeholder={'请输入密码'}
            />
          </Form.Item>
        </div>

        <WingBlank>
          <Button
            block
            type={"submit"}
            color={"primary"}
            className={'button'}
          >
            登录
          </Button>
        </WingBlank>
      </Form>
    </div>
  )
}

export default Login