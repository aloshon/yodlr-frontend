import { render, screen } from '@testing-library/react';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

describe("app should render register since there is no logged in uesr", () => {
  const {asFragment, getByLabelText, getByText} = render(<BrowserRouter><App /></BrowserRouter>);

  test('renders register page inputs', () => {
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
})
