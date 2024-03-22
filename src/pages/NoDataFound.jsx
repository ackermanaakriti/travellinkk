import React from 'react';
import { graph, noDataFound } from '../assets';
import { MetaDecorator } from '../components';
import Test from '../components/Test';


// Define your mapImagePath and an array of coordinates
const mapImagePath = graph;
const coordinates = [
  { latitudeDMS: '70°58′N', longitudeDMS: '80°50′W' },
  { latitudeDMS: '60°58′E', longitudeDMS: '60°50′N' },
  { latitudeDMS: '19°58′S', longitudeDMS: '84°50′W' },
  { latitudeDMS: '25°58′S', longitudeDMS: '84°50′W' },
  // { latitudeDMS: '65°58′S', longitudeDMS: '84°50′W' },
];

const NoDataFound = () => {
  
  return (
    <div>
      <MetaDecorator title="No Data Found" />
      <div className='flex w-full min-h-[80vh] h-full my-8 justify-center'>
        <img src={noDataFound} alt='No Data Found' />
      </div>   
      <div>
      {/* <Test imagePath={mapImagePath} coordinatesArray={coordinates} /> */}
        </div> 
    </div>
  );
};

export default NoDataFound;
