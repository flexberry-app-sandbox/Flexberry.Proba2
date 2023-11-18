import { Serializer as ЗданияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proba2-здания';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗданияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
