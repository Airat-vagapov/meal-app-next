import SearchBlock from "@/components/SearchBlock/SearchBlock";
import RandomSearch from '@/components/RandomSearch/RandomSearch'
import TabBlock from '@/components/TabBlock/TabBlock'

import { ITabData } from '@/types/global';

const Search = () => {
    let tabData: ITabData[] = []

    // Add search block
    tabData.push({
        'name': 'Search',
        'data': [{
            'name': "Search",
            'data': <SearchBlock />
        }],
    })

    // Add random search
    tabData.push({
        'name': "Random search",
        'data': [{
            'name': "Random search",
            'data': <RandomSearch />
        }]
    })

    return (
        <div>
            <TabBlock data={tabData}></TabBlock>
            {/* <div>Search</div>
            <SearchBlock /> */}
        </div>
    )
}

export default Search;