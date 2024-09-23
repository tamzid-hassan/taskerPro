import ThemeSwitcher from "./ThemeSwitcher"

function Header() {
    return (
        <>
            <div className="shadow-lg shadow-accent/30 navbar">
                <div className="flex-1">
                    <a className="text-xl btn btn-ghost text-primary">
                        Tasker Pro
                        <i className="fa-solid fa-list-check"></i>
                    </a>
                </div>
                <div className="flex-none">
                    <ThemeSwitcher />
                </div>
            </div>
        </>
    )
}

export default Header