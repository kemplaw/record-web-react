import { ReactNode, useState } from "react";
import { FormOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import { TabBar } from "antd-mobile";

type ITabBarItem = {
  key: string
  title: string
  icon: ReactNode
}

type IBaseTabBarProps = {
  defaultTab?: string
  onChange?: (tab: string) => void
}

const BaseTabBar = ({ defaultTab, onChange }: IBaseTabBarProps) => {
  const tabs: ITabBarItem[] = [
    {
      key: 'illegal-data/list',
      title: '违法记录',
      icon: <UnorderedListOutlined />
    },
    {
      key: 'illegal-data/register',
      title: '违法登记',
      icon: <FormOutlined />
    },
    {
      key: 'my',
      title: '我的',
      icon: <UserOutlined />
    }
  ]

  const [activeKey, setActiveKey] = useState('illegal-data/list')
  const handleChange = (tab: string) => {
    setActiveKey(tab)
    onChange && onChange(tab)
  }

  return (
    <TabBar activeKey={activeKey} defaultActiveKey={defaultTab} onChange={handleChange}>
      {
        tabs.map(tab => (
          <TabBar.Item key={tab.key} title={tab.title} icon={tab.icon} />
        ))
      }
    </TabBar>
  )
}

export default BaseTabBar