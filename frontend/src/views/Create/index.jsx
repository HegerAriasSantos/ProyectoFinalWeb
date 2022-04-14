import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.scss";

function index() {
	const navigate = useNavigate();
	const [video, setVideo] = useState({
		actores: [],
		titulo: "",
		año: "",
		director: "",
		reseña: "",
		src: "",
		portada: "",
	});
	const handleSubmit = e => {
		e.preventDefault();
		axios.post(`http://localhost:4000/trailer`, video).then(res => {
			navigate("/admin");
		});
	};
	const handleChange = e => {
		setVideo({
			...video,
			[e.target.name]: e.target.value,
		});
	};
	const handleChangeActores = e => {
		const value = e.target.value.split(",");
		setVideo({
			...video,
			actores: value,
		});
	};
	const handleChangeAño = e => {
		const reg = new RegExp("^[0-9]+$");
		if (reg.exec(e.target.value) || e.target.value == " ") {
			setVideo({
				...video,
				año: e.target.value,
			});
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className='titulo'>
					<label htmlFor='titulo'>
						Titulo
						<input
							type='text'
							name='titulo'
							placeholder=' Ej: La cucaracha'
							id='titulo'
							onChange={handleChange}
							value={video.titulo}
							required
						/>
					</label>
				</div>
				<div className='actores'>
					<label htmlFor='actores'>
						Actores
						<input
							type='text'
							name='actores'
							id='actores'
							placeholder='Ej: Juan, Pedro, Juan'
							onChange={handleChangeActores}
							value={video.actores}
							required
						/>
					</label>
				</div>
				<div className='año'>
					<label htmlFor='año'>
						Año
						<input
							type='text'
							name='año'
							id='año'
							placeholder='Ej: 2019'
							onChange={handleChangeAño}
							value={video.año}
							required
						/>
					</label>
				</div>
				<div className='director'>
					<label htmlFor='director'>
						Director
						<input
							type='text'
							name='director'
							id='director'
							placeholder='Ej: Juan'
							onChange={handleChange}
							value={video.director}
							required
						/>
					</label>
				</div>
				<div className='reseña'>
					<label htmlFor='reseña'>
						Reseña
						<textarea
							type='text'
							name='reseña'
							id='reseña'
							placeholder='Ej: La cucaracha es una pelicula de terror'
							onChange={handleChange}
							value={video.reseña}
							required
						/>
					</label>
				</div>
				<div className='src'>
					<label htmlFor='src'>
						Url del trailer
						<input
							type='text'
							name='src'
							id='src'
							placeholder='Ej: https://www.youtube.com/embed/dQw4w9WgXcQ'
							onChange={handleChange}
							value={video.src}
							required
						/>
					</label>
				</div>
				<div className='portada'>
					<label htmlFor='portada'>
						Url de la portada
						<input
							type='text'
							name='portada'
							id='portada'
							placeholder='Ej: https://i.imgur.com/pLbxazs.jpg'
							onChange={handleChange}
							value={video.portada}
							required
						/>
					</label>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default index;
