import React from 'react';
import {screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeToggle from './ThemeToggle';
import {renderWithProviders} from "../../tests/test-utils";

describe('renders theme toggle', () => {

    it('should get element by Id', () => {
        renderWithProviders(<ThemeToggle data-testid={"headerThemeToggle"}/>);
        const themeElement = screen.getByTestId("headerThemeToggle");
        expect(themeElement).toBeInTheDocument();
    });

    it('should change theme on click', async () => {
        renderWithProviders(<ThemeToggle data-testid={"headerThemeToggle"}/>);
        let themeElementDark: HTMLElement | null = screen.getByTestId("Brightness4Icon");
        let themeElementLight = screen.queryByTestId("Brightness7Icon");
        expect(themeElementDark).toBeInTheDocument();
        expect(themeElementLight).toBeNull();

        userEvent.click(themeElementDark);

        themeElementDark = screen.queryByTestId("Brightness4Icon");
        expect(themeElementDark).toBeInTheDocument();
        expect(themeElementLight).toBeNull();
    });

})