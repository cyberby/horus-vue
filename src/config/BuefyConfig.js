import Vue from 'vue';
import { weekdaysShort, months } from 'moment';

import {
  ConfigProgrammatic,
  Progress,
  Dialog,
  Modal,
  Icon,
  Datepicker,
  Datetimepicker,
  Timepicker,
  Field,
  Input,
  Select,
  Button,
  Radio,
  Table,
  Checkbox,
  Notification,
  Loading,
  Sidebar,
  Menu,
  Snackbar,
  Taginput,
  Tooltip,
  Autocomplete,
  Tag,
  Dropdown,
} from 'buefy';

Vue.use(Progress);
Vue.use(Icon);
Vue.use(Dialog);
Vue.use(Modal);
Vue.use(Datepicker);
Vue.use(Datetimepicker);
Vue.use(Timepicker);
Vue.use(Field);
Vue.use(Input);
Vue.use(Select);
Vue.use(Radio);
Vue.use(Button);
Vue.use(Table);
Vue.use(Checkbox);
Vue.use(Notification);
Vue.use(Loading);
Vue.use(Sidebar);
Vue.use(Menu);
Vue.use(Snackbar);
Vue.use(Taginput);
Vue.use(Tooltip);
Vue.use(Autocomplete);
Vue.use(Tag);
Vue.use(Dropdown);

ConfigProgrammatic.setOptions({
  defaultLocale: 'pt-BR',
  defaultIconPack: 'fas',
  defaultIconComponent: 'font-awesome-icon',
  defaultDayNames: weekdaysShort().map(
    (el) => `${el[0].toUpperCase()}${el.slice(1)}`
  ),
  defaultMonthNames: months().map(
    (el) => `${el[0].toUpperCase()}${el.slice(1)}`
  ),
  defaultSnackbarPosition: 'is-bottom-left',
  defaultDialogCancelText: 'Cancelar',
  defaultTooltipType: 'is-dark',
  defaultModalCanCancel: ['escape', 'button'],
});
