const normalizeEnvVar =
  (env) => {
    if (env == null || String(env) !== "[object Object]") {
      throw new TypeError(`Expected object, got ${env}.`);
    }

    const result = {};

    for (let k in env) {
      if (env.hasOwnProperty(k)) {
        result[k] = normalizeValue(env[k]);
      }
    }

    return result;
  };

module.exports = normalizeEnvVar;

const normalizeValue =
  (value) => {
    if (value === "true" || value === "false") {
      return value === "true";
    }

    let valueN = Number(value);
    if (valueN === valueN) { // eslint-disable-line no-self-compare
      return valueN;
    }

    try {
      return JSON.parse(value);
    } catch (err) {
      // Not a json
    }

    return value;
  };
