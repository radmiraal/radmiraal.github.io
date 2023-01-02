module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,html}',
        './css/**/*.css'
    ],
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ]
}
