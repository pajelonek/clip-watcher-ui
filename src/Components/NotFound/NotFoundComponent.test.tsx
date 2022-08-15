import React from 'react';
import {screen} from '@testing-library/react';
import NotFoundComponent from './NotFoundComponent';
import {renderWithProviders} from "../../tests/test-utils";

describe('renders not found section component', () => {

    it('should get element by Id', () => {
        renderWithProviders(<NotFoundComponent data-testid={"notfoundcomponent"}/>, {});
        const notFoundComponent = screen.getByTestId("notfoundcomponent");
        expect(notFoundComponent).toBeInTheDocument();
    });

})