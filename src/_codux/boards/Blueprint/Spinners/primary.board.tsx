import { createBoard } from '@wixc3/react-board';
import { Spinner, ISpinnerProps } from '@blueprintjs/core';


// board cover
import cover from '../../../../../src/assets/spinners/primary.svg';

export default createBoard({
    name: 'Primary',
    Board: () => 
        <Spinner intent="primary" size={40}/>,
        tags:['spinner','primary'],
        cover,
});
