import React, { useEffect } from "react";
import {
	setUserLoginDetails,
	setSignOutState,
} from "../features/users/userSlice";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const Header = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userName = useSelector((state) => state.user.name);
	// const userEmail = useSelector((state) => state.user.email);
	const userPhoto = useSelector((state) => state.user.photo);

	const setUser = (user) => {
		dispatch(
			setUserLoginDetails({
				name: user.displayName,
				email: user.email,
				photo: user.photoURL,
			})
		);
	};

	const handleAuth = () => {
		if (!userName) {
			signInWithPopup(auth, provider)
				.then((result) => {
					setUser(result.user);
					console.log(result);
				})
				.catch((error) => alert(error.message));
		} else {
			signOut(auth)
				.then(() => {
					dispatch(setSignOutState());
					navigate("/");
				})
				.catch((error) => alert(error.message));
		}
	};

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				setUser(user);
				navigate(`/home`);
				// ...
			} else {
				// User is signed out
				// ...
			}
		});
	}, [userName]);

	return (
		<Nav>
			<Logo>
				<img src="/images/logo.svg" alt="Disney+" />
			</Logo>
			{!userName ? (
				<Login onClick={handleAuth}>Login</Login>
			) : (
				<>
					<NavMenu>
						<button>
							<img src="/images/home-icon.svg" alt="HOME" />
							<span>HOME</span>
						</button>
						<button>
							<img src="/images/search-icon.svg" alt="SEARCH" />
							<span>SEARCH</span>
						</button>
						<button>
							<img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
							<span>WATCHLIST</span>
						</button>
						<button>
							<img src="/images/original-icon.svg" alt="ORIGINALS" />
							<span>ORIGINALS</span>
						</button>
						<button>
							<img src="/images/movie-icon.svg" alt="MOVIES" />
							<span>MOVIES</span>
						</button>
						<button>
							<img src="/images/series-icon.svg" alt="SERIES" />
							<span>SERIES</span>
						</button>
					</NavMenu>
					<SignOut>
						<UserImg src={userPhoto} alt={userName} />
						<Dropdown>
							<span onClick={handleAuth}>Sign Out</span>
						</Dropdown>
					</SignOut>
				</>
			)}
		</Nav>
	);
};

const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 70px;
	background-color: #090b13;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 36px;
	letter-spacing: 1rem;
	z-index: 3;
`;

const Logo = styled.a`
	padding: 0;
	margin-top: 4px;
	max-height: 70px;
	font-size: 0;
	width: 80px;
	display: inline-block;
	img {
		display: block;
		width: 100%;
	}
`;

const NavMenu = styled.div`
	display: flex;
	align-items: center;
	flex-flow: row nowrap;
	justify-content: flex-end;
	padding: 0;
	position: relative;
	margin: 0 auto 0 1.7rem;

	button {
		display: flex;
		align-items: center;
		padding: 0 12px;
		background-color: transparent;
		border: 0;
		cursor: pointer;
		:focus {
			outline: none;
		}

		img {
			min-width: 20px;
			width: 20px;
			height: 20px;
			z-index: auto;
		}

		span {
			color: rgba(249, 249, 249);
			font-size: 0.9rem;
			line-height: 1;
			letter-spacing: 1.42px;
			position: relative;

			&::before {
				content: "";
				background-color: rgba(249, 249, 249);
				position: absolute;
				border-radius: 0px 0px 4px 4px;
				bottom: -6px;
				height: 2px;
				opacity: 0;
				left: 0;
				right: 0;
				transform-origin: left center;
				transform: scaleX(0);
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.4, 0.3);
				visibility: hidden;
				width: auto;
			}
		}

		&:hover {
			span::before {
				visibility: visible;
				transform: scaleX(1);
				opacity: 1 !important;
			}
		}
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

const Login = styled.a`
	background-color: rgba(0, 0, 0, 0.6);
	padding: 8px 16px;
	text-transform: uppercase;
	letter-spacing: 1.5px;
	border: 1px solid #f9f9f9;
	border-radius: 4px;
	transition: all 0.3s ease-out;

	&:hover {
		background-color: #f9f9f9;
		color: #000;
		border-color: transparent;
	}
`;

const UserImg = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 50%;
`;

const Dropdown = styled.div`
	position: absolute;
	top: 41px;
	right: -3px;
	background-color: rgb(19, 19, 19);
	border: 1px solid rgba(151, 151, 151, 0.34);
	border-radius: 4px;
	letter-spacing: 1.7px;
	font-size: 14px;
	cursor: pointer;
	width: 105px;
	opacity: 0;
	padding: 10px;
`;

const SignOut = styled.div`
	position: relative;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;

	&:hover {
		${Dropdown} {
			opacity: 1;
			transition-delay: 0.2s;
		}
	}
`;

export default Header;
