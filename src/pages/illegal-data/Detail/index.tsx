import AppMain from "../../../layout/AppMain";
import NavBar from "../../../components/NavBar";
import { useHistoryBack } from "../../../hooks/utils";
import { Button, Grid, Image, Space } from "antd-mobile";
import './index.scss'
import { BaseCell, BaseCellGroup } from "../../../components/BaseCell";
import WingBlank from "../../../components/WingBlank";

export const Detail = () => {
  const { onBack } = useHistoryBack()

  return (
    <AppMain isScroll>
      <NavBar leftArrow title={'机动车违法详情'} onClickLeftArrow={onBack} />

      <div style={{ paddingBottom: 20 }}>
        <div className="wrapper">
          <Space align={"center"} block className={'title-wrapper'}>
            <div>
              <span className="label">违法单号：</span>
              <span className="value">01254846621420</span>
            </div>
            <div>
              <span className="label">车牌号码：</span>
              <span className="value">晋A452bd</span>
            </div>
          </Space>

          <Grid columns={3} gap={8} className={'img-list-wrapper'}>
            <Grid.Item>
              <Image
                src={'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'}
                width={106}
                height={106}
                style={{ borderRadius: 4 }}
              />
            </Grid.Item>
            <Grid.Item>
              <Image
                src={'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'}
                width={106}
                height={106}
                style={{ borderRadius: 4 }}
              />
            </Grid.Item>
            <Grid.Item>
              <Image
                src={'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'}
                width={106}
                height={106}
                style={{ borderRadius: 4 }}
              />
            </Grid.Item>
            <Grid.Item>
              <Image
                src={'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'}
                width={106}
                height={106}
                style={{ borderRadius: 4 }}
              />
            </Grid.Item>
            <Grid.Item>
              <Image
                src={'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60'}
                width={106}
                height={106}
                style={{ borderRadius: 4 }}
              />
            </Grid.Item>
          </Grid>
        </div>

        <BaseCellGroup border>
          <BaseCell label={'违法类型'} value={'【119400】醉酒后驾驶机动车'} />
          <BaseCell label={'违法时间'} value={'2021-06-12  18:30:00'} />
          <BaseCell label={'违法地点'} value={'晋城市文昌东街望川楼社区828号'} />
        </BaseCellGroup>

        <BaseCellGroup border title={'违法人信息'}>
          <BaseCell label={'真实姓名'} value={'张文时'} />
          <BaseCell label={'身份证号'} value={'140224199204151687'} />
          <BaseCell label={'手机号码'} value={'18675421598'} />
        </BaseCellGroup>

        <BaseCellGroup title={'提交信息'}>
          <BaseCell label={'提交时间'} value={'2021-06-12  18:30:00'} />
        </BaseCellGroup>

        <WingBlank>
          <Button block color={"primary"}>上传教育文件</Button>
        </WingBlank>
      </div>
    </AppMain>
  )
}

export const Distribution = () => {
  const { onBack } = useHistoryBack()

  return (
    <AppMain>
      <NavBar leftArrow title={'出知详情'} onClickLeftArrow={onBack} />
    </AppMain>
  )
}