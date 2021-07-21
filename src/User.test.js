import { render } from '@testing-library/react';
import User from './User';
import {Router} from 'react-router-dom';
import { createMemoryHistory } from 'history';
import StateContext from "./StateContext";

describe("User should be rendered", () => {
    const history = createMemoryHistory();
    const {asFragment, getByText} = render(
        <Router history={history}>
            <StateContext.Provider value={{updateState: jest.fn()}}>
                <User 
                id={1}
                firstName={"Testing"}
                lastName={"This"}
                email={"thisis@test.com"}
                state={"pending"}
                update={jest.fn}
                />
            </StateContext.Provider>
        </Router>
    );


    test('Load user data', () => {
        const fullName = getByText("Testing This");
        const email = getByText("thisis@test.com");
        const state = getByText("pending");
        expect(fullName).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(state).toBeInTheDocument();;
    });
    
    test("matches snapshot", () => {
        expect(asFragment()).toMatchSnapshot();
    });
});