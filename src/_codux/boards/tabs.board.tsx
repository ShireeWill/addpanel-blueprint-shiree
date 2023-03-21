import { useState } from 'react';
import { createBoard } from '@wixc3/react-board';
import { Alignment, Classes, Divider, H4, H5, InputGroup, Navbar, Switch, Tab, TabId, Tabs } from "@blueprintjs/core";

export default createBoard({
    name: 'Tabs',
    Board: () => {
        const [animate, setAnimate] = useState(true);
        const [fill, setFill] = useState(true);
        const [large, setLarge] = useState(false);
        const [showIcon, setShowIcon] = useState(false);
        const [showTags, setShowTags] = useState(false);
        const [useRoundTags, setUseRoundTags] = useState(false);
        const [navbarTabId, setNavbarTabId] = useState<TabId>("Home");

        const handleNavbarTabChange = (navbarTabId: TabId) => setNavbarTabId(navbarTabId);

        return (
            <Navbar>
                <Navbar.Group>
                    <Navbar.Heading>
                        Page: <strong>{navbarTabId}</strong>
                    </Navbar.Heading>
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    <Tabs
                        animate={animate}
                        fill={fill}
                        id="navbar"
                        large={large}
                        onChange={handleNavbarTabChange}
                        selectedTabId={navbarTabId}
                    >
                        <Tab id="Home" title="Home" icon={showIcon ? "home" : undefined} />
                        <Tab id="Files" title="Files" icon={showIcon ? "folder-open" : undefined} />
                        <Tab
                            id="Builds"
                            title="Builds"
                            icon={showIcon ? "build" : undefined}
                            tagContent={showTags ? 4 : undefined}
                            tagProps={{ round: useRoundTags }}
                        />
                    </Tabs>
                </Navbar.Group>
            </Navbar>
        )
    }
});
