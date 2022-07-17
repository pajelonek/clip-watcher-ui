import React from 'react';
import {screen} from '@testing-library/react';
import SideBarCategoryList from './SideBarCategoryList';
import {renderWithProviders} from "../../tests/test-utils";

describe('renders side bar category list component', () => {

    it('should get element by Id', () => {
        renderWithProviders(<SideBarCategoryList data-testid={"sidebar-FiltersList-Label"}/>, {});
        const sideBarCategoryListComponent = screen.getByTestId("sidebar-FiltersList-Label");
        expect(sideBarCategoryListComponent).toBeInTheDocument();
    });

})