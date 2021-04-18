import Vue from 'vue'
import BaseAlert from '@/components/BaseComponent/alert/BaseAlert'
import BaseAutocomplete from '@/components/BaseComponent/autocomplete/BaseAutocomplete'
import BaseAside from '@/components/BaseComponent/aside/BaseAside'
import BaseAvatar from '@/components/BaseComponent/avatar/BaseAvatar'
import BaseBacktop from '@/components/BaseComponent/backtop/BaseBacktop'
import BaseBadge from '@/components/BaseComponent/badge/BaseBadge'
import BaseBreadcrumb from '@/components/BaseComponent/breadcrumb/BaseBreadcrumb'
import BaseBreadcrumbItem from '@/components/BaseComponent/breadcrumb/BaseBreadcrumbItem'
import BaseButton from '@/components/BaseComponent/button/BaseButton'
import BaseButtonGroup from '@/components/BaseComponent/button-group/BaseButtonGroup'
import BaseCalendar from '@/components/BaseComponent/calendar/BaseCalendar'
import BaseCard from '@/components/BaseComponent/card/BaseCard'
import BaseCarousel from '@/components/BaseComponent/carousel/BaseCarousel'
import BaseCarouselItem from '@/components/BaseComponent/carousel-item/BaseCarouselItem'
import BaseCascader from '@/components/BaseComponent/cascader/BaseCascader'
import BaseCheckbox from '@/components/BaseComponent/checkbox/BaseCheckbox'
import BaseCheckboxButton from '@/components/BaseComponent/checkbox-button/BaseCheckboxButton'
import BaseCheckboxGroup from '@/components/BaseComponent/checkbox-group/BaseCheckboxGroup'
import BaseCollapse from '@/components/BaseComponent/collapse/BaseCollapse'
import BaseCollapseItem from '@/components/BaseComponent/collapse-item/BaseCollapseItem'
import BaseColorPicker from '@/components/BaseComponent/color-picker/BaseColorPicker'
import BaseContainer from '@/components/BaseComponent/container/BaseContainer'
import BaseDatePicker from '@/components/BaseComponent/date-picker/picker/date-picker'
import BaseTimePicker from '@/components/BaseComponent/date-picker/picker/time-picker'
import BaseTimeSelect from '@/components/BaseComponent/date-picker/picker/time-select'
import BaseDialog from '@/components/BaseComponent/dialog/BaseDialog'
import BaseDivider from '@/components/BaseComponent/divider/BaseDivider'
import BaseDrawer from '@/components/BaseComponent/drawer/BaseDrawer'
import BaseDropdown from '@/components/BaseComponent/dropdown/BaseDropdown'
import BaseDropdownItem from '@/components/BaseComponent/dropdown-item/BaseDropdownItem'
import BaseDropdownMenu from '@/components/BaseComponent/dropdown-menu/BaseDropdownMenu'
import BaseFooter from '@/components/BaseComponent/footer/BaseFooter'
import BaseForm from '@/components/BaseComponent/form/BaseForm'
import BaseFormItem from '@/components/BaseComponent/form-item/BaseFormItem'
import BaseHeader from '@/components/BaseComponent/header/BaseHeader'
import BaseIcon from '@/components/BaseComponent/icon/BaseIcon'
import BaseImage from '@/components/BaseComponent/image/BaseImage'
import BaseInput from '@/components/BaseComponent/input/BaseInput'
import BaseInputNumber from '@/components/BaseComponent/input-number/BaseInputNumber'
import BaseLink from '@/components/BaseComponent/link/BaseLink'
import BaseMenu from '@/components/BaseComponent/menu/BaseMenu'
import BaseMain from '@/components/BaseComponent/main/BaseMain'
import BaseSubmenu from '@/components/BaseComponent/menu/BaseSubmenu'
import BaseMenuItem from '@/components/BaseComponent/menu-item/BaseMenuItem'
import BaseMenuItemGroup from '@/components/BaseComponent/menu-item-group/BaseMenuItemGroup'
// import Message from '@/components/BaseComponent/message/index'
// import MessageBox from '@/components/BaseComponent/message-box/index'
import Notification from '@/components/BaseComponent/notification/index'
// import BaseOption from '@/components/BaseComponent/option/BaseOption'
import BaseOptionGroup from '@/components/BaseComponent/option-group/BaseOptionGroup'
import BasePageHeader from '@/components/BaseComponent/page-header/BasePageHeader'
// import BasePagination from '@/components/BaseComponent/pagination/pagination'
import BasePopconfirm from '@/components/BaseComponent/popconfirm/BasePopconfirm'
import BasePopover from '@/components/BaseComponent/popover/BasePopover'
import BaseProgress from '@/components/BaseComponent/progress/BaseProgress'
import BaseRadio from '@/components/BaseComponent/radio/BaseRadio'
import BaseRadioButton from '@/components/BaseComponent/radio-button/BaseRadioButton'
import BaseRadioGroup from '@/components/BaseComponent/radio-group/BaseRadioGroup'
import BaseRate from '@/components/BaseComponent/rate/BaseRate'
import BaseRow from '@/components/BaseComponent/row/row'
import BaseScrollbar from '@/components/BaseComponent/scrollbar/scrollbar'
// import BaseSelect from '@/components/BaseComponent/select/BaseSelect'
// import BaseSlider from '@/components/BaseComponent/select/BaseSlider'
import BaseSpinner from '@/components/BaseComponent/spinner/BaseSpinner'
import BaseStep from '@/components/BaseComponent/steps/BaseStep'
import BaseSteps from '@/components/BaseComponent/steps/BaseSteps'
import BaseSwitch from '@/components/BaseComponent/switch/BaseSwitch'
import BaseTag from '@/components/BaseComponent/tag/BaseTag'
import BaseTabPane from '@/components/BaseComponent/tabs/BaseTabPane'
import BaseTabs from '@/components/BaseComponent/tabs/BaseTabs'
// import BaseTable from '@/components/BaseComponent/table/BaseTable'
import BaseTimeline from '@/components/BaseComponent/timeline/BaseTimeline'
import BaseTimelineItem from '@/components/BaseComponent/timeline/BaseTimelineItem'
import BaseTooltip from '@/components/BaseComponent/tooltip/tooltip'
import BaseTransfer from '@/components/BaseComponent/transfer/BaseTransfer'
import BaseTree from '@/components/BaseComponent/tree/BaseTree'
// import BaseUpload from '@/components/BaseComponent/upload/BaseUpload'
import TableViewer from '@/components/table-viewer/TableViewer'
import LayoutList from "@/views/base/LayoutList.vue";

