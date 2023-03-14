import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Button } from '@blueprintjs/core';
import { Breadcrumbs2 } from '@blueprintjs/popover2';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <img src={logo} className={styles['App-logo']} alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className={styles['App-link']}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Button />
                <Breadcrumbs2
                    items={[
                        { icon: 'folder-close', text: 'All files' },
                        { icon: 'folder-close', text: 'Users' },
                        { icon: 'folder-close', text: 'Janet' },
                        { href: '#', icon: 'folder-close', text: 'Photos' },
                        { href: '#', icon: 'folder-close', text: 'Wednesday' },
                        { icon: 'document', text: 'image.jpg', current: true },
                    ]}
                />
            </header>
        </div>
    );
}

export default App;
