import React, { Fragment } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from 'utils/routes';
import { Notification } from './components';
import { selectNotification } from './slice/notificationSlice';
import { updateItem } from 'slice/authSlice';

function App() {
  const notification = useAppSelector(selectNotification);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(updateItem());
  }, []);

  return (
    <>
      <Notification
        type={notification.type}
        title={notification.title}
        description={notification.description}
        isOpen={notification.isOpen}
        isReload={notification.isReload}
      ></Notification>
      <Routes>
        {publicRoutes?.map((route, index) => {
          const Page = route.component;
          const Layout = (route as any)?.layout ? (
            (route as any)?.layout
          ) : (route as any)?.layout === null ? (
            Fragment
          ) : (
            <></>
          );

          return (
            <Route
              key={index}
              path={route.path}
              element={<Page></Page>}
            ></Route>
          );
        })}

        {privateRoutes?.map((route, index) => {
          const Page = route.component;
          const Layout = (route as any)?.layout ? (
            (route as any)?.layout
          ) : (route as any)?.layout === null ? (
            Fragment
          ) : (
            <></>
          );

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page></Page>
                </Layout>
              }
            ></Route>
          );
        })}
        <Route path="/" element={<Navigate to="/signup" />} />
      </Routes>
    </>
  );
}

export default App;
