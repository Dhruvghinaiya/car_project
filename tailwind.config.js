import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            width:{
                '76':'21rem',
                '100':'26rem'
            },
            height:{
                '22':'115px'
            },
            margin:{
                '0.5':'2.5px',
                'size':'2px',
                '97':'28rem',
                '70':'12rem'
            },
            fontFamily: {
                DMSans:['DM Sans']
            },
            
        },
    },

    plugins: [forms],
};
