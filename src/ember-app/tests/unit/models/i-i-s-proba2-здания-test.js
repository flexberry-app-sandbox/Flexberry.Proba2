import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba2-здания', 'Unit | Model | i-i-s-proba2-здания', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proba2-города',
    'model:i-i-s-proba2-здания',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
