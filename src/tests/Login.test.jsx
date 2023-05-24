import Login from "../components/Login";
import { cleanup, fireEvent, screen, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

it('Should render the username, password, and submit button', () => {
    act(() => {
        render(<Login/>);
    })

    const usernameField = screen.getByLabelText(/username/i)
    const passwordField = screen.getByLabelText(/password/i)
    const submitButton = screen.getByText(/Submit/i)

    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});