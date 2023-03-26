import { createBoard } from '@wixc3/react-board';
import { H5, Intent, ProgressBar, Slider, Switch } from "@blueprintjs/core";


export default createBoard({
    name: 'Progress bar',
    Board: () => {
        return (
            <ProgressBar intent="none" value={0.7} />
        )
    },
    environmentProps: {
        canvasWidth: 500
    }
});
