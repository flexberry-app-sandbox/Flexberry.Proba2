import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProba2ГородаLForm from './forms/i-i-s-proba2-города-l';
import IISProba2ЗданияLForm from './forms/i-i-s-proba2-здания-l';
import IISProba2ГородаEForm from './forms/i-i-s-proba2-города-e';
import IISProba2ЗданияEForm from './forms/i-i-s-proba2-здания-e';
import IISProba2ГородаModel from './models/i-i-s-proba2-города';
import IISProba2ЗданияModel from './models/i-i-s-proba2-здания';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba2-города': IISProba2ГородаModel,
    'i-i-s-proba2-здания': IISProba2ЗданияModel
  },

  'application-name': 'Proba2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proba2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba2',
          title: 'Proba2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        proba2: {
          caption: 'Proba2',
          title: 'Proba2',
          'i-i-s-proba2-города-l': {
            caption: 'Города',
            title: ''
          },
          'i-i-s-proba2-здания-l': {
            caption: 'Здания',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proba2-города-l': IISProba2ГородаLForm,
    'i-i-s-proba2-здания-l': IISProba2ЗданияLForm,
    'i-i-s-proba2-города-e': IISProba2ГородаEForm,
    'i-i-s-proba2-здания-e': IISProba2ЗданияEForm
  },

});

export default translations;
