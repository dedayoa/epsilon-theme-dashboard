import './steps.scss';
import Vue from 'vue';

declare let EpsilonOnboarding: any, wp: any;

/**
 * Onboarding step
 * @type {ExtendedVue<VueConstructor, any, any, any, Record<never, any>>}
 */
export const onboardingStep: any = Vue.extend( {
  /**
   * Template name
   */
  name: 'onboarding-step',
  /**
   * Accepted props
   */
  props: [ 'info', 'index' ],
  /**
   * Model
   * @returns {{}}
   */
  data: function() {
    return {};
  },
  /**
   * Page template
   */
  template: `
    <div class="onboarding-step" :data-index="index">
      <h2>
      {{ info.title }}
      </h2>
      <p>
      {{ info.contents }}
      </p>
      
      <div class="epsilon-buttons">
        <template v-for="button in info.buttons">
          <a href="#" @click="changeStep($event, button.action, index)" class="button button-primary button-hero" v-html="button.label"></a>
        </template>
      </div>
    </div>
  `,
  /**
   * Methods
   */
  methods: {
    /**
     * Change the step currently viewed
     *
     * @param {Event} e
     * @param {string} action
     * @param {number} index
     */
    changeStep: function( e: Event, action: string, index: number ) {
      e.preventDefault();
      this.$root.$emit( 'change-step', { action: action, from: index } );
    }
  },
} );
Vue.component( 'onboarding-step', onboardingStep );
