import AppMain from "../../layout/AppMain";
import { Switch, Route, useRouteMatch, useHistory, Redirect } from "react-router-dom";

import IllegalDataList from '../illegal-data/List'
import IllegalRegister from '../register/Home'
import My from "../My";
import BaseTabBar from "../../layout/BaseTabBar";

const Home = () => {
  const { url } = useRouteMatch()
  const history = useHistory()
  const onTabChange = (tab: string) => {
    history.replace(`${url}/${tab}`)
  }

  return <AppMain>
    <div style={{ flex: 1, height: '100%', overflow: "hidden" }}>
      <Switch>
        <Route path={`${url}/illegal-data/list`} component={IllegalDataList} />
        <Route path={`${url}/illegal-data/register`} component={IllegalRegister} />
        <Route path={`${url}/my`} component={My} />
        <Redirect to={`${url}/illegal-data/list`} />
      </Switch>
    </div>
    <BaseTabBar defaultTab={'illegal-data/list'} onChange={onTabChange} />
  </AppMain>
}

export default Home