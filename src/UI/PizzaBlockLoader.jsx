import React from 'react';
import ContentLoader from 'react-content-loader';

export default function PizzaLoader(){
  return (
    <ContentLoader 
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="137" cy="149" r="134" /> 
      <rect x="0" y="310" rx="0" ry="0" width="277" height="24" /> 
      <rect x="0" y="349" rx="6" ry="6" width="280" height="76" /> 
      <rect x="5" y="433" rx="0" ry="0" width="93" height="17" /> 
      <rect x="155" y="428" rx="12" ry="12" width="122" height="26" /> 
      <rect x="195" y="443" rx="0" ry="0" width="13" height="1" />
    </ContentLoader>
  );
}