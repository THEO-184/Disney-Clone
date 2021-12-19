import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
const Home = (props) => {
	return <Container>{<ImgSlider />}</Container>;
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
