import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { selectNewDisney } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";
const NewDisney = () => {
	const movies = useSelector(selectNewDisney);
	console.log(movies);
	return (
		<Container>
			{movies && <h4>New to Disney+</h4>}
			<Content>
				{movies &&
					movies.map((movie, i) => (
						<Wrap key={i}>
							{movie.id}
							<Link to={`/detail/${movie.id}`}>
								<img src={movie.cardImg} alt={movie.title} />
							</Link>
						</Wrap>
					))}
			</Content>
		</Container>
	);
};

const Container = styled.div`
	padding: 0 0 26px;
`;

const Content = styled.div`
	display: grid;
	gap: 24px;
	grid-template-columns: repeat(4, minmax(0, 1fr));

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`;

const Wrap = styled.div`
	padding-top: 56.25%;
	border-radius: 10px;
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0 /73%) 0px 16px 10px -10px;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.4, 0.94);
	border: 3px solid rgba(249, 249, 249, 0.1);

	img {
		display: block;
		inset: 0px;
		height: 100%;
		position: absolute;
		opacity: 1;
		transition: all 250ms ease-in;
		width: 100%;
		z-index: 1;
		top: 0;
	}

	&:hover {
		box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
			rgb(0 0 0 /73%) 0px 16px 10px -10px;
		transform: scale(1.05);
		border-color: rgb(249, 249, 249);
	}
`;
export default NewDisney;
