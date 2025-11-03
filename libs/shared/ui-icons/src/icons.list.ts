import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ApprovalIcon from '@mui/icons-material/Approval';
import ArrowCircleLeft from '@mui/icons-material/ArrowCircleLeft';
import ArticleOutlined from '@mui/icons-material/ArticleOutlined';
import AssignmentOutlined from '@mui/icons-material/AssignmentOutlined';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AttachFile from '@mui/icons-material/AttachFile';
import BlockIcon from '@mui/icons-material/Block';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import Cancel from '@mui/icons-material/Cancel';
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline';
import CheckCircle from '@mui/icons-material/CheckCircle';
import CircleOutlined from '@mui/icons-material/CircleOutlined';
import CloseIcon from '@mui/icons-material/Close';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import DangerousIcon from '@mui/icons-material/Dangerous';
import Dashboard from '@mui/icons-material/Dashboard';
import DehazeIcon from '@mui/icons-material/Dehaze';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DoNotDisturb from '@mui/icons-material/DoNotDisturb';
import DrawOutlined from '@mui/icons-material/DrawOutlined';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FileDownload from '@mui/icons-material/GetApp';
import GradingIcon from '@mui/icons-material/Grading';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Home from '@mui/icons-material/Home';
import Info from '@mui/icons-material/Info';
import Status from '@mui/icons-material/Insights';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import LiveHelpOutlined from '@mui/icons-material/LiveHelpOutlined';
import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MapIcon from '@mui/icons-material/Map';
import MarkEmailReadOutlined from '@mui/icons-material/MarkEmailReadOutlined';
import Menu from '@mui/icons-material/Menu';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import Upload from '@mui/icons-material/MoreVert';
import NotificationsOutlined from '@mui/icons-material/NotificationsOutlined';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import Person from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import Print from '@mui/icons-material/Print';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ReorderIcon from '@mui/icons-material/Reorder';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Search from '@mui/icons-material/Search';
import SortByAlpha from '@mui/icons-material/SortByAlpha';
import SpeedIcon from '@mui/icons-material/Speed';
import SpeedOutlined from '@mui/icons-material/SpeedOutlined';
import SyncIcon from '@mui/icons-material/Sync';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import TourIcon from '@mui/icons-material/Tour';
import VerifiedIcon from '@mui/icons-material/Verified';
import WarningIcon from '@mui/icons-material/Warning';

export enum IconsList {
  cancel = 'BlockIcon',
  reject = 'ThumbDownOffAltIcon',
  addCircleButton = 'AddCircleIcon',
  approval = 'ApprovalIcon',
  backButton = 'ArrowCircleLeft',
  expandArrow = 'ExpandMore',
  notActive = 'DoNotDisturb',
  doubleTick = 'DoneAllIcon',
  editing = 'DrawOutlined',
  radioButton = 'CircleOutlined',
  radioButtonChecked = 'CheckCircle',
  radioButtonCancel = 'Cancel',
  dashboard = 'Dashboard',
  download = 'Download',
  sorting = 'SortByAlpha',
  sortingAscending = 'KeyboardArrowUp',
  sortingDescending = 'KeyboardArrowDown',
  search = 'Search',
  home = 'Home',
  calender = 'CalendarMonth',
  user = 'Person',
  menu = 'Menu',
  assignment = 'AssignmentOutlined',
  speed = 'SpeedOutlined',
  notification = 'NotificationsOutlined',
  status = 'Status',
  paperClip = 'AttachFile',
  print = 'Print',
  info = 'Info',
  activity = 'ChatBubbleOutline',
  list = 'ArticleOutlined',
  logout = 'LogoutOutlined',
  help = 'LiveHelpOutlined',
  privacy = 'privacy',
  attach = 'attach',
  query = 'query',
  gauge = 'gauge',
  grading = 'grading',
  assignmentTurnedIn = 'assignmentTurnedIn',
  verified = 'verified',
  tour = 'tour',
  emojiEvents = 'emojiEvents',
  reorder = 'reorder',
  schedule = 'schedule',
  sync = 'sync',
  error = 'error',
  paused = 'paused',
  pause = 'pause',
  restart = 'restart',
  dangerous = 'dangerous',
  off = 'off',
  map = 'MapIcon',
  upload = 'Upload',
  dehaze = 'dehaze',
  close = 'close',
  phone = 'phone',
  email = 'email',
  corporate = 'corporate',
  emailSent = 'emailSent',
  addCircleOutlineIcon = 'addCircleIcon',
  taskAlt = 'TaskAltIcon',
  warning = 'warning',
  monitoring = 'monitoring',
}

