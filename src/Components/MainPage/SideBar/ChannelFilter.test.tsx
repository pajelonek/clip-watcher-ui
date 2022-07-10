import React from 'react';
import {screen} from '@testing-library/react';
import ChannelFilter from './ChannelFilter';
import {renderWithProviders} from "../../../tests/test-utils";

describe('renders channel filter component', () => {

    it('should get element by Id', () => {
        renderWithProviders(<ChannelFilter data-testid={"sideBar-channelFilterAutocomplete"}/>, {});
        const channelFilterAutocomplete = screen.getByTestId("sideBar-channelFilterAutocomplete");
        expect(channelFilterAutocomplete).toBeInTheDocument();
    });
    // todo add working msw


})