module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts}',
        './css/**/*.css'
    ],
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ]
}
