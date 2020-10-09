import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                
                <Route path="/rest/:id" component={Restaurant}></Route>
            </div>
        </BrowserRouter>
    )
}

export default Routing;