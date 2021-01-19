import React from 'react';
import {useHistory} from 'react-router-dom'
import { Image, Typography } from 'antd';

interface PropsType{
  id: string | number;
  size: 'large' | 'small';
  title: string;
  imageSrc: string;
  price: string | number;
}

const ProductItem: React.FC<PropsType> = ({
  id,
  size,
  title,
  imageSrc,
  price,
}) => {
  const history = useHistory();
  return (
    <div onClick={()=>history.push(`detail/${id}`)}>
      {size === 'large' ? (
        <Image src={imageSrc} width={490} height={285} />
      ) : (
        <Image src={imageSrc} width={240} height={120} />
      )}
      <div>
        <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
        <Typography.Text type="danger">￥{price}起</Typography.Text>
      </div>
    </div>
  );
};

export default ProductItem;
