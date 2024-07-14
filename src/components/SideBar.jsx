export default function SideBar(props) {
    const{handleToggleModal} = props
  return (
    <div  className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>The Brutual Martian Landscape</h2>
        <div>
          <p>Description</p>
          <p> **Ancient Delta in Jezero Crater**:</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
