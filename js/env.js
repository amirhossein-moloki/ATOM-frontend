(function (window) {
  const DEFAULT_BASE_URL = 'https://atom-game.ir/backend';
  const existingConfig = window.APP_CONFIG || {};
  const configuredBase = existingConfig.API_BASE_URL || DEFAULT_BASE_URL;
  const normalizedBase = configuredBase.replace(/\/+$/, '');

  const apiPrefix = existingConfig.API_API_PREFIX || `${normalizedBase}/api`;
  const normalizedApiPrefix = apiPrefix.replace(/\/+$/, '');

  window.APP_CONFIG = Object.assign({}, existingConfig, {
    API_BASE_URL: normalizedBase,
    API_API_PREFIX: normalizedApiPrefix,
  });
})(window);
