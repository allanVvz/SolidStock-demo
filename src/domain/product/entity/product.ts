export type ProductProps = {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export class Product {

    private constructor(private props: ProductsProps){
        this.validate()
    }

    public static  create(name: string, price: number){
        return new Product({
            id: crypto.randomUUID(),toString(),
            name,
            price,
            quantity: 0
        });
    }


    public static with(props: ProductProps){
        return new Product(props);
    }

    public get id(){
        return this.props.id;
    }

    public get name(){
        return this.props.name;
    }

    public get Price(){
        return this.props.price;
    }

    public get Quantity(){
        return this.props.quantity;
    }

    private validate (){
        if(this.props.quantity < 0){
            throw new Error("Produto precisa ser maior que 0")
        }
    }

    public increaseQuantity(quantity: number){
        this.props.quantity += quantity;
    }

    public decreaseQuantity(quantity: number){
        this.props.quantity -= quantity;
    }
}