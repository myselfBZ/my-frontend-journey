import MenuItem from "./menuItem"

export default function MenuList({ menus = []}) {
    
        return <ul>
        {
            menus.length > 0 ? menus.map((menu, index) => {
                return <MenuItem key={index} menu={menu}/>
                    
            }) : null
        }
        </ul>
   
}