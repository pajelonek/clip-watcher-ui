import reducer, {
    setPeriod,
    setCategory,
    setCursor,
    clearState,
    setChannelState,
    setIsSelected,
    setSelectedChannel,
    filterSliceInitialState, FilterState, CategoryState, Channel
} from './filterSlice'

describe('filter slice tests', () => {

    test('should return the initial state', () => {
        expect(reducer(undefined, {type: undefined})).toEqual(filterSliceInitialState);
    })

    test('should set period', () => {
        const previousState: FilterState = {...filterSliceInitialState, period: "24H", cursor: {value: "cursor1"}};

        const expectedState: FilterState = {...filterSliceInitialState, period: "7D", cursor: {value: ""}};

        expect(reducer(previousState, setPeriod("7D"))).toEqual(expectedState);
    })

    test('should set category', () => {
        const previousState: FilterState = {...filterSliceInitialState, cursor: {value: "cursor1"}};
        const newCategory: CategoryState = {
            id: 123456,
            name: 'CUSTOM NEW CATEGORY',
            box_art_url: "CUSTOM_NEW_URL"
        };
        const expectedState: FilterState = {...filterSliceInitialState, category: newCategory, cursor: {value: ""}};

        expect(reducer(previousState, setCategory(newCategory))).toEqual(expectedState);
    })

    test('should set cursor', () => {
        const previousState: FilterState = {...filterSliceInitialState, cursor: {value: "cursor1"}};
        const newCursor: any = {value: "cursor2"};
        const expectedState: FilterState = {...filterSliceInitialState, cursor: newCursor};

        expect(reducer(previousState, setCursor(newCursor))).toEqual(expectedState);
    })

    test('should clear state without channel', () => {
        const customState: FilterState = {
            period: 'all_time',
            category: {
                id: 1234567,
                name: 'Rocket League',
                box_art_url: "PLACEHOLDER_ART_URL"
            },
            channel: filterSliceInitialState.channel,
            cursor: {
                value: ''
            },
        } as FilterState;

        expect(reducer(customState, clearState())).toEqual(filterSliceInitialState);
    })

    test('should set channel state', () => {
        const newSelectedChannelState: any = {
            isSelected: true,
            channel: {
                "broadcaster_language": "some language",
                "broadcaster_login": "some login",
                "display_name": "some display name",
                "game_id": "",
                "game_name": "some display name",
                "id": "",
                "is_live": null,
                "tag_ids": null,
                "thumbnail_url": "",
                "title": "some title",
                "started_at": "",
                "_live": false
            }
        };

        const expectedState: FilterState = {
            period: filterSliceInitialState.period,
            category: filterSliceInitialState.category,
            channel: {
                isSelected: newSelectedChannelState.isSelected,
                selectedChannel: newSelectedChannelState.channel
            },
            cursor: filterSliceInitialState.cursor
        } as FilterState;

        expect(reducer(filterSliceInitialState, setChannelState(newSelectedChannelState))).toEqual(expectedState);
    })

    test('should set is selected channel', () => {
        const expectedState: FilterState = {
            ...filterSliceInitialState,
            channel: {
                isSelected: true,
                selectedChannel: filterSliceInitialState.channel.selectedChannel
            }
        };

        expect(reducer(filterSliceInitialState, setIsSelected(true))).toEqual(expectedState);
    })

    test('should set selected channel', () => {
        const selectedChannel: Channel = {
            "broadcaster_language": "dummy",
            "broadcaster_login": "dummy",
            "display_name": "dummy",
            "game_id": "dummy",
            "game_name": "dummy",
            "id": "dummy",
            "is_live": null,
            "tag_ids": null,
            "thumbnail_url": "dummy",
            "title": "dummy",
            "started_at": "dummy",
            "_live": false
        };

        const expectedState: FilterState = {
            ...filterSliceInitialState,
            channel: {
                isSelected: filterSliceInitialState.channel.isSelected,
                selectedChannel: selectedChannel,
            }
        }

        expect(reducer(filterSliceInitialState, setSelectedChannel(selectedChannel))).toEqual(expectedState);
    })

});