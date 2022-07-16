import React from 'react';
import {screen} from '@testing-library/react';
import Header from './Header';
import {renderWithProviders} from "../../tests/test-utils";

describe('renders header component', () => {

    it('should get element by Id', () => {
        renderWithProviders(<Header data-testid={"header-AppBar"}/>);
        const headerElement = screen.getByTestId("header-AppBar");
        expect(headerElement).toBeInTheDocument();
    });

    it('should get project logo', () => {
        renderWithProviders(<Header data-testid={"header-AppBar"}/>);
        const logoElement = screen.queryByText("Clip Watcher");
        expect(logoElement).toBeInTheDocument();
    });
})