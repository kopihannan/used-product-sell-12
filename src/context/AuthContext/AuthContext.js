import React from 'react';

const AuthContext = ({children}) => {

    const authInfo = {}
    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthContext;