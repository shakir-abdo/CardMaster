module.exports = {
  apps: [
    {
      name: "card master",
      exec_mode: "cluster",
      instances: "max",
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start"
    }
  ]
};
