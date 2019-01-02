'use strict';

var loadArTranslation = function loadArTranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('ar.js');
    callback.call(scope, i18n);
  }, 'ar-translations');
};

var loadEnTranslation = function loadEnTranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('en.js');
    callback.call(scope, i18n);
  }, 'en-translations');
};

var loadEnGBTranslation = function loadEnGBTranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('en-GB.js');
    callback.call(scope, i18n);
  }, 'en-GB-translations');
};

var loadEnUSTranslation = function loadEnUSTranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('en-US.js');
    callback.call(scope, i18n);
  }, 'en-US-translations');
};

var loadDeTranslation = function loadDeTranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('de.js');
    callback.call(scope, i18n);
  }, 'de-translations');
};

var loadPtTranslation = function loadPtTranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('pt.js');
    callback.call(scope, i18n);
  }, 'pt-translations');
};

var loadPtBRTranslation = function loadPtBRTranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('pt-BR.js');
    callback.call(scope, i18n);
  }, 'pt-BR-translations');
};

var loadFrTranslation = function loadFrTranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('fr.js');
    callback.call(scope, i18n);
  }, 'fr-translations');
};

var loadFrFRTranslation = function loadFrFRTranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('fr-FR.js');
    callback.call(scope, i18n);
  }, 'fr-FR-translations');
};

var loadEsTranslation = function loadEsTranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('es.js');
    callback.call(scope, i18n);
  }, 'es-translations');
};

var loadEsUSTranslation = function loadEsUSTranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('es-US.js');
    callback.call(scope, i18n);
  }, 'es-US-translations');
};

var loadEsESTranslation = function loadEsESTranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('es-ES.js');
    callback.call(scope, i18n);
  }, 'es-ES-translations');
};

var loadFiFITranslation = function loadFiFITranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('fi-FI.js');
    callback.call(scope, i18n);
  }, 'fi-FI-translations');
};

var loadNlTranslation = function loadNlTranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('nl.js');
    callback.call(scope, i18n);
  }, 'nl-translations');
};

var loadNlBETranslation = function loadNlBETranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('nl-BE.js');
    callback.call(scope, i18n);
  }, 'nl-BE-translations');
};

var loadSvTranslation = function loadSvTranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('sv.js');
    callback.call(scope, i18n);
  }, 'sv-translations');
};

var loadSvSETranslation = function loadSvSETranslation(callback, scope) {
  require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('sv-SE.js');
    callback.call(scope, i18n);
  }, 'sv-SE-translations');
};

var translationLoaders = {
  ar: loadArTranslation,
  en: loadEnTranslation,
  'en-GB': loadEnGBTranslation,
  'en-US': loadEnUSTranslation,
  de: loadDeTranslation,
  pt: loadPtTranslation,
  'pt-BR': loadPtBRTranslation,
  fr: loadFrTranslation,
  'fr-FR': loadFrFRTranslation,
  es: loadEsTranslation,
  'es-US': loadEsUSTranslation,
  'es-ES': loadEsESTranslation,
  'fi-FI': loadFiFITranslation,
  nl: loadNlTranslation,
  'nl-BE': loadNlBETranslation,
  sv: loadSvTranslation,
  'sv-SE': loadSvSETranslation
};

module.exports = translationLoaders;