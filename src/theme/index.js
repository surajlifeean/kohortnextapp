import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#4264FB',
			light: '#C7D3FF',
		},
		accent: {
			main: '#65EDBF',
			light: '#9AEFD9',
			dark: '#0B6144',
			cardText: '#0B6144',
		},
		pink: {
			main: '#FEC8FF',
		},
		brown: {
			main: '#A66B4F',
		},
		tertiary: {
			main: '#151B24',
			contrastText: '#fff',
		},
		darkLight: {
			main: '#333333',
			contrastText: '#fff',
		},
		dark: {
			main: '#222222',
			contrastText: '#fff',
		},
		grey: {
			main: '#AAAAAA',
			contrastText: '#fff',
		},
		light: {
			main: '#fff',
			contrastText: '#4264FB',
		},
		text: {
			primary: '#4264FB',
			tertiary: '#151B24',
			darkLight: '#333333',
			dark: '#222222',
			secondary: '#565656',
		},
		background: {
			blue: '#4264FB',
			blueLight: '#F0F3FF',
			greenLight: '#E2FAF4',
			dark: '#1E2229',
			gery: '#F4F4F4',
			geryDark: '#ECECEC',
		},
	},
	typography: {
		h3: {
			fontSize: '55px',
			fontFamily: 'Gosha Sans',
			lineHeight: '120%',
		},
		h4: {
			fontFamily: 'Gosha Sans',
			fontSize: '40px',
			fontWeight: 'bold',
			lineHeight: '125%',
		},
		h5: {
			fontSize: '30px',
			lineHeight: '150%',
		},
		h6: {
			fontSize: '20px',
			lineHeight: '150%',
		},
		subtitle1: {
			fontSize: '0.875rem',
		},
		subtitle2: {
			fontSize: '10px',
			lineHeight: '150%',
		},
		body2: {
			fontSize: '13px',
			lineHeight: '150%',
			fontWeight: 'normal',
		},
		caption: {
			lineHeight: '150%',
		},
		fontFamily: '"Silka Regular"',
	},
	shape: {
		borderRadius: 0,
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'capitalize',
					fontFamily: 'Gosha Sans',
					'& div': {
						fontFamily: 'Gosha Sans',
					},
				},
				sizeLarge: {
					padding: '12px 16px',
				},
				containedPrimary: {
					backgroundColor: '#4264FB !important',
				},
				containedAccent: {
					backgroundColor: '#65EDBF !important',
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					background: 'white',
					'& .MuiOutlinedInput-root': {
						'& .MuiOutlinedInput-notchedOutline': {
							borderWidth: '3px !important',
						},
					},
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				colorPrimary: {
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: '#9BADFD ',
					},
				},
				colorAccent: {
					color: '#0B6144',
					'&:hover .MuiOutlinedInput-notchedOutline': {
						borderColor: '#0B6144 !important',
					},
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: '#65EDBF !important',
					},
				},
			},
		},
	},
});

export default theme;
