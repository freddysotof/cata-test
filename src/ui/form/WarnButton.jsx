import { Button, theme } from 'antd'

export const WarnButton = ({ title, onClick, htmlType="button", size = "large", style = "", classnames = "btn-block m-t-15" }) => {
    const { useToken } = theme;
    const { token } = useToken();
    return (
        <Button
            htmlType={htmlType}
            className={classnames}
            size={size}
            onClick={onClick}
            style={{ background: token.colorWarning, color: token.colorWhite }}
        >
            {title}
        </Button>
    )
}
