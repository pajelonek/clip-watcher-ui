import React from 'react';
import {screen} from '@testing-library/react';
import ChannelLabel from './ClipsChannelLabel';
import {renderWithProviders} from "../../../tests/test-utils";

describe('renders content section component', () => {

    it('should get element by Id', () => {
        renderWithProviders(<ChannelLabel/>, {});
        const channelLabel = screen.getByTestId("clips-channel-label");
        expect(channelLabel).toBeInTheDocument();
    });

})