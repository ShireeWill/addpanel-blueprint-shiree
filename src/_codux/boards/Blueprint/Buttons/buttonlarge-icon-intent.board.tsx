import { createBoard } from '@wixc3/react-board';
import { Button } from '@blueprintjs/core';
// board cover
import cover from '../../../../assets/buttons/danger-left-icon.svg';

export default createBoard({
    name: 'Danger with icon',
    Board: () => (
        <div>
            <Button icon="refresh" large={true} intent="danger">
                Reset
            </Button>
        </div>
    ),
    tags: ['button', 'danger'],
    cover,
});
