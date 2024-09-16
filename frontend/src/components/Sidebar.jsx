function Sidebar({ ...props }) {
    return (
        <div className="sidebar">
            <SidebarItem text={'mychat'} />
            <SidebarItem text={'mychat'} />
            <SidebarItem text={'mychat'} />
        </div>
    )
}

function SidebarItem({ text }) {
  return (
    <div className="sidebar-item">
      {text}
      <button>del</button>
    </div>
  )
}

export default Sidebar