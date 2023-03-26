import { createBoard } from '@wixc3/react-board';
import { Button, H5, Intent, Switch, Tag, Icon } from "@blueprintjs/core";

const INITIAL_TAGS = ["London", "New York", "San Francisco", "Seattle"];
const tag="Hello"
export default createBoard({
    name: 'Tags',
    Board: () => <>{
    INITIAL_TAGS.map(item => <Tag    
        icon={"home"}
    >
        {item}
    </Tag>)
    }</>
    
});

