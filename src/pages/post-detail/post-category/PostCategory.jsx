import React from 'react';
import { Button } from '../../../components/core'

const PostCategory = ({ category }) => {
  return (
    <>
      <Button
        label={category}
        type={category}
        isActive={true}
      />
    </>
  );
};

export default PostCategory;