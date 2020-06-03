
const compileString = ({ template, info }) => {
  try {
    const templateFn = new Function(...Object.keys(info), `return \`${template}\`;`);
    return templateFn(...Object.values(info));
  } catch (err) {
    return null;
  }
};

module.exports = {
  compile: compileString,
};
