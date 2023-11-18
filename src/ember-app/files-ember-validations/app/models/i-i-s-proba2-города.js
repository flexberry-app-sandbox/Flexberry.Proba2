import {
  defineNamespace,
  defineProjections,
  Model as ГородаMixin
} from '../mixins/regenerated/models/i-i-s-proba2-города';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГородаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
