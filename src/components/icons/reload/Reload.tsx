import React from "react";

interface Props {
  width?: number;
  height?: number;
}

export default function Reload({ width = 30, height = 30 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      height={height}
    >
      <path
        fill="#EF4823"
        d="M275.7,146.5c-6.1-5.9-11.2-12.7-17.3-18.4c-2.5-2.4-6.7-4.7-7.7-8.2c-0.4-1.4-0.3-2.7,0.1-3.8c-0.2-0.7-0.3-1.6-0.1-2.5c1.3-8.1,8.9-13.7,15.1-18.2c8.5-6.3,16.3-13.4,24.7-19.8c0.9-0.7,1.9-1.5,2.8-2.2h-1.6c-0.9-1.4-1.8-2.7-2.8-4c-8.5-11-20.8-20.2-33.5-25.8c-13.7-6-27.8-5.8-42.2-2.8c-24.2,5.1-50.9,13.8-67.7,33c0,0.2-0.1,0.3-0.1,0.5c0,0.9-0.1,1.9-0.5,2.7c-2.4,13.1-3.4,27.1-3.7,40.3c-0.3,13.9,0.6,29.2,7.7,41.6c8.6,14.9,23.3,21.9,39.6,25.7c18.2,4.2,37.6,7.1,56.4,5.3c19.2-1.9,39.6-8.9,49.6-24.8C288.1,159,282.1,152.7,275.7,146.5z"
      />
      <path
        fill="#F6851F"
        d="M442,211.1c-4.2-29.2-12.7-59.5-29.3-84.3c-7.8-11.7-17.5-22.6-29.5-30.1c-10.9-6.8-22.7-11.6-34.7-15.8c-2.7,3.8-10,3.3-9.9-2.4c0.1-11,2.3-21.9,3-32.9c-14.9,11.1-27.2,25.5-42,36.8c-8.2,6.2-15.8,13.2-24,19.4c-4.5,3.4-13.2,7.9-14.2,14c0,0.1-0.1,0.2-0.1,0.4c0.4,0.3,0.7,0.6,1.1,1c0.7,0.6,1.5,1.3,2.2,1.9c2.2,1.9,4.1,4.1,6,6.3c5.1,5.8,10.7,11.1,16.1,16.7c6.4,6.7,12.8,13.2,19.6,19.4h2.1c-0.2,0.5-0.4,0.9-0.5,1.4c2.9,2.6,6,5.1,9.1,7.4c0.3,0.1,0.5,0.2,0.8,0.3c2.2,1,3.1,2.3,4.1,4.4c0.4,0.9,0.6,1.8,0.5,2.5c2.2,2.6,5,4.8,7.8,6.9c4.5-9.2,7.5-19.1,10.9-28.8c1.2-3.5,4.6-3.8,7.1-2.3c0.1,0,0.1,0,0.2,0c18.3,1.5,23,26.2,27.3,40.2c2,6.4,3.5,13.1,4.9,19.7c1.6,7.2,1.6,14.2,1.3,21.5c-0.6,13.4-0.7,25.8-5,38.7c-8.2,24.6-24.3,45.5-45.7,60.1c-11.1,7.6-23.3,13.7-36.1,17.6c-8.1,2.5-16.3,4.2-24.6,5.8c10.6,10.6,22.2,20.4,32.5,31.6c0.7,0.8,1.1,1.6,1.3,2.4c1.8,0.6,3.2,2.1,3.2,4.6c0,3.1-0.3,4.9-2.5,7.2c-1.9,2-3.7,4.1-5.5,6.2c-3.7,4.2-7.5,7.9-11.8,11.4c-9.8,7.8-18.2,16.8-26.9,25.8c-4.5,4.7-8.9,9.7-13.3,14.7c26.9-1.7,54.1-8.7,77.5-21.8c27.9-15.7,52.2-38.2,72-63.2c17.9-22.7,33-48,40.5-76C445.2,270.8,446.2,240.7,442,211.1z"
      />
      <path
        fill="#FEBF10"
        d="M262.8,365c-5.1-6.5-10.4-12.9-16.3-18.6c-0.5-0.6-0.9-1.3-1.4-1.9c-5.7-8.2-10.3-17.1-15.9-25.4c-3.5-5.2-9.5-15.3-16.7-15.6c-0.3,0-0.7-0.1-1-0.1c-2,4.7-1.4,10.9-1.3,15.8c0.1,7-1.7,15.1,1.1,21.7c1.7,4-1.6,6.9-5,7.1c-1.2,0.4-2.5,0.4-4-0.3c-18.4-8.6-38.8-12.5-54.9-25.6c-13.1-10.7-23.3-25.3-27.7-41.7c-4.9-18.1-3.9-38.3-0.5-56.6c1.9-10.3,5.1-20.3,10.4-29.4c4.5-7.8,9.7-15,15-22.3c-0.4-0.5-0.8-1-1.1-1.5c-6.5-9-10.2-19.6-11.9-30.6c-1.7-11.4-1.5-22.9-0.6-34.4c0.6-7.9,1.2-16.1,2.2-24.1c-21.9,5.5-39.7,22.9-53.2,40.2c-18,23-28.5,50.5-38.9,77.5c-5.4,14.1-10.4,28.7-10.9,44c-0.5,14.5,0.9,29.1,4.1,43.3c6.1,27.9,16.4,53.8,33.7,76.7c8.6,11.5,18.3,22.2,28.6,32.1c10,9.6,20.4,19.3,32.7,25.9c22.6,12.3,48.6,17.5,73.7,22.6c0.8-0.5,1.7-0.7,2.9-0.7c4.9,0.2,6.8,5.6,5.1,8.7c0,0.5,0.1,1,0.1,1.5c0,1.4,0,2.8,0.1,4.3c0.2,3.6,0.7,7.2,0.5,10.9c-0.1,3.8-0.9,8.3-0.6,12.3c15.5-10.8,27.4-27.2,40.4-40.7c7.6-7.9,15.1-15.9,23.3-23.2c4.4-3.9,9.3-7.2,13.3-11.5c2.6-2.9,5.1-5.8,7.8-8.7C285.4,385.5,273.6,375.7,262.8,365z"
      />
      <path d="M432.3,139.4c-7.9-16.4-18.3-31.5-32-43.5c-14.4-12.7-32.5-19.9-50.4-26.1c0.9-10.5,2.8-20.9,2.9-31.5c0-4.2-3.8-5.6-7-4.6c-1.6-1.4-4-1.8-6.3-0.2c-14.2,9.7-26.1,22.2-39,33.6c-9.4-14.2-23.9-25.2-38.9-32.6c-23-11.3-47.8-6.1-71.2,1c-21.2,6.5-42.2,16.2-56,34.2c-0.1,0.1-0.1,0.2-0.2,0.3c-23,4.5-41.9,20.1-57,37.4c-18.8,21.4-30.6,46.9-40.9,73.2c-5.6,14.3-11.4,28.4-15,43.3c-3.3,13.7-3.1,28.4-1.7,42.3c2.7,27.6,10.8,55.9,24.1,80.3c8.1,14.9,18.6,28.4,29.9,41.1c11.5,12.9,24.2,25.4,38.1,35.6c25.3,18.5,57.4,25,87.7,31.2c0.1,3.6,0.7,7.1,0.8,9c0.6,8.1-2,17.4,1.2,25.1c1,2.4,3,3.4,5,3.4c1.7,1.5,4.1,2.1,6.6,0.6c9-5.5,16.8-12.7,24.1-20.4c26.5-0.2,53.7-5.6,78-16.1c25.4-11,47.7-28.4,67.4-47.7c20-19.6,37.4-42.6,50.5-67.4c11.9-22.6,18.7-47.4,21.3-72.7v-48.7C451.6,191.7,444.2,164,432.3,139.4z M141.1,117.3c0.3-13.2,1.3-27.2,3.7-40.3c0.4-0.9,0.5-1.8,0.5-2.7c0-0.2,0.1-0.3,0.1-0.5c16.7-19.2,43.4-27.9,67.7-33c14.4-3,28.6-3.3,42.2,2.8c12.7,5.6,25,14.8,33.5,25.8c1,1.3,1.9,2.6,2.8,4h1.6c-0.9,0.7-1.8,1.5-2.8,2.2c-8.4,6.5-16.2,13.6-24.7,19.8c-6.2,4.6-13.8,10.1-15.1,18.2c-0.2,0.9-0.1,1.8,0.1,2.5c-0.5,1.1-0.5,2.4-0.1,3.8c1,3.5,5.2,5.9,7.7,8.2c6.1,5.8,11.2,12.6,17.3,18.4c6.4,6.1,12.4,12.5,18.7,18.5c-10,15.9-30.5,23-49.6,24.8c-18.7,1.8-38.1-1.1-56.4-5.3c-16.3-3.8-31-10.8-39.6-25.7C141.6,146.5,140.8,131.2,141.1,117.3z M199.1,318.8c0,5-0.6,10.3-0.4,15.4c-14.3-5.6-29.3-9.6-41.9-18.7c-12.8-9.3-21.9-22.5-26.5-37.5c-4.9-16-3.2-34.1-0.8-50.4c2.8-18.4,12.1-32.9,22.6-47.6c6.4,5.2,13.9,9,21.8,11.8c13.2,4.7,27.4,6.9,41.3,8.5c15.6,1.7,31.2,1.5,46.6-2c16.6-3.8,31.7-12.3,40.8-25.6c2.5,2.2,5.1,4.3,7.8,6.3c4.2,7.6,11.5,12.4,18,18c2.8,2.4,6.8,1.4,8.6-1.7c5.5-9.5,8.9-19.9,12.5-30.3c4.7,2,7.4,7.5,9.4,12.1c2.9,6.7,4.6,13.8,6.7,20.8c1.7,5.6,3,11.5,4.3,17.2c1.6,6.8,1.4,13.5,1.1,20.5c-0.5,12.5-0.7,24.1-4.9,36c-7.8,22.4-22.9,40.5-42.3,53.8c-18.8,12.9-40.2,18.1-62.2,22.1c-4.4-5-8.5-10.4-12.1-16.2c-8.6-14.1-18.8-37.8-37.9-38.6c-1.8-0.1-3.1,0.6-3.9,1.7c-1.9-0.1-4,0.6-5.3,2.7C198.6,303.1,199.1,311.8,199.1,318.8z M210.9,480.8c-0.4-4,0.4-8.5,0.6-12.3c0.1-3.6-0.3-7.3-0.5-10.9c-0.1-1.4-0.1-2.8-0.1-4.3c0-0.5-0.1-1-0.1-1.5c1.7-3.2-0.3-8.5-5.1-8.7c-1.2,0-2.1,0.2-2.9,0.7c-25.1-5.1-51.1-10.3-73.7-22.6c-12.3-6.7-22.7-16.3-32.7-25.9c-10.4-9.9-20-20.6-28.6-32.1c-17.3-22.9-27.5-48.8-33.7-76.7c-3.1-14.2-4.6-28.8-4.1-43.3c0.6-15.3,5.5-29.8,10.9-44c10.4-27,21-54.5,38.9-77.5C93.3,104.4,111.1,87,133,81.5c-1.1,8-1.6,16.1-2.2,24.1c-0.9,11.5-1.1,23,0.6,34.4c1.6,11,5.4,21.6,11.9,30.6c0.4,0.5,0.8,1,1.1,1.5c-5.3,7.2-10.5,14.5-15,22.3c-5.2,9.1-8.5,19.1-10.4,29.4c-3.3,18.3-4.3,38.5,0.5,56.6c4.4,16.4,14.6,31,27.7,41.7c16.1,13.1,36.5,17,54.9,25.6c1.4,0.7,2.8,0.7,4,0.3c3.4-0.1,6.8-3,5-7.1c-2.8-6.6-1-14.7-1.1-21.7c-0.1-4.9-0.7-11.1,1.3-15.8c0.3,0.1,0.6,0.1,1,0.1c7.3,0.3,13.2,10.4,16.7,15.6c5.6,8.3,10.2,17.2,15.9,25.4c0.5,0.6,0.9,1.3,1.4,1.9c5.9,5.7,11.3,12.1,16.3,18.6c10.8,10.7,22.6,20.5,32.9,31.8c-2.6,2.9-5.1,5.8-7.8,8.7c-4,4.3-8.9,7.7-13.3,11.5c-8.2,7.2-15.7,15.2-23.3,23.2C238.3,453.6,226.5,470,210.9,480.8z M437.5,299.7c-7.5,28.1-22.6,53.4-40.5,76c-19.8,25-44.1,47.5-72,63.2c-23.4,13.2-50.6,20.2-77.5,21.8c4.4-5,8.8-10,13.3-14.7c8.6-9,17.1-18,26.9-25.8c4.3-3.5,8.2-7.2,11.8-11.4c1.8-2.1,3.6-4.2,5.5-6.2c2.2-2.3,2.5-4.1,2.5-7.2c0-2.5-1.4-4-3.2-4.6c-0.2-0.8-0.7-1.7-1.3-2.4c-10.2-11.2-21.8-21-32.5-31.6c8.3-1.5,16.5-3.3,24.6-5.8c12.8-3.9,25.1-10.1,36.1-17.6c21.4-14.6,37.5-35.5,45.7-60.1c4.3-12.9,4.4-25.3,5-38.7c0.3-7.4,0.3-14.3-1.3-21.5c-1.4-6.5-3-13.3-4.9-19.7c-4.3-14-9-38.6-27.3-40.2c-0.1,0-0.1,0-0.2,0c-2.5-1.5-5.9-1.2-7.1,2.3c-3.4,9.7-6.4,19.5-10.9,28.8c-2.8-2.1-5.7-4.3-7.8-6.9c0.1-0.8-0.1-1.6-0.5-2.5c-1-2.1-1.9-3.4-4.1-4.4c-0.3-0.1-0.5-0.2-0.8-0.3c-3.2-2.4-6.2-4.8-9.1-7.4c0.2-0.5,0.4-0.9,0.5-1.4h-2.1c-6.8-6.1-13.2-12.7-19.6-19.4c-5.4-5.6-10.9-10.9-16.1-16.7c-1.9-2.2-3.8-4.4-6-6.3c-0.7-0.6-1.5-1.3-2.2-1.9c-0.4-0.3-0.7-0.6-1.1-1c0-0.1,0.1-0.2,0.1-0.4c1-6.1,9.7-10.6,14.2-14c8.2-6.2,15.8-13.1,24-19.4c14.8-11.3,27.1-25.7,42-36.8c-0.8,11-2.9,21.8-3,32.9c-0.1,5.8,7.2,6.3,9.9,2.4c12,4.3,23.8,9.1,34.7,15.8c12,7.5,21.7,18.4,29.5,30.1c16.6,24.7,25.1,55.1,29.3,84.3C446.2,240.7,445.2,270.8,437.5,299.7z" />
    </svg>
  );
}
