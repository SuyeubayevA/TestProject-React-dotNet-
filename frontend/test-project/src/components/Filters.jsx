import { Input, NativeSelect  } from '@chakra-ui/react'

function Filters({filters, setFilters}) {
    return (
        <div className='flex flex-col gap-5'>
            <h2>Filters</h2>
            <h3>by Name</h3>
            <Input 
                placeholder='Search' 
                onChange={(e) => setFilters({...filters, search: e.target.value})}
            />
            <h3>by Created Date</h3>
            <NativeSelect.Root size="sm" width="240px">
                <NativeSelect.Field placeholder="Sort Order" onChange={(e) => setFilters({...filters, sortOrder: e.target.value})}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </NativeSelect.Field>
                <NativeSelect.Indicator />
            </NativeSelect.Root>
        </div>
    );
}

export default Filters;