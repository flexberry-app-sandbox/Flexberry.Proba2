import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  подъезд: DS.attr('number'),
  здания: DS.belongsTo('i-i-s-proba2-здания', { inverse: null, async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-proba2-города.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  подъезд: {
    descriptionKey: 'models.i-i-s-proba2-города.validations.подъезд.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  здания: {
    descriptionKey: 'models.i-i-s-proba2-города.validations.здания.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГородаE', 'i-i-s-proba2-города', {
    наименование: attr('Наименование', { index: 0 }),
    здания: belongsTo('i-i-s-proba2-здания', 'Здания', {
      номер: attr('Номер', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номер' })
  });

  modelClass.defineProjection('ГородаL', 'i-i-s-proba2-города', {
    наименование: attr('Наименование', { index: 0 }),
    здания: belongsTo('i-i-s-proba2-здания', 'Номер', {
      номер: attr('Номер', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
