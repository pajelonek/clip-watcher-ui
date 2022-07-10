import React from 'react';
import {render, screen} from '@testing-library/react';
import ClipsContainer from './ClipsContainer';
import {MockComponent} from "../../../tests/MockComponent";

describe('renders header component', () => {

    it('should get element by Id', () => {
        render(<MockComponent><ClipsContainer data-testid={"clipsContainer-container"}/></MockComponent>);
        const clipElement = screen.getByTestId("clipsContainer-container");
        expect(clipElement).toBeInTheDocument();
    });

})