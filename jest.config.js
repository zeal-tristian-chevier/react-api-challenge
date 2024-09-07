module.exports = {
    transform: {
        "^.+\\.[tj]sx?$": "babel-jest",
    },
    // Add this if you're using ES modules
    extensionsToTreatAsEsm: [".ts", ".tsx"],
};
