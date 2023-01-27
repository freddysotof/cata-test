import { ConfigProvider } from "antd";
import { customTheme } from "./";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat';
import esES from 'antd/locale/es_ES';
import { dateLocalizer } from "../helpers";

dayjs.locale(dateLocalizer)
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
export const AppTheme = ({ children }) => {
  return (
    <ConfigProvider
      locale={esES}
      theme={customTheme}
    >
      {children}
    </ConfigProvider>)
};
