import { Card } from '@chakra-ui/react'

function ItemList({items}) {
    return (
        items.length > 0 &&
        items.map((item) => (
            <Card.Root width="320px" variant={item} key={item.id}>
                <Card.Body gap="2">
                    <Card.Title mb="2">{item.name}</Card.Title>
                    <Card.Title mb="2">{item.isActive ? "Active" : "Inactive"}</Card.Title>
                    <Card.Description>
                        {item.description}
                    </Card.Description>
                    <Card.Title mb="2">Started at: {item.dateStarted.toString()}</Card.Title>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                <Card.Title mb="2">Created date: {item.createdAt.toString()}</Card.Title>
                </Card.Footer>
            </Card.Root>
          ))
    );
}

export default ItemList;