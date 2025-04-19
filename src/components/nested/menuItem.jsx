import { useState } from "react"
import MenuList from "./menuList"

export default function MenuItem({ menu = {}}) {
    const [expand, setExpand] = useState(false)
    return <li>
        {menu.label}

        {
            menu.children && menu.children.length ?  <span onClick={() => { 
                setExpand(!expand)
                
                }}>{
                    expand ? '-' : '+'
                }
            </span> : ""
        }

        {
            expand ? <MenuList menus={menu.children} /> : null
        }
    </li>
}