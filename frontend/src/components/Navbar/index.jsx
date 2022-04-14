import "./index.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function index() {
	const MySwal = withReactContent(Swal);
	const [search, setSearch] = useState("");
	let navigate = useNavigate();
	const handleChange = e => {
		setSearch(e.target.value);
	};
	const handleSubmit = e => {
		e.preventDefault();
		if (search.length <= 0) {
			MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se puede realizar una busqueda vacia!',
      })
      return;
		}
		navigate(`/search/${search}`);
	};

	return (
		<div className='NavbarWrapper'>
			<div className='Navbar'>
				<Link to={`/`}>
					<div className='Navbar__logo'>
						<img
							src='https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg'
							alt='logo'
						/>
					</div>
				</Link>
				<div className='Navbar__search'>
					<form onSubmit={handleSubmit}>
						<input
							type='text'
							placeholder='Search'
							value={search}
							onChange={handleChange}
						/>
					</form>
				</div>
			</div>
		</div>
	);
}

export default index;
