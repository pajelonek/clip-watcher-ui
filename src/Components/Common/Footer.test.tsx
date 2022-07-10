import React from 'react';
import {render, screen} from '@testing-library/react';
import Footer from './Footer';

describe('renders footer component', () => {

    it('should get element by Id', () => {
        render(<Footer data-testid={"footer-Container"}/>);
        const footerElement = screen.getByTestId("footer-Container");
        expect(footerElement).toBeInTheDocument();
    });

    it('should contains copyright component', () => {
        render(<Footer/>);
        const copyrightElement = screen.getByTestId("footer-Copyright");
        expect(copyrightElement).toBeInTheDocument();
    });

})