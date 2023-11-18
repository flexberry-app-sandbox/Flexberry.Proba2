import { Serializer as ГородаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proba2-города';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ГородаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
