import { Button, Avatar } from 'antd'
import { DownOutlined } from '@ant-design/icons'
const AvatarButton = ({avatar, coin}) => {
    return (
        <Button shape={'round'} style={{ border: 'none', boxShadow: '0 2px 4px rgba(247, 247, 248, 1)' }}>
            <Avatar src={<img src={avatar} alt="avatar" />} />
            {coin}
            <DownOutlined />
        </Button>
    )
}
export default AvatarButton;