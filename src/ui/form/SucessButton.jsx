import { Button, theme } from 'antd'

export const SuccessButton = ({ title, onClick, htmlType = "submit", size = "large", style = "", className = "btn-block m-t-15", disabled = true }) => {
    const { useToken } = theme;
    const { token } = useToken();
    return (
        <Button
            // type="primary"
            htmlType={htmlType}
            className={className}
            size={size}
            onClick={onClick}
            disabled={disabled}
            style={{ background: token.colorSuccess, color: token.colorWhite }}
        >
            {title}
        </Button>
    )
}
