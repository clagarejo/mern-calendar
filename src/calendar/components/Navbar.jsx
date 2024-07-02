
export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4 py-3">
        <span className="navbar-brand">
            <i className="fas fa-calendar-alt"></i>
            &nbsp;
            Yan Carlos
        </span>

        <button className="btn btn-outline-primary">
            <i className="fas fa-sign-out-alt"></i>
            <span> Salir </span>
        </button>
    </div>
  )
}
