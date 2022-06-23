import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={3}
    width={330}
    height={416}
    viewBox="0 0 330 416"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="0" rx="10" ry="10" width="330" height="416" />
  </ContentLoader>
);

export default Skeleton;
