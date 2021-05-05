import React from 'react'
import { Link } from 'react-router-dom'
import EmphasisedText from './EmphasisedText'

const SidebarNavLinks = () => {
    return (
        <nav>
            <ul className="flex-col">
                <li>
                    <Link to="/">
                        <EmphasisedText>
                            Home
                        </EmphasisedText>
                    </Link>
                </li>
                <li>
                    <Link to="/projects">
                        <EmphasisedText>
                            Projects
                        </EmphasisedText>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <EmphasisedText>
                            Contact
                        </EmphasisedText>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default SidebarNavLinks
