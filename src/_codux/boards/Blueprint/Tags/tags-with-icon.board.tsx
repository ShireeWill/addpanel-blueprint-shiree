import { createBoard } from '@wixc3/react-board';
import { Button, H5, Intent, Switch, Tag, Icon } from "@blueprintjs/core";

// board cover
import cover from '../../../../src/assets/tags/tags-with-icon.svg';


const INITIAL_TAGS = ["Seattle","London", "New York"];
const tag="Hello"
export default createBoard({
    name: 'Tags with Icon',
    Board: () => <>{
    INITIAL_TAGS.map(item => <Tag    
        icon={"home"}
    >
        {item}
    </Tag>)
    }
    </>
    
});

