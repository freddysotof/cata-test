import {theme} from 'antd';

const {useToken } = theme;
export const useTheme = ()=>{
    const {token} = useToken();
    return {
        ...token
    }
}