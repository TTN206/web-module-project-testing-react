// [x] 1. Add in nessisary imports and values to establish the testing suite.
import React from 'React';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Display from '../Display';

// [x] 2. Test that the Display component renders without any passed in props.
test('sanity check, Display renders without any passed in props', ()=>{
    render(<Display />);
})

//3. Rebuild or copy a show test data element as used in the previous set of tests.
test('renders testShow and no selected Season without errors', ()=>{
});

test('renders Loading component when prop show is null', () => {
});

test('renders same number of options seasons are passed in', ()=>{
});

test('handleSelect is called when an season is selected', () => {
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
});

//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.