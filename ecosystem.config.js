module.exports = {
    apps: [
        {
            name: 'ecosystem',
            script    : "npx",
            interpreter : "none",
            args: "serve -s build -p 3000",
        }
    ],
};




