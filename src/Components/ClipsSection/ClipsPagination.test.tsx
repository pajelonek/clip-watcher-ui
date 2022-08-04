import React from 'react';
import {render, screen} from '@testing-library/react';
import ClipsPagination from './ClipsPagination';
import {MockComponent} from "../../tests/MockComponent";
import userEvent, {TargetElement} from "@testing-library/user-event";
import {renderWithProviders} from "../../tests/test-utils";

describe('renders clips pagination component', () => {

    it('should render element and get by Id', () => {
        render(<MockComponent><ClipsPagination dataTestId={"clipsPagination-container"}/></MockComponent>);
        const clipElement = screen.getByTestId("clipsPagination-container");
        expect(clipElement).toBeInTheDocument();
    });

    it('should not render element when clips loading is true', () => {
        render(<MockComponent><ClipsPagination loadingClips={true} dataTestId={"clipsPagination-container"}/></MockComponent>);
        const clipElement = screen.queryByTestId("clipsPagination-container");
        expect(clipElement).toBeNull();
    });

    it('should change page from 0 to 1', () => {
        const {store, container} = renderWithProviders(<ClipsPagination loadingClips={false} dataTestId={"clipsPagination-container"}/>);
        const clipElement = screen.getByTestId("clipsPagination-container");
        expect(clipElement).toBeInTheDocument();

        const nextPageBtn = container.querySelector('[title="Go to next page"]') as TargetElement;
        expect(nextPageBtn).toBeInTheDocument();
        expect(store.getState().page.value).toBe(0);

        userEvent.click(nextPageBtn);

        expect(store.getState().page.value).toBe(1);
    });

    it('should change page from 1 to 0', () => {
        const {store, container} = renderWithProviders(<ClipsPagination loadingClips={false} dataTestId={"clipsPagination-container"}/>);
        const clipElement = screen.getByTestId("clipsPagination-container");
        expect(clipElement).toBeInTheDocument();

        const nextPageBtn = container.querySelector('[title="Go to next page"]') as TargetElement;
        expect(nextPageBtn).toBeInTheDocument();
        expect(store.getState().page.value).toBe(0);

        userEvent.click(nextPageBtn);

        expect(store.getState().page.value).toBe(1);

        const prevPageBtn = container.querySelector('[title="Go to previous page"]') as TargetElement;
        expect(prevPageBtn).toBeInTheDocument();
        userEvent.click(prevPageBtn);

        expect(store.getState().page.value).toBe(0);
    });

    it('should not change page from 0 to -1', () => {
        const {store, container} = renderWithProviders(<ClipsPagination loadingClips={false} dataTestId={"clipsPagination-container"}/>);
        const clipElement = screen.getByTestId("clipsPagination-container");
        expect(clipElement).toBeInTheDocument();

        const prevPageBtn = container.querySelector('[title="Go to previous page"]') as TargetElement;
        expect(prevPageBtn).toBeInTheDocument();
        userEvent.click(prevPageBtn);

        expect(store.getState().page.value).toBe(0);
    });

})