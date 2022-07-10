import React from 'react';
import {screen} from '@testing-library/react';
import ChannelList from './ChannelList';
import {renderWithProviders} from "../../../tests/test-utils";

describe('renders channel list component', () => {

    it('should get element by Id', () => {
        renderWithProviders(<ChannelList data-testid={"sidebar-FiltersList-Label"}/>, {});
        const channelFilterAutocomplete = screen.getByTestId("sidebar-FiltersList-Label");
        expect(channelFilterAutocomplete).toBeInTheDocument();
    });

})