import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proba2-города-l');
  this.route('i-i-s-proba2-города-e',
  { path: 'i-i-s-proba2-города-e/:id' });
  this.route('i-i-s-proba2-города-e.new',
  { path: 'i-i-s-proba2-города-e/new' });
  this.route('i-i-s-proba2-здания-l');
  this.route('i-i-s-proba2-здания-e',
  { path: 'i-i-s-proba2-здания-e/:id' });
  this.route('i-i-s-proba2-здания-e.new',
  { path: 'i-i-s-proba2-здания-e/new' });
});

export default Router;
