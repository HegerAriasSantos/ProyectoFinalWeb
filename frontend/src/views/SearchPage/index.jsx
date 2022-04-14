import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import useFilter from './../../hook/useFilter';

function index() {
	const { search } = useParams();
	const [results, setResults] = useState([]);
	useEffect(() => {
    axios.get(`http://localhost:4000/trailer`).then((data)=>{
      setResults(useFilter(data.data.body, search));
    })
  }, [search]);
	return (
		<div>
			<h1>search: {search}</h1>
      <ul>
        {results.map((result) => (
          <li key={result._id}>
            <h2>{result.titulo}</h2>
            <p>{result.reseña}</p>
          </li>
        ))}
      </ul>

		</div>
	);
}

export default index;
