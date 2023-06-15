import { createBoard } from '@wixc3/react-board';
import { H5, Intent, ProgressBar, Slider, Switch } from '@blueprintjs/core';

// board cover
import cover from '../../../../../src/assets/progress-bar/primary.svg';

export default createBoard({
    name: 'Progress bar',
    Board: () => {
        return <ProgressBar intent="primary" value={0.7} />;
    },
    environmentProps: {
        canvasWidth: 500,
    },
    tags: ['progress','bar','primary'],
    cover,
});
