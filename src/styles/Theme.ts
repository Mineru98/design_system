export interface Palette {
	hover: string;
	main: string;
	active: string;
	contrastText: string;
	disable: string;
}

export interface Theme {
	bgColor: string;
	fontColor: string;
	palette: {
		primary: Palette;
		secondary: Palette;
		tertiary: Palette;
	};
	typography: {
		fontFamily: string;
		fontSize: number | string;
		fontWeightLight: number;
		fontWeightRegular: number;
		fontWeightMedium: number;
	};
}

/**
 * @light theme
 */

export const light: Theme = {
	bgColor: "#fff",
	fontColor: "#000",
	palette: {
		primary: {
			hover: "rgba(144, 130, 119, 1)",
			main: "#776b61",
			active: "rgba(144, 130, 119, 0.56)",
			contrastText: "#ffffff",
			disable: "#ada59e",
		},
		secondary: {
			hover: "#f00",
			main: "#0f0",
			active: "#00f",
			contrastText: "#fff",
			disable: "gray",
		},
		tertiary: {
			hover: "#f00",
			main: "#0f0",
			active: "#00f",
			contrastText: "#fff",
			disable: "gray",
		},
	},
	typography: {
		fontFamily: "'Work Sans', sans-serif",
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 700,
	},
};

/**
 * @dark theme
 */

export const dark: Theme = {
	bgColor: "#000",
	fontColor: "#eee",
	palette: {
		primary: {
			hover: "#f00",
			main: "#0f0",
			active: "#00f",
			contrastText: "#fff",
			disable: "gray",
		},
		secondary: {
			hover: "#f00",
			main: "#0f0",
			active: "#00f",
			contrastText: "#fff",
			disable: "gray",
		},
		tertiary: {
			hover: "#f00",
			main: "#0f0",
			active: "#00f",
			contrastText: "#fff",
			disable: "gray",
		},
	},
	typography: {
		fontFamily: "'Work Sans', sans-serif",
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 700,
	},
};

interface ThemeGroup {
	light: Theme;
	dark: Theme;
	spacing: (value: number) => string;
}

const spacing = (value: number) => {
	if (0 <= value && value <= 4) {
		return value * 4 + "px";
	} else {
		return "0px";
	}
};

const mode: ThemeGroup = {
	light,
	dark,
	spacing,
};

export default mode;
