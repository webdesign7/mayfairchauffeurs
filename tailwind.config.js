tailwind.config = {
    theme: {
        container: {
            center: true,  
            screens: {
                DEFAULT: '1240px',  
            },
        },
        extend: {
            colors: {
                'red-800': '#960001',
                'red-900': '#760203',
                'red-950': '#490000',
                'grey-50': '#EBEBEB',
                'grey-100': '#B9B9B9',
                'grey-200': '#CECECE',
                'grey-250': '#393939',
                'grey-300': '#F2F2F2',
                'grey-400': '#C5C5C5FF',
                'grey-500': '#848484',
                'grey-600': '#2A2A2A',
            },
            backgroundImage: {
                'mp-hero': "url('./assets/images/hero.png')",
                'accordion2-bg': "url('./assets/images/accordion/full-bg1.jpg')",
                'accordion1-bg': "url('./assets/images/accordion/full-bg2.jpg')",
                'accordion3-bg': "url('./assets/images/accordion/full-bg3.png')",
                'gradient-grey': 'linear-gradient(90deg, #2A2A2A 0%, #FFFFFF 100%)',
                'footer-bg-gradient': 'linear-gradient(356deg, #030303 25%, rgba(3, 3, 3, 0.00) 110%);',
                'linear-65': 'linear-gradient(90deg, rgb(0 0 0 / 70%) 0%, transparent 210%)',
            },
            maxWidth: {
                'container': '1160px', 
                'logo': '168px', 
            },
            fontFamily: {
                'sans': ['Gotham', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
                'gotham': ['Gotham', 'sans-serif'],
            },
        },
    }
}
