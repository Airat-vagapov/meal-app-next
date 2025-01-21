import SearchBlock from "@/components/SearchBlock/SearchBlock";
import RandomSearchBlock from '@/components/RandomSearch/RandomSearchBlock/RandomSearchBlock'
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
            'data': <RandomSearchBlock />
        }]
    })

    return (
        <div>
            <TabBlock data={tabData} name={""}></TabBlock>
            {/* <div>Search</div>
            <SearchBlock /> */}
        </div>
    )
}

export default Search;