// Dynamically export all components in the subfolder
const requireComponent = require.context('./', false, /^(?!.*index).*\.js$/);

const moduleExports = {};

requireComponent.keys().forEach((fileName) => {
  const componentName = path.basename(fileName, path.extname(fileName));
  moduleExports[componentName] = requireComponent(fileName).default;
});

export default moduleExports;
