import { render } from '@testing-library/react';
import Register from './Register';
import {Router} from 'react-router-dom';
import { createMemoryHistory } from 'history'

describe("Register should render", () => {
    const history = createMemoryHistory();
    const {asFragment, getByLabelText, getByText} = render(
        <Router history={history}>
            <Register />
        </Router>
    );


    test('Form for user registration is loaded', () => {
        const email = getByLabelText("Email");
        const first = getByLabelText("First Name");
        const last = getByLabelText("Last Name");
        const submit = getByText("Submit");
        expect(email).toBeInTheDocument();
        expect(first).toBeInTheDocument();
        expect(last).toBeInTheDocument();
        expect(submit).toBeInTheDocument();
    });
    
    test("matches snapshot", () => {
        expect(asFragment()).toMatchSnapshot();
    });
});