export type Category = "Mango Sticky Rice" | "Pudding Coklat Creamy" | "Pudding Strawberry Fresh";

export interface Product {
    id: string;
    name: string;
    category: Category;
    description: string;
    price: number;
    image: string; // Placeholder or path
}

export const menuData: Product[] = [
    {
        id: "msr-1",
        name: "Mango Sticky Rice",
        category: "Mango Sticky Rice",
        description: "Ketan gurih dengan mangga manis pilihan dan santan kental.",
        price: 18000,
        image: "/images/mango-sticky-rice.png",
    },
    {
        id: "pcc-1",
        name: "Choco Creamy Pudding",
        category: "Pudding Coklat Creamy",
        description: "Pudding coklat lembut dengan vla vanilla yang creamy.",
        price: 7000,
        image: "/images/choco-pudding.png",
    },
    {
        id: "psf-1",
        name: "Fresh Strawberry Pudding",
        category: "Pudding Strawberry Fresh",
        description: "Pudding susu dengan potongan strawberry segar.",
        price: 7000,
        image: "/images/strawberry-pudding.png",
    },

];
