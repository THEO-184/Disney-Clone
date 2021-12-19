import React from "react";
import styled from "styled-components";
const Login = (props) => {
	return (
		<Container>
			<Content>
				<CTA>
					<CTALogoOne src="/images/cta-logo-one.svg" alt="logoOne" />
					<SignUp>GET IT ALL DONE</SignUp>
					<Description>
						Get the premiere access to Raya and the latest Dragon for an
						additional free with a Disney+ subscription. As of 03/26/21,the
						price of Disney+ and the Disney bundle will increase by $1.
					</Description>
					<CTALogoTwo src="/images/cta-logo-two.png" alt="logoOne" />
				</CTA>
				<BgImage />
			</Content>
		</Container>
	);
};

const Container = styled.section`
	overflow: hidden;
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 100vh;
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 100vh;
	position: relative;
	margin-bottom: 10vw;
	flex-direction: column;
	padding: 80px 40px;
	height: 100%;
`;

const BgImage = styled.div`
	background-image: url("/images/login-background.jpg");
	height: 100%;
	background-size: cover;
	background-position: top;
	background-repeat: no-repeat;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: -1;
`;

const CTA = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 650px;
	width: 100%;
`;

const CTALogoOne = styled.img`
	width: 100%;
	max-width: 600px;
	min-height: 1px;
	/* display: block; */
	margin-bottom: 12px;
`;

const SignUp = styled.a`
	font-weight: bold;
	color: #f9f9f9;
	background-color: #0063ef;
	margin-bottom: 12px;
	width: 100%;
	letter-spacing: 1.5px;
	font-size: 18px;
	padding: 16.5px 0;
	border: 1px solid transparent;
	border-radius: 4px;

	&:hover {
		background-color: #0483ee;
	}
`;

const Description = styled.p`
	color: hsla(0, 0%, 95.3%, 1);
	font-size: 0.9rem;
	margin: 0 0 24px;
	line-height: 1.5em;
	letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
	width: 100%;
	max-width: 600px;
	min-height: 1px;
	vertical-align: bottom;
	display: inline-block;
	margin-bottom: 20px;
`;

export default Login;
