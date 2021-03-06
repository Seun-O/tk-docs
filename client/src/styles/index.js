import { css, Global } from '@emotion/core';

export const main_menu = css`
	display: flex;
	color: #fff;
	justify-content: space-between;
	align-items: center;
	background-color: #bb1333;
	a {
		padding: 0 1rem;
		text-decoration: none;
		color: #fff;
		font-size: 1.6rem;
	}
`;
export const side_menu = css`
	position: relative;
	width: 30%;
	background-color: #14121f;
	color: #fff;
	min-height: 100%;
	padding: 0 0 0 1rem;
	a {
		color: #fff;
	}
	.module-list {
		h4 {
			padding: 0 1.5rem;
		}
		.lesson-list {
			p {
				padding: 12px 45px;
			}
		}
	}
`;

export const main = css`
	.content {
		display: flex;
	}
	.content-body {
		width: 100%;
		padding: 0 4.5rem;
		text-align: justify;

		.home-grid {
			margin: 2.5rem 0;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 1rem;
			.home-track {
				display: block;
				padding: 4rem 0;
				text-align: center;
				color: #fff;
				background-color: #14121f;
				border-radius: 5px;
				text-align: center;
				height: 100%;
			}
			.track-0 {
				background-color: #14121f;
			}
			.track-1 {
				background-color: #0c3d78;
			}
			.track-2 {
				background-color: #3bb5e6;
			}
			.track-3 {
				background-color: #2f2c4b;
			}
			.track-4 {
				background-color: #1a61af;
			}
			.track-5 {
				background-color: #d84a5a;
			}
		}
	}
`;

export const dash_container = css`
	width: 100%;
	padding: 0 4rem;
	a {
		display: inline-block;
	}
	.dash-header {
		margin-bottom: 1rem;

		button {
			margin: 1rem 0 0 0;
		}
	}
`;
export const dash_items = css`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1rem;
	p {
		text-align: justify;
	}
	width: 100%;
`;
export const dash_item = css`
	width: 100%;
	/* border-bottom: 2px solid #3ab5e5; */
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/* align-content: space-between; */
	a {
		color: #3ab5e5;
	}
	a:hover {
		color: #0c3c78;
	}
	p {
		padding: 10px 0;
	}
	.objectives {
		padding: 0 0 0 2.5rem;
	}
`;
export const page_header = css`
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.1);
	padding: 1rem;
	.tag {
		font-weight: bold;
		font-size: 1.3rem;
	}
	.objectives {
		padding: 0 0 0 2.5rem;
	}
`;
export const pro_tip = css`
	background-color: #fff3cd;
	border-radius: 5px;
	border: 1px #ffeeba solid;
	box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.1);
	padding: 1rem;
	margin: 1rem 0 0 0;
`;
export const home_sprint = css`
	h3 {
		padding-top: 1rem;
	}
	h4 {
		padding: 1rem 0;
		display: inline-block;
	}
	.home-modules {
		padding: 1rem 0;
	}
`;

export const modal_content = css`
	display: flex;
	flex-direction: column;
	background-color: #fff;
	/* max-width: 900px; */
	height: auto;
	padding: 30px 40px;
	border-radius: 5px;
	text-align: center;

	h3 {
		margin-bottom: 1rem;
	}
	label {
		text-align: left;
		padding-bottom: 2px;
		font-size: 1.5rem;
		font-weight: 200;
		color: #333;
		opacity: 0.6;
	}
	input {
		font-size: 1.5rem;
		padding: 5px 0 0 10px;
		border: none;
		border-radius: 3px;
		border-bottom: 2px solid #bb1333;
		margin-bottom: 1rem;
		background-color: #f0f4f7;
		outline: none;
	}
	input:disabled {
		border: none;
		color: lightgray;
		background: none;
	}
	textarea {
		width: 600px;
		height: 144px;
		font-size: 1rem;
		padding: 5px 0 0 10px;
		margin-bottom: 1rem;
		border: none;
		border-radius: 3px;
		border-bottom: 2px solid #bb1333;
		background-color: #f0f4f7;
		max-width: 1080px;
		outline: none;
	}

	.btn-container {
		display: flex;
		padding: 15px 0;
	}
	.area-lesson {
		height: 100px;
	}
`;

export const markdown = css`
	font-size: 1.5rem;
	li {
		list-style-type: disc;
	}
	/* padding: 0 0 0 2.5rem; */
`;
