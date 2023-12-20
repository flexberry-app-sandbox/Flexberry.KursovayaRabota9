import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKursovayaRabotaВходВНомерLForm from './forms/i-i-s-kursovaya-rabota-вход-в-номер-l';
import IISKursovayaRabotaГостьLForm from './forms/i-i-s-kursovaya-rabota-гость-l';
import IISKursovayaRabotaДолжностиLForm from './forms/i-i-s-kursovaya-rabota-должности-l';
import IISKursovayaRabotaКартаLForm from './forms/i-i-s-kursovaya-rabota-карта-l';
import IISKursovayaRabotaКомнатаLForm from './forms/i-i-s-kursovaya-rabota-комната-l';
import IISKursovayaRabotaРегистрацКлючаLForm from './forms/i-i-s-kursovaya-rabota-регистрац-ключа-l';
import IISKursovayaRabotaСотрудникLForm from './forms/i-i-s-kursovaya-rabota-сотрудник-l';
import IISKursovayaRabotaСчитывательLForm from './forms/i-i-s-kursovaya-rabota-считыватель-l';
import IISKursovayaRabotaВходВНомерEForm from './forms/i-i-s-kursovaya-rabota-вход-в-номер-e';
import IISKursovayaRabotaГостьEForm from './forms/i-i-s-kursovaya-rabota-гость-e';
import IISKursovayaRabotaДолжностиEForm from './forms/i-i-s-kursovaya-rabota-должности-e';
import IISKursovayaRabotaКартаEForm from './forms/i-i-s-kursovaya-rabota-карта-e';
import IISKursovayaRabotaКомнатаEForm from './forms/i-i-s-kursovaya-rabota-комната-e';
import IISKursovayaRabotaРегистрацКлючаEForm from './forms/i-i-s-kursovaya-rabota-регистрац-ключа-e';
import IISKursovayaRabotaСотрудникEForm from './forms/i-i-s-kursovaya-rabota-сотрудник-e';
import IISKursovayaRabotaСчитывательEForm from './forms/i-i-s-kursovaya-rabota-считыватель-e';
import IISKursovayaRabotaВходВНомерModel from './models/i-i-s-kursovaya-rabota-вход-в-номер';
import IISKursovayaRabotaВходГостяModel from './models/i-i-s-kursovaya-rabota-вход-гостя';
import IISKursovayaRabotaГостьModel from './models/i-i-s-kursovaya-rabota-гость';
import IISKursovayaRabotaДолжностиModel from './models/i-i-s-kursovaya-rabota-должности';
import IISKursovayaRabotaКартаModel from './models/i-i-s-kursovaya-rabota-карта';
import IISKursovayaRabotaКомнатаModel from './models/i-i-s-kursovaya-rabota-комната';
import IISKursovayaRabotaРегистрацКлючаModel from './models/i-i-s-kursovaya-rabota-регистрац-ключа';
import IISKursovayaRabotaСотрудникModel from './models/i-i-s-kursovaya-rabota-сотрудник';
import IISKursovayaRabotaСчитывательModel from './models/i-i-s-kursovaya-rabota-считыватель';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya-rabota-вход-в-номер': IISKursovayaRabotaВходВНомерModel,
    'i-i-s-kursovaya-rabota-вход-гостя': IISKursovayaRabotaВходГостяModel,
    'i-i-s-kursovaya-rabota-гость': IISKursovayaRabotaГостьModel,
    'i-i-s-kursovaya-rabota-должности': IISKursovayaRabotaДолжностиModel,
    'i-i-s-kursovaya-rabota-карта': IISKursovayaRabotaКартаModel,
    'i-i-s-kursovaya-rabota-комната': IISKursovayaRabotaКомнатаModel,
    'i-i-s-kursovaya-rabota-регистрац-ключа': IISKursovayaRabotaРегистрацКлючаModel,
    'i-i-s-kursovaya-rabota-сотрудник': IISKursovayaRabotaСотрудникModel,
    'i-i-s-kursovaya-rabota-считыватель': IISKursovayaRabotaСчитывательModel
  },

  'application-name': 'Kursovaya rabota',

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
        'application-name': 'Kursovaya rabota',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya rabota',
          title: 'Kursovaya rabota'
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
        отель: {
          caption: 'Отель',
          title: 'Отель',
          'i-i-s-kursovaya-rabota-комната-l': {
            caption: 'Комнаты',
            title: ''
          },
          'i-i-s-kursovaya-rabota-карта-l': {
            caption: 'Карты',
            title: ''
          },
          'i-i-s-kursovaya-rabota-считыватель-l': {
            caption: 'Считыватели',
            title: ''
          },
          персонал: {
            caption: 'Персонал',
            title: 'Персонал',
            'i-i-s-kursovaya-rabota-сотрудник-l': {
              caption: 'Сотрудник',
              title: 'Сотрудник'
            },
            'i-i-s-kursovaya-rabota-должности-l': {
              caption: 'Должности',
              title: 'Должности'
            }
          },
          клиенты: {
            caption: 'Клиенты',
            title: 'Клиенты',
            'i-i-s-kursovaya-rabota-гость-l': {
              caption: 'Гости',
              title: 'Гость'
            }
          },
          документация: {
            caption: 'Документация',
            title: 'Документация',
            'i-i-s-kursovaya-rabota-регистрац-ключа-l': {
              caption: 'Регистрация смарт-ключа',
              title: 'Регистрац ключа'
            },
            'i-i-s-kursovaya-rabota-вход-в-номер-l': {
              caption: 'Вход в номер',
              title: 'Вход в номер'
            }
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
    'i-i-s-kursovaya-rabota-вход-в-номер-l': IISKursovayaRabotaВходВНомерLForm,
    'i-i-s-kursovaya-rabota-гость-l': IISKursovayaRabotaГостьLForm,
    'i-i-s-kursovaya-rabota-должности-l': IISKursovayaRabotaДолжностиLForm,
    'i-i-s-kursovaya-rabota-карта-l': IISKursovayaRabotaКартаLForm,
    'i-i-s-kursovaya-rabota-комната-l': IISKursovayaRabotaКомнатаLForm,
    'i-i-s-kursovaya-rabota-регистрац-ключа-l': IISKursovayaRabotaРегистрацКлючаLForm,
    'i-i-s-kursovaya-rabota-сотрудник-l': IISKursovayaRabotaСотрудникLForm,
    'i-i-s-kursovaya-rabota-считыватель-l': IISKursovayaRabotaСчитывательLForm,
    'i-i-s-kursovaya-rabota-вход-в-номер-e': IISKursovayaRabotaВходВНомерEForm,
    'i-i-s-kursovaya-rabota-гость-e': IISKursovayaRabotaГостьEForm,
    'i-i-s-kursovaya-rabota-должности-e': IISKursovayaRabotaДолжностиEForm,
    'i-i-s-kursovaya-rabota-карта-e': IISKursovayaRabotaКартаEForm,
    'i-i-s-kursovaya-rabota-комната-e': IISKursovayaRabotaКомнатаEForm,
    'i-i-s-kursovaya-rabota-регистрац-ключа-e': IISKursovayaRabotaРегистрацКлючаEForm,
    'i-i-s-kursovaya-rabota-сотрудник-e': IISKursovayaRabotaСотрудникEForm,
    'i-i-s-kursovaya-rabota-считыватель-e': IISKursovayaRabotaСчитывательEForm
  },

});

export default translations;
