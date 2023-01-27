import { Button, theme } from 'antd'

export const InfoButton =({ title, onClick, htmlType="button", size = "large", style = "", classnames = "btn-block m-t-15",disabled=false }) => {
    const { useToken } = theme;
    const { token } = useToken();
    return (
        <Button
            htmlType={htmlType}
            className={classnames}
            size={size}
            onClick={onClick}
            disabled={disabled}
            style={{ background: token.colorInfo, color: token.colorWhite }}
        >
            {title}
        </Button>
    )
}
