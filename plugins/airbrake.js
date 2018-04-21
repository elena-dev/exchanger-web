import Vue from 'vue'
import config from '~/_config/app.json'
import AirbrakeClient from 'airbrake-js';

const airbrake = new AirbrakeClient({
  projectId: config.airbrake.projectId,
  projectKey: config.airbrake.projectKey
});

Vue.config.errorHandler = function (err, vm, info) {
  airbrake.notify({
    error: err,
    params: {info: info}
  });
};
