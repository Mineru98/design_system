export interface Palette {
	hover: string;
	main: string;
	active: string;
	transparent: string;
	contrastText: string;
	disable: string;
	disableText: string;
}

export interface Typography {
	fontFamily: string;
	fontColor: string;
	fontSize: number | string;
	fontWeightLight: number;
	fontWeightRegular: number;
	fontWeightMedium: number;
}

export interface Theme {
	bgColor: string;
	palette: {
		primary: Palette;
		secondary: Palette;
		tertiary: Palette;
	};
	typography: Typography;
}

/**
 * @light theme
 */

export const light: Theme = {
	bgColor: "#fff",
	palette: {
		primary: {
			main: "rgba(23, 128, 195, 1)",
			hover: "rgba(23, 128, 195, 0.78)",
			active: "rgba(23, 128, 195, 0.56)",
			transparent: "rgb(75, 151, 199)",
			contrastText: "#ffffff",
			disable: "rgb(167, 167, 167)",
			disableText: "white",
		},
		secondary: {
			main: "rgba(243, 156, 15, 1)",
			hover: "rgba(243, 156, 15, 0.78)",
			active: "rgba(243, 156, 15, 0.56)",
			transparent: "rgb(241, 197, 126)",
			contrastText: "#fff",
			disable: "rgb(167, 167, 167)",
			disableText: "white",
		},
		tertiary: {
			main: "rgba(80, 183, 43, 1)",
			hover: "rgba(80, 183, 43, 0.78)",
			active: "rgba(80, 183, 43, 0.56)",
			transparent: "rgb(144, 213, 117)",
			contrastText: "#fff",
			disable: "rgb(167, 167, 167)",
			disableText: "white",
		},
	},
	typography: {
		fontFamily: "'Work Sans', sans-serif",
		fontColor: "black",
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
	palette: {
		primary: {
			main: "rgba(23, 128, 195, 1)",
			hover: "rgba(23, 128, 195, 0.78)",
			active: "rgba(23, 128, 195, 0.56)",
			transparent: "rgb(105, 166, 205)",
			contrastText: "#ffffff",
			disable: "rgb(167, 167, 167)",
			disableText: "white",
		},
		secondary: {
			main: "rgba(243, 156, 15, 1)",
			hover: "rgba(243, 156, 15, 0.78)",
			active: "rgba(243, 156, 15, 0.56)",
			transparent: "rgb(241, 197, 126)",
			contrastText: "#fff",
			disable: "rgb(167, 167, 167)",
			disableText: "white",
		},
		tertiary: {
			main: "rgba(80, 183, 43, 1)",
			hover: "rgba(80, 183, 43, 0.78)",
			active: "rgba(80, 183, 43, 0.56)",
			transparent: "rgb(144, 213, 117)",
			contrastText: "#fff",
			disable: "rgb(167, 167, 167)",
			disableText: "white",
		},
	},
	typography: {
		fontFamily: "'Work Sans', sans-serif",
		fontColor: "#eee",
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
