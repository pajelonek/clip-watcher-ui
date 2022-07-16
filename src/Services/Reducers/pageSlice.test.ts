import reducer, {
    setPage, clearPage,
    pagesSliceInitialState
} from './pageSlice'

describe('page slice tests', () => {

    test('should return the initial state', () => {
        expect(reducer(undefined, {type: undefined})).toEqual(pagesSliceInitialState);
    })

    test('should set page', () => {
        const expectedState = {value: 2};

        expect(reducer(pagesSliceInitialState, setPage(expectedState.value))).toEqual(expectedState);
    })

    test('should clear page', () => {
        const expectedState = {value: 2};

        expect(reducer(expectedState, clearPage())).toEqual(pagesSliceInitialState);
    })

});