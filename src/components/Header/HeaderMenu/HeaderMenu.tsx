import { HeaderMenuData } from "@/types/global";

interface HeaderMenuProps {
    menuData: HeaderMenuData[]
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ menuData }) => {
    return (
        <p>Menu</p>
    )
}
export default HeaderMenu;
