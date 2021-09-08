import { Button, Image, Space, Tabs } from "antd-mobile";
import './index.scss';
import { SearchOutlined } from "@ant-design/icons";
import WingBlank from "../../../components/WingBlank";
import { useMemo } from "react";

const Item = ({ border }: { data?: object; border?: boolean }) => {
  const wrapperClass = useMemo(() => {
    return border ? 'illegal-data-item border' : 'illegal-data-item'
  }, [border])

  return (
    <div className={wrapperClass}>
      <Space block align={"center"} className="title-wrapper">
        <div>
          <span className="label">违法单号：</span>
          <span className="value">01254846621420</span>
        </div>
        <div>
          <span className="label">车牌号码：</span>
          <span className="value">晋A452bd</span>
        </div>
      </Space>

      <div className="img-list-wrapper">
        <Space align={"center"} className={'img-list'}>
          <Image
            width={96}
            height={96}
            style={{ borderRadius: 4 }}
            src={'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'}
          />
          <Image
            width={96}
            height={96}
            style={{ borderRadius: 4 }}
            src={'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'}
          />
          <Image
            width={96}
            height={96}
            style={{ borderRadius: 4 }}
            src={'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'}
          />
          <Image
            width={96}
            height={96}
            style={{ borderRadius: 4 }}
            src={'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'}
          />
          <Image
            width={96}
            height={96}
            style={{ borderRadius: 4 }}
            src={'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'}
          />
        </Space>
      </div>

      <div className="cell-group-wrapper">
        <Space align={"center"} className={'cell'}>
          <span className="label">违法类型</span>
          <span className="value">【119400】醉酒后驾驶机动车</span>
        </Space>
        <Space align={"center"} className={'cell'}>
          <span className="label">违法时间</span>
          <span className="value">2021-06-12  18:30:00</span>
        </Space>
        <Space align={"center"} className={'cell'}>
          <span className="label">违法地点</span>
          <span className="value">晋城市文昌东街望川楼社区828号</span>
        </Space>
      </div>

      <WingBlank>
        <Button style={{ marginTop: 20 }} color={"primary"} block>上传教育文件</Button>
      </WingBlank>
    </div>
  )
}

const
  List = () => {
    return (
      <div className={'illegal-data-list'}>
        <Space className={'fixed-button'} align={"center"}>
          <span>检索</span>
          <SearchOutlined />
        </Space>
        <Tabs className={'tabs'}>
          <Tabs.TabPane title={<div className={'tab-label'}>机动车违法记录</div>} key={'vehicle'}>
            <Item border />
            <Item />
          </Tabs.TabPane>
          <Tabs.TabPane title={<div className={'tab-label'}>非机动车违法记录</div>} key={'non-vehicle'}>
            2
          </Tabs.TabPane>
        </Tabs>
      </div>
    )
  }

export default List