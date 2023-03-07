import './css/globalcss.css';
import Vue from 'vue';

import Accordion from './components/Accordion.vue';
import AnimationSpinner from './components/AnimationSpinner.vue';
import AnimationStatus from './components/AnimationStatus.vue';
import Autocomplete from './components/Autocomplete.vue';
import AutocompleteSelect from './components/AutocompleteSelect.vue';
import Button from './components/Button.vue';
import ButtonCard from './components/ButtonCard.vue';
import ButtonIcon from './components/ButtonIcon.vue';
import Calendar from './components/Calendar.vue';
import Card from './components/Card.vue';
import Context from './components/Context.vue';
import Date from './components/Date.vue';
import Dropdown from './components/Dropdown.vue';
import DropdownFunctional from './components/DropdownFunctional.vue';
import Filedrop from './components/Filedrop.vue';
import Frame from './components/Frame.vue';
import Grid from './components/Grid.vue';
import Hint from './components/Hint.vue';
import HintWrap from './components/HintWrap.vue';
import InputNumberpad from './components/InputNumberpad.vue';
import List from './components/List.vue';
import ListItem from './components/ListItem.vue';
import Logo from './components/Logo.vue';
import Markdown from './components/Markdown.vue';
import OverlayDrawer from './components/OverlayDrawer.vue';
import OverlayDrawerFrame from './components/OverlayDrawerFrame.vue';
import OverlayIndicator from './components/OverlayIndicator.vue';
import OverlayModal from './components/OverlayModal.vue';
import OverlayNotifications from './components/OverlayNotifications.vue';
import Placeholder from './components/Placeholder.vue';
import Quote from './components/Quote.vue';
import RadioGroupBtn from './components/RadioGroupBtn.vue';
import Step from './components/Step.vue';
import Tab from './components/Tab.vue';
import TabContent from './components/TabContent.vue';
import Tag from './components/Tag.vue';
import Toggle from './components/Toggle.vue';
import ToggleMode from './components/ToggleMode.vue';
import TranshesCheckAccordion from './components/TranshesCheckAccordion.vue';
import TransitionExpand from './components/TransitionExpand.vue';

Vue.component('Accordion', Accordion);
Vue.component('AnimationSpinner', AnimationSpinner);
Vue.component('AnimationStatus', AnimationStatus);
Vue.component('Autocomplete', Autocomplete);
Vue.component('AutocompleteSelect', AutocompleteSelect);
Vue.component('Button', Button);
Vue.component('ButtonCard', ButtonCard);
Vue.component('ButtonIcon', ButtonIcon);
Vue.component('Calendar', Calendar);
Vue.component('Card', Card);
Vue.component('Context', Context);
Vue.component('Date', Date);
Vue.component('Dropdown', Dropdown);
Vue.component('DropdownFunctional', DropdownFunctional);
Vue.component('Filedrop', Filedrop);
Vue.component('Frame', Frame);
Vue.component('Grid', Grid);
Vue.component('Hint', Hint);
Vue.component('HintWrap', HintWrap);
Vue.component('InputNumberpad', InputNumberpad);
Vue.component('List', List);
Vue.component('ListItem', ListItem);
Vue.component('Logo', Logo);
Vue.component('Markdown', Markdown);
Vue.component('OverlayDrawer', OverlayDrawer);
Vue.component('OverlayDrawerFrame', OverlayDrawerFrame);
Vue.component('OverlayIndicator', OverlayIndicator);
Vue.component('OverlayModal', OverlayModal);
Vue.component('OverlayNotifications', OverlayNotifications);
Vue.component('Placeholder', Placeholder);
Vue.component('Quote', Quote);
Vue.component('RadioGroupBtn', RadioGroupBtn);
Vue.component('Step', Step);
Vue.component('Tab', Tab);
Vue.component('TabContent', TabContent);
Vue.component('Tag', Tag);
Vue.component('Toggle', Toggle);
Vue.component('ToggleMode', ToggleMode);
Vue.component('TranshesCheckAccordion', TranshesCheckAccordion);
Vue.component('TransitionExpand', TransitionExpand);

const fs = require('fs')
const path = require('path')

const appPath = path.resolve(__dirname, '../../src/main.js')
//여기서 지금 자꾸 cache 디렉토리에 접근한다.
// const appPath = path.resolve(process.cwd(), '../../src/main.js')
// const appPath = path.join(__dirname, '..', '..', 'src', 'main.js');

let appFile = fs.readFileSync(appPath, { encoding: 'utf-8' })
// let appFile = fs.readFileSync('../../src/main.js', { encoding: 'utf-8' })


if (!appFile.includes("../node_modules/yjhlib/css/globalcss.css")) {
  appFile = `import "../node_modules/yjhlib/css/globalcss.css";\n` + appFile
  fs.writeFileSync(appPath, appFile, { encoding: 'utf-8' })
}

export { Accordion, AnimationSpinner,AnimationStatus,Autocomplete,AutocompleteSelect,Button,ButtonCard,ButtonIcon,Calendar,Card,Context,Date,Dropdown,DropdownFunctional,Filedrop,Frame,Grid,Hint,HintWrap,InputNumberpad,List,ListItem,Logo,Markdown,OverlayDrawer,OverlayDrawerFrame,OverlayIndicator,OverlayModal,OverlayNotifications,Placeholder,Quote,RadioGroupBtn,Step,Tab,TabContent,Tag,Toggle,ToggleMode,TranshesCheckAccordion,TransitionExpand };
