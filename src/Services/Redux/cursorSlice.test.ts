import reducer, {
    setCursor,
    addNewCursorToContext,
    goBackWithCursor,
    setDirectionOfCursor,
    goForwardWithCursor,
    clearCursorList,
    CursorState, cursorSliceInitialState
} from './cursorSlice'

describe('cursor slice tests', () => {

    test('should return the initial state', () => {
        expect(reducer(undefined, {type: undefined})).toEqual(cursorSliceInitialState);
    })

    test('should handle setting new state', () => {
        const previousState: CursorState = cursorSliceInitialState;
        const payload: CursorState = {
            currentPage: 1,
            cursorList: ["cursor1, cursor2"],
            direction: 'after'
        }

        expect(reducer(previousState, setCursor(payload))).toEqual(payload);
    })

    test('should clear cursor list', () => {
        const previousState: CursorState = {
            currentPage: 1,
            cursorList: ["cursor1, cursor2"],
            direction: 'after'
        };

        expect(reducer(previousState, clearCursorList())).toEqual(cursorSliceInitialState);
    })

    test('should add new cursor for context', () => {
        const previousState: CursorState = {
            currentPage: 0,
            cursorList: ["cursor1"],
            direction: 'after'
        };

        const newCursor: string = "cursor2";

        const expectedState: CursorState = {
            currentPage: 0,
            cursorList: ["cursor1", newCursor],
            direction: 'after'
        };

        expect(reducer(previousState, addNewCursorToContext(newCursor))).toEqual(expectedState);
    })

    test('should not add new cursor for context', () => {
        const previousState: CursorState = {
            currentPage: 0,
            cursorList: ["cursor1"],
            direction: 'after'
        };

        const newCursor: string = "cursor1";

        expect(reducer(previousState, addNewCursorToContext(newCursor))).toEqual(previousState);
    })

    test('should increment current page', () => {
        const previousState: CursorState = {
            currentPage: 0,
            cursorList: ["cursor1"],
            direction: 'after'
        };

        const expectedState: CursorState = {
            currentPage: 1,
            cursorList: ["cursor1"],
            direction: 'after'
        };


        expect(reducer(previousState, goForwardWithCursor())).toEqual(expectedState);
    })

    test('should decrement current page', () => {
        const previousState: CursorState = {
            currentPage: 1,
            cursorList: ["cursor1"],
            direction: 'after'
        };

        const expectedState: CursorState = {
            currentPage: 0,
            cursorList: ["cursor1"],
            direction: 'after'
        };


        expect(reducer(previousState, goBackWithCursor())).toEqual(expectedState);
    })

    test('should decrement current page when reach 0', () => {
        const previousState: CursorState = {
            currentPage: 0,
            cursorList: ["cursor1"],
            direction: 'after'
        };

        expect(reducer(previousState, goBackWithCursor())).toEqual(previousState);
    })

    test('should set direction of cursor', () => {
        const previousState: CursorState = {
            currentPage: 0,
            cursorList: ["cursor1"],
            direction: 'after'
        };

        const expectedState: CursorState = {
            currentPage: 0,
            cursorList: ["cursor1"],
            direction: 'before'
        };

        expect(reducer(previousState, setDirectionOfCursor("before"))).toEqual(expectedState);
    })

});