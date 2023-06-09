import { createBoard } from '@wixc3/react-board';
import { Card, H5, Button } from '@blueprintjs/core';
// board cover
import cover from '../../../../assets/card/card.svg';

export default createBoard({
    name: 'Card',
    Board: () =>
        <Card elevation={3}>
            <H5>
                <a href="#"> Analytical applications</a>
            </H5>
            <p>
                User interfaces that enable people to interact smoothly with data, ask better questions, and
                make better decisions.
            </p>
            <Button text="Explore products"/>
        </Card>
            tags: ['card'],
            cover,
});
