import React from 'react';
import {render, screen} from '@testing-library/react';
import ClipsContainer from './ClipsContainer';
import {MockComponent} from "../../tests/MockComponent";

describe('renders clips container component', () => {

    it('should get element by Id', () => {
        render(<MockComponent><ClipsContainer clips={[]}
                                              isSuccess={true}
                                              isLoading={false}
                                              isFetching={false}
                                              isUninitialized={false}
                                              dataTestId={"sideBarCategory-list"}/></MockComponent>);
        const clipElement = screen.getByTestId("sideBarCategory-list");
        expect(clipElement).toBeInTheDocument();
    });

})