const MINIAPPS = require("./miniapp");
const APP_ROUTES = require("./routes-list");
const miniappToBeBuild = process.env.APP_NAME;
const basePath = __dirname;
const subDir =
  process.env.NODE_ENV === "production"
    ? miniappToBeBuild
      ? MINIAPPS[miniappToBeBuild].subPath
      : "/mainsubPath"
    : "";

if (miniappToBeBuild && MINIAPPS[miniappToBeBuild]) {
  console.log("MINIPP NAME ---> ", process.env.APP_NAME);
  console.log("MINIPP Subpath ---> ", MINIAPPS[process.env.APP_NAME].subPath);
}
const getExportPaths = () =>
  APP_ROUTES.filter((appRoute) => {
    const filterFlag = MINIAPPS[miniappToBeBuild].patterns.filter(
      (appPattern) => appRoute.pattern.indexOf(appPattern) === 0
    );
    return filterFlag.length > 0;
  });
console.log("process.env.NODE_ENV", process.env.NODE_ENV);
process.env.SUB_DIR = subDir;

module.exports = {
  reactStrictMode: true,
  assetPrefix: subDir,
  async exportPathMap() {
    const paths = {};
    let dynamicSection = "";
    let exportRoutes = APP_ROUTES;
    if (miniappToBeBuild && MINIAPPS[miniappToBeBuild]) {
      console.log(
        `Building miniapp-${miniappToBeBuild} with subpath-${MINIAPPS[miniappToBeBuild].subPath}`
      );
      exportRoutes = getExportPaths();
    }
    exportRoutes.forEach((routes) => {
      paths[routes.pattern] = { page: routes.pattern };
    });
    return paths;
  },

  future: {
    webpack5: true,
  },
  webpack: (config, { isServer }) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};
