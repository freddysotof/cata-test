import { Button, theme } from 'antd'

export const PrimaryButton = ({ title, onClick, htmlType = "submit", size = "large", style = "", className = "btn-block m-t-15",disabled=false }) => {
    const { useToken } = theme;
    const { token } = useToken();
    return (
        <Button
            type="primary"
            htmlType={htmlType}
            className={className}
            size={size}
            onClick={onClick}
            disabled={disabled}
        >
            {title}
        </Button>
    )
}
