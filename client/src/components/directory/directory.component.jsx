import React from "react";

import DIRECTORY_DATA from "./directory.data.js";

import MenuItem from "../menu-item/menu-item.component";

import { DirectoryMenuContainer } from "./directory.styles";

const Directory = () => (
	<DirectoryMenuContainer>
		{DIRECTORY_DATA.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</DirectoryMenuContainer>
);

export default Directory;
