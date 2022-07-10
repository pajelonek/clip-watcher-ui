import React from 'react';
import {render, screen} from '@testing-library/react';
import BouncingDotsLoader from './BouncingDotsLoader';

describe('renders bouncing dots loader component', () => {

    it('should get element by Id', () => {
        render(<BouncingDotsLoader data-testid={"bouncingDotsElement"}/>);
        const clipElement = screen.getByTestId("bouncingDotsElement");
        expect(clipElement).toBeInTheDocument();
    });

})