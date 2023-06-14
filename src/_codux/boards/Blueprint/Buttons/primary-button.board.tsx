import { createBoard } from '@wixc3/react-board';
import { Button } from '@blueprintjs/core';
// board cover
import cover from '../../../../assets/buttons/primary.svg';

export default createBoard({
    name: 'Primary Button',
    Board: () => (
        <div>
            <Button large={true} intent="primary">
                Primary
            </Button>
        </div>
    ),
    tags: ['button', 'primary'],
    cover,
});