Vue.component(BaseAlert.name, BaseAlert)
Vue.component(BaseAside.name, BaseAside)
Vue.component(BaseAutocomplete.name, BaseAutocomplete)
Vue.component(BaseAvatar.name, BaseAvatar)
Vue.component(BaseBacktop.name, BaseBacktop)
Vue.component(BaseBadge.name, BaseBadge)
Vue.component(BaseBreadcrumb.name, BaseBreadcrumb)
Vue.component(BaseBreadcrumbItem.name, BaseBreadcrumbItem)
Vue.component(BaseButton.name, BaseButton)
Vue.component(BaseButtonGroup.name, BaseButtonGroup)
Vue.component(BaseCalendar.name, BaseCalendar)
Vue.component(BaseCard.name, BaseCard)
Vue.component(BaseCarousel.name, BaseCarousel)
Vue.component(BaseCarouselItem.name, BaseCarouselItem)
Vue.component(BaseCascader.name, BaseCascader)
Vue.component(BaseCheckbox.name, BaseCheckbox)
Vue.component(BaseCheckboxButton.name, BaseCheckboxButton)
Vue.component(BaseCheckboxGroup.name, BaseCheckboxGroup)
Vue.component(BaseCollapse.name, BaseCollapse)
Vue.component(BaseCollapseItem.name, BaseCollapseItem)
Vue.component(BaseColorPicker.name, BaseColorPicker)
Vue.component(BaseContainer.name, BaseContainer)
Vue.component(BaseDatePicker.name, BaseDatePicker)
Vue.component(BaseTimePicker.name, BaseTimePicker)
Vue.component(BaseTimeSelect.name, BaseTimeSelect)
Vue.component(BaseDialog.name, BaseDialog)
Vue.component(BaseDivider.name, BaseDivider)
Vue.component(BaseDrawer.name, BaseDrawer)
Vue.component(BaseDropdown.name, BaseDropdown)
Vue.component(BaseDropdownItem.name, BaseDropdownItem)
Vue.component(BaseDropdownMenu.name, BaseDropdownMenu)
Vue.component(BaseFooter.name, BaseFooter)
Vue.component(BaseForm.name, BaseForm)
Vue.component(BaseFormItem.name, BaseFormItem)
Vue.component(BaseHeader.name, BaseHeader)
Vue.component(BaseIcon.name, BaseIcon)
Vue.component(BaseImage.name, BaseImage)
Vue.component(BaseInput.name, BaseInput)
Vue.component(BaseInputNumber.name, BaseInputNumber)
Vue.component(BaseLink.name, BaseLink)
Vue.component(BaseMain.name, BaseMain)
Vue.component(BaseMenu.name, BaseMenu)
Vue.component(BaseSubmenu.name, BaseSubmenu)
Vue.component(BaseMenuItem.name, BaseMenuItem)
Vue.component(BaseMenuItemGroup.name, BaseMenuItemGroup)
// Vue.component(Message.name, Message)
// Vue.component(MessageBox.name, MessageBox)
Vue.component(Notification.name, Notification)
// Vue.component(BaseOption.name, BaseOption)
Vue.component(BaseOptionGroup.name, BaseOptionGroup)
Vue.component(BasePageHeader.name, BasePageHeader)
// Vue.component(BasePagination.name, BasePagination)
Vue.component(BasePopconfirm.name, BasePopconfirm)
Vue.component(BasePopover.name, BasePopover)
Vue.component(BaseProgress.name, BaseProgress)
Vue.component(BaseRadio.name, BaseRadio)
Vue.component(BaseRadioButton.name, BaseRadioButton)
Vue.component(BaseRadioGroup.name, BaseRadioGroup)
Vue.component(BaseRate.name, BaseRate)
Vue.component(BaseRow.name, BaseRow)
Vue.component(BaseScrollbar.name, BaseScrollbar)
// Vue.component(BaseSelect.name, BaseSelect)
// Vue.component(BaseSlider.name, BaseSlider)
Vue.component(BaseSpinner.name, BaseSpinner)
Vue.component(BaseStep.name, BaseStep)
Vue.component(BaseSteps.name, BaseSteps)
Vue.component(BaseSwitch.name, BaseSwitch)
// Vue.component(BaseTable.name, BaseTable)
Vue.component(BaseTag.name, BaseTag)
Vue.component(BaseTabPane.name, BaseTabPane)
Vue.component(BaseTabs.name, BaseTabs)
Vue.component(BaseTimeline.name, BaseTimeline)
Vue.component(BaseTimelineItem.name, BaseTimelineItem)
Vue.component(BaseTooltip.name, BaseTooltip)
Vue.component(BaseTransfer.name, BaseTransfer)
Vue.component(BaseTree.name, BaseTree)
// Vue.component(BaseUpload.name, BaseUpload)
Vue.component(TableViewer.name, TableViewer)
Vue.component(LayoutList.name, LayoutList)
