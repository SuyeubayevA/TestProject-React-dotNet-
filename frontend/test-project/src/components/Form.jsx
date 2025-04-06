import { Button, Input, Textarea, Checkbox } from '@chakra-ui/react'
import { useState } from 'react'

function Form({onCreate}) {
    const [item, setItem] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        onCreate(item);
        setItem((prev) => ({
            isActive: prev?.isActive
          }));
    }
    return (
        <form className='w-full flex flex-col gap-3' onSubmit={onSubmit}>
            <h3>Add Test Model</h3>
            <Input placeholder='Name' 
                value={item?.name ?? ""}
                onChange={(e) => setItem({...item, name: e.target.value})}/>
            <Textarea placeholder='Description' 
                value={item?.description ?? ""}
                onChange={(e) => setItem({...item, description: e.target.value})}/>
            <Checkbox.Root mt="2" 
                onChange={(e) => setItem({...item, isActive: e.target.checked})}>
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label>IsActive</Checkbox.Label>
            </Checkbox.Root>
            <Button type="submit">Save</Button>
        </form>
    );
}

export default Form;