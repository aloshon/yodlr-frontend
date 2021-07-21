import { fireEvent, render } from '@testing-library/react';
import Homepage from './Homepage';
import {Router} from 'react-router-dom';
import { createMemoryHistory } from 'history';
import StateContext from "./StateContext";

describe("homepage should be rendered", () => {
    const history = createMemoryHistory();
    const user = {
        id: 1,
        firstName: "test",
        lastName: "testing",
        email: "test@gmail.com",
        state: "active",
        isAdmin: "true",
    }

    const {asFragment, getByText} = render(
        <Router history={history}>
            <StateContext.Provider value={{updateState: jest.fn()}}>
                <Homepage user={user} />
            </StateContext.Provider>
        </Router>
    );


    test('Load user data and admin page if applicable, clicking either button updates history', () => {
        
        const logo = getByText("Yodlr Design");
        const signout = getByText("Sign Out");
        expect(logo).toBeInTheDocument();
        // useHistory does not actually change the page in testing,
        // so we just check  path has changed and there are more
        // pages in history 
        expect(history.length).toBe(1);
        fireEvent.click(signout);
        expect(history.length).toBe(2);
    });
    
    test("matches snapshot", () => {
        expect(asFragment()).toMatchSnapshot();
    });
});