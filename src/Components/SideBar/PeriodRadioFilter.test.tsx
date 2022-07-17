import React from 'react';
import {screen} from '@testing-library/react';
import PeriodRadioFilter from './PeriodRadioFilter';
import {renderWithProviders} from "../../tests/test-utils";

describe('renders side bar radio filter component', () => {

    it('should get element by Id', () => {
        renderWithProviders(<PeriodRadioFilter data-testid={"sidebar-PeriodRadioFilterComponent"}/>, {});
        const sideBarComponent = screen.getByTestId("sidebar-PeriodRadioFilterComponent");
        expect(sideBarComponent).toBeInTheDocument();
    });

})