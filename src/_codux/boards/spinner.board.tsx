import { createBoard } from '@wixc3/react-board';
import { Spinner, ISpinnerProps } from '@blueprintjs/core';

export default createBoard({
    name: 'Spinner',
    Board: () => 
        <Spinner intent="primary" size={40}/>
});
