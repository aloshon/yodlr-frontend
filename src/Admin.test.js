import { render } from '@testing-library/react';
import Admin from './Admin';
import {Router} from 'react-router-dom';
import { createMemoryHistory } from 'history';
import StateContext from "./StateContext";

describe("Admin should be rendered", () => {
    const history = createMemoryHistory();
    const {asFragment, getByText} = render(
        
        <Router history={history}>
            <StateContext.Provider value={{updateState: jest.fn()}}>
                <Admin />
            </StateContext.Provider>
        </Router>
    );

    // users are not fetched from api, so test for loading screen
    test('Load admin page loading text', () => {
        const loadingText = getByText("Loading...");
        expect(loadingText).toBeInTheDocument();
    });
    
    test("matches snapshot", () => {
        expect(asFragment()).toMatchSnapshot();
    });
});
