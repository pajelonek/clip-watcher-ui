import React from 'react';
import {render, screen} from '@testing-library/react';
import ChannelInformationPage from './ChannelInformationPage';
import {MockComponent} from "../../../tests/MockComponent";

describe('renders header component', () => {

    it('should get element by Id', () => {
        render(<MockComponent><ChannelInformationPage data-testid={"mainPage-ChannelInformationPage-Container"}/></MockComponent>);
        const headerElement = screen.getByTestId("mainPage-ChannelInformationPage-Container");
        expect(headerElement).toBeInTheDocument();
    });

})