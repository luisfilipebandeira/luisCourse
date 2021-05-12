import React from 'react'
import {Switch, Route} from 'react-router-dom'

import SignIn from '../pages/SignIn'
import Dashboard from '../pages/Dashboard'
import mysql from '../pages/mysql'
import mysqlAulas from '../pages/lessonMysql'
import assistir001 from '../pages/assistir'
import assistir01 from '../pages/assistir01'
import rocketseat from '../pages/rocketseat'
import lessonReact from '../pages/lessonReact'
import assistir02 from '../pages/assistir02'
import assistir002 from '../pages/assistir002'


const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/mysql" component={mysql} />
        <Route path="/aulas" component={mysqlAulas} />
        <Route path="/assistir001" component={assistir001} />
        <Route path="/assistir01" component={assistir01} />
        <Route path="/rocketseat" component={rocketseat} />
        <Route path="/lessonReact" component={lessonReact} />
        <Route path="/assistir02" component={assistir02} />
        <Route path="/assistir002" component={assistir002} />
    </Switch>
)

export default Routes