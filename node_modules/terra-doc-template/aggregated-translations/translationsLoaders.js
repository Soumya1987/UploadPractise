const loadArTranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('./ar.js');
    callback.call(scope, i18n);
  }, 'ar-translations');
};

const loadEnTranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('./en.js');
    callback.call(scope, i18n);
  }, 'en-translations');
};

const loadEnUSTranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('./en-US.js');
    callback.call(scope, i18n);
  }, 'en-US-translations');
};

const loadEnGBTranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('./en-GB.js');
    callback.call(scope, i18n);
  }, 'en-GB-translations');
};

const loadEsTranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('./es.js');
    callback.call(scope, i18n);
  }, 'es-translations');
};

const loadEsUSTranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('./es-US.js');
    callback.call(scope, i18n);
  }, 'es-US-translations');
};

const loadEsESTranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('./es-ES.js');
    callback.call(scope, i18n);
  }, 'es-ES-translations');
};

const loadDeTranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('./de.js');
    callback.call(scope, i18n);
  }, 'de-translations');
};

const loadFiFITranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('./fi-FI.js');
    callback.call(scope, i18n);
  }, 'fi-FI-translations');
};

const loadFrTranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('./fr.js');
    callback.call(scope, i18n);
  }, 'fr-translations');
};

const loadFrFRTranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('./fr-FR.js');
    callback.call(scope, i18n);
  }, 'fr-FR-translations');
};

const loadNlTranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('./nl.js');
    callback.call(scope, i18n);
  }, 'nl-translations');
};

const loadNlBETranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('./nl-BE.js');
    callback.call(scope, i18n);
  }, 'nl-BE-translations');
};

const loadPtTranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('./pt.js');
    callback.call(scope, i18n);
  }, 'pt-translations');
};

const loadPtBRTranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('./pt-BR.js');
    callback.call(scope, i18n);
  }, 'pt-BR-translations');
};

const loadSvTranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('./sv.js');
    callback.call(scope, i18n);
  }, 'sv-translations');
};

const loadSvSETranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('./sv-SE.js');
    callback.call(scope, i18n);
  }, 'sv-SE-translations');
};

const translationsLoaders = {
  'ar': loadArTranslations,
  'en': loadEnTranslations,
  'en-US': loadEnUSTranslations,
  'en-GB': loadEnGBTranslations,
  'es': loadEsTranslations,
  'es-US': loadEsUSTranslations,
  'es-ES': loadEsESTranslations,
  'de': loadDeTranslations,
  'fi-FI': loadFiFITranslations,
  'fr': loadFrTranslations,
  'fr-FR': loadFrFRTranslations,
  'nl': loadNlTranslations,
  'nl-BE': loadNlBETranslations,
  'pt': loadPtTranslations,
  'pt-BR': loadPtBRTranslations,
  'sv': loadSvTranslations,
  'sv-SE': loadSvSETranslations
};

module.exports = translationsLoaders;