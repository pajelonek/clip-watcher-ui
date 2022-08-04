import React from 'react';
import {screen} from '@testing-library/react';
import ContentSection from './ContentSection';
import {renderWithProviders} from "../../tests/test-utils";

describe('renders content section component', () => {

    it('should get element by Id', () => {
        renderWithProviders(<ContentSection dataTestId={"content-section-container"}/>, {});
        const contentSectionComponent = screen.getByTestId("content-section-container");
        expect(contentSectionComponent).toBeInTheDocument();
    });

})