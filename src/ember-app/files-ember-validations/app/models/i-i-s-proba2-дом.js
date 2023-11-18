import {
  defineNamespace,
  Model as ДомMixin
} from '../mixins/regenerated/models/i-i-s-proba2-дом';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДомMixin, {
});

defineNamespace(Model);

export default Model;
