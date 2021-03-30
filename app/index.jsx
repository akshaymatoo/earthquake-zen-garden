import React, { useMemo, useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Header from './header/header';
import Profile from './profile/profile';
import Details from './details/details';
// import Table from './components/table/table';
import Table from './components/table/table';
import Data from '../public/data.json'; // see how we can load via API

import FourOhFour from './fourOhfour/fourOhfour';

function App() {
  const data = useMemo(() => Data, []); // useMemo will ensure data is not recreated on every render
  const columns = [
    {
      Header: 'Title',
      accessor: 'place',
      // Cell: e =><a href={e.value}> {e.value} </a>,
      // eslint-disable-next-line react/prop-types
      Cell: ({ row }) => (<Link to={{ pathname: `/details/${row.original.id}` }}>{row.original.place}</Link>),
    },
    {
      Header: 'Magnitude',
      accessor: 'mag',
    },
    {
      Header: 'Time',
      accessor: 'time',
      Cell: ({ value }) => {
        // return format(new Date(value), 'Apr 13,2018, 12:00 PM')
        const o = new Intl.DateTimeFormat('en', {
          timeStyle: 'medium',
          dateStyle: 'medium',
        });
        return o.format(value);
      },
    },
  ];

  function getStructuredData() {
    return data.data.features.map((feature) => {
      const obj = {
        id: feature.id,
        title: feature.properties.title,
        place: feature.properties.place,
        mag: feature.properties.mag,
        time: feature.properties.time,
      };
      return obj;
    });
  }
  const [title, setTitle] = useState('');
  const [tableData, setTableData] = useState([]);
  const [headerData, setHeaderData] = useState({});
  const [userProfile, setuserProfile] = useState({});

  useEffect(() => {
    // setNavigation
    setHeaderData({
      title: data.site.title,
      logoImage: data.site.logoImage,
      firstName: data.profile.firstName,
    });
    // setUserprofile
    setuserProfile(data.profile);
    setTableData(getStructuredData());
    setTitle(data.data.metadata.title);
  }, []);
  return (
    <div className="app">
      <Router>
        <Header data={headerData} />
        <div className="app__body">
          <Switch>
            <Route path="/profile/:profileID">
              <Profile user={userProfile} />
            </Route>
            <Route path="/details/:ID">
              <Details data={data.data} />
            </Route>
            <Route exact path="/">
              {
                tableData.length
                  ? (
                    <div className="app__table">
                      {' '}
                      <h2 className="app__table__title">{title}</h2>
                      <Table data={tableData} columns={columns} />
                    </div>
                  )
                  : null
              }
            </Route>
            <Route path="*">
              <FourOhFour />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

ReactDom.render(
  <App />,
  document.getElementById('app'),
);
