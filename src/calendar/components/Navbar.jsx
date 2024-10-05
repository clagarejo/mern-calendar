import { useAuthStore } from "../../hooks/useAuthStore"

export const Navbar = () => {

  const { startLogout, user } = useAuthStore()

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4 py-3">
        <span className="navbar-brand">
            <i className="fas fa-calendar-alt"></i>
            &nbsp;
            { user.name }
        </span>

        <button onClick={ startLogout } className="btn btn-outline-primary">
            <i className="fas fa-sign-out-alt"></i>
            &nbsp;
            <span> Salir </span>
        </button>
    </div>
  )
}
