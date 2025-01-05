import chefLogo from "./images/chef-claude-icon.png"

export default function Header() {
    return (
        <header>
            <img src={chefLogo} alt="chef claude icon" />
            <h1>AI Chef</h1>
        </header>
    )
}