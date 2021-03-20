import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userCommonData } from '../../App';


const PrivateRoute = ({children, ...rest}) => {
    const [userLog, setUserLog] = useContext(userCommonData);
    return (
        <Route
            {...rest}
            render={({ location }) =>
            userLog.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;