import React from 'react';
import {screen} from '@testing-library/react';
import SideBar from './SideBar';
import {renderWithProviders} from "../../tests/test-utils";

describe('renders side bar component', () => {

    it('should get element by Id', () => {
        renderWithProviders(<SideBar data-testid={"sidebar-Container"}/>, {});
        const sideBarComponent = screen.getByTestId("sidebar-Container");
        expect(sideBarComponent).toBeInTheDocument();
    });

})