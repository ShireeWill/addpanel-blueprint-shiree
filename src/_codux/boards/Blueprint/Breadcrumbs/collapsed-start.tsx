import {
    Boundary,
    BreadcrumbProps,
    Card,
    Checkbox,
    H5,
    InputGroup,
    Label,
    RadioGroup,
    Slider, Breadcrumb, Icon
} from "@blueprintjs/core";
import { createBoard } from '@wixc3/react-board';
import { Breadcrumbs2 } from '@blueprintjs/popover2';

export default createBoard({
    name: 'collapsed-start',
    Board: () => <div>
        <Breadcrumbs2
            collapseFrom={"start"}
            currentBreadcrumbRenderer={renderCurrentBreadcrumb}
            items={BREADCRUMBS}
        // overflowListProps={{ alwaysRenderOverflow }}
        />
    </div>
});


<Breadcrumbs2/>

const BREADCRUMBS: BreadcrumbProps[] = [
    { href: "/users", icon: "folder-close", text: "Users" },
    { href: "/users/janet", icon: "folder-close", text: "Janet" },
    { icon: "document", text: "image.jpg" },
];

const renderCurrentBreadcrumb = ({ text, ...restProps }: BreadcrumbProps) => {
    // customize rendering of last breadcrumb
    return <Breadcrumb {...restProps}>{text}</Breadcrumb>;
};
