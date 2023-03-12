import './css/globalcss.css';
import './assets/img/logo_lg.png'
import { createApp } from 'vue';
import VWave from 'v-wave'
import 'boxicons';
// import { vuetify } from 'vuetify'
import 'vuetify/dist/vuetify.css'
import * as vuetify from 'vuetify/lib/framework'



app.use(VWave);




const app = createApp({})
app.use(vuetify)

// app.use(VWave)
// app.use(VWave, {})
// app.directive('wave', VWave);

import { default as Accordion } from './components/Accordion.vue';
import { default as AnimationSpinner } from './components/AnimationSpinner.vue';
import { default as AnimationStatus } from './components/AnimationStatus.vue';
import { default as Autocomplete } from './components/Autocomplete.vue';
import { default as AutocompleteSelect } from './components/AutocompleteSelect.vue';
import { default as Button } from './components/Button.vue';
import { default as ButtonCard } from './components/ButtonCard.vue';
import { default as ButtonIcon } from './components/ButtonIcon.vue';
import { default as Calendar } from './components/Calendar.vue';
import { default as Card } from './components/Card.vue';
import { default as Context } from './components/Context.vue';
import { default as Date } from './components/Date.vue';
import { default as Dropdown } from './components/Dropdown.vue';
import { default as DropdownFunctional } from './components/DropdownFunctional.vue';
// import { default as Filedrop } from './components/Filedrop.vue';
import { default as Frame } from './components/Frame.vue';
import { default as Grid } from './components/Grid.vue';
import { default as Hint } from './components/Hint.vue';
import { default as HintWrap } from './components/HintWrap.vue';
import { default as InputNumberpad } from './components/InputNumberpad.vue';
import { default as List } from './components/List.vue';
import { default as ListItem } from './components/ListItem.vue';
import { default as Logo } from './components/Logo.vue';
import { default as Markdown } from './components/Markdown.vue';
import { default as OverlayDrawer } from './components/OverlayDrawer.vue';
import { default as OverlayDrawerFrame } from './components/OverlayDrawerFrame.vue';
import { default as OverlayIndicator } from './components/OverlayIndicator.vue';
import { default as OverlayModal } from './components/OverlayModal.vue';
import { default as OverlayNotifications } from './components/OverlayNotifications.vue';
import { default as Placeholder } from './components/Placeholder.vue';
import { default as Quote } from './components/Quote.vue';
import { default as RadioGroupBtn } from './components/RadioGroupBtn.vue';
import { default as Step } from './components/Step.vue';
import { default as Tab } from './components/Tab.vue';
import { default as TabContent } from './components/TabContent.vue';
import { default as Tag } from './components/Tag.vue';
import { default as Toggle } from './components/Toggle.vue';
import { default as ToggleMode } from './components/ToggleMode.vue';
import { default as TranshesCheckAccordion } from './components/TranshesCheckAccordion.vue';
import { default as TransitionExpand } from './components/TransitionExpand.vue';

app.component('Accordion', Accordion);
app.component('AnimationSpinner', AnimationSpinner);
app.component('AnimationStatus', AnimationStatus);
app.component('Autocomplete', Autocomplete);
app.component('AutocompleteSelect', AutocompleteSelect);
app.component('Button', Button);
app.component('ButtonCard', ButtonCard);
app.component('ButtonIcon', ButtonIcon);
app.component('Calendar', Calendar);
app.component('Card', Card);
app.component('Context', Context);
app.component('Date', Date);
app.component('Dropdown', Dropdown);
app.component('DropdownFunctional', DropdownFunctional);
// app.component('Filedrop', Filedrop);
app.component('Frame', Frame);
app.component('Grid', Grid);
app.component('Hint', Hint);
app.component('HintWrap', HintWrap);
app.component('InputNumberpad', InputNumberpad);
app.component('List', List);
app.component('ListItem', ListItem);
app.component('Logo', Logo);
app.component('Markdown', Markdown);
app.component('OverlayDrawer', OverlayDrawer);
app.component('OverlayDrawerFrame', OverlayDrawerFrame);
app.component('OverlayIndicator', OverlayIndicator);
app.component('OverlayModal', OverlayModal);
app.component('OverlayNotifications', OverlayNotifications);
app.component('Placeholder', Placeholder);
app.component('Quote', Quote);
app.component('RadioGroupBtn', RadioGroupBtn);
app.component('Step', Step);
app.component('Tab', Tab);
app.component('TabContent', TabContent);
app.component('Tag', Tag);
app.component('Toggle', Toggle);
app.component('ToggleMode', ToggleMode);
app.component('TranshesCheckAccordion', TranshesCheckAccordion);
app.component('TransitionExpand', TransitionExpand);

export { Accordion, AnimationSpinner, AnimationStatus, Autocomplete, Button, ButtonCard, ButtonIcon, Calendar, Card, Context, Date, Dropdown, DropdownFunctional, Frame, Grid, Hint, HintWrap, InputNumberpad, List, ListItem, Markdown, OverlayDrawer, OverlayDrawerFrame, OverlayIndicator, OverlayModal, OverlayNotifications, Placeholder, Quote, RadioGroupBtn, Step, Tab, TabContent, Tag, Toggle, ToggleMode, TranshesCheckAccordion, TransitionExpand, AutocompleteSelect, Logo };

// Filedrop
