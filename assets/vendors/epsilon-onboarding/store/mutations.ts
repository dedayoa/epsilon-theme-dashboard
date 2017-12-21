import { EpsilonFetchTranslator } from '../../epsilon-fetch-translator';

declare let ajaxurl: any;
/**
 *
 * State mutations
 *
 */
export const mutations = {
  /**
   * Sets an installation flag for a plugin
   * @param state
   * @param slug
   */
  setPluginInstalled( state: any, slug: string ) {
    console.log( slug );
    state.plugins[ slug ].installed = true;
  },
  /**
   * Sets imported flag
   * @param state
   * @param {boolean} change
   */
  setImportedFlag( state: any, change: boolean ) {
    let temp: any = {};
    temp[ state.theme[ 'theme-slug' ] + '_content_imported' ] = true;
    state.importedDemo = true;
    if ( change ) {
      let fetchObj: EpsilonFetchTranslator,
          data = {
            action: 'epsilon_dashboard_ajax_callback',
            nonce: state.ajax_nonce,
            args: {
              action: [ 'Epsilon_Dashboard_Helper', 'set_options' ],
              nonce: state.ajax_nonce,
              args: {
                theme_mod: temp
              },
            },
          };

      fetchObj = new EpsilonFetchTranslator( data );

      fetch( ajaxurl, fetchObj ).then( function( res ) {
        return res.json();
      } ).then( function( json ) {
        if ( json.status && 'ok' === json.message ) {
          state.importedDemo = true;
        }
      } );
    }
  }
};