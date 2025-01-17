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
                '76':'17rem'
            },
            margin:{
                '0.5':'2.5px',
                'size':'2px'
            },
            fontFamily: {
                DMSans:['DmSans']
            },
            
        },
    },

    plugins: [forms],
};
