export default function ({ isHMR, app, store, route, params, error, redirect }) {
  if (isHMR) return;
  const locale = params.lang || 'en';

  if (store.state.locales.indexOf(locale) === -1) {
    return error({ message: 'page not found.', statusCode: 404 })
  }

  store.commit('SET_LANG', locale);
  app.i18n.locale = locale
}
