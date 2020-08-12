import React from 'react'
import '../css/SidebarRow.css'

function SidebarRow({selected, Icon, title}) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow_Icon" />
            <h2 className="sidebarRow_title">{title}</h2>
        </div>
    )
}

export default SidebarRow
