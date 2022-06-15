module.exports = {
    content: ["./pages/**/*.js", "./components/**/*.js"],
    theme: {
        fontFamily: {
            sans: "Amiri",
            serif: "Alison",
        },
        extend: {
            backgroundImage: {
                hero: "radial-gradient(100% 190.97% at 63.36% 0%,#2C2C2C 0%,#030303 88.02%)",
                paper: "linear-gradient(90deg, #202020 0%, #141414 100%)",
            },
        },
    },
    plugins: [],
};
