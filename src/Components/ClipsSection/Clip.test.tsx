import React from 'react';
import {render, screen} from '@testing-library/react';
import Clip from './Clip';
import {MockComponent} from "../../tests/MockComponent";

describe('renders header component', () => {
    const mockedProps: any = {
        clip: {
            thumbnail_url: "/",
            title: "PLACEHOLDER_TITLE",
            broadcaster_name: "PLACEHOLDER BROADCASTER NAME",
            view_count: 123123,
            embed_url: "/"
        }
    };

    it('should get element by Id', () => {
        render(<MockComponent><Clip data-testid={"clipsContainer-clipComponent"} {...mockedProps}/></MockComponent>);
        const clipElement = screen.getByTestId("clipsContainer-clipComponent");
        expect(clipElement).toBeInTheDocument();
    });

    it('should render all clips elements', () => {
        render(<MockComponent><Clip data-testid={"clipsContainer-clipComponent"} {...mockedProps}/></MockComponent>);
        const placeholderElement = screen.getByText(mockedProps.clip.title);
        const broadcasterNameElement = screen.getByText(mockedProps.clip.broadcaster_name);
        const viewsCountElement = screen.getByText("views: " + mockedProps.clip.view_count);


        expect(placeholderElement).toBeInTheDocument();
        expect(broadcasterNameElement).toBeInTheDocument();
        expect(viewsCountElement).toBeInTheDocument();

    });


})