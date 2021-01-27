import React from 'react'
import AppContext from "./AppContext";
import AppProvider from "./AppProvider";

const NavBar = () => {
    return (
        <AppProvider>
            <div>
                <p>Change Language: </p>
                <AppContext.Consumer>
                    {(context) => <div>
                        <button onClick={() => context.changLanguage('english')}>english</button>
                        <button onClick={() => context.changLanguage('vietnam')}>tiengviet</button>
                        <div>
                            <label>{context.language === 'english' ? 'name' : 'ten'}</label>
                            <button>
                                {context.language === 'english' ? 'submit' : 'gui len'}
                            </button>
                        </div>
                    </div>
                    }
                </AppContext.Consumer>
            </div>
        </AppProvider>
    )
}
export default NavBar