export const iconComponents: Record<IconsList, React.ElementType> = {
  [IconsList.cancel]: BlockIcon,
  [IconsList.reject]: ThumbDownOffAltIcon,
  [IconsList.addCircleButton]: AddCircleIcon,
  [IconsList.doubleTick]: DoneAllIcon,
  [IconsList.approval]: ApprovalIcon,
  [IconsList.activity]: ChatBubbleOutline,
  [IconsList.info]: Info,
  [IconsList.paperClip]: AttachFile,
  [IconsList.status]: Status,
  [IconsList.backButton]: ArrowCircleLeft,
  [IconsList.expandArrow]: ExpandMore,
  [IconsList.notActive]: DoNotDisturb,
  [IconsList.editing]: DrawOutlined,
  [IconsList.radioButton]: CircleOutlined,
  [IconsList.radioButtonChecked]: CheckCircle,
  [IconsList.dashboard]: Dashboard,
  [IconsList.download]: FileDownload,
  [IconsList.sorting]: SortByAlpha,
  [IconsList.sortingAscending]: KeyboardArrowUp,
  [IconsList.sortingDescending]: KeyboardArrowDown,
  [IconsList.search]: Search,
  [IconsList.home]: Home,
  [IconsList.calender]: CalendarMonth,
  [IconsList.user]: Person,
  [IconsList.menu]: Menu,
  [IconsList.assignment]: AssignmentOutlined,
  [IconsList.speed]: SpeedOutlined,
  [IconsList.print]: Print,
  [IconsList.notification]: NotificationsOutlined,
  [IconsList.list]: ArticleOutlined,
  [IconsList.logout]: LogoutOutlined,
  [IconsList.help]: LiveHelpOutlined,
  [IconsList.privacy]: PrivacyTipIcon,
  [IconsList.attach]: AttachFile,
  [IconsList.query]: QueryBuilderIcon,
  [IconsList.gauge]: SpeedIcon,
  [IconsList.grading]: GradingIcon,
  [IconsList.assignmentTurnedIn]: AssignmentTurnedInIcon,
  [IconsList.verified]: VerifiedIcon,
  [IconsList.tour]: TourIcon,
  [IconsList.emojiEvents]: EmojiEventsIcon,
  [IconsList.reorder]: ReorderIcon,
  [IconsList.schedule]: ScheduleIcon,
  [IconsList.sync]: SyncIcon,
  [IconsList.error]: ErrorOutlineIcon,
  [IconsList.paused]: PauseCircleOutlineIcon,
  [IconsList.restart]: RestartAltIcon,
  [IconsList.pause]: PauseCircleOutlineIcon,
  [IconsList.dangerous]: DangerousIcon,
  [IconsList.off]: HighlightOffIcon,
  [IconsList.map]: MapIcon,
  [IconsList.upload]: Upload,
  [IconsList.dehaze]: DehazeIcon,
  [IconsList.close]: CloseIcon,
  [IconsList.phone]: PhoneIcon,
  [IconsList.email]: MailOutlineIcon,
  [IconsList.corporate]: CorporateFareIcon,
  [IconsList.emailSent]: MarkEmailReadOutlined,
  [IconsList.radioButtonCancel]: Cancel,
  [IconsList.addCircleOutlineIcon]: AddCircleOutlineIcon,
  [IconsList.taskAlt]: TaskAltIcon,
  [IconsList.warning]: WarningIcon,
  [IconsList.monitoring]: MonitorHeartIcon,
};

export function isValidIcon(value: string): value is IconsList {
  return Object.values(IconsList).includes(value as IconsList);
}
