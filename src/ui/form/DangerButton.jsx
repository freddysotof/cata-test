import { Button, theme } from 'antd'

export const DangerButton = ({ title, onClick, htmlType = "button", size = "large", style = "", classnames = "btn-block m-t-15" }) => {
    const { useToken } = theme;
    const { token } = useToken();
    return (
        <Button
            danger
            htmlType={htmlType}
            className={classnames}
            size={size}
            onClick={onClick}
        >
            {title}
        </Button>
    )
}
