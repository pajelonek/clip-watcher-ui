import React from 'react';
import {screen} from '@testing-library/react';
import SideBarChannelList from './SideBarChannelList';
import {renderWithProviders} from "../../tests/test-utils";

describe('renders side bar category list component', () => {

    it('should get element by Id', () => {
        renderWithProviders(<SideBarChannelList data-testid={"sidebar-Channel-List"}/>, {});
        const sideBarChannelListComponent = screen.getByTestId("sidebar-Channel-List");
        expect(sideBarChannelListComponent).toBeInTheDocument();
    });

})