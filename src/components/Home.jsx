import React, { useState, useRef } from "react";
import { getDocs } from "firebase/firestore";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import { colRef } from "../firebase";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import db from "../firebase";

console.clear();
const Home = (props) => {
	let recommends = [];
	let newDisneys = [];
	let originals = [];
	let trending = [];
	const dispatch = useDispatch();
	let userName = useSelector((state) => state.user.name);

	// get movies from  firebase
	useEffect(() => {
		getDocs(colRef).then((snapshots) => {
			snapshots.docs.map((doc) => {
				console.log(recommends);
				switch (doc.data().type) {
					case "recommend":
						recommends = [...recommends, { id: doc.id, ...doc.data() }];
						break;
					case "new":
						newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
						break;
					case "original":
						originals = [...originals, { id: doc.id, ...doc.data() }];

						break;
					case "trending":
						trending = [...trending, { id: doc.id, ...doc.data() }];
						break;
					default:
						break;
				}
			});
			dispatch(
				setMovies({
					recommend: recommends,
					newDisney: newDisneys,
					original: originals,
					trending: trending,
				})
			);
		});
	}, [userName]);

	return (
		<Container>
			{<ImgSlider />}
			<Viewers />
			<Recommends />
			<NewDisney />
			<Originals />
			<Trending />
		</Container>
	);
};

const Container = styled.main`
	position: relative;
	top: 72px;
	min-height: calc(100vh - 250px);
	display: block;
	overflow-x: hidden;
	padding: 0 calc(3.5vw + 5px);

	&:after {
		position: absolute;
		content: "";
		background: url("/images/home-background.png") no-repeat center center/cover
			fixed;
		inset: 0px;
		opacity: 1;
		z-index: -1;
	}
`;

export default Home;
