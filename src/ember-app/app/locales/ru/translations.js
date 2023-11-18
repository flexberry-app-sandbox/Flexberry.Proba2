import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProba2ГородаLForm from './forms/i-i-s-proba2-города-l';
import IISProba2ЗданияLForm from './forms/i-i-s-proba2-здания-l';
import IISProba2ГородаEForm from './forms/i-i-s-proba2-города-e';
import IISProba2ЗданияEForm from './forms/i-i-s-proba2-здания-e';
import IISProba2ГородаModel from './models/i-i-s-proba2-города';
import IISProba2ДомModel from './models/i-i-s-proba2-дом';
import IISProba2ЗданияModel from './models/i-i-s-proba2-здания';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba2-города': IISProba2ГородаModel,
    'i-i-s-proba2-дом': IISProba2ДомModel,
    'i-i-s-proba2-здания': IISProba2ЗданияModel
  },

  'application-name': '',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proba2-города-l': IISProba2ГородаLForm,
    'i-i-s-proba2-здания-l': IISProba2ЗданияLForm,
    'i-i-s-proba2-города-e': IISProba2ГородаEForm,
    'i-i-s-proba2-здания-e': IISProba2ЗданияEForm
  },

});

export default translations;
