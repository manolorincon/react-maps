/* eslint import/no-webpack-loader-syntax: off */

import React, { useContext, useLayoutEffect, useRef } from 'react';
//@ts-ignore
import { Map } from '!mapbox-gl';
import { Loading } from './Loading';
import { PlacesContext, MapContext } from '../context';

export const MapView = () => {

    const { isLoading, userLocation } = useContext(PlacesContext);
    const { setMap } = useContext( MapContext );
    const mapDiv = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      if ( !isLoading ){
        setMap(new Map({
            container: mapDiv.current!, // container ID
            style: 'mapbox://styles/mapbox/light-v10', // style URL
            center: userLocation, // starting position [lng, lat]
            zoom: 15, // starting zoom
        }));
      } 
    // eslint-disable-next-line
    }, [ isLoading ])

    if ( isLoading ) {
        return (
            <Loading />
        )
    }

    return (
        <div 
            ref={ mapDiv }
            style={{
                height: '100vh',
                left: 0,
                position: 'fixed',
                top: 0,
                width: '100vw',
            }}
        > 
        </div>
    )
}
