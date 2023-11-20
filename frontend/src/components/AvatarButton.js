import { Button, Avatar } from 'antd'
import { DownOutlined } from '@ant-design/icons'
const AvatarButton = ({ avatar, coin }) => {
    return (
        <Button shape={'round'} style={{ border: 'none', backgroundColor: '#EDEDEF'}}
            icon={<Avatar size={22} icon={<img src={avatar} alt="avatar" />} />}>
            <span>{coin}</span>
            <DownOutlined />
        </Button>
    )
}
export default AvatarButton;