import React from 'react';
import Nav from "./components/Nav";
import {Route, Routes} from "react-router-dom";
import Favorite from "./components/Favorite";
import Home from "./components/Home";
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

function App() {
    const client = new ApolloClient({
        uri: 'https://spacex-production.up.railway.app/',
        cache: new InMemoryCache(),
    });
    return (
        <ApolloProvider client={client}>
            <>
                <Nav/>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/:favorite" element={<Favorite/>}/>
                </Routes>
            </>
        </ApolloProvider>
    )
}

export default App;
