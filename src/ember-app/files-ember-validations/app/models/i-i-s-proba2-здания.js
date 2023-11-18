import {
  defineNamespace,
  defineProjections,
  Model as ЗданияMixin
} from '../mixins/regenerated/models/i-i-s-proba2-здания';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗданияMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
