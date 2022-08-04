import React from 'react';
import {render, screen} from '@testing-library/react';
import Copyright from './Copyright';

describe('renders copyright component', () => {

    it('should get element by Id', () => {
        render(<Copyright id={"footer-Copyright"} data-testid="footer-Copyright"/>);
        const copyrightElement = screen.getByTestId("footer-Copyright");
        expect(copyrightElement).toBeInTheDocument();
    });

    it('should get element by project title', () => {
        const projectTitle = "Clip Watcher";
        render(<Copyright />);
        const copyrightElement = screen.getByText(projectTitle);
        expect(copyrightElement).toBeInTheDocument();
    });

})