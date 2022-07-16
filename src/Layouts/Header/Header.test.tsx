import React from 'react';
import {screen} from '@testing-library/react';
import userEvent, {TargetElement} from '@testing-library/user-event';
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

    it('should change cursor when hovering a logo', () => {
        renderWithProviders(<Header data-testid={"header-AppBar"}/>);
        const logoElement = screen.queryByText("Clip Watcher") as TargetElement;
        expect(logoElement).toBeInTheDocument();

        userEvent.hover(logoElement);

        const cursor: any = document.querySelector('body');
        expect(cursor.style.cursor).toEqual('pointer');

        userEvent.unhover(logoElement);

        expect(cursor.style.cursor).toEqual('auto');
    });


    it('should navigate to main page when clicking a logo', () => {
        renderWithProviders(<Header data-testid={"header-AppBar"}/>);
        const logoElement = screen.queryByText("Clip Watcher") as TargetElement;
        expect(logoElement).toBeInTheDocument();

        userEvent.click(logoElement);

        expect(window.location.pathname).toBe('/');
    });

})