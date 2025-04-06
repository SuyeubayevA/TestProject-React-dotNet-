import './App.css'
import Form from './components/Form'
import ItemList from './components/ItemList'
import Filters from './components/Filters'
import { useEffect, useState } from 'react'
import { fetchData, postData } from './utilities/helper'

function App() {
  const [models, setModels] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    sortItem: "date",
    sortOrder: "desc",
  });

  useEffect(()=>{
    const fetchModels = async () => {
      let newModels = await fetchData(filters);
      setModels(newModels);
    }

    fetchModels();
  }, [filters])

  const onCreate = async (item) => {
    await postData(item);

    let newModels = await fetchData(filters);
    setModels(newModels);
  }

  return (
    <section className='p-8 flex flex-rows justify-start items-start gap-12'>
      <div className='w-1/3 flex flex-col gap-10'>
        <Form onCreate={onCreate} />
        <Filters filters={filters} setFilters={setFilters}/>
      </div>
      <div className='w-2/3 flex flex-col gap-10'>
        <ItemList items={models}/>
      </div>
    </section>
  )
}

export default App
