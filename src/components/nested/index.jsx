import MenuList from "./menuList"

export default function TreeView({ menu = [] }) {
    return <MenuList menus={menu} />
}