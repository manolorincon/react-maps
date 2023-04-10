import { MapView } from '../components/MapView';
import { BtnMyLocation } from '../components/BtnMyLocation';
import { ReactLogo } from '../components';
import { SearchBar } from '../components/SearchBar';

export const HomeScreen = () => {
    return (
        <div>
            <MapView />
            <BtnMyLocation/>
            <ReactLogo />
            <SearchBar/>
        </div>
    )
}
