import { Form, Input, List, Radio, Space } from "antd-mobile";
import './index.scss'
import { BaseCell } from "../../../components/BaseCell";

const RegisterForm = () => {
  return (
    <div className={'illegal-register-form'}>
      <div className="upload">
        upload
      </div>

      <Form className={'form-wrapper'} layout={'horizontal'}>
        <Form.Item required name={'type'} label={'违法车辆类型'}>
          <Radio.Group>
            <Space align={"center"} block style={{ justifyContent: "flex-end" }}>
              <Radio value={1}>非机动车</Radio>
              <Radio value={2}>机动车</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <Form.Item required name={'code'} label={'违法车辆车牌号码'}>
          <Space align={"center"} block style={{ justifyContent: "flex-end" }}>
            <Input placeholder={'请输入'} />
          </Space>
        </Form.Item>
        <Form.Item required name={'illegalType'} label={'违法类型'}>
          <BaseCell desc={'请选择'} isLink style={{ justifyContent: 'flex-end', marginTop: 0 }} />
        </Form.Item>
      </Form>
    </div>
  )
}

export default RegisterForm