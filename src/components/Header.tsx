import '../style/Header.css';
import { atom, useAtom } from 'jotai'

function Header() {
    // const [textAtom] = useAtom(textAtom)
    return(
        <div className="header">
            League of Drafts
        </div>
    )
}

export default Header;