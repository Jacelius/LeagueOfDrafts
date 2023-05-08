import { useAtom } from 'jotai';
import '../style/Header.css';
import { textAtom, darkModeAtom } from './atoms';

function Header() {
    const [text, setTextAtom] = useAtom(textAtom);
    const [darkMode, setDarkMode] = useAtom(darkModeAtom);
    return(
        <div className="header">
            League of Drafts
        </div>
    )
}

export default Header;