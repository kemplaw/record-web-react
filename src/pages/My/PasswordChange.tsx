import AppMain from "../../layout/AppMain";
import NavBar from "../../components/NavBar";
import { useHistory } from "react-router-dom";
import { Button, Form, Input } from "antd-mobile";

const PasswordChange = () => {
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }

  return (
    <AppMain>
      <NavBar leftArrow title={'修改密码'} onClickLeftArrow={goBack} />

      <Form footer={<Button fill={"outline"} type={"submit"} color={"primary"} block>确定修改</Button>}>
        <Form.Item>
          <Input placeholder={'请输入旧密码'} />
        </Form.Item>
        <Form.Item>
          <Input placeholder={'请输入新密码'} />
        </Form.Item>
      </Form>
    </AppMain>
  )
}

export default PasswordChange