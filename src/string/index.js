
const compileString = ({ template, info }) => {
  try {
    const templateFn = new Function(...Object.keys(info), `return \`${template}\`;`); // eslint-disable-line no-new-func
    return templateFn(...Object.values(info));
  } catch (err) {
    return null;
  }
};

const toSymbolKey = (rawValue) => {
  const value = (rawValue && rawValue.toString()) ? rawValue.toString() : 'NIL';
  return value.toUpperCase().replace(/[^a-zA-Z0-9]*/, '');
};

module.exports = {
  compile: compileString,
  toSymbolKey,
};
