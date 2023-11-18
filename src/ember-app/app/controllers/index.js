import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proba2.caption'),
          title: i18n.t('forms.application.sitemap.proba2.title'),
          children: [{
            link: 'i-i-s-proba2-города-l',
            caption: i18n.t('forms.application.sitemap.proba2.i-i-s-proba2-города-l.caption'),
            title: i18n.t('forms.application.sitemap.proba2.i-i-s-proba2-города-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-proba2-здания-l',
            caption: i18n.t('forms.application.sitemap.proba2.i-i-s-proba2-здания-l.caption'),
            title: i18n.t('forms.application.sitemap.proba2.i-i-s-proba2-здания-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